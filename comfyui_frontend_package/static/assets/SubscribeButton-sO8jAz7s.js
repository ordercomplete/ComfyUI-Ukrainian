import "./rolldown-runtime-C9Cmlsnw.js";
import { B as createTextVNode, Ht as unref, Nt as ref, P as createBlock, St as withCtx, U as defineComponent, Wt as normalizeClass, at as openBlock, et as onBeforeUnmount, qt as toDisplayString, vt as watch } from "./vendor-vue-core-oGuyqViA.js";
import { t as cn } from "./src-C1FpYMFF.js";
import { t as Button_default } from "./Button-By8A3toz.js";
import { n as useTelemetry } from "./telemetry-C8VBI5GP.js";
import { tr as useBillingContext } from "./settingStore-pm7IqVHI.js";
//#endregion
//#region src/platform/cloud/subscription/components/SubscribeButton.vue
var SubscribeButton_default = /* @__PURE__ */ defineComponent({
	__name: "SubscribeButton",
	props: {
		label: {},
		size: { default: "lg" },
		buttonVariant: { default: "default" },
		fluid: {
			type: Boolean,
			default: true
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	emits: ["subscribed"],
	setup(__props, { emit: __emit }) {
		const { isActiveSubscription, showSubscriptionDialog, tier } = useBillingContext();
		const isAwaitingStripeSubscription = ref(false);
		watch([isAwaitingStripeSubscription, isActiveSubscription], ([awaiting, isActive]) => {});
		const handleSubscribe = () => {
			useTelemetry()?.trackSubscription("subscribe_clicked", { current_tier: tier.value?.toLowerCase() });
			isAwaitingStripeSubscription.value = true;
			showSubscriptionDialog({ reason: "subscribe_now_button" });
		};
		onBeforeUnmount(() => {
			isAwaitingStripeSubscription.value = false;
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Button_default, {
				size: __props.size,
				disabled: __props.disabled,
				variant: __props.buttonVariant === "subscribe" ? "subscribe" : "primary",
				class: normalizeClass(unref(cn)("font-bold", __props.fluid && "w-full")),
				onClick: handleSubscribe
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.label || _ctx.$t("subscription.required.subscribe")), 1)]),
				_: 1
			}, 8, [
				"size",
				"disabled",
				"variant",
				"class"
			]);
		};
	}
});
//#endregion
export { SubscribeButton_default as t };

//# sourceMappingURL=SubscribeButton-sO8jAz7s.js.map