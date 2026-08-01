import "./rolldown-runtime-C9Cmlsnw.js";
import { B as createTextVNode, Ct as withDirectives, M as computed, N as createBaseVNode, P as createBlock, St as withCtx, U as defineComponent, at as openBlock, qt as toDisplayString, ut as resolveDirective } from "./vendor-vue-core-oGuyqViA.js";
import { r as useI18n } from "./vendor-i18n-CPpp7rsM.js";
import { t as Button_default } from "./Button-By8A3toz.js";
import { a as breakpointsTailwind, f as useBreakpoints } from "./vendor-vueuse-De7x5bAw.js";
import { B as useRunButtonTelemetry, ir as useWorkspaceUI, tr as useBillingContext } from "./settingStore-pm7IqVHI.js";
//#endregion
//#region src/platform/cloud/subscription/components/SubscribeToRun.vue
var SubscribeToRun_default = /* @__PURE__ */ defineComponent({
	__name: "SubscribeToRun",
	setup(__props) {
		const { t } = useI18n();
		const isMdOrLarger = useBreakpoints(breakpointsTailwind).greaterOrEqual("md");
		const { permissions } = useWorkspaceUI();
		const { showSubscriptionDialog } = useBillingContext();
		const { trackRunButton } = useRunButtonTelemetry();
		const canResubscribe = computed(() => permissions.value.canManageSubscription);
		const buttonLabel = computed(() => {
			if (!canResubscribe.value) return t("subscription.inactive.runLabel");
			return isMdOrLarger.value ? t("subscription.subscribeToRunFull") : t("subscription.subscribeToRun");
		});
		const buttonTooltip = computed(() => canResubscribe.value ? t("subscription.subscribeToRunFull") : t("subscription.inactive.memberRunTooltip"));
		function handleSubscribeToRun() {
			showSubscriptionDialog({ reason: "subscribe_to_run" });
		}
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return withDirectives((openBlock(), createBlock(Button_default, {
				class: "subscribe-to-run-button h-8 gap-1.5 rounded-lg px-4 whitespace-nowrap",
				variant: "subscribe",
				size: "unset",
				"data-testid": "subscribe-to-run-button",
				onClick: handleSubscribeToRun
			}, {
				default: withCtx(() => [_cache[0] || (_cache[0] = createBaseVNode("i", { class: "pi pi-lock" }, null, -1)), createTextVNode(" " + toDisplayString(buttonLabel.value), 1)]),
				_: 1
			})), [[
				_directive_tooltip,
				{
					value: buttonTooltip.value,
					showDelay: 600
				},
				void 0,
				{ bottom: true }
			]]);
		};
	}
});
//#endregion
export { SubscribeToRun_default as t };

//# sourceMappingURL=SubscribeToRun-Bkf2RqlP.js.map