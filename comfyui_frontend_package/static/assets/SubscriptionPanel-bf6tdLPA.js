const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SubscriptionPanelContentWorkspace-Cp9r5Fq7.js","./SubscriptionPanelContentWorkspace-BpXuoLtJ.js","./rolldown-runtime-C9Cmlsnw.js","./vendor-primevue-T0qpAVQN.js","./vendor-vue-core-oGuyqViA.js","./vendor-i18n-CPpp7rsM.js","./Button-By8A3toz.js","./vendor-reka-ui-CLUGudFd.js","./vendor-other-hebp3VVz.js","./vendor-three-CAgYnvrp.js","./vendor-zod-DrbcGYyw.js","./vendor-firebase-Ct6mBV2V.js","./vendor-tiptap-CQtgpFeu.js","./src-C1FpYMFF.js","./telemetry-C8VBI5GP.js","./settingStore-pm7IqVHI.js","./vendor-vueuse-De7x5bAw.js","./vendor-axios-BPNLFQfO.js","./api-btlSMXR9.js","./devFeatureFlagOverride-Bl3R9S_5.js","./toastStore-D7DQZkvm.js","./vendor-markdown-CeCiL7x5.js","./vendor-yjs-tEUnrtST.js","./ColorPicker-CPcI1_JS.js","./useModalLiftedZIndex-D-brf-IL.js","./SelectValue-Bfpp46Bi.js","./i18n-B4bSsdRi.js","./commands-DJua3xt8.js","./main-CNXm6Bpt.js","./nodeDefs-ODHPSASO.js","./settings-BZV9bK15.js","./Popover-lQ8j8DnS.js","./formatUtil-gEy6QwfT.js","./downloadUtil-C_j21ea1.js","./remoteConfig-F6WCXiNB.js","./useFeatureFlags-CvjPiCWD.js","./dialogStore-BAELBvsb.js","./userStore-rNaWLZbN.js","./widgetTypes-DCo-gXsA.js","./vendor-sentry-NtE0Edaa.js","./useErrorHandling-qSb1ezo_.js","./systemStatsStore-DX61eilr.js","./_plugin-vue_export-helper-CxSqLFJz.js","./useImageQuiet-DBL4QWSj.js","./DialogHeader-BkpfMvwx.js","./Input-B7kLLN1i.js","./Loader-CoxcNRNx.js","./Switch-CI-CYYu8.js","./envUtil-DDRnAAj_.js","./useExternalLink-dnLPgbQx.js","./types-DQDrDd50.js","./VideoPlayOverlay-ClskzJvp.js","./WaveAudioPlayer-CDD_sIiw.js","./Slider-CDv5K1AE.js","./useTextFileContent-Dx3B3Me6.js","./useFeatureUsageTracker-B5Lg6nSg.js","./markdownRendererUtil-BNoM8xu5.js","./CreditsTile-BPDlLvIB.js","./tierBenefits-C6k1uBLw.js","./vendor-other-DODGPXtn.css","./settingStore-CnXwLYSV.css","./SubscriptionPanelContentWorkspace-CCrGUhgz.css"])))=>i.map(i=>d[i]);
import "./rolldown-runtime-C9Cmlsnw.js";
import { lt as __vitePreload } from "./vendor-primevue-T0qpAVQN.js";
import { B as createTextVNode, D as Fragment, F as createCommentVNode, H as defineAsyncComponent, Ht as unref, I as createElementBlock, M as computed, N as createBaseVNode, P as createBlock, St as withCtx, U as defineComponent, V as createVNode, at as openBlock, qt as toDisplayString, st as renderList } from "./vendor-vue-core-oGuyqViA.js";
import { r as useI18n } from "./vendor-i18n-CPpp7rsM.js";
import { t as Button_default } from "./Button-By8A3toz.js";
import { n as useTelemetry } from "./telemetry-C8VBI5GP.js";
import { Fa as TIER_TO_KEY, Na as DEFAULT_TIER_KEY, Ra as getTierPrice, dr as useAuthActions, fr as useBillingRouting, or as useSubscription, rr as useSubscriptionDialog, tr as useBillingContext } from "./settingStore-pm7IqVHI.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-CxSqLFJz.js";
import { t as CreditsTile_default } from "./CreditsTile-BPDlLvIB.js";
import { t as CloudBadge_default } from "./CloudBadge-BU4tA3IP.js";
import { n as SubscriptionFooterLinks_default, r as useSubscriptionActions, t as getCommonTierBenefits } from "./tierBenefits-C6k1uBLw.js";
import { t as SubscribeButton_default } from "./SubscribeButton-sO8jAz7s.js";
//#region src/platform/cloud/subscription/components/SubscriptionPanelContentLegacy.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { class: "grow overflow-auto" };
var _hoisted_2$1 = { class: "rounded-2xl border border-interface-stroke p-6" };
var _hoisted_3$1 = { class: "flex items-center justify-between gap-2" };
var _hoisted_4$1 = { class: "flex flex-col gap-2" };
var _hoisted_5$1 = { class: "text-sm font-bold text-text-primary" };
var _hoisted_6 = { class: "flex items-baseline gap-1 font-inter font-semibold" };
var _hoisted_7 = { class: "text-2xl" };
var _hoisted_8 = { class: "text-base" };
var _hoisted_9 = {
	key: 0,
	class: "text-sm text-text-secondary"
};
var _hoisted_10 = { class: "flex flex-col gap-6 pt-9 lg:flex-row" };
var _hoisted_11 = { class: "w-full lg:max-w-md" };
var _hoisted_12 = { class: "flex flex-col gap-2" };
var _hoisted_13 = { class: "text-sm text-text-primary" };
var _hoisted_14 = { class: "flex flex-col gap-0" };
var _hoisted_15 = {
	key: 0,
	class: "pi pi-check text-xs text-text-primary"
};
var _hoisted_16 = {
	key: 1,
	class: "text-sm font-normal whitespace-nowrap text-text-primary"
};
var _hoisted_17 = { class: "text-sm text-muted" };
var _hoisted_18 = { class: "flex items-center gap-2 py-4" };
var _hoisted_19 = {
	href: "https://www.comfy.org/cloud/pricing",
	target: "_blank",
	rel: "noopener noreferrer",
	class: "text-sm text-muted underline hover:opacity-80"
};
//#endregion
//#region src/platform/cloud/subscription/components/SubscriptionPanelContentLegacy.vue
var SubscriptionPanelContentLegacy_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SubscriptionPanelContentLegacy",
	setup(__props) {
		const authActions = useAuthActions();
		const { t, n } = useI18n();
		const { isActiveSubscription, isCancelled, isFreeTier, formattedRenewalDate, formattedEndDate, subscriptionTier, subscriptionTierName, isYearlySubscription } = useSubscription();
		const { show: showSubscriptionDialog } = useSubscriptionDialog();
		const tierKey = computed(() => {
			const tier = subscriptionTier.value;
			if (!tier) return DEFAULT_TIER_KEY;
			return TIER_TO_KEY[tier] ?? "standard";
		});
		const tierPrice = computed(() => getTierPrice(tierKey.value, isYearlySubscription.value));
		async function handleManageSubscription() {
			useTelemetry()?.trackSubscriptionCancellation("flow_opened", {
				source: "manage_subscription_button",
				current_tier: subscriptionTier.value?.toLowerCase(),
				cycle: isYearlySubscription.value ? "yearly" : "monthly"
			});
			await authActions.accessBillingPortal();
		}
		const tierBenefits = computed(() => getCommonTierBenefits(tierKey.value, t, n));
		const { handleRefresh } = useSubscriptionActions();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$1, [createBaseVNode("div", _hoisted_2$1, [createBaseVNode("div", null, [createBaseVNode("div", _hoisted_3$1, [
				createBaseVNode("div", _hoisted_4$1, [
					createBaseVNode("div", _hoisted_5$1, toDisplayString(unref(subscriptionTierName)), 1),
					createBaseVNode("div", _hoisted_6, [createBaseVNode("span", _hoisted_7, "$" + toDisplayString(tierPrice.value), 1), createBaseVNode("span", _hoisted_8, toDisplayString(_ctx.$t("subscription.perMonth")), 1)]),
					unref(isActiveSubscription) ? (openBlock(), createElementBlock("div", _hoisted_9, [unref(isCancelled) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(_ctx.$t("subscription.expiresDate", { date: unref(formattedEndDate) })), 1)], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(_ctx.$t("subscription.renewsDate", { date: unref(formattedRenewalDate) })), 1)], 64))])) : createCommentVNode("", true)
				]),
				unref(isActiveSubscription) && !unref(isFreeTier) ? (openBlock(), createBlock(Button_default, {
					key: 0,
					variant: "secondary",
					class: "ml-auto rounded-lg bg-interface-menu-component-surface-selected px-4 py-2 text-sm font-normal text-text-primary",
					onClick: handleManageSubscription
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("subscription.manageSubscription")), 1)]),
					_: 1
				})) : createCommentVNode("", true),
				unref(isActiveSubscription) ? (openBlock(), createBlock(Button_default, {
					key: 1,
					variant: "primary",
					class: "rounded-lg px-4 py-2 text-sm font-normal text-text-primary",
					onClick: _cache[0] || (_cache[0] = ($event) => unref(showSubscriptionDialog)({ reason: "settings_billing_panel" }))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("subscription.upgradePlan")), 1)]),
					_: 1
				})) : createCommentVNode("", true),
				!unref(isActiveSubscription) ? (openBlock(), createBlock(SubscribeButton_default, {
					key: 2,
					label: _ctx.$t("subscription.subscribeNow"),
					size: "sm",
					fluid: false,
					class: "text-xs",
					onSubscribed: unref(handleRefresh)
				}, null, 8, ["label", "onSubscribed"])) : createCommentVNode("", true)
			])]), createBaseVNode("div", _hoisted_10, [createBaseVNode("div", _hoisted_11, [createVNode(CreditsTile_default)]), createBaseVNode("div", _hoisted_12, [createBaseVNode("div", _hoisted_13, toDisplayString(_ctx.$t("subscription.yourPlanIncludes")), 1), createBaseVNode("div", _hoisted_14, [(openBlock(true), createElementBlock(Fragment, null, renderList(tierBenefits.value, (benefit) => {
				return openBlock(), createElementBlock("div", {
					key: benefit.key,
					class: "flex items-center gap-2 py-2"
				}, [benefit.type === "feature" ? (openBlock(), createElementBlock("i", _hoisted_15)) : benefit.type === "metric" && benefit.value ? (openBlock(), createElementBlock("span", _hoisted_16, toDisplayString(benefit.value), 1)) : createCommentVNode("", true), createBaseVNode("span", _hoisted_17, toDisplayString(benefit.label), 1)]);
			}), 128))])])])]), createBaseVNode("div", _hoisted_18, [_cache[1] || (_cache[1] = createBaseVNode("i", { class: "pi pi-external-link text-muted" }, null, -1)), createBaseVNode("a", _hoisted_19, toDisplayString(_ctx.$t("subscription.viewMoreDetailsPlans")), 1)])]);
		};
	}
}), [["__scopeId", "data-v-e89a43a2"]]);
//#endregion
//#region src/platform/cloud/subscription/components/SubscriptionPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "subscription-container h-full" };
var _hoisted_2 = { class: "flex h-full flex-col gap-6" };
var _hoisted_3 = { class: "flex items-center gap-2" };
var _hoisted_4 = { class: "font-inter text-2xl/tight font-semibold" };
var _hoisted_5 = { class: "pt-1" };
//#endregion
//#region src/platform/cloud/subscription/components/SubscriptionPanel.vue
var SubscriptionPanel_default = /* @__PURE__ */ defineComponent({
	__name: "SubscriptionPanel",
	setup(__props) {
		const SubscriptionPanelContentWorkspace = defineAsyncComponent(() => __vitePreload(() => import("./SubscriptionPanelContentWorkspace-Cp9r5Fq7.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61]), import.meta.url));
		const { shouldUseWorkspaceBilling } = useBillingRouting();
		const { isActiveSubscription } = useBillingContext();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("span", _hoisted_4, toDisplayString(unref(isActiveSubscription) ? _ctx.$t("subscription.title") : _ctx.$t("subscription.titleUnsubscribed")), 1), createBaseVNode("div", _hoisted_5, [createVNode(CloudBadge_default, {
				"reverse-order": "",
				"background-color": "var(--p-dialog-background)"
			})])]), unref(shouldUseWorkspaceBilling) ? (openBlock(), createBlock(unref(SubscriptionPanelContentWorkspace), { key: 0 })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(SubscriptionPanelContentLegacy_default), createVNode(SubscriptionFooterLinks_default)], 64))])]);
		};
	}
});
//#endregion
export { SubscriptionPanel_default as default };

//# sourceMappingURL=SubscriptionPanel-bf6tdLPA.js.map