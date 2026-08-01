const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./main-BSiGwWhY.js","./rolldown-runtime-C9Cmlsnw.js","./vendor-primevue-T0qpAVQN.js","./vendor-vue-core-oGuyqViA.js","./vendor-i18n-CPpp7rsM.js","./vendor-other-hebp3VVz.js","./vendor-three-CAgYnvrp.js","./vendor-zod-DrbcGYyw.js","./vendor-firebase-Ct6mBV2V.js","./vendor-tiptap-CQtgpFeu.js","./src-C1FpYMFF.js","./Button-By8A3toz.js","./vendor-reka-ui-CLUGudFd.js","./vendor-vueuse-De7x5bAw.js","./telemetry-C8VBI5GP.js","./api-btlSMXR9.js","./vendor-axios-BPNLFQfO.js","./devFeatureFlagOverride-Bl3R9S_5.js","./toastStore-D7DQZkvm.js","./settingStore-pm7IqVHI.js","./vendor-markdown-CeCiL7x5.js","./vendor-yjs-tEUnrtST.js","./ColorPicker-CPcI1_JS.js","./useModalLiftedZIndex-D-brf-IL.js","./SelectValue-Bfpp46Bi.js","./i18n-B4bSsdRi.js","./commands-DJua3xt8.js","./main-CNXm6Bpt.js","./nodeDefs-ODHPSASO.js","./settings-BZV9bK15.js","./Popover-lQ8j8DnS.js","./formatUtil-gEy6QwfT.js","./downloadUtil-C_j21ea1.js","./remoteConfig-F6WCXiNB.js","./useFeatureFlags-CvjPiCWD.js","./dialogStore-BAELBvsb.js","./userStore-rNaWLZbN.js","./widgetTypes-DCo-gXsA.js","./vendor-sentry-NtE0Edaa.js","./useErrorHandling-qSb1ezo_.js","./systemStatsStore-DX61eilr.js","./_plugin-vue_export-helper-CxSqLFJz.js","./useImageQuiet-DBL4QWSj.js","./DialogHeader-BkpfMvwx.js","./Input-B7kLLN1i.js","./Loader-CoxcNRNx.js","./Switch-CI-CYYu8.js","./envUtil-DDRnAAj_.js","./useExternalLink-dnLPgbQx.js","./types-DQDrDd50.js","./VideoPlayOverlay-ClskzJvp.js","./WaveAudioPlayer-CDD_sIiw.js","./Slider-CDv5K1AE.js","./useTextFileContent-Dx3B3Me6.js","./useFeatureUsageTracker-B5Lg6nSg.js","./markdownRendererUtil-BNoM8xu5.js","./refreshRemoteConfig-Cz18EQBT.js","./oauthState-C2i-lBuU.js","./useConflictDetection-Bd_qpvxb.js","./errorUtil-Bu6ObRx2.js","./vRekaZIndex-BN7u4ENl.js","./vendor-other-DODGPXtn.css","./settingStore-CnXwLYSV.css","./useConflictDetection-BulFL8Bd.css","./main-KnxE4_F5.css"])))=>i.map(i=>d[i]);
import "./rolldown-runtime-C9Cmlsnw.js";
import { lt as __vitePreload } from "./vendor-primevue-T0qpAVQN.js";
//#region \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
//#endregion
//#region src/bootstrap.ts
await __vitePreload(() => import("./main-BSiGwWhY.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64]), import.meta.url);
//#endregion

//# sourceMappingURL=index-C7JtYuWv.js.map