/**
 * Host side of `dsh-locale-ru`.
 *
 * The ru locale is bridge-activated in the browser client only and needs no
 * durable host-side settings namespace, so the host plugin is intentionally a
 * no-op. It exists so the package is a valid cordis plugin on both sides.
 */
export function apply() {}
