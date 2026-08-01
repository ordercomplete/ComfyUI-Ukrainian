import "./rolldown-runtime-C9Cmlsnw.js";
import { M as computed, P as createBlock, U as defineComponent, at as openBlock } from "./vendor-vue-core-oGuyqViA.js";
import { t as TopbarBadge_default } from "./TopbarBadge-BieGYWRp.js";
//#endregion
//#region src/components/topbar/CloudBadge.vue
var CloudBadge_default = /* @__PURE__ */ defineComponent({
	__name: "CloudBadge",
	props: {
		displayMode: { default: "full" },
		reverseOrder: { type: Boolean },
		noPadding: { type: Boolean },
		backgroundColor: { default: "var(--comfy-menu-bg)" }
	},
	setup(__props) {
		const cloudBadge = computed(() => ({
			icon: "icon-[lucide--cloud]",
			text: "Comfy Cloud"
		}));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(TopbarBadge_default, {
				badge: cloudBadge.value,
				"display-mode": __props.displayMode,
				"reverse-order": __props.reverseOrder,
				"no-padding": __props.noPadding,
				"background-color": __props.backgroundColor
			}, null, 8, [
				"badge",
				"display-mode",
				"reverse-order",
				"no-padding",
				"background-color"
			]);
		};
	}
});
//#endregion
export { CloudBadge_default as t };

//# sourceMappingURL=CloudBadge-BU4tA3IP.js.map