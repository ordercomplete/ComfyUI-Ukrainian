import "./rolldown-runtime-C9Cmlsnw.js";
import { Nt as ref, P as createBlock, St as withCtx, U as defineComponent, V as createVNode, X as mergeModels, at as openBlock, ht as useModel, vt as watch } from "./vendor-vue-core-oGuyqViA.js";
import { a as isColorFormat, d as toHexFromFormat, t as ColorPicker_default } from "./ColorPicker-CPcI1_JS.js";
import { t as WidgetLayoutField_default } from "./WidgetLayoutField-Bcyh-FD_.js";
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetColorPicker.vue
var WidgetColorPicker_default = /* @__PURE__ */ defineComponent({
	__name: "WidgetColorPicker",
	props: /*@__PURE__*/ mergeModels({ widget: {} }, {
		"modelValue": { required: true },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const modelValue = useModel(__props, "modelValue");
		const format = isColorFormat(__props.widget.options?.format) ? __props.widget.options.format : "hex";
		const localValue = ref(toHexFromFormat(modelValue.value || "#000000", format));
		watch(modelValue, (newVal) => {
			localValue.value = toHexFromFormat(newVal || "#000000", format);
		});
		function onUpdate(val) {
			localValue.value = val;
			modelValue.value = val;
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(WidgetLayoutField_default, { widget: __props.widget }, {
				default: withCtx(() => [createVNode(ColorPicker_default, {
					modelValue: localValue.value,
					"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => localValue.value = $event), onUpdate]
				}, null, 8, ["modelValue"])]),
				_: 1
			}, 8, ["widget"]);
		};
	}
});
//#endregion
export { WidgetColorPicker_default as default };

//# sourceMappingURL=WidgetColorPicker-BaDipc1D.js.map