/**
 * Build `lib/client.js` as the browser plugin bundle in the exact format the
 * DSH client module system expects:
 *
 *   window.__ModuleLoader__.load({ id: "<package>", factory: (require) => { ... } })
 *
 * The bundle is self-contained (the dictionaries from `lib/dicts.js` are
 * inlined — a browser bundle cannot carry relative imports). `lib/dicts.js`
 * remains the single editable source of truth.
 */
import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dicts } from '../lib/dicts.js'

const ID = 'dsh-locale-ru'
const dictsLiteral = JSON.stringify(dicts)

const bundle = `window.__ModuleLoader__.load({
	id: ${JSON.stringify(ID)},
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		var dicts = ${dictsLiteral};
		var RU_ID = "ru";
		var RU_LABEL = "Русский";
		var OFFICIAL_NS = "locale";
		function browserPrefersRu() {
			if (typeof window === "undefined") return false;
			var nav = window.navigator;
			if (!nav) return false;
			for (const tag of [...(nav.languages ?? []), nav.language]) {
				if (!tag) continue;
				const primary = String(tag).toLowerCase().split("-")[0];
				if (primary === "ru" || primary === "be") return true;
				if (primary === "en" || primary === "zh") return false;
			}
			return false;
		}
		function hasExplicitPreference(scope) {
			try {
				return scope.getSnapshot().value?.preference !== undefined;
			} catch {
				return false;
			}
		}
		function extendLocales(locale) {
			const snap = locale.getLocale();
			if (!snap || !Array.isArray(snap.locales)) return false;
			if (snap.locales.some((l) => l.id === RU_ID)) return true;
			try {
				locale.snapshot = Object.freeze({
					active: snap.active,
					locales: Object.freeze([...snap.locales, { id: RU_ID, label: RU_LABEL }]),
					revision: (snap.revision ?? 0) + 1,
				});
				return true;
			} catch {
				return false;
			}
		}
		function activateRu(locale) {
			if (locale.getLocale().active === RU_ID) return;
			// Prefer the runtime's publish() over setLocale(): setLocale() also writes
			// the preference through the settings transport, and that write is
			// rejected by the official zh/en-only schema — the failed write makes the
			// runtime re-read and revert the active locale back to its browser-derived
			// fallback (adopt). publish() switches + notifies + emits locale/change
			// without touching the settings transport, so nothing reverts it.
			if (typeof locale.publish === "function") {
				try {
					locale.publish(RU_ID, true);
					return;
				} catch (error) {
					console.warn("[dsh-locale-ru] publish failed; falling back to setLocale:", error);
				}
			}
			try {
				locale.setLocale(RU_ID);
			} catch (error) {
				console.warn("[dsh-locale-ru] activation failed:", error);
			}
		}
		function apply(ctx) {
			const locale = ctx.locale;
			if (!locale || typeof locale.register !== "function") return;
			ctx.effect(() => {
				const disposers = [];
				for (const [ns, dict] of Object.entries(dicts)) {
					try {
						disposers.push(locale.register(ns, RU_ID, dict));
					} catch (error) {
						console.warn("[dsh-locale-ru] register \\"" + ns + "\\" failed:", error);
					}
				}
				return () => {
					for (const dispose of disposers) {
						try { dispose() } catch { /* already disposed */ }
					}
				};
			}, "dsh-locale-ru: dictionaries");
			extendLocales(locale);
			let officialScope;
			try {
				officialScope = ctx.settingsScope.bind({ namespace: OFFICIAL_NS });
			} catch {
				officialScope = undefined;
			}
			let desired = false;
			const ensureRu = () => {
				const active = locale.getLocale().active;
				if (active === RU_ID) {
					// ru is active (auto or manual): remember the intent.
					desired = true;
					return;
				}
				if (officialScope && hasExplicitPreference(officialScope)) {
					// The user explicitly chose zh/en (a real, persisted preference).
					desired = false;
					return;
				}
				if (desired) {
					// We wanted ru but the runtime reverted it (a failed preference
					// write, e.g. manual selection through the official setLocale whose
					// zh/en-only schema rejects 'ru'). Re-apply without a settings write.
					activateRu(locale);
					return;
				}
				if (browserPrefersRu()) {
					desired = true;
					activateRu(locale);
				}
			};
			ctx.on("locale/change", ensureRu);
			queueMicrotask(ensureRu);
		}
		exports.inject = ["locale", "settingsScope"];
		exports.apply = apply;
		return module.exports;
	}
});
`

await writeFile(fileURLToPath(new URL('../lib/client.js', import.meta.url)), bundle, 'utf8')
console.log('built lib/client.js (', Buffer.byteLength(bundle), 'bytes )')
