import "./rolldown-runtime-C9Cmlsnw.js";
import { Ht as unref, N as createBaseVNode, P as createBlock, St as withCtx, U as defineComponent, V as createVNode, Wt as normalizeClass, X as mergeModels, at as openBlock, ht as useModel } from "./vendor-vue-core-oGuyqViA.js";
import { S as SwitchRoot_default, x as SwitchThumb_default } from "./vendor-reka-ui-CLUGudFd.js";
import { t as cn } from "./src-C1FpYMFF.js";
//#region src/components/ui/switch/Switch.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "pointer-events-none inline-flex h-5 w-9 items-center rounded-full border border-transparent bg-interface-stroke px-0.5 transition-colors group-data-[state=checked]:bg-primary-background" };
//#endregion
//#region src/components/ui/switch/Switch.vue
var Switch_default = /* @__PURE__ */ defineComponent({
	__name: "Switch",
	props: /*@__PURE__*/ mergeModels({
		class: {
			type: [
				Boolean,
				null,
				String,
				Object,
				Array
			],
			default: ""
		},
		disabled: {
			type: Boolean,
			default: false
		},
		readonly: {
			type: Boolean,
			default: false
		}
	}, {
		"modelValue": {
			type: Boolean,
			default: false
		},
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const modelValue = useModel(__props, "modelValue");
		function updateModelValue(value) {
			if (__props.readonly) return;
			modelValue.value = value;
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SwitchRoot_default), {
				"model-value": modelValue.value,
				disabled: __props.disabled,
				"aria-readonly": __props.readonly || void 0,
				class: normalizeClass(unref(cn)("group inline-flex h-6 w-10 shrink-0 cursor-pointer touch-manipulation items-center justify-center rounded-full border-0 bg-transparent p-0 transition-shadow outline-none focus-visible:ring-1 focus-visible:ring-border-default disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-readonly:cursor-default", __props.class)),
				"onUpdate:modelValue": updateModelValue
			}, {
				default: withCtx(() => [createBaseVNode("span", _hoisted_1, [createVNode(unref(SwitchThumb_default), { class: "pointer-events-none block size-4 rounded-full bg-base-background shadow-sm transition-transform data-[state=checked]:translate-x-3.5 data-[state=unchecked]:translate-x-0" })])]),
				_: 1
			}, 8, [
				"model-value",
				"disabled",
				"aria-readonly",
				"class"
			]);
		};
	}
});
//#endregion
export { Switch_default as t };

//# sourceMappingURL=Switch-CI-CYYu8.js.map