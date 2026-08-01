import "./rolldown-runtime-C9Cmlsnw.js";
import { M as computed, f as storeToRefs } from "./vendor-vue-core-oGuyqViA.js";
import { n as useTelemetry } from "./telemetry-C8VBI5GP.js";
import { Fa as TIER_TO_KEY, Ji as getComfyPlatformBaseUrl, Li as useTeamWorkspaceStore, ir as useWorkspaceUI, ki as useCurrentUser, nr as useBillingOperationStore, tr as useBillingContext } from "./settingStore-pm7IqVHI.js";
import { c as t } from "./i18n-B4bSsdRi.js";
//#region src/platform/workspace/composables/useDowngradeToPersonal.ts
/**
* Team-plan downgrade to personal: validate via `previewSubscribe`, remove
* every member except the original owner, then initiate the tier change.
* BE seam (BE-1337): removal email and an atomic downgrade endpoint are
* BE-owned; until then the FE orchestrates the two steps non-atomically.
*/
function useDowngradeToPersonal() {
	const workspaceStore = useTeamWorkspaceStore();
	const { members } = storeToRefs(workspaceStore);
	const { subscribe, previewSubscribe } = useBillingContext();
	const billingOperationStore = useBillingOperationStore();
	const { userEmail } = useCurrentUser();
	const { permissions } = useWorkspaceUI();
	const telemetry = useTelemetry();
	const removableMembers = computed(() => {
		if (members.value.some((m) => m.isOriginalOwner)) return members.value.filter((m) => !m.isOriginalOwner);
		const email = userEmail.value?.toLowerCase() ?? null;
		return members.value.filter((m) => m.role !== "owner" && m.email.toLowerCase() !== email);
	});
	const hasOtherMembers = computed(() => removableMembers.value.length > 0);
	function ensureCanDowngrade() {
		if (!permissions.value.canDowngradeToPersonal) throw new Error(t("subscription.downgrade.notAllowed"));
	}
	async function refreshMembers() {
		if (!permissions.value.canManageSubscription) throw new Error(t("subscription.downgrade.notAllowed"));
		await workspaceStore.fetchMembers();
		ensureCanDowngrade();
	}
	async function downgradeToPersonal(planSlug) {
		ensureCanDowngrade();
		const membersToRemove = removableMembers.value;
		let memberRemovalFailures = 0;
		let targetTier;
		let targetCycle;
		let telemetryFailure = { failure_category: "unknown" };
		telemetry?.trackBillingEvent({
			operation: "downgrade_to_personal",
			stage: "started",
			outcome: "pending",
			member_removal_count: membersToRemove.length,
			member_removal_failures: 0
		});
		function trackSucceeded() {
			telemetry?.trackBillingEvent({
				operation: "downgrade_to_personal",
				stage: "succeeded",
				outcome: "success",
				member_removal_count: membersToRemove.length,
				member_removal_failures: memberRemovalFailures,
				target_tier: targetTier
			});
		}
		try {
			const preview = await previewSubscribe(planSlug);
			if (!preview?.allowed) {
				telemetryFailure = {
					failure_category: "validation",
					error_code: "downgrade_not_allowed"
				};
				throw new Error(preview?.reason || t("subscription.downgrade.notAllowed"));
			}
			ensureCanDowngrade();
			targetTier = preview.new_plan?.tier ? TIER_TO_KEY[preview.new_plan.tier] : void 0;
			targetCycle = preview.new_plan ? preview.new_plan.duration === "ANNUAL" ? "yearly" : "monthly" : void 0;
			for (const member of membersToRemove) {
				ensureCanDowngrade();
				try {
					await workspaceStore.removeMember(member.id);
				} catch (error) {
					memberRemovalFailures += 1;
					telemetryFailure = {
						failure_category: "unknown",
						error_code: "member_removal_failed"
					};
					throw new Error(t("subscription.downgrade.memberRemovalFailed", { email: member.email }), { cause: error });
				}
			}
			ensureCanDowngrade();
			const response = await subscribe(planSlug, {
				returnUrl: `${getComfyPlatformBaseUrl()}/payment/success`,
				cancelUrl: `${getComfyPlatformBaseUrl()}/payment/failed`
			});
			if (!response) {
				telemetryFailure = {
					failure_category: "unknown",
					error_code: "missing_checkout_response"
				};
				throw new Error(membersToRemove.length > 0 ? t("subscription.downgrade.failedAfterMemberRemoval") : t("subscription.downgrade.failed"));
			}
			if (response.status === "needs_payment_method") {
				if (!response.payment_method_url) {
					telemetryFailure = {
						failure_category: "redirect",
						error_code: "missing_payment_method_url"
					};
					throw new Error(t("subscription.downgrade.paymentMethodRequired"));
				}
				if (!window.open(response.payment_method_url, "_blank")) {
					telemetryFailure = {
						failure_category: "redirect",
						error_code: "payment_popup_blocked"
					};
					throw new Error(t("subscription.downgrade.paymentPageBlocked"));
				}
				billingOperationStore.startOperation(response.billing_op_id, "subscription", {
					tier: targetTier,
					cycle: targetCycle,
					checkoutType: "change",
					downgradeToPersonal: {
						memberRemovalCount: membersToRemove.length,
						memberRemovalFailures,
						targetTier
					}
				});
				return null;
			}
			if (response.status === "pending_payment") {
				billingOperationStore.startOperation(response.billing_op_id, "subscription", {
					tier: targetTier,
					cycle: targetCycle,
					checkoutType: "change",
					downgradeToPersonal: {
						memberRemovalCount: membersToRemove.length,
						memberRemovalFailures,
						targetTier
					}
				});
				return null;
			}
			trackSucceeded();
			return {
				preview,
				response
			};
		} catch (error) {
			telemetry?.trackBillingEvent({
				operation: "downgrade_to_personal",
				stage: "failed",
				outcome: "failure",
				member_removal_count: membersToRemove.length,
				member_removal_failures: memberRemovalFailures,
				target_tier: targetTier,
				...telemetryFailure
			});
			throw error;
		}
	}
	return {
		removableMembers,
		hasOtherMembers,
		refreshMembers,
		downgradeToPersonal
	};
}
//#endregion
export { useDowngradeToPersonal };

//# sourceMappingURL=useDowngradeToPersonal-gCJ-Bvq5.js.map