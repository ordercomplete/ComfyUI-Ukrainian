import "./rolldown-runtime-C9Cmlsnw.js";
import { D as Fragment, Ht as unref, I as createElementBlock, N as createBaseVNode, U as defineComponent, V as createVNode, at as openBlock, nt as onMounted, t as RouterView } from "./vendor-vue-core-oGuyqViA.js";
import { t as GlobalToast_default } from "./GlobalToast-BDv3ETPc.js";
//#region src/platform/cloud/onboarding/components/OAuthLayoutView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "dark-theme relative h-svh w-screen overflow-y-auto bg-primary-comfy-ink font-sans text-primary-comfy-canvas" };
//#endregion
//#region src/platform/cloud/onboarding/components/OAuthLayoutView.vue
var OAuthLayoutView_default = /* @__PURE__ */ defineComponent({
	__name: "OAuthLayoutView",
	setup(__props) {
		onMounted(() => {
			document.getElementById("splash-loader")?.remove();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createBaseVNode("div", _hoisted_1, [_cache[0] || (_cache[0] = createBaseVNode("i", {
				class: "absolute top-6 left-6 icon-[comfy--comfy-logo] h-5 w-22 text-brand-yellow md:h-6 md:w-26",
				"aria-hidden": "true"
			}, null, -1)), createVNode(unref(RouterView))]), createVNode(GlobalToast_default)], 64);
		};
	}
});
//#endregion
export { OAuthLayoutView_default as default };

//# sourceMappingURL=OAuthLayoutView-CteeYlxm.js.map