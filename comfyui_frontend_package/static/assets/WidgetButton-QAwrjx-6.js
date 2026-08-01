import "./rolldown-runtime-C9Cmlsnw.js";
import { B as createTextVNode, F as createCommentVNode, I as createElementBlock, M as computed, St as withCtx, U as defineComponent, V as createVNode, Wt as normalizeClass, Z as mergeProps, at as openBlock, qt as toDisplayString } from "./vendor-vue-core-oGuyqViA.js";
import { t as Button_default } from "./Button-By8A3toz.js";
import { o as filterWidgetProps, t as BADGE_EXCLUDED_PROPS } from "./widgetPropFilter-BmKfZcVR.js";
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetButton.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex flex-col gap-1" };
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetButton.vue
var WidgetButton_default = /* @__PURE__ */ defineComponent({
	__name: "WidgetButton",
	props: { widget: {} },
	setup(__props) {
		const props = __props;
		const BUTTON_EXCLUDED_PROPS = [...BADGE_EXCLUDED_PROPS, "iconClass"];
		const filteredProps = computed(() => filterWidgetProps(props.widget.options, BUTTON_EXCLUDED_PROPS));
		const handleClick = () => {
			if (props.widget.callback) props.widget.callback();
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(Button_default, mergeProps({
				class: "w-full border-0 bg-component-node-widget-background p-2 text-base-foreground",
				"aria-label": __props.widget.label,
				size: "sm",
				variant: "textonly"
			}, filteredProps.value, { onClick: handleClick }), {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.widget.label ?? __props.widget.name) + " ", 1), __props.widget.options?.iconClass ? (openBlock(), createElementBlock("i", {
					key: 0,
					class: normalizeClass(__props.widget.options.iconClass)
				}, null, 2)) : createCommentVNode("", true)]),
				_: 1
			}, 16, ["aria-label"])]);
		};
	}
});
//#endregion
export { WidgetButton_default as default };

//# sourceMappingURL=WidgetButton-QAwrjx-6.js.map