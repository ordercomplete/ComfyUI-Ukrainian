import "./rolldown-runtime-C9Cmlsnw.js";
import { Ht as unref, M as computed, P as createBlock, U as defineComponent, at as openBlock, dt as resolveDynamicComponent } from "./vendor-vue-core-oGuyqViA.js";
import { tr as useBillingContext } from "./settingStore-pm7IqVHI.js";
import { t as ComfyQueueButton_default } from "./ComfyQueueButton-xWUQuJ1U.js";
import { t as SubscribeToRun_default } from "./SubscribeToRun-Bkf2RqlP.js";
//#endregion
//#region src/components/actionbar/ComfyRunButton/CloudRunButtonWrapper.vue
var CloudRunButtonWrapper_default = /* @__PURE__ */ defineComponent({
	__name: "CloudRunButtonWrapper",
	setup(__props) {
		const { canRunWorkflows } = useBillingContext();
		const currentButton = computed(() => canRunWorkflows.value ? ComfyQueueButton_default : SubscribeToRun_default);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(resolveDynamicComponent(currentButton.value), { key: unref(canRunWorkflows) ? "queue" : "subscribe" });
		};
	}
});
//#endregion
export { CloudRunButtonWrapper_default as default };

//# sourceMappingURL=CloudRunButtonWrapper-Bx_s8Dyw.js.map