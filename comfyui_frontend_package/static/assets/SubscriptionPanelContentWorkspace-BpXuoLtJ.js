import "./rolldown-runtime-C9Cmlsnw.js";
import { X as useToast } from "./vendor-primevue-T0qpAVQN.js";
import { B as createTextVNode, Ct as withDirectives, D as Fragment, F as createCommentVNode, Ht as unref, I as createElementBlock, M as computed, N as createBaseVNode, Nt as ref, P as createBlock, St as withCtx, U as defineComponent, V as createVNode, at as openBlock, f as storeToRefs, lt as resolveComponent, qt as toDisplayString, st as renderList, ut as resolveDirective, vt as watch } from "./vendor-vue-core-oGuyqViA.js";
import { r as useI18n } from "./vendor-i18n-CPpp7rsM.js";
import { t as Button_default } from "./Button-By8A3toz.js";
import { n as useTelemetry } from "./telemetry-C8VBI5GP.js";
import { Fa as TIER_TO_KEY, Li as useTeamWorkspaceStore, Ra as getTierPrice, fr as useBillingRouting, ir as useWorkspaceUI, mn as formatUsdCents, nr as useBillingOperationStore, nt as DropdownMenu_default, pr as useFreeTierQuota, qn as useDialogService, rr as useSubscriptionDialog, tr as useBillingContext, za as StatusBadge_default } from "./settingStore-pm7IqVHI.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-CxSqLFJz.js";
import { t as CreditsTile_default } from "./CreditsTile-BPDlLvIB.js";
import { n as SubscriptionFooterLinks_default, t as getCommonTierBenefits } from "./tierBenefits-C6k1uBLw.js";
//#region src/platform/workspace/composables/useResubscribe.ts
/**
* Reactivates a cancelled-but-still-active subscription and surfaces success or
* failure as a toast, tracking the in-flight state for the calling button.
*/
function useResubscribe() {
	const { t } = useI18n();
	const toast = useToast();
	const { resubscribe } = useBillingContext();
	const { shouldUseWorkspaceBilling } = useBillingRouting();
	const { permissions } = useWorkspaceUI();
	const isResubscribing = ref(false);
	async function handleResubscribe() {
		if (shouldUseWorkspaceBilling.value && !permissions.value.canManageSubscriptionLifecycle) return;
		useTelemetry()?.trackResubscribeClicked({ source: "settings_billing_panel" });
		isResubscribing.value = true;
		try {
			await resubscribe();
			if (shouldUseWorkspaceBilling.value) useTelemetry()?.trackBillingEvent({
				operation: "resubscribe",
				stage: "succeeded",
				outcome: "success",
				source: "settings_billing_panel"
			});
			toast.add({
				severity: "success",
				summary: t("subscription.resubscribeSuccess"),
				life: 5e3
			});
		} catch (error) {
			const detail = error instanceof Error && error.message.trim() ? error.message : t("subscription.resubscribeFailed");
			if (shouldUseWorkspaceBilling.value) useTelemetry()?.trackBillingEvent({
				operation: "resubscribe",
				stage: "failed",
				outcome: "failure",
				source: "settings_billing_panel",
				failure_category: "unknown"
			});
			toast.add({
				severity: "error",
				summary: t("g.error"),
				detail
			});
		} finally {
			isResubscribing.value = false;
		}
	}
	return {
		isResubscribing,
		handleResubscribe
	};
}
//#endregion
//#region src/platform/workspace/composables/useWorkspaceMenuItems.ts
/**
* Builds the Plan & Credits overflow-menu model for the workspace subscription
* panel. Visibility and the Delete enable/disable policy are derived from the
* shared useWorkspaceUI state so this menu can't desync with the sibling
* Plan & Credits panel menu.
*/
function useWorkspaceMenuItems() {
	const { t } = useI18n();
	const { isFreeTier, subscription } = useBillingContext();
	const { permissions, uiConfig, isInPersonalWorkspace, isActiveSubscription, isSubscriptionCancelled, isDeleteDisabled, deleteDisabledTooltipKey } = useWorkspaceUI();
	const { showCancelSubscriptionDialog, showEditWorkspaceDialog, showDeleteWorkspaceDialog, showLeaveWorkspaceDialog } = useDialogService();
	function editWorkspace() {
		showEditWorkspaceDialog();
	}
	function cancelSubscription() {
		if (!permissions.value.canManageSubscriptionLifecycle || !canCancelPlan.value) return;
		showCancelSubscriptionDialog(subscription.value?.endDate ?? void 0);
	}
	function deleteWorkspace() {
		if (!permissions.value.canManageSubscription || isInPersonalWorkspace.value || isDeleteDisabled.value) return;
		showDeleteWorkspaceDialog();
	}
	function leaveWorkspace() {
		if (!permissions.value.canLeaveWorkspace) return;
		showLeaveWorkspaceDialog();
	}
	const canCancelPlan = computed(() => permissions.value.canManageSubscriptionLifecycle && isActiveSubscription.value && !isSubscriptionCancelled.value && !isFreeTier.value);
	const canDeleteWorkspace = computed(() => permissions.value.canManageSubscription && !isInPersonalWorkspace.value);
	const deleteTooltip = computed(() => {
		const key = deleteDisabledTooltipKey.value;
		return key ? t(key) : void 0;
	});
	const menuItems = computed(() => {
		const items = [];
		if (uiConfig.value.showEditWorkspaceMenuItem) items.push({
			label: t("workspacePanel.menu.editWorkspace"),
			command: editWorkspace
		});
		if (canCancelPlan.value) items.push({
			label: t("subscription.cancelPlan"),
			command: cancelSubscription
		});
		if (canDeleteWorkspace.value) items.push({
			label: t("workspacePanel.menu.deleteWorkspace"),
			class: isDeleteDisabled.value ? "data-disabled:cursor-not-allowed data-disabled:text-destructive-background/50 data-disabled:pointer-events-auto" : "text-destructive-background",
			disabled: isDeleteDisabled.value,
			tooltip: deleteTooltip.value,
			command: isDeleteDisabled.value ? void 0 : deleteWorkspace
		});
		if (permissions.value.canLeaveWorkspace) items.push({
			label: t("workspacePanel.menu.leaveWorkspace"),
			command: leaveWorkspace
		});
		return items;
	});
	return {
		menuItems,
		menuEntries: computed(() => menuItems.value.flatMap((item, index) => index === 0 ? [item] : [{ separator: true }, item]))
	};
}
//#endregion
//#region src/platform/workspace/composables/useWorkspacePlanPricing.ts
/**
* Resolves the price shown in the Plan & Credits header into a ready-to-render
* string + unit label.
*
* Team pricing comes from the subscribed credit stop's per-month price (the
* cycle `price_cents` is the authoritative recurring charge; `stop_usd` only
* names the ladder rung). Both monthly and yearly stops are per-month figures.
* When the subscribed stop id is absent from the resolved ladder the facade is
* stale, so pricing warns and falls back to the per-member tier price rather
* than silently mispricing an active plan.
*/
function useWorkspacePlanPricing() {
	const { t, locale } = useI18n();
	const { subscription, teamCreditStops, currentTeamCreditStop, isTeamPlan } = useBillingContext();
	const isYearly = computed(() => subscription.value?.duration === "ANNUAL");
	const tierKey = computed(() => {
		const tier = subscription.value?.tier;
		if (!tier) return "free";
		return TIER_TO_KEY[tier] ?? "standard";
	});
	const subscribedStop = computed(() => {
		if (!isTeamPlan.value) return null;
		const id = currentTeamCreditStop.value?.id;
		const stops = teamCreditStops.value?.stops;
		if (!id || !stops) return null;
		return stops.find((stop) => stop.id === id) ?? null;
	});
	const hasStaleCreditStop = computed(() => !!currentTeamCreditStop.value && !!teamCreditStops.value && subscribedStop.value === null);
	const teamMonthlyCostCents = computed(() => {
		const stop = subscribedStop.value;
		if (!stop) return null;
		return isYearly.value ? stop.yearly.price_cents : stop.monthly.price_cents;
	});
	const displayPrice = computed(() => {
		const cents = teamMonthlyCostCents.value ?? getTierPrice(tierKey.value, isYearly.value) * 100;
		return formatUsdCents(locale.value, cents);
	});
	const priceUnitLabel = computed(() => teamMonthlyCostCents.value !== null || !isTeamPlan.value ? t("subscription.usdPerMonth") : t("subscription.usdPerMonthPerMember"));
	watch(hasStaleCreditStop, (isStale) => {
		if (isStale) console.warn(`Subscribed credit stop "${currentTeamCreditStop.value?.id}" not found in the resolved ladder; falling back to per-member pricing.`);
	});
	return {
		displayPrice,
		priceUnitLabel
	};
}
//#endregion
//#region src/platform/workspace/components/subscriptionPanelWorkspace.logic.ts
function resolveSubscriptionTierKey(tier) {
	if (!tier) return "free";
	return TIER_TO_KEY[tier] ?? "standard";
}
function formatSubscriptionDate(isoDate, locale) {
	if (!isoDate) return "";
	return new Date(isoDate).toLocaleDateString(locale, {
		month: "short",
		day: "numeric",
		year: "numeric"
	});
}
//#endregion
//#region src/platform/workspace/components/SubscriptionPanelContentWorkspace.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex grow flex-col overflow-auto pt-6" };
var _hoisted_2 = {
	key: 0,
	class: "rounded-2xl border border-interface-stroke p-6"
};
var _hoisted_3 = { class: "flex items-center gap-2 py-4 text-muted-foreground" };
var _hoisted_4 = {
	key: 1,
	class: "rounded-2xl border border-interface-stroke p-6"
};
var _hoisted_5 = { class: "flex items-center gap-2 py-4 text-muted-foreground" };
var _hoisted_6 = {
	key: 2,
	class: "flex flex-col items-start gap-3 rounded-2xl border border-interface-stroke p-6"
};
var _hoisted_7 = { class: "flex items-center gap-2 text-text-secondary" };
var _hoisted_8 = { class: "text-sm" };
var _hoisted_9 = {
	key: 0,
	class: "mb-6 flex gap-1 rounded-2xl border border-warning-background bg-warning-background/20 p-4"
};
var _hoisted_10 = { class: "flex flex-col gap-2" };
var _hoisted_11 = { class: "m-0 pt-1.5 text-sm font-bold text-text-primary" };
var _hoisted_12 = { class: "m-0 text-sm text-text-secondary" };
var _hoisted_13 = { class: "rounded-2xl border border-interface-stroke p-6" };
var _hoisted_14 = { class: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-2" };
var _hoisted_15 = { class: "flex flex-col gap-2" };
var _hoisted_16 = { class: "m-0 text-sm font-bold text-text-primary" };
var _hoisted_17 = { class: "text-sm text-text-secondary" };
var _hoisted_18 = {
	key: 1,
	class: "flex flex-col gap-2"
};
var _hoisted_19 = { class: "m-0 text-sm font-bold text-text-primary" };
var _hoisted_20 = { class: "text-sm text-text-secondary" };
var _hoisted_21 = { class: "flex flex-col gap-2" };
var _hoisted_22 = { class: "m-0 text-base font-bold text-text-primary" };
var _hoisted_23 = { class: "flex items-baseline gap-1 font-inter" };
var _hoisted_24 = { class: "text-2xl font-semibold" };
var _hoisted_25 = { class: "text-base" };
var _hoisted_26 = { class: "flex flex-wrap gap-2 md:ml-auto" };
var _hoisted_27 = { class: "flex flex-col gap-2" };
var _hoisted_28 = { class: "flex items-center gap-2" };
var _hoisted_29 = { class: "m-0 text-base font-bold text-text-primary" };
var _hoisted_30 = { class: "flex items-baseline gap-1 font-inter" };
var _hoisted_31 = { class: "text-2xl font-semibold" };
var _hoisted_32 = { class: "text-base" };
var _hoisted_33 = {
	key: 0,
	class: "text-sm text-text-secondary"
};
var _hoisted_34 = {
	key: 0,
	class: "flex flex-wrap gap-2 md:ml-auto"
};
var _hoisted_35 = { class: "flex flex-col gap-6 pt-6 lg:flex-row lg:items-stretch" };
var _hoisted_36 = { class: "w-full lg:max-w-md" };
var _hoisted_37 = {
	key: 0,
	class: "flex flex-col gap-2"
};
var _hoisted_38 = { class: "text-text-primary" };
var _hoisted_39 = {
	key: 1,
	class: "text-sm text-muted"
};
var _hoisted_40 = {
	key: 2,
	class: "text-sm text-text-primary"
};
var _hoisted_41 = { class: "flex flex-col gap-0" };
var _hoisted_42 = {
	key: 0,
	class: "pi pi-check text-xs text-text-primary"
};
var _hoisted_43 = {
	key: 1,
	class: "text-sm font-normal whitespace-nowrap text-text-primary"
};
var _hoisted_44 = { class: "text-sm text-muted" };
var _hoisted_45 = {
	key: 1,
	class: "py-6"
};
//#endregion
//#region src/platform/workspace/components/SubscriptionPanelContentWorkspace.vue
var SubscriptionPanelContentWorkspace_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "SubscriptionPanelContentWorkspace",
	setup(__props) {
		const { isWorkspaceSubscribed, isInPersonalWorkspace } = storeToRefs(useTeamWorkspaceStore());
		const { permissions, isSubscriptionCancelled } = useWorkspaceUI();
		const { maxAvailable: freeRunsAllowance, quotaEnabled: freeRunsQuotaEnabled } = useFreeTierQuota();
		const { t, n, locale } = useI18n();
		const billingOperationStore = useBillingOperationStore();
		const isSettingUp = computed(() => billingOperationStore.isSettingUp);
		const { isActiveSubscription, isFreeTier: isFreeTierPlan, isTeamPlan, subscription, isLoading, error, showSubscriptionDialog, manageSubscription, initialize } = useBillingContext();
		const { showPricingTable } = useSubscriptionDialog();
		const { isResubscribing, handleResubscribe } = useResubscribe();
		const { displayPrice, priceUnitLabel } = useWorkspacePlanPricing();
		const { menuEntries } = useWorkspaceMenuItems();
		const showSubscribePrompt = computed(() => {
			if (!permissions.value.canManageSubscription) return false;
			if (isSubscriptionCancelled.value) return false;
			if (subscription.value && !isFreeTierPlan.value && (subscription.value.planSlug || subscription.value.tier)) return false;
			if (isInPersonalWorkspace.value) return !isActiveSubscription.value;
			return !isWorkspaceSubscribed.value;
		});
		const showTeamSubscribePrompt = computed(() => showSubscribePrompt.value && !isInPersonalWorkspace.value);
		const isPersonalFree = computed(() => isInPersonalWorkspace.value && (showSubscribePrompt.value || isFreeTierPlan.value));
		const isTeamActive = computed(() => isTeamPlan.value && isActiveSubscription.value);
		const isMemberView = computed(() => !permissions.value.canManageSubscription && !isActiveSubscription.value && !isWorkspaceSubscribed.value);
		const showZeroState = computed(() => showTeamSubscribePrompt.value || isMemberView.value);
		function handleSubscribeWorkspace() {
			showSubscriptionDialog({ reason: "settings_billing_panel" });
		}
		function handleUpgrade() {
			if (isFreeTierPlan.value) showPricingTable({ reason: "settings_billing_panel" });
			else showSubscriptionDialog({ reason: "settings_billing_panel" });
		}
		function handleViewMoreDetails() {
			window.open("https://www.comfy.org/cloud/pricing", "_blank");
		}
		async function handleRetry() {
			await initialize();
		}
		const isYearlySubscription = computed(() => subscription.value?.duration === "ANNUAL");
		const formattedRenewalDate = computed(() => formatSubscriptionDate(subscription.value?.renewalDate, locale.value));
		const formattedEndDate = computed(() => formatSubscriptionDate(subscription.value?.endDate, locale.value));
		const subscriptionTierName = computed(() => {
			const tier = subscription.value?.tier;
			if (!tier) return "";
			const key = resolveSubscriptionTierKey(tier);
			const baseName = t(`subscription.tiers.${key}.name`);
			return isYearlySubscription.value ? t("subscription.tierNameYearly", { name: baseName }) : baseName;
		});
		const planDisplayName = computed(() => isTeamPlan.value ? t("subscription.teamPlanName") : subscriptionTierName.value);
		const tierKey = computed(() => resolveSubscriptionTierKey(subscription.value?.tier));
		const TEAM_PERK_KEYS = [
			"inviteMembers",
			"concurrentRuns",
			"sharedCreditPool",
			"rolePermissions"
		];
		const tierBenefits = computed(() => {
			if (isTeamActive.value) return TEAM_PERK_KEYS.map((key) => ({
				key,
				type: "feature",
				label: t(`subscription.teamPerks.${key}`)
			}));
			if (isPersonalFree.value) return [...freeRunsQuotaEnabled.value ? [{
				key: "freeRuns",
				type: "feature",
				label: t("subscription.freePerks.freeRuns", freeRunsAllowance.value)
			}] : [], {
				key: "maxRuntime",
				type: "feature",
				label: t("subscription.freePerks.maxRuntime", { duration: t("subscription.maxDuration.free") })
			}];
			return getCommonTierBenefits(tierKey.value, t, n);
		});
		return (_ctx, _cache) => {
			const _component_i18n_t = resolveComponent("i18n-t");
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock("div", _hoisted_1, [isSettingUp.value ? (openBlock(), createElementBlock("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [_cache[0] || (_cache[0] = createBaseVNode("i", { class: "pi pi-spin pi-spinner" }, null, -1)), createBaseVNode("span", null, toDisplayString(_ctx.$t("billingOperation.subscriptionProcessing")), 1)])])) : unref(isLoading) && !unref(subscription) ? (openBlock(), createElementBlock("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [_cache[1] || (_cache[1] = createBaseVNode("i", { class: "pi pi-spin pi-spinner" }, null, -1)), createBaseVNode("span", null, toDisplayString(_ctx.$t("g.loading")), 1)])])) : unref(error) && !unref(subscription) ? (openBlock(), createElementBlock("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [_cache[2] || (_cache[2] = createBaseVNode("i", { class: "pi pi-exclamation-circle text-danger" }, null, -1)), createBaseVNode("span", _hoisted_8, toDisplayString(_ctx.$t("subscription.planLoadError")), 1)]), createVNode(Button_default, {
				variant: "secondary",
				size: "lg",
				class: "rounded-lg px-4 text-sm font-normal",
				loading: unref(isLoading),
				onClick: handleRetry
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("subscription.planLoadErrorRetry")), 1)]),
				_: 1
			}, 8, ["loading"])])) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [
				unref(isSubscriptionCancelled) ? (openBlock(), createElementBlock("div", _hoisted_9, [_cache[3] || (_cache[3] = createBaseVNode("div", { class: "flex size-8 shrink-0 items-center justify-center rounded-full text-warning-background" }, [createBaseVNode("i", { class: "pi pi-info-circle" })], -1)), createBaseVNode("div", _hoisted_10, [createBaseVNode("h2", _hoisted_11, toDisplayString(_ctx.$t("subscription.canceledCard.title")), 1), createBaseVNode("p", _hoisted_12, toDisplayString(_ctx.$t("subscription.canceledCard.description", { date: formattedEndDate.value })), 1)])])) : createCommentVNode("", true),
				createBaseVNode("div", _hoisted_13, [createBaseVNode("div", null, [createBaseVNode("div", _hoisted_14, [showTeamSubscribePrompt.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("div", _hoisted_15, [createBaseVNode("h3", _hoisted_16, toDisplayString(_ctx.$t("subscription.workspaceNotSubscribed")), 1), createBaseVNode("div", _hoisted_17, toDisplayString(_ctx.$t("subscription.subscriptionRequiredMessage")), 1)]), createVNode(Button_default, {
					variant: "primary",
					size: "lg",
					class: "ml-auto rounded-lg px-4 py-2 text-sm font-normal",
					onClick: handleSubscribeWorkspace
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("subscription.subscribeNow")), 1)]),
					_: 1
				})], 64)) : isMemberView.value ? (openBlock(), createElementBlock("div", _hoisted_18, [createBaseVNode("h3", _hoisted_19, toDisplayString(_ctx.$t("subscription.workspaceNotSubscribed")), 1), createBaseVNode("div", _hoisted_20, toDisplayString(_ctx.$t("subscription.contactOwnerToSubscribe")), 1)])) : isPersonalFree.value ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [createBaseVNode("div", _hoisted_21, [createBaseVNode("h3", _hoisted_22, toDisplayString(_ctx.$t("subscription.tiers.free.name")), 1), createBaseVNode("div", _hoisted_23, [createBaseVNode("span", _hoisted_24, toDisplayString(unref(displayPrice)), 1), createBaseVNode("span", _hoisted_25, toDisplayString(unref(priceUnitLabel)), 1)])]), createBaseVNode("div", _hoisted_26, [createVNode(Button_default, {
					variant: "primary",
					size: "lg",
					class: "rounded-lg px-4 text-sm font-normal",
					onClick: handleSubscribeWorkspace
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("subscription.subscribe")), 1)]),
					_: 1
				}), unref(menuEntries).length > 0 ? (openBlock(), createBlock(DropdownMenu_default, {
					key: 0,
					entries: unref(menuEntries)
				}, {
					button: withCtx(() => [withDirectives((openBlock(), createBlock(Button_default, {
						variant: "secondary",
						size: "icon-lg",
						class: "rounded-lg bg-interface-menu-component-surface-selected text-text-primary",
						"aria-label": _ctx.$t("g.moreOptions")
					}, {
						default: withCtx(() => [..._cache[4] || (_cache[4] = [createBaseVNode("i", { class: "pi pi-ellipsis-h" }, null, -1)])]),
						_: 1
					}, 8, ["aria-label"])), [[_directive_tooltip, {
						value: _ctx.$t("g.moreOptions"),
						showDelay: 300
					}]])]),
					_: 1
				}, 8, ["entries"])) : createCommentVNode("", true)])], 64)) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [createBaseVNode("div", _hoisted_27, [
					createBaseVNode("div", _hoisted_28, [createBaseVNode("h3", _hoisted_29, toDisplayString(planDisplayName.value), 1), unref(isSubscriptionCancelled) ? (openBlock(), createBlock(StatusBadge_default, {
						key: 0,
						label: _ctx.$t("subscription.canceled"),
						severity: "warn"
					}, null, 8, ["label"])) : createCommentVNode("", true)]),
					createBaseVNode("div", _hoisted_30, [createBaseVNode("span", _hoisted_31, toDisplayString(unref(displayPrice)), 1), createBaseVNode("span", _hoisted_32, toDisplayString(unref(priceUnitLabel)), 1)]),
					unref(isActiveSubscription) ? (openBlock(), createElementBlock("div", _hoisted_33, [unref(isSubscriptionCancelled) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(_ctx.$t("subscription.endsOnDate", { date: formattedEndDate.value })), 1)], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(_ctx.$t("subscription.renewsOnDate", { date: formattedRenewalDate.value })), 1)], 64))])) : createCommentVNode("", true)
				]), unref(isActiveSubscription) ? (openBlock(), createElementBlock("div", _hoisted_34, [
					!unref(isFreeTierPlan) && unref(permissions).canManageSubscription ? (openBlock(), createBlock(Button_default, {
						key: 0,
						size: "lg",
						variant: "secondary",
						class: "rounded-lg bg-interface-menu-component-surface-selected px-4 text-sm font-normal text-text-primary",
						onClick: unref(manageSubscription)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("subscription.manageBilling")), 1)]),
						_: 1
					}, 8, ["onClick"])) : createCommentVNode("", true),
					unref(isSubscriptionCancelled) && unref(permissions).canManageSubscriptionLifecycle ? (openBlock(), createBlock(Button_default, {
						key: 1,
						size: "lg",
						variant: "primary",
						class: "rounded-lg px-4 text-sm font-normal",
						loading: unref(isResubscribing),
						onClick: unref(handleResubscribe)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("subscription.reactivatePlan")), 1)]),
						_: 1
					}, 8, ["loading", "onClick"])) : !unref(isSubscriptionCancelled) && unref(permissions).canManageSubscription ? (openBlock(), createBlock(Button_default, {
						key: 2,
						size: "lg",
						variant: "secondary",
						class: "rounded-lg bg-interface-menu-component-surface-selected px-4 text-sm font-normal text-text-primary",
						onClick: handleUpgrade
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(isInPersonalWorkspace) && !unref(isTeamPlan) ? _ctx.$t("subscription.upgradePlan") : _ctx.$t("subscription.changePlan")), 1)]),
						_: 1
					})) : createCommentVNode("", true),
					unref(menuEntries).length > 0 ? (openBlock(), createBlock(DropdownMenu_default, {
						key: 3,
						entries: unref(menuEntries)
					}, {
						button: withCtx(() => [withDirectives((openBlock(), createBlock(Button_default, {
							variant: "secondary",
							size: "icon-lg",
							class: "rounded-lg bg-interface-menu-component-surface-selected text-text-primary",
							"aria-label": _ctx.$t("g.moreOptions")
						}, {
							default: withCtx(() => [..._cache[5] || (_cache[5] = [createBaseVNode("i", { class: "pi pi-ellipsis-h" }, null, -1)])]),
							_: 1
						}, 8, ["aria-label"])), [[_directive_tooltip, {
							value: _ctx.$t("g.moreOptions"),
							showDelay: 300
						}]])]),
						_: 1
					}, 8, ["entries"])) : createCommentVNode("", true)
				])) : createCommentVNode("", true)], 64))])]), createBaseVNode("div", _hoisted_35, [createBaseVNode("div", _hoisted_36, [createVNode(CreditsTile_default, { "zero-state": showZeroState.value }, null, 8, ["zero-state"])]), unref(isActiveSubscription) || isPersonalFree.value ? (openBlock(), createElementBlock("div", _hoisted_37, [isTeamActive.value ? (openBlock(), createBlock(_component_i18n_t, {
					key: 0,
					keypath: "subscription.teamPlanIncludes",
					tag: "div",
					class: "text-sm text-muted"
				}, {
					plan: withCtx(() => [createBaseVNode("span", _hoisted_38, toDisplayString(_ctx.$t("subscription.tiers.pro.name")), 1)]),
					_: 1
				})) : isPersonalFree.value ? (openBlock(), createElementBlock("div", _hoisted_39, toDisplayString(_ctx.$t("subscription.whatsIncluded")), 1)) : (openBlock(), createElementBlock("div", _hoisted_40, toDisplayString(_ctx.$t("subscription.yourPlanIncludes")), 1)), createBaseVNode("div", _hoisted_41, [(openBlock(true), createElementBlock(Fragment, null, renderList(tierBenefits.value, (benefit) => {
					return openBlock(), createElementBlock("div", {
						key: benefit.key,
						class: "flex items-center gap-2 py-2"
					}, [benefit.type === "feature" ? (openBlock(), createElementBlock("i", _hoisted_42)) : benefit.type === "metric" && benefit.value ? (openBlock(), createElementBlock("span", _hoisted_43, toDisplayString(benefit.value), 1)) : createCommentVNode("", true), createBaseVNode("span", _hoisted_44, toDisplayString(benefit.label), 1)]);
				}), 128))])])) : createCommentVNode("", true)])]),
				unref(permissions).canManageSubscription ? (openBlock(), createElementBlock("div", _hoisted_45, [createVNode(Button_default, {
					variant: "muted-textonly",
					class: "text-sm text-muted",
					onClick: handleViewMoreDetails
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("subscription.viewMoreDetailsPlans")) + " ", 1), _cache[6] || (_cache[6] = createBaseVNode("i", { class: "pi pi-external-link text-muted" }, null, -1))]),
					_: 1
				})])) : createCommentVNode("", true),
				createVNode(SubscriptionFooterLinks_default, {
					class: "mt-auto pt-6",
					"show-invoice-history": unref(permissions).canManageSubscription
				}, null, 8, ["show-invoice-history"])
			], 64))]);
		};
	}
}), [["__scopeId", "data-v-cae80cd7"]]);
//#endregion
export { useResubscribe as n, SubscriptionPanelContentWorkspace_default as t };

//# sourceMappingURL=SubscriptionPanelContentWorkspace-BpXuoLtJ.js.map