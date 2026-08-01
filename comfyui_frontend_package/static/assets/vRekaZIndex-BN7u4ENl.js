import "./rolldown-runtime-C9Cmlsnw.js";
import { at as ZIndex } from "./vendor-primevue-T0qpAVQN.js";
//#region src/components/dialog/vRekaZIndex.ts
/** Shared PrimeVue/Reka modal stacking sequence; later registrations cover earlier ones. */
var MODAL_Z_KEY = "modal";
var MODAL_Z_BASE = 1700;
var vRekaZIndex = {
	mounted(el) {
		ZIndex.set(MODAL_Z_KEY, el, MODAL_Z_BASE);
	},
	beforeUnmount(el) {
		ZIndex.clear(el);
	}
};
//#endregion
export { MODAL_Z_KEY as n, vRekaZIndex as r, MODAL_Z_BASE as t };

//# sourceMappingURL=vRekaZIndex-BN7u4ENl.js.map