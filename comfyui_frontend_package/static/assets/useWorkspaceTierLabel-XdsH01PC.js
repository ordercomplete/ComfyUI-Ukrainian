import "./rolldown-runtime-C9Cmlsnw.js";
import { f as storeToRefs } from "./vendor-vue-core-oGuyqViA.js";
import { r as useI18n } from "./vendor-i18n-CPpp7rsM.js";
import { Li as useTeamWorkspaceStore } from "./settingStore-pm7IqVHI.js";
//#region src/platform/workspace/composables/useWorkspaceSwitch.ts
function useWorkspaceSwitch() {
	const workspaceStore = useTeamWorkspaceStore();
	const { activeWorkspace } = storeToRefs(workspaceStore);
	async function switchWorkspace(workspaceId) {
		if (activeWorkspace.value?.id === workspaceId) return true;
		try {
			await workspaceStore.switchWorkspace(workspaceId);
			return true;
		} catch {
			return false;
		}
	}
	return { switchWorkspace };
}
//#endregion
//#region src/platform/workspace/composables/useWorkspaceTierLabel.ts
var tierKeyMap = {
	FREE: "free",
	STANDARD: "standard",
	CREATOR: "creator",
	PRO: "pro",
	FOUNDER: "founder",
	FOUNDERS_EDITION: "founder"
};
function useWorkspaceTierLabel() {
	const { t } = useI18n();
	function formatTierName(tier, isYearly) {
		if (!tier) return "";
		const key = tierKeyMap[tier];
		if (!key) return "";
		const baseName = t(`subscription.tiers.${key}.name`);
		return isYearly ? t("subscription.tierNameYearly", { name: baseName }) : baseName;
	}
	function getTierLabel(workspace) {
		if (!workspace.isSubscribed) return null;
		if (workspace.subscriptionTier) return formatTierName(workspace.subscriptionTier, false);
		if (!workspace.subscriptionPlan) return null;
		const planSlug = workspace.subscriptionPlan;
		const tierMatch = Object.keys(tierKeyMap).sort((a, b) => b.length - a.length).find((tier) => planSlug === tier || planSlug.startsWith(`${tier}_`));
		if (!tierMatch) return null;
		return formatTierName(tierMatch, planSlug.includes("YEARLY") || planSlug.includes("ANNUAL"));
	}
	return {
		formatTierName,
		getTierLabel
	};
}
//#endregion
export { useWorkspaceSwitch as n, useWorkspaceTierLabel as t };

//# sourceMappingURL=useWorkspaceTierLabel-XdsH01PC.js.map