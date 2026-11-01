/**
 * Build `lib/client.js` as the browser plugin bundle in the exact format the
 * DSH client module system expects:
 *
 *   window.__ModuleLoader__.load({ id: "<package>", factory: (require) => { ... } })
 *
 * The bundle is self-contained (the dictionaries from `lib/dicts.js` are
 * inlined — a browser bundle cannot carry relative imports). `lib/dicts.js`
 * remains the single editable source of truth.
 *
 * The runtime uses the public locale API documented by DSH (`addLanguage` +
 * `register`). DSH itself selects the active locale from the browser languages
 * and the Host preference, so no runtime patching of locale internals is
 * needed: Russian browsers get Russian automatically, and an explicit
 * English/中文 choice in Settings keeps its priority.
 */
import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dicts } from '../lib/dicts.js'

const ID = 'dsh-locale-ru'
const RU_ID = 'ru'
const RU_LABEL = 'Русский'
const dictsLiteral = JSON.stringify(dicts)

const bundle = `window.__ModuleLoader__.load({
	id: ${JSON.stringify(ID)},
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		var dicts = ${dictsLiteral};
		var RU_ID = ${JSON.stringify(RU_ID)};
		var RU_LABEL = ${JSON.stringify(RU_LABEL)};
		function apply(ctx) {
			var locale = ctx.locale;
			if (!locale || typeof locale.addLanguage !== "function") {
				console.warn("[dsh-locale-ru] this DSH build has no public locale.addLanguage API; the plugin is inactive");
				return;
			}
			if (typeof locale.register !== "function") {
				console.warn("[dsh-locale-ru] this DSH build has no public locale.register API; the plugin is inactive");
				return;
			}
			ctx.effect(() => locale.addLanguage({
				id: RU_ID,
				label: RU_LABEL,
				fallback: "en"
			}), "dsh-locale-ru: language");
			ctx.effect(() => {
				var disposers = [];
				for (var namespace of Object.keys(dicts)) {
					try {
						disposers.push(locale.register(namespace, RU_ID, dicts[namespace]));
					} catch (error) {
						console.warn("[dsh-locale-ru] register \\"" + namespace + "\\" failed:", error);
					}
				}
				return () => {
					for (var dispose of disposers) {
						try { dispose(); } catch { /* already disposed */ }
					}
				};
			}, "dsh-locale-ru: dictionaries");
		}
		exports.inject = ["locale"];
		exports.apply = apply;
		return module.exports;
	}
});
`

await writeFile(fileURLToPath(new URL('../lib/client.js', import.meta.url)), bundle, 'utf8')
console.log('built lib/client.js (', Buffer.byteLength(bundle), 'bytes )')
