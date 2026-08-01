import "./rolldown-runtime-C9Cmlsnw.js";
import { P as createBlock, U as defineComponent, at as openBlock } from "./vendor-vue-core-oGuyqViA.js";
import { t as Load3D_default } from "./Load3D-tzuD2pDL.js";
//#endregion
//#region src/components/load3d/Load3DAdvanced.vue
var Load3DAdvanced_default = /* @__PURE__ */ defineComponent({
	__name: "Load3DAdvanced",
	props: {
		widget: {},
		nodeId: {}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Load3D_default, {
				widget: __props.widget,
				"node-id": __props.nodeId,
				"can-use-recording": false,
				"can-use-hdri": false,
				"can-use-background-image": false
			}, null, 8, ["widget", "node-id"]);
		};
	}
});
//#endregion
export { Load3DAdvanced_default as t };

//# sourceMappingURL=Load3DAdvanced-BgMMa2fO.js.map