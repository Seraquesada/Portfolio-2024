/**
 * Minimal subscribable for `useSyncExternalStore`.
 *
 * Theme and language both live outside React — one on the <html> element, one
 * in localStorage — and both are already resolved by the inline script before
 * hydration. `useSyncExternalStore` is the supported way to read that: it uses
 * the server snapshot while hydrating and then swaps to the real value, with
 * no setState-in-an-effect.
 */
export const createSubscribable = () => {
	let listeners: (() => void)[] = []

	const subscribe = (listener: () => void) => {
		listeners = [...listeners, listener]
		return () => {
			listeners = listeners.filter((l) => l !== listener)
		}
	}

	const emit = () => listeners.forEach((listener) => listener())

	return { subscribe, emit }
}
