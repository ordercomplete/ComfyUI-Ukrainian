import { Ti as useExtensionService } from "./settingStore-pm7IqVHI.js";
import { c as t } from "./i18n-B4bSsdRi.js";
//#region src/extensions/core/nightlyBadges.ts
var badges = [{
	text: t("nightly.badge.label"),
	label: t("g.nightly"),
	variant: "warning",
	tooltip: t("nightly.badge.tooltip")
}];
useExtensionService().registerExtension({
	name: "Comfy.Nightly.Badges",
	topbarBadges: badges
});
//#endregion

//# sourceMappingURL=nightlyBadges-BqRoUf9k.js.map