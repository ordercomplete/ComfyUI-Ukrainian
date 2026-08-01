import "./rolldown-runtime-C9Cmlsnw.js";
import { Ht as unref, L as createPropsRestProxy, P as createBlock, St as withCtx, U as defineComponent, Z as mergeProps, at as openBlock, ct as renderSlot } from "./vendor-vue-core-oGuyqViA.js";
import { ln as useForwardProps, on as Primitive } from "./vendor-reka-ui-CLUGudFd.js";
import { t as cn } from "./src-C1FpYMFF.js";
//#endregion
//#region src/components/ui/button-group/ButtonGroup.vue
var ButtonGroup_default = /* @__PURE__ */ defineComponent({
	__name: "ButtonGroup",
	props: {
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
		asChild: { type: Boolean },
		as: { default: "div" }
	},
	setup(__props) {
		const forwardedProps = useForwardProps(createPropsRestProxy(__props, ["as", "class"]));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(unref(forwardedProps), {
				as: __props.as,
				class: unref(cn)("inline-flex items-stretch overflow-hidden rounded-md", __props.class)
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["as", "class"]);
		};
	}
});
//#endregion
export { ButtonGroup_default as t };

//# sourceMappingURL=ButtonGroup-COPmojS_.js.map