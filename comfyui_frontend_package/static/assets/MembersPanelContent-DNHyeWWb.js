import "./rolldown-runtime-C9Cmlsnw.js";
import { X as useToast } from "./vendor-primevue-T0qpAVQN.js";
import { B as createTextVNode, Ct as withDirectives, D as Fragment, F as createCommentVNode, Ht as unref, I as createElementBlock, Kt as normalizeStyle, M as computed, N as createBaseVNode, Nt as ref, Ot as isRef, P as createBlock, St as withCtx, U as defineComponent, V as createVNode, Wt as normalizeClass, at as openBlock, f as storeToRefs, qt as toDisplayString, st as renderList, ut as resolveDirective, vt as watch } from "./vendor-vue-core-oGuyqViA.js";
import { r as useI18n } from "./vendor-i18n-CPpp7rsM.js";
import { t as cn } from "./src-C1FpYMFF.js";
import { t as Button_default } from "./Button-By8A3toz.js";
import { K as createSharedComposable } from "./vendor-vueuse-De7x5bAw.js";
import { Li as useTeamWorkspaceStore, Va as SearchInput_default, ir as useWorkspaceUI, ki as useCurrentUser, nt as DropdownMenu_default, qn as useDialogService, ri as MoreButton_default, rr as useSubscriptionDialog, tr as useBillingContext } from "./settingStore-pm7IqVHI.js";
import { n as useFeatureFlags } from "./useFeatureFlags-CvjPiCWD.js";
import { t as useExternalLink } from "./useExternalLink-dnLPgbQx.js";
import { t as UserAvatar_default } from "./UserAvatar-B9iDEjme.js";
import { n as useResubscribe } from "./SubscriptionPanelContentWorkspace-BpXuoLtJ.js";
function useBillingBannerInternal() {
	const { isActiveSubscription, billingStatus, subscription, isTeamPlan } = useBillingContext();
	const { permissions } = useWorkspaceUI();
	const { flags } = useFeatureFlags();
	const dismissed = ref(false);
	const kind = computed(() => {
		return null;
	});
	watch(computed(() => subscription.value?.hasFunds === false), (exhausted) => {
		if (!exhausted) dismissed.value = false;
	});
	function dismiss() {
		dismissed.value = true;
	}
	return {
		kind,
		dismiss
	};
}
var useBillingBanner = createSharedComposable(useBillingBannerInternal);
//#endregion
//#region src/platform/workspace/components/dialogs/settings/BillingStatusBanner.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = {
	key: 0,
	class: "@container"
};
var _hoisted_2$4 = {
	role: "status",
	class: "flex flex-col gap-3 rounded-2xl border border-interface-stroke/60 bg-base-background p-4 @2xl:flex-row @2xl:items-center @2xl:gap-2"
};
var _hoisted_3$4 = { class: "flex min-w-0 flex-1 flex-col gap-1" };
var _hoisted_4$3 = { class: "flex items-center gap-2" };
var _hoisted_5$3 = { class: "text-sm text-base-foreground" };
var _hoisted_6$3 = { class: "m-0 pl-6 text-sm text-muted-foreground" };
var _hoisted_7$3 = {
	key: 0,
	class: "flex shrink-0 flex-wrap items-center gap-2 pl-6 @2xl:pl-0"
};
//#endregion
//#region src/platform/workspace/components/dialogs/settings/BillingStatusBanner.vue
var BillingStatusBanner_default = /* @__PURE__ */ defineComponent({
	__name: "BillingStatusBanner",
	setup(__props) {
		const { t, d } = useI18n();
		const { renewalDate, subscription, manageSubscription } = useBillingContext();
		const { permissions } = useWorkspaceUI();
		const { kind, dismiss } = useBillingBanner();
		const { isResubscribing, handleResubscribe } = useResubscribe();
		const dialogService = useDialogService();
		const canManage = computed(() => permissions.value.canManageSubscription);
		const canManageLifecycle = computed(() => permissions.value.canManageSubscriptionLifecycle);
		const canTopUp = computed(() => permissions.value.canTopUp);
		const cycleResetDate = computed(() => {
			const raw = renewalDate.value;
			return raw ? d(new Date(raw), {
				month: "short",
				day: "numeric"
			}) : "";
		});
		const planEndDate = computed(() => {
			const raw = subscription.value?.endDate;
			return raw ? d(new Date(raw), {
				year: "numeric",
				month: "long",
				day: "numeric"
			}) : "";
		});
		const banner = computed(() => {
			const bs = "workspacePanel.billingStatus";
			switch (kind.value) {
				case "paused": return {
					muted: false,
					title: t(`${bs}.paused.title`),
					body: canManage.value ? t(`${bs}.paused.body`) : t(`${bs}.paused.memberBody`),
					action: canManage.value ? "updatePayment" : null,
					dismissible: false
				};
				case "paymentFailed": return {
					muted: false,
					title: t(`${bs}.warning.title`),
					body: cycleResetDate.value ? t(`${bs}.warning.body`, { date: cycleResetDate.value }) : t(`${bs}.warning.bodyNoDate`),
					action: "updatePayment",
					dismissible: false
				};
				case "outOfCredits": return {
					muted: false,
					title: t(`${bs}.outOfCredits.title`),
					body: canTopUp.value ? cycleResetDate.value ? t(`${bs}.outOfCredits.body`, { date: cycleResetDate.value }) : t(`${bs}.outOfCredits.bodyNoDate`) : t(`${bs}.outOfCredits.memberBody`),
					action: canTopUp.value ? "addCredits" : null,
					dismissible: true
				};
				case "ending": return {
					muted: true,
					title: t(`${bs}.ending.title`, { date: planEndDate.value }),
					body: t(`${bs}.ending.body`),
					action: canManageLifecycle.value ? "reactivate" : null,
					dismissible: false
				};
				default: return null;
			}
		});
		function handleAddCredits() {
			dialogService.showTopUpCreditsDialog();
		}
		function handleUpdatePayment() {
			manageSubscription();
		}
		return (_ctx, _cache) => {
			return banner.value ? (openBlock(), createElementBlock("div", _hoisted_1$4, [createBaseVNode("div", _hoisted_2$4, [createBaseVNode("div", _hoisted_3$4, [createBaseVNode("div", _hoisted_4$3, [createBaseVNode("i", { class: normalizeClass(unref(cn)("size-4 shrink-0", banner.value.muted ? "icon-[lucide--circle-alert] text-muted-foreground" : "icon-[lucide--triangle-alert] text-warning-background")) }, null, 2), createBaseVNode("span", _hoisted_5$3, toDisplayString(banner.value.title), 1)]), createBaseVNode("p", _hoisted_6$3, toDisplayString(banner.value.body), 1)]), banner.value.dismissible || banner.value.action ? (openBlock(), createElementBlock("div", _hoisted_7$3, [banner.value.dismissible ? (openBlock(), createBlock(Button_default, {
				key: 0,
				variant: "textonly",
				size: "lg",
				onClick: unref(dismiss)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.billingStatus.outOfCredits.dismiss")), 1)]),
				_: 1
			}, 8, ["onClick"])) : createCommentVNode("", true), banner.value.action === "addCredits" ? (openBlock(), createBlock(Button_default, {
				key: 1,
				variant: "secondary",
				size: "lg",
				onClick: handleAddCredits
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.billingStatus.outOfCredits.addCredits")), 1)]),
				_: 1
			})) : banner.value.action === "reactivate" ? (openBlock(), createBlock(Button_default, {
				key: 2,
				variant: "secondary",
				size: "lg",
				loading: unref(isResubscribing),
				onClick: unref(handleResubscribe)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.billingStatus.ending.reactivate")), 1)]),
				_: 1
			}, 8, ["loading", "onClick"])) : banner.value.action === "updatePayment" ? (openBlock(), createBlock(Button_default, {
				key: 3,
				variant: "inverted",
				size: "lg",
				onClick: handleUpdatePayment
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.billingStatus.updatePayment")), 1)]),
				_: 1
			})) : createCommentVNode("", true)])) : createCommentVNode("", true)])])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/platform/workspace/components/dialogs/settings/MemberListItem.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = ["data-testid"];
var _hoisted_2$3 = { class: "flex items-center gap-3" };
var _hoisted_3$3 = { class: "flex min-w-0 flex-1 flex-col gap-1" };
var _hoisted_4$2 = { class: "text-sm text-base-foreground" };
var _hoisted_5$2 = {
	key: 0,
	class: "text-muted-foreground"
};
var _hoisted_6$2 = { class: "text-sm text-muted-foreground" };
var _hoisted_7$2 = {
	key: 1,
	class: "text-sm tabular-nums"
};
var _hoisted_8$2 = {
	key: 0,
	class: "flex flex-col gap-1"
};
var _hoisted_9$2 = { class: "text-base-foreground" };
var _hoisted_10$2 = [
	"aria-valuenow",
	"aria-label",
	"aria-valuetext"
];
var _hoisted_11$1 = {
	key: 1,
	class: "text-muted-foreground"
};
var _hoisted_12$1 = {
	key: 2,
	class: "flex items-center justify-end"
};
//#endregion
//#region src/platform/workspace/components/dialogs/settings/MemberListItem.vue
var MemberListItem_default = /* @__PURE__ */ defineComponent({
	__name: "MemberListItem",
	props: {
		member: {},
		isCurrentUser: { type: Boolean },
		photoUrl: {},
		gridCols: {},
		showRoleColumn: {
			type: Boolean,
			default: false
		},
		showCreditsColumn: {
			type: Boolean,
			default: false
		},
		canManageMembers: {
			type: Boolean,
			default: false
		},
		isSingleSeatPlan: {
			type: Boolean,
			default: false
		},
		striped: {
			type: Boolean,
			default: false
		},
		menuItems: { default: () => [] }
	},
	setup(__props) {
		const { n, t } = useI18n();
		const hasCreditLimit = computed(() => __props.member.monthlyCreditLimit !== null && __props.member.monthlyCreditLimit !== void 0);
		const hasCreditUsage = computed(() => __props.member.creditsUsedThisMonth !== void 0);
		const creditsLabel = computed(() => {
			const used = __props.member.creditsUsedThisMonth;
			const limit = __props.member.monthlyCreditLimit;
			if (used === void 0) return limit == null ? "—" : `— / ${n(limit)}`;
			return limit == null ? n(used) : `${n(used)} / ${n(limit)}`;
		});
		const creditUsagePercent = computed(() => {
			const used = __props.member.creditsUsedThisMonth;
			const limit = __props.member.monthlyCreditLimit;
			if (used === void 0 || limit == null) return 0;
			if (limit === 0) return 100;
			return Math.min(100, used / limit * 100);
		});
		const creditUsageValueText = computed(() => t("subscription.monthlyUsageProgress", {
			used: n(__props.member.creditsUsedThisMonth ?? 0),
			total: n(__props.member.monthlyCreditLimit ?? 0)
		}));
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock("div", {
				"data-testid": `member-row-${__props.member.id}`,
				class: normalizeClass(unref(cn)("grid w-full items-center rounded-lg p-2", __props.isSingleSeatPlan ? "grid-cols-1" : __props.gridCols, __props.striped && "bg-secondary-background/50"))
			}, [
				createBaseVNode("div", _hoisted_2$3, [createVNode(UserAvatar_default, {
					class: "size-8",
					"photo-url": __props.isCurrentUser ? __props.photoUrl : void 0,
					"pt:icon:class": { "text-xl!": !__props.isCurrentUser || !__props.photoUrl }
				}, null, 8, ["photo-url", "pt:icon:class"]), createBaseVNode("div", _hoisted_3$3, [createBaseVNode("span", _hoisted_4$2, [createTextVNode(toDisplayString(__props.member.name) + " ", 1), __props.isCurrentUser ? (openBlock(), createElementBlock("span", _hoisted_5$2, " (" + toDisplayString(_ctx.$t("g.you")) + ") ", 1)) : createCommentVNode("", true)]), createBaseVNode("span", _hoisted_6$2, toDisplayString(__props.member.email), 1)])]),
				__props.showRoleColumn && !__props.isSingleSeatPlan ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass(unref(cn)("text-sm text-muted-foreground", !__props.showCreditsColumn && "text-right"))
				}, toDisplayString(__props.member.role === "owner" ? _ctx.$t("workspaceSwitcher.roleOwner") : _ctx.$t("workspaceSwitcher.roleMember")), 3)) : createCommentVNode("", true),
				__props.showCreditsColumn ? (openBlock(), createElementBlock("div", _hoisted_7$2, [hasCreditLimit.value ? (openBlock(), createElementBlock("div", _hoisted_8$2, [createBaseVNode("span", _hoisted_9$2, toDisplayString(creditsLabel.value), 1), hasCreditUsage.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: "h-1 overflow-hidden rounded-full bg-secondary-background-hover",
					role: "progressbar",
					"aria-valuenow": creditUsagePercent.value,
					"aria-valuemin": "0",
					"aria-valuemax": "100",
					"aria-label": _ctx.$t("workspacePanel.members.columns.creditsUsed"),
					"aria-valuetext": creditUsageValueText.value
				}, [createBaseVNode("div", {
					class: "h-full rounded-full bg-credit",
					style: normalizeStyle({ width: `${creditUsagePercent.value}%` })
				}, null, 4)], 8, _hoisted_10$2)) : createCommentVNode("", true)])) : (openBlock(), createElementBlock("span", _hoisted_11$1, toDisplayString(creditsLabel.value), 1))])) : createCommentVNode("", true),
				__props.canManageMembers && !__props.isSingleSeatPlan ? (openBlock(), createElementBlock("div", _hoisted_12$1, [__props.menuItems.length > 0 ? (openBlock(), createBlock(DropdownMenu_default, {
					key: 0,
					entries: __props.menuItems
				}, {
					button: withCtx(() => [withDirectives((openBlock(), createBlock(Button_default, {
						variant: "muted-textonly",
						size: "icon",
						"aria-label": _ctx.$t("g.moreOptions")
					}, {
						default: withCtx(() => [..._cache[0] || (_cache[0] = [createBaseVNode("i", { class: "pi pi-ellipsis-h" }, null, -1)])]),
						_: 1
					}, 8, ["aria-label"])), [[_directive_tooltip, {
						value: _ctx.$t("g.moreOptions"),
						showDelay: 300
					}]])]),
					_: 1
				}, 8, ["entries"])) : createCommentVNode("", true)])) : createCommentVNode("", true)
			], 10, _hoisted_1$3);
		};
	}
});
//#endregion
//#region src/platform/workspace/components/dialogs/settings/MemberUpsellBanner.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = { class: "mt-4 flex w-full items-center justify-between gap-4 rounded-2xl border border-interface-stroke bg-secondary-background p-6 max-sm:flex-col max-sm:items-stretch" };
var _hoisted_2$2 = { class: "flex items-center gap-2" };
var _hoisted_3$2 = { class: "m-0 text-sm text-muted-foreground" };
//#endregion
//#region src/platform/workspace/components/dialogs/settings/MemberUpsellBanner.vue
var MemberUpsellBanner_default = /* @__PURE__ */ defineComponent({
	__name: "MemberUpsellBanner",
	props: { reactivate: {
		type: Boolean,
		default: false
	} },
	emits: ["showPlans"],
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$2, [createBaseVNode("div", _hoisted_2$2, [_cache[1] || (_cache[1] = createBaseVNode("i", { class: "icon-[lucide--info] size-4 shrink-0 text-muted-foreground" }, null, -1)), createBaseVNode("p", _hoisted_3$2, toDisplayString(__props.reactivate ? _ctx.$t("workspacePanel.members.upsellBannerReactivate") : _ctx.$t("workspacePanel.members.upsellBanner")), 1)]), createVNode(Button_default, {
				variant: "inverted",
				size: "lg",
				class: "max-sm:w-full",
				onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("showPlans"))
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.reactivate ? _ctx.$t("workspacePanel.members.reactivateTeam") : _ctx.$t("workspacePanel.members.upgradeToTeam")), 1)]),
				_: 1
			})]);
		};
	}
});
//#endregion
//#region src/platform/workspace/components/dialogs/settings/PendingInvitesList.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { class: "flex items-center gap-3" };
var _hoisted_2$1 = { class: "flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary-background" };
var _hoisted_3$1 = { class: "text-sm font-bold text-base-foreground" };
var _hoisted_4$1 = { class: "flex min-w-0 flex-1 flex-col gap-1" };
var _hoisted_5$1 = { class: "text-sm text-base-foreground" };
var _hoisted_6$1 = { class: "text-sm text-muted-foreground" };
var _hoisted_7$1 = { class: "text-sm text-muted-foreground" };
var _hoisted_8$1 = { class: "text-sm text-muted-foreground" };
var _hoisted_9$1 = { class: "flex items-center justify-end" };
var _hoisted_10$1 = {
	key: 0,
	class: "flex w-full items-center justify-center py-8 text-sm text-muted-foreground"
};
var menuItemClass = "w-full justify-start rounded-sm px-3 py-2";
//#endregion
//#region src/platform/workspace/components/dialogs/settings/PendingInvitesList.vue
var PendingInvitesList_default = /* @__PURE__ */ defineComponent({
	__name: "PendingInvitesList",
	props: {
		invites: {},
		gridCols: {}
	},
	emits: ["resend", "revoke"],
	setup(__props) {
		const { d } = useI18n();
		function getInviteDisplayName(email) {
			return email.split("@")[0];
		}
		function getInviteInitial(email) {
			return email.charAt(0).toUpperCase();
		}
		function formatDate(date) {
			return d(date, { dateStyle: "medium" });
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.invites, (invite, index) => {
				return openBlock(), createElementBlock("div", {
					key: invite.id,
					class: normalizeClass(unref(cn)("grid w-full items-center rounded-lg p-2", __props.gridCols, index % 2 === 1 && "bg-secondary-background/50"))
				}, [
					createBaseVNode("div", _hoisted_1$1, [createBaseVNode("div", _hoisted_2$1, [createBaseVNode("span", _hoisted_3$1, toDisplayString(getInviteInitial(invite.email)), 1)]), createBaseVNode("div", _hoisted_4$1, [createBaseVNode("span", _hoisted_5$1, toDisplayString(getInviteDisplayName(invite.email)), 1), createBaseVNode("span", _hoisted_6$1, toDisplayString(invite.email), 1)])]),
					createBaseVNode("span", _hoisted_7$1, toDisplayString(formatDate(invite.inviteDate)), 1),
					createBaseVNode("span", _hoisted_8$1, toDisplayString(formatDate(invite.expiryDate)), 1),
					createBaseVNode("div", _hoisted_9$1, [createVNode(MoreButton_default, { "aria-label": _ctx.$t("g.moreOptions") }, {
						default: withCtx(({ close }) => [createVNode(Button_default, {
							variant: "textonly",
							size: "unset",
							class: normalizeClass(menuItemClass),
							onClick: () => {
								close();
								_ctx.$emit("resend", invite);
							}
						}, {
							default: withCtx(() => [_cache[0] || (_cache[0] = createBaseVNode("i", { class: "icon-[lucide--mail-plus] size-4" }, null, -1)), createBaseVNode("span", null, toDisplayString(_ctx.$t("workspacePanel.members.actions.resendInvite")), 1)]),
							_: 1
						}, 8, ["onClick"]), createVNode(Button_default, {
							variant: "textonly",
							size: "unset",
							class: normalizeClass(menuItemClass),
							onClick: () => {
								close();
								_ctx.$emit("revoke", invite);
							}
						}, {
							default: withCtx(() => [_cache[1] || (_cache[1] = createBaseVNode("i", { class: "icon-[lucide--mail-x] size-4" }, null, -1)), createBaseVNode("span", null, toDisplayString(_ctx.$t("workspacePanel.members.actions.cancelInvite")), 1)]),
							_: 1
						}, 8, ["onClick"])]),
						_: 2
					}, 1032, ["aria-label"])])
				], 2);
			}), 128)), __props.invites.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_10$1, toDisplayString(_ctx.$t("workspacePanel.members.noInvites")), 1)) : createCommentVNode("", true)]);
		};
	}
});
//#endregion
//#region src/platform/workspace/components/dialogs/settings/WorkspaceMenuButton.vue
var WorkspaceMenuButton_default = /* @__PURE__ */ defineComponent({
	__name: "WorkspaceMenuButton",
	setup(__props) {
		const { t } = useI18n();
		const { showLeaveWorkspaceDialog, showDeleteWorkspaceDialog, showEditWorkspaceDialog } = useDialogService();
		const { isWorkspaceSubscribed } = storeToRefs(useTeamWorkspaceStore());
		const { permissions, uiConfig } = useWorkspaceUI();
		const isDeleteDisabled = computed(() => uiConfig.value.workspaceMenuAction === "delete" && isWorkspaceSubscribed.value);
		const deleteTooltip = computed(() => {
			if (!isDeleteDisabled.value) return void 0;
			const tooltipKey = uiConfig.value.workspaceMenuDisabledTooltip;
			return tooltipKey ? t(tooltipKey) : void 0;
		});
		function leaveWorkspace() {
			if (!permissions.value.canLeaveWorkspace) return;
			showLeaveWorkspaceDialog();
		}
		function deleteWorkspace() {
			if (!permissions.value.canManageSubscription || uiConfig.value.workspaceMenuAction !== "delete" || isDeleteDisabled.value) return;
			showDeleteWorkspaceDialog();
		}
		const menuItems = computed(() => {
			const items = [];
			if (uiConfig.value.showEditWorkspaceMenuItem) items.push({
				label: t("workspacePanel.menu.editWorkspace"),
				icon: "pi pi-pencil",
				command: () => showEditWorkspaceDialog()
			});
			if (uiConfig.value.workspaceMenuAction === "delete" && permissions.value.canManageSubscription) items.push({
				label: t("workspacePanel.menu.deleteWorkspace"),
				icon: "pi pi-trash",
				class: isDeleteDisabled.value ? "text-destructive-background/50" : "text-destructive-background",
				disabled: isDeleteDisabled.value,
				tooltip: deleteTooltip.value,
				command: isDeleteDisabled.value ? void 0 : deleteWorkspace
			});
			if (permissions.value.canLeaveWorkspace) items.push({
				label: t("workspacePanel.menu.leaveWorkspace"),
				icon: "pi pi-sign-out",
				command: leaveWorkspace
			});
			return items;
		});
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createBlock(DropdownMenu_default, { entries: menuItems.value }, {
				button: withCtx(() => [withDirectives((openBlock(), createBlock(Button_default, {
					variant: "muted-textonly",
					size: "icon-lg",
					"aria-label": _ctx.$t("g.moreOptions")
				}, {
					default: withCtx(() => [..._cache[0] || (_cache[0] = [createBaseVNode("i", { class: "pi pi-ellipsis-h" }, null, -1)])]),
					_: 1
				}, 8, ["aria-label"])), [[_directive_tooltip, {
					value: _ctx.$t("g.moreOptions"),
					showDelay: 300
				}]])]),
				_: 1
			}, 8, ["entries"]);
		};
	}
});
//#endregion
//#region src/platform/workspace/composables/useTeamPlan.ts
function useTeamPlan() {
	const { isActiveSubscription, isInitialized, isTeamPlan, subscription, subscriptionStatus } = useBillingContext();
	const isCancelled = computed(() => subscription.value?.isCancelled ?? false);
	return {
		hasTeamPlan: isTeamPlan,
		isOnTeamPlan: computed(() => isTeamPlan.value && isActiveSubscription.value && !isCancelled.value),
		isCancelled,
		hasLapsedTeamPlan: computed(() => isTeamPlan.value && (subscriptionStatus.value === "canceled" || subscriptionStatus.value === "ended")),
		isPlanLoading: computed(() => !isInitialized.value)
	};
}
//#endregion
//#region src/platform/workspace/composables/useMembersPanel.ts
function sortMembers(members, currentUserEmail, sortDirection, originalOwnerId = null) {
	return [...members].sort((a, b) => {
		const aIsOriginalOwner = a.id === originalOwnerId;
		const bIsOriginalOwner = b.id === originalOwnerId;
		if (aIsOriginalOwner && !bIsOriginalOwner) return -1;
		if (!aIsOriginalOwner && bIsOriginalOwner) return 1;
		if (a.role !== b.role) {
			const ownerFirst = a.role === "owner" ? -1 : 1;
			return sortDirection === "desc" ? ownerFirst : -ownerFirst;
		}
		const aIsCurrent = a.email.toLowerCase() === currentUserEmail?.toLowerCase();
		const bIsCurrent = b.email.toLowerCase() === currentUserEmail?.toLowerCase();
		if (aIsCurrent && !bIsCurrent) return -1;
		if (!aIsCurrent && bIsCurrent) return 1;
		const aValue = a.joinDate.getTime();
		const bValue = b.joinDate.getTime();
		return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
	});
}
function filterBySearch(items, query) {
	if (!query) return items;
	const q = query.toLowerCase();
	return items.filter((item) => item.email.toLowerCase().includes(q) || "name" in item && item.name?.toLowerCase().includes(q));
}
function toInviteSortField(sortField) {
	return sortField === "expiryDate" ? "expiryDate" : "inviteDate";
}
function sortPendingInvites(invites, sortField, sortDirection) {
	const field = toInviteSortField(sortField);
	return [...invites].sort((a, b) => {
		const aDate = a[field];
		const bDate = b[field];
		if (!aDate || !bDate) return 0;
		const aValue = aDate.getTime();
		const bValue = bDate.getTime();
		return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
	});
}
function useMembersPanel() {
	const { t } = useI18n();
	const toast = useToast();
	const { userPhotoUrl, userEmail, userDisplayName } = useCurrentUser();
	const { flags } = useFeatureFlags();
	const { showRemoveMemberDialog, showRevokeInviteDialog, showChangeMemberRoleDialog, showSetMemberCreditLimitDialog, showInviteMemberDialog, showInviteMemberUpsellDialog } = useDialogService();
	const workspaceStore = useTeamWorkspaceStore();
	const { activeWorkspace, members, pendingInvites, originalOwnerId, totalMemberSlots, isInviteLimitReached } = storeToRefs(workspaceStore);
	const { resendInvite } = workspaceStore;
	const { permissions: workspacePermissions, uiConfig: workspaceUiConfig, workspaceRole } = useWorkspaceUI();
	const { hasTeamPlan, isOnTeamPlan, isCancelled, hasLapsedTeamPlan, isPlanLoading } = useTeamPlan();
	const subscriptionDialog = useSubscriptionDialog();
	const maxSeats = computed(() => 30);
	const permissions = computed(() => {
		const canManageMembers = hasTeamPlan.value && workspaceRole.value === "owner";
		return {
			...workspacePermissions.value,
			canViewOtherMembers: hasTeamPlan.value,
			canViewPendingInvites: canManageMembers,
			canInviteMembers: canManageMembers,
			canManageInvites: canManageMembers,
			canManageMembers
		};
	});
	const uiConfig = computed(() => {
		if (!hasTeamPlan.value) return {
			...workspaceUiConfig.value,
			showMembersList: false,
			showPendingTab: false,
			showSearch: false,
			showRoleColumn: false,
			showCreditsColumn: false,
			membersGridCols: "grid-cols-1",
			pendingGridCols: "grid-cols-[50%_20%_20%_10%]",
			headerGridCols: "grid-cols-1"
		};
		if (workspaceRole.value === "owner") return {
			...workspaceUiConfig.value,
			showMembersList: true,
			showPendingTab: true,
			showSearch: true,
			showRoleColumn: true,
			membersGridCols: workspaceUiConfig.value.showCreditsColumn ? workspaceUiConfig.value.membersGridCols : "grid-cols-[50%_40%_10%]",
			pendingGridCols: "grid-cols-[50%_20%_20%_10%]",
			headerGridCols: workspaceUiConfig.value.showCreditsColumn ? workspaceUiConfig.value.headerGridCols : "grid-cols-[50%_40%_10%]"
		};
		return {
			...workspaceUiConfig.value,
			showMembersList: true,
			showPendingTab: false,
			showSearch: true,
			showRoleColumn: true,
			membersGridCols: "grid-cols-[1fr_auto]",
			pendingGridCols: "grid-cols-[50%_20%_20%_10%]",
			headerGridCols: "grid-cols-[1fr_auto]"
		};
	});
	const hasMultipleMembers = computed(() => members.value.length > 1);
	const showSearch = computed(() => uiConfig.value.showSearch && hasMultipleMembers.value);
	const showViewTabs = computed(() => isOnTeamPlan.value && (hasMultipleMembers.value || pendingInvites.value.length > 0));
	const showInviteButton = computed(() => workspaceRole.value === "owner");
	const isMemberLimitReached = computed(() => isInviteLimitReached.value || totalMemberSlots.value >= maxSeats.value);
	const isInviteDisabled = computed(() => isPlanLoading.value || !isOnTeamPlan.value || isCancelled.value || isMemberLimitReached.value);
	const inviteTooltip = computed(() => {
		if (!isOnTeamPlan.value) return null;
		if (!isMemberLimitReached.value) return null;
		return t("workspacePanel.inviteLimitReached", { count: maxSeats.value });
	});
	function handleInviteMember() {
		if (isPlanLoading.value) return;
		if (!isOnTeamPlan.value) {
			showInviteMemberUpsellDialog();
			return;
		}
		if (isCancelled.value || isMemberLimitReached.value) return;
		showInviteMemberDialog();
	}
	const personalWorkspaceMember = computed(() => ({
		id: "self",
		name: userDisplayName.value ?? "",
		email: userEmail.value ?? "",
		role: "owner",
		joinDate: /* @__PURE__ */ new Date(0),
		isOriginalOwner: true
	}));
	const searchQuery = ref("");
	const activeView = ref("active");
	const sortField = ref("inviteDate");
	const sortDirection = ref("desc");
	function roleMenuItem(member, role, label) {
		return {
			label,
			checked: member.role === role,
			command: () => handleChangeRole(member, role)
		};
	}
	function memberMenuItems(member) {
		if (!permissions.value.canManageMembers) return [];
		const creditLimitItem = {
			label: t("workspacePanel.members.actions.setCreditLimit"),
			command: () => void showSetMemberCreditLimitDialog({
				memberId: member.id,
				memberName: member.name,
				creditsUsed: member.creditsUsedThisMonth,
				currentLimit: member.monthlyCreditLimit
			})
		};
		if (isCurrentUser(member) || isOriginalOwner(member)) return [];
		return [
			{
				label: t("workspacePanel.members.actions.changeRole"),
				items: [roleMenuItem(member, "owner", t("workspaceSwitcher.roleOwner")), roleMenuItem(member, "member", t("workspaceSwitcher.roleMember"))]
			},
			...flags.billingControlEnabled && member.role === "member" ? [creditLimitItem] : [],
			{
				label: t("workspacePanel.members.actions.removeMember"),
				command: () => handleRemoveMember(member)
			}
		];
	}
	function isCurrentUser(member) {
		return member.email.toLowerCase() === userEmail.value?.toLowerCase();
	}
	function isOriginalOwner(member) {
		return activeWorkspace.value?.type === "personal" && member.id === originalOwnerId.value;
	}
	const filteredMembers = computed(() => {
		return sortMembers(filterBySearch(members.value, searchQuery.value), userEmail.value ?? null, sortDirection.value, originalOwnerId.value);
	});
	const memberMenus = computed(() => new Map(filteredMembers.value.map((m) => [m.id, memberMenuItems(m)])));
	const filteredPendingInvites = computed(() => {
		return sortPendingInvites(filterBySearch(pendingInvites.value, searchQuery.value), sortField.value, sortDirection.value);
	});
	function toggleSort(field) {
		if (sortField.value === field) sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
		else {
			sortField.value = field;
			sortDirection.value = "desc";
		}
	}
	async function handleResendInvite(invite) {
		try {
			await resendInvite(invite.id);
			toast.add({
				severity: "success",
				summary: t("workspacePanel.toast.inviteResent"),
				life: 2e3
			});
		} catch {
			toast.add({
				severity: "error",
				summary: t("workspacePanel.toast.inviteResendFailed")
			});
		}
	}
	function handleRevokeInvite(invite) {
		showRevokeInviteDialog(invite.id);
	}
	function handleRemoveMember(member) {
		showRemoveMemberDialog(member.id);
	}
	function handleChangeRole(member, targetRole) {
		if (member.role === targetRole) return;
		showChangeMemberRoleDialog({
			memberId: member.id,
			memberName: member.name,
			targetRole
		});
	}
	function showTeamPlans() {
		subscriptionDialog.show({
			planMode: "team",
			reason: "team_members_panel"
		});
	}
	return {
		searchQuery,
		activeView,
		sortField,
		sortDirection,
		maxSeats,
		hasTeamPlan,
		isOnTeamPlan,
		hasLapsedTeamPlan,
		isPlanLoading,
		hasMultipleMembers,
		showSearch,
		showViewTabs,
		showInviteButton,
		isInviteDisabled,
		inviteTooltip,
		handleInviteMember,
		personalWorkspaceMember,
		filteredMembers,
		filteredPendingInvites,
		memberMenuItems,
		memberMenus,
		members,
		pendingInvites,
		permissions,
		uiConfig,
		userPhotoUrl,
		isCurrentUser,
		isOriginalOwner,
		toggleSort,
		showTeamPlans,
		handleResendInvite,
		handleRevokeInvite,
		handleRemoveMember,
		handleChangeRole
	};
}
//#endregion
//#region src/platform/workspace/components/dialogs/settings/MembersPanelContent.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "grow overflow-auto pt-6" };
var _hoisted_2 = { class: "border-inter flex size-full flex-col gap-2 rounded-2xl border border-interface-stroke p-6" };
var _hoisted_3 = { class: "flex w-full items-center gap-9" };
var _hoisted_4 = { class: "flex min-w-0 flex-1 items-baseline gap-2" };
var _hoisted_5 = { class: "text-base font-semibold text-base-foreground" };
var _hoisted_6 = { class: "flex items-center gap-2" };
var _hoisted_7 = { class: "flex min-h-0 flex-1 flex-col" };
var _hoisted_8 = { class: "flex items-center gap-2" };
var _hoisted_9 = {
	key: 0,
	class: "flex items-center gap-1 text-sm text-muted-foreground"
};
var _hoisted_10 = { key: 1 };
var _hoisted_11 = { class: "min-h-0 flex-1 overflow-y-auto" };
var _hoisted_12 = {
	key: 1,
	class: "flex items-center pt-2"
};
var _hoisted_13 = { class: "text-sm text-muted-foreground" };
//#endregion
//#region src/platform/workspace/components/dialogs/settings/MembersPanelContent.vue
var MembersPanelContent_default = /* @__PURE__ */ defineComponent({
	__name: "MembersPanelContent",
	setup(__props) {
		const { searchQuery, activeView, maxSeats, hasTeamPlan, isOnTeamPlan, hasLapsedTeamPlan, isPlanLoading, hasMultipleMembers, showSearch, showViewTabs, showInviteButton, isInviteDisabled, inviteTooltip, handleInviteMember, personalWorkspaceMember, filteredMembers, filteredPendingInvites, memberMenus, members, pendingInvites, permissions, uiConfig, userPhotoUrl, isCurrentUser, toggleSort, showTeamPlans, handleResendInvite, handleRevokeInvite } = useMembersPanel();
		const { staticUrls } = useExternalLink();
		function handleContactUs() {
			window.open(staticUrls.discord, "_blank", "noopener,noreferrer");
		}
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock("div", _hoisted_1, [
				createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("span", _hoisted_5, [unref(activeView) === "active" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [unref(isOnTeamPlan) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.members.membersCount", {
					count: unref(members).length,
					maxSeats: unref(maxSeats)
				})), 1)], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.members.header")), 1)], 64))], 64)) : unref(permissions).canViewPendingInvites ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.members.pendingInvitesCount", unref(pendingInvites).length)), 1)], 64)) : createCommentVNode("", true)])]), createBaseVNode("div", _hoisted_6, [
					unref(showSearch) ? (openBlock(), createBlock(SearchInput_default, {
						key: 0,
						modelValue: unref(searchQuery),
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(searchQuery) ? searchQuery.value = $event : null),
						placeholder: _ctx.$t("workspacePanel.members.searchPlaceholder"),
						size: "lg",
						class: "w-64"
					}, null, 8, ["modelValue", "placeholder"])) : createCommentVNode("", true),
					unref(showInviteButton) ? withDirectives((openBlock(), createBlock(Button_default, {
						key: 1,
						variant: "secondary",
						size: "lg",
						disabled: unref(isInviteDisabled),
						"aria-label": _ctx.$t("workspacePanel.inviteMember"),
						onClick: unref(handleInviteMember)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.invite")) + " ", 1), _cache[7] || (_cache[7] = createBaseVNode("i", { class: "pi pi-plus text-sm" }, null, -1))]),
						_: 1
					}, 8, [
						"disabled",
						"aria-label",
						"onClick"
					])), [[_directive_tooltip, unref(inviteTooltip) ? {
						value: unref(inviteTooltip),
						showDelay: 0
					} : {
						value: _ctx.$t("workspacePanel.inviteMember"),
						showDelay: 300
					}]]) : createCommentVNode("", true),
					unref(permissions).canAccessWorkspaceMenu ? (openBlock(), createBlock(WorkspaceMenuButton_default, { key: 2 })) : createCommentVNode("", true)
				])]), createBaseVNode("div", _hoisted_7, [unref(uiConfig).showMembersList && unref(showViewTabs) ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(unref(cn)("grid w-full items-center py-2", unref(activeView) === "pending" ? unref(uiConfig).pendingGridCols : unref(uiConfig).headerGridCols))
				}, [createBaseVNode("div", _hoisted_8, [createVNode(Button_default, {
					variant: unref(activeView) === "active" ? "secondary" : "muted-textonly",
					size: "md",
					onClick: _cache[1] || (_cache[1] = ($event) => activeView.value = "active")
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.members.tabs.active")), 1)]),
					_: 1
				}, 8, ["variant"]), unref(uiConfig).showPendingTab ? (openBlock(), createBlock(Button_default, {
					key: 0,
					variant: unref(activeView) === "pending" ? "secondary" : "muted-textonly",
					size: "md",
					onClick: _cache[2] || (_cache[2] = ($event) => activeView.value = "pending")
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.members.tabs.pendingCount", unref(pendingInvites).length)), 1)]),
					_: 1
				}, 8, ["variant"])) : createCommentVNode("", true)]), unref(activeView) === "pending" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
					createVNode(Button_default, {
						variant: "muted-textonly",
						size: "sm",
						class: "justify-start",
						onClick: _cache[3] || (_cache[3] = ($event) => unref(toggleSort)("inviteDate"))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.members.columns.inviteDate")) + " ", 1), _cache[8] || (_cache[8] = createBaseVNode("i", { class: "icon-[lucide--chevrons-up-down] size-4" }, null, -1))]),
						_: 1
					}),
					createVNode(Button_default, {
						variant: "muted-textonly",
						size: "sm",
						class: "justify-start",
						onClick: _cache[4] || (_cache[4] = ($event) => unref(toggleSort)("expiryDate"))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.members.columns.expiryDate")) + " ", 1), _cache[9] || (_cache[9] = createBaseVNode("i", { class: "icon-[lucide--chevrons-up-down] size-4" }, null, -1))]),
						_: 1
					}),
					_cache[10] || (_cache[10] = createBaseVNode("div", null, null, -1))
				], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
					createVNode(Button_default, {
						variant: "muted-textonly",
						size: "sm",
						class: normalizeClass(unref(uiConfig).showCreditsColumn ? "justify-start" : "justify-end"),
						onClick: _cache[5] || (_cache[5] = ($event) => unref(toggleSort)("role"))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.members.columns.role")) + " ", 1), _cache[11] || (_cache[11] = createBaseVNode("i", { class: "icon-[lucide--chevrons-up-down] size-4" }, null, -1))]),
						_: 1
					}, 8, ["class"]),
					unref(uiConfig).showCreditsColumn ? (openBlock(), createElementBlock("div", _hoisted_9, [_cache[12] || (_cache[12] = createBaseVNode("i", { class: "icon-[lucide--coins] size-4" }, null, -1)), createTextVNode(" " + toDisplayString(_ctx.$t("workspacePanel.members.columns.creditsUsed")), 1)])) : createCommentVNode("", true),
					unref(permissions).canManageMembers ? (openBlock(), createElementBlock("div", _hoisted_10)) : createCommentVNode("", true)
				], 64))], 2)) : createCommentVNode("", true), createBaseVNode("div", _hoisted_11, [unref(activeView) === "active" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [!unref(hasTeamPlan) ? (openBlock(), createBlock(MemberListItem_default, {
					key: 0,
					member: unref(personalWorkspaceMember),
					"is-current-user": true,
					"photo-url": unref(userPhotoUrl) ?? void 0,
					"grid-cols": unref(uiConfig).membersGridCols
				}, null, 8, [
					"member",
					"photo-url",
					"grid-cols"
				])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(unref(filteredMembers), (member, index) => {
					return openBlock(), createBlock(MemberListItem_default, {
						key: member.id,
						member,
						"is-current-user": unref(isCurrentUser)(member),
						"photo-url": unref(isCurrentUser)(member) ? unref(userPhotoUrl) ?? void 0 : void 0,
						"grid-cols": unref(uiConfig).membersGridCols,
						"show-role-column": unref(uiConfig).showRoleColumn && unref(hasMultipleMembers),
						"show-credits-column": unref(uiConfig).showCreditsColumn,
						"can-manage-members": unref(permissions).canManageMembers,
						"is-single-seat-plan": !unref(isOnTeamPlan),
						striped: index % 2 === 1,
						"menu-items": unref(memberMenus).get(member.id)
					}, null, 8, [
						"member",
						"is-current-user",
						"photo-url",
						"grid-cols",
						"show-role-column",
						"show-credits-column",
						"can-manage-members",
						"is-single-seat-plan",
						"striped",
						"menu-items"
					]);
				}), 128))], 64)) : createCommentVNode("", true), unref(activeView) === "pending" ? (openBlock(), createBlock(PendingInvitesList_default, {
					key: 1,
					invites: unref(filteredPendingInvites),
					"grid-cols": unref(uiConfig).pendingGridCols,
					onResend: unref(handleResendInvite),
					onRevoke: unref(handleRevokeInvite)
				}, null, 8, [
					"invites",
					"grid-cols",
					"onResend",
					"onRevoke"
				])) : createCommentVNode("", true)])])]),
				!unref(isPlanLoading) && !unref(isOnTeamPlan) && unref(permissions).canManageSubscription ? (openBlock(), createBlock(MemberUpsellBanner_default, {
					key: 0,
					reactivate: unref(hasLapsedTeamPlan),
					onShowPlans: _cache[6] || (_cache[6] = ($event) => unref(showTeamPlans)())
				}, null, 8, ["reactivate"])) : createCommentVNode("", true),
				unref(isOnTeamPlan) ? (openBlock(), createElementBlock("div", _hoisted_12, [createBaseVNode("p", _hoisted_13, toDisplayString(_ctx.$t("workspacePanel.members.needMoreMembers")), 1), createVNode(Button_default, {
					variant: "muted-textonly",
					size: "sm",
					class: "text-base-foreground",
					onClick: handleContactUs
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.members.contactUs")), 1)]),
					_: 1
				})])) : createCommentVNode("", true)
			]);
		};
	}
});
//#endregion
export { useTeamPlan as n, BillingStatusBanner_default as r, MembersPanelContent_default as t };

//# sourceMappingURL=MembersPanelContent-DNHyeWWb.js.map