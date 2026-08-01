import "./rolldown-runtime-C9Cmlsnw.js";
import { at as ZIndex } from "./vendor-primevue-T0qpAVQN.js";
import { M as computed } from "./vendor-vue-core-oGuyqViA.js";
//#region src/composables/useModalLiftedZIndex.ts
var MODAL_BASE_Z_INDEX = 1700;
/**
* Inline z-index style for body-portaled popover/menu content. Such content
* keeps its static `z-1700` class unless a dialog that joined @primeuix's
* auto-incrementing 'modal' counter (Reka and PrimeVue dialogs both do, via
* `v-reka-z-index` or PrimeVue's mask) is open above it; then lift past that
* dialog so the content isn't hidden behind the dialog or its scrim.
*/
function useModalLiftedZIndex(open) {
	return computed(() => {
		if (!open.value) return void 0;
		const topZIndex = ZIndex.getCurrent("modal");
		return topZIndex >= MODAL_BASE_Z_INDEX ? { zIndex: topZIndex + 1 } : void 0;
	});
}
//#endregion
export { useModalLiftedZIndex as t };

//# sourceMappingURL=useModalLiftedZIndex-D-brf-IL.js.map