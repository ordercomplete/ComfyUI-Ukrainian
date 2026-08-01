import "./rolldown-runtime-C9Cmlsnw.js";
import { F as createCommentVNode, Ht as unref, I as createElementBlock, P as createBlock, St as withCtx, U as defineComponent, Wt as normalizeClass, at as openBlock, ct as renderSlot } from "./vendor-vue-core-oGuyqViA.js";
import { on as Primitive } from "./vendor-reka-ui-CLUGudFd.js";
import { kt as cva } from "./vendor-other-hebp3VVz.js";
import { t as cn } from "./src-C1FpYMFF.js";
//#region src/components/ui/button/button.variants.ts
var buttonVariants = cva({
	base: "relative inline-flex items-center justify-center gap-2 cursor-pointer touch-manipulation whitespace-nowrap appearance-none border-none rounded-md text-sm font-medium font-inter transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([width]):not([height])]:size-4 [&_svg]:shrink-0",
	variants: {
		variant: {
			secondary: "text-secondary-foreground bg-secondary-background hover:bg-secondary-background-hover",
			primary: "bg-primary-background text-base-foreground hover:bg-primary-background-hover",
			inverted: "bg-base-foreground text-base-background hover:bg-base-foreground/80",
			destructive: "bg-destructive-background text-base-foreground hover:bg-destructive-background-hover",
			textonly: "bg-transparent text-base-foreground hover:bg-secondary-background-hover",
			"muted-textonly": "bg-transparent text-muted-foreground hover:bg-secondary-background-hover",
			"destructive-textonly": "bg-transparent text-destructive-background hover:bg-destructive-background/10",
			link: "bg-transparent text-muted-foreground hover:text-base-foreground",
			"overlay-white": "bg-white text-gray-600 hover:bg-white/90",
			base: "bg-base-background text-base-foreground hover:bg-secondary-background-hover",
			tertiary: "bg-tertiary-background text-base-foreground hover:bg-tertiary-background-hover",
			subscribe: "border-transparent bg-credit text-charcoal-800 hover:opacity-80"
		},
		size: {
			sm: "h-6 rounded-sm px-2 py-1 text-xs",
			md: "h-8 rounded-lg p-2 text-xs",
			lg: "h-10 rounded-lg px-4 py-2 text-sm",
			"icon-sm": "size-5 p-0",
			icon: "size-8",
			"icon-lg": "size-10",
			unset: ""
		}
	},
	defaultVariants: {
		variant: "secondary",
		size: "md"
	}
});
//#endregion
//#region src/components/ui/button/Button.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	key: 0,
	class: "pi pi-spin pi-spinner"
};
//#endregion
//#region src/components/ui/button/Button.vue
var Button_default = /* @__PURE__ */ defineComponent({
	__name: "Button",
	props: {
		variant: {},
		size: {},
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
		loading: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		asChild: { type: Boolean },
		as: { default: "button" }
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				as: __props.as,
				"as-child": __props.asChild,
				disabled: __props.disabled || __props.loading,
				class: normalizeClass(unref(cn)(unref(buttonVariants)({
					variant: __props.variant,
					size: __props.size
				}), __props.class))
			}, {
				default: withCtx(() => [__props.loading ? (openBlock(), createElementBlock("i", _hoisted_1)) : createCommentVNode("", true), !__props.loading ? renderSlot(_ctx.$slots, "default", { key: 1 }) : createCommentVNode("", true)]),
				_: 3
			}, 8, [
				"as",
				"as-child",
				"disabled",
				"class"
			]);
		};
	}
});
//#endregion
export { buttonVariants as n, Button_default as t };

//# sourceMappingURL=Button-By8A3toz.js.map