import "./rolldown-runtime-C9Cmlsnw.js";
import { M as computed, vt as watch } from "./vendor-vue-core-oGuyqViA.js";
import { E as useCanvasStore, Ti as useExtensionService } from "./settingStore-pm7IqVHI.js";
import { c as t } from "./i18n-B4bSsdRi.js";
import { o as remoteConfig } from "./remoteConfig-F6WCXiNB.js";
//#region src/extensions/core/cloudBadges.ts
var badges = computed(() => {
	const result = [];
	const alert = remoteConfig.value.server_health_alert;
	if (alert) result.push({
		text: alert.message,
		label: alert.badge,
		variant: alert.severity ?? "error",
		tooltip: alert.tooltip
	});
	return result;
});
var canvasStore = useCanvasStore();
watch(() => canvasStore.canvas, (canvas) => {
	if (canvas) canvas.info_text = t("g.comfyCloud");
}, { immediate: true });
useExtensionService().registerExtension({
	name: "Comfy.Cloud.Badges",
	get topbarBadges() {
		return badges.value;
	}
});
//#endregion

//# sourceMappingURL=cloudBadges-Bhh8qRFG.js.map