import "./rolldown-runtime-C9Cmlsnw.js";
import { Ti as useExtensionService, n as useSettingStore } from "./settingStore-pm7IqVHI.js";
import { c as t } from "./i18n-B4bSsdRi.js";
import { t as openFeedbackDialog } from "./feedbackDialog-DoTEKVgz.js";
//#region src/extensions/core/cloudFeedbackTopbarButton.ts
var buttons = [{
	icon: "icon-[lucide--message-square-text]",
	label: t("actionbar.feedback"),
	tooltip: t("actionbar.feedbackTooltip"),
	onClick: () => openFeedbackDialog("action-bar")
}];
useExtensionService().registerExtension({
	name: "Comfy.FeedbackButton",
	get actionBarButtons() {
		return useSettingStore().get("Comfy.UI.TabBarLayout") === "Legacy" ? buttons : [];
	}
});
//#endregion

//# sourceMappingURL=cloudFeedbackTopbarButton-1Szam5L5.js.map