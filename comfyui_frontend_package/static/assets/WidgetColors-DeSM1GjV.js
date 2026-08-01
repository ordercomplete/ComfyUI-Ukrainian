import "./rolldown-runtime-C9Cmlsnw.js";
import { F as createCommentVNode, I as createElementBlock, T as withModifiers, U as defineComponent, V as createVNode, X as mergeModels, at as openBlock, ht as useModel, qt as toDisplayString } from "./vendor-vue-core-oGuyqViA.js";
import { t as PaletteSwatchRow_default } from "./PaletteSwatchRow-D6YJLzWV.js";
//#region src/components/palette/WidgetColors.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	key: 0,
	class: "shrink-0 truncate text-node-component-slot-text"
};
var MAX_COLORS = 16;
//#endregion
//#region src/components/palette/WidgetColors.vue
var WidgetColors_default = /* @__PURE__ */ defineComponent({
	__name: "WidgetColors",
	props: /*@__PURE__*/ mergeModels({ widget: {} }, {
		"modelValue": { default: () => [] },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const modelValue = useModel(__props, "modelValue");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: "flex size-full items-center gap-2",
				"data-testid": "colors",
				onPointerdown: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"]))
			}, [__props.widget?.name ? (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(__props.widget.label || __props.widget.name), 1)) : createCommentVNode("", true), createVNode(PaletteSwatchRow_default, {
				modelValue: modelValue.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event),
				max: MAX_COLORS
			}, null, 8, ["modelValue"])], 32);
		};
	}
});
//#endregion
export { WidgetColors_default as default };

//# sourceMappingURL=WidgetColors-DeSM1GjV.js.map