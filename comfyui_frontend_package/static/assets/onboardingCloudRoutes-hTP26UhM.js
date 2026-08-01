const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./useSessionCookie-D0lUgB7t.js","./useSessionCookie-Cdl-3R8m.js","./rolldown-runtime-C9Cmlsnw.js","./api-btlSMXR9.js","./vendor-primevue-T0qpAVQN.js","./vendor-vue-core-oGuyqViA.js","./vendor-other-hebp3VVz.js","./vendor-three-CAgYnvrp.js","./vendor-zod-DrbcGYyw.js","./vendor-firebase-Ct6mBV2V.js","./vendor-tiptap-CQtgpFeu.js","./vendor-vueuse-De7x5bAw.js","./vendor-axios-BPNLFQfO.js","./devFeatureFlagOverride-Bl3R9S_5.js","./toastStore-D7DQZkvm.js","./settingStore-pm7IqVHI.js","./vendor-reka-ui-CLUGudFd.js","./vendor-i18n-CPpp7rsM.js","./src-C1FpYMFF.js","./Button-By8A3toz.js","./telemetry-C8VBI5GP.js","./vendor-markdown-CeCiL7x5.js","./vendor-yjs-tEUnrtST.js","./ColorPicker-CPcI1_JS.js","./useModalLiftedZIndex-D-brf-IL.js","./SelectValue-Bfpp46Bi.js","./i18n-B4bSsdRi.js","./commands-DJua3xt8.js","./main-CNXm6Bpt.js","./nodeDefs-ODHPSASO.js","./settings-BZV9bK15.js","./Popover-lQ8j8DnS.js","./formatUtil-gEy6QwfT.js","./downloadUtil-C_j21ea1.js","./remoteConfig-F6WCXiNB.js","./useFeatureFlags-CvjPiCWD.js","./dialogStore-BAELBvsb.js","./userStore-rNaWLZbN.js","./widgetTypes-DCo-gXsA.js","./vendor-sentry-NtE0Edaa.js","./useErrorHandling-qSb1ezo_.js","./systemStatsStore-DX61eilr.js","./_plugin-vue_export-helper-CxSqLFJz.js","./useImageQuiet-DBL4QWSj.js","./DialogHeader-BkpfMvwx.js","./Input-B7kLLN1i.js","./Loader-CoxcNRNx.js","./Switch-CI-CYYu8.js","./envUtil-DDRnAAj_.js","./useExternalLink-dnLPgbQx.js","./types-DQDrDd50.js","./VideoPlayOverlay-ClskzJvp.js","./WaveAudioPlayer-CDD_sIiw.js","./Slider-CDv5K1AE.js","./useTextFileContent-Dx3B3Me6.js","./useFeatureUsageTracker-B5Lg6nSg.js","./markdownRendererUtil-BNoM8xu5.js","./vendor-other-DODGPXtn.css","./settingStore-CnXwLYSV.css","./CloudLayoutView-5OGOOU2I.js","./GlobalToast-BDv3ETPc.js","./CloudLayoutView-gbB3O_Rr.css","./CloudLoginView-CA8rgeHk.js","./webviewDetection-DsB6Z2yt.js","./signInSchema-Dmokl1xj.js","./usePostAuthRedirect-BHqUz5uu.js","./oauthState-C2i-lBuU.js","./CloudLoginView-Ce8BuGOl.css","./useCurrentUser-BG46ttfa.js","./CloudSignupView-CmEvR8Jv.js","./SignUpForm-DN9KdCN-.js","./PasswordFields-mDnf1EDI.js","./loadExternalScript-BDfeWV5F.js","./CloudSignupView-D3dPHgMO.css","./CloudForgotPasswordView-D__M537a.js","./CloudForgotPasswordView-qHVhh4y3.css","./CloudSurveyView-S9fP3MXd.js","./toggle-group-C_1M-4r2.js","./auth-DQsRluPP.js","./errorUtil-Bu6ObRx2.js","./UserCheckView-CDEsWSKk.js","./CloudSorryContactSupportView-Ch3fYS43.js","./CloudSorryContactSupportView-Cg1Fm-bz.css","./CloudAuthTimeoutView-DWxmpuVx.js","./CloudSubscriptionRedirectView-B-egdHUx.js","./comfy-logo-single-DFzxhkF3.js","./subscriptionCheckoutUtil-Boz1GoYV.js","./workspaceCheckoutTelemetry-Bit6wMVg.js","./OAuthLayoutView-CteeYlxm.js","./OAuthConsentView-BJ2XFiCY.js","./WorkspaceProfilePic-LeJkcWgK.js"])))=>i.map(i=>d[i]);
import "./rolldown-runtime-C9Cmlsnw.js";
import { lt as __vitePreload } from "./vendor-primevue-T0qpAVQN.js";
import { r as getOAuthRequestId } from "./oauthState-C2i-lBuU.js";
//#region src/platform/cloud/onboarding/onboardingCloudRoutes.ts
async function oauthConsentRedirect() {
	const oauthRequestId = getOAuthRequestId();
	if (!oauthRequestId) return { name: "cloud-user-check" };
	try {
		const { useSessionCookie } = await __vitePreload(async () => {
			const { useSessionCookie } = await import("./useSessionCookie-D0lUgB7t.js");
			return { useSessionCookie };
		}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58]), import.meta.url);
		await useSessionCookie().createSessionOrThrow();
	} catch (error) {
		console.warn("Failed to establish Cloud session cookie before OAuth consent:", error);
	}
	return {
		name: "cloud-oauth-consent",
		query: { oauth_request_id: oauthRequestId }
	};
}
var cloudOnboardingRoutes = [
	{
		path: "/cloud",
		component: () => __vitePreload(() => import("./CloudLayoutView-5OGOOU2I.js"), __vite__mapDeps([59,2,5,17,60,4,14,15,16,6,7,8,9,10,18,19,11,20,12,3,13,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,61]), import.meta.url),
		children: [
			{
				path: "login",
				name: "cloud-login",
				component: () => __vitePreload(() => import("./CloudLoginView-CA8rgeHk.js"), __vite__mapDeps([62,2,4,5,17,19,16,6,7,8,9,10,18,15,11,20,12,3,13,14,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,63,64,65,66,1,57,58,67]), import.meta.url),
				beforeEnter: async (to, _from, next) => {
					if (!to.query.switchAccount) {
						const { useCurrentUser } = await __vitePreload(async () => {
							const { useCurrentUser } = await import("./useCurrentUser-BG46ttfa.js");
							return { useCurrentUser };
						}, __vite__mapDeps([68,15,2,4,5,16,17,6,7,8,9,10,18,19,11,20,12,3,13,14,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58]), import.meta.url);
						const { isLoggedIn } = useCurrentUser();
						if (isLoggedIn.value) return next(await oauthConsentRedirect());
					}
					next();
				}
			},
			{
				path: "signup",
				name: "cloud-signup",
				component: () => __vitePreload(() => import("./CloudSignupView-CmEvR8Jv.js"), __vite__mapDeps([69,2,4,5,17,19,16,6,7,8,9,10,18,20,15,11,12,3,13,14,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,63,70,64,71,72,65,66,1,57,58,73]), import.meta.url),
				beforeEnter: async (to, _from, next) => {
					if (!to.query.switchAccount) {
						const { useCurrentUser } = await __vitePreload(async () => {
							const { useCurrentUser } = await import("./useCurrentUser-BG46ttfa.js");
							return { useCurrentUser };
						}, __vite__mapDeps([68,15,2,4,5,16,17,6,7,8,9,10,18,19,11,20,12,3,13,14,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58]), import.meta.url);
						const { isLoggedIn } = useCurrentUser();
						if (isLoggedIn.value) return next(await oauthConsentRedirect());
					}
					next();
				}
			},
			{
				path: "forgot-password",
				name: "cloud-forgot-password",
				component: () => __vitePreload(() => import("./CloudForgotPasswordView-D__M537a.js"), __vite__mapDeps([74,2,4,5,17,19,16,6,7,8,9,10,18,15,11,20,12,3,13,14,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,75]), import.meta.url)
			},
			{
				path: "survey",
				name: "cloud-survey",
				component: () => __vitePreload(() => import("./CloudSurveyView-S9fP3MXd.js"), __vite__mapDeps([76,2,5,17,6,7,8,9,10,18,19,16,11,20,34,35,3,4,12,13,14,45,77,78,39,79,57]), import.meta.url),
				meta: {
					requiresAuth: true,
					hideHero: true
				}
			},
			{
				path: "user-check",
				name: "cloud-user-check",
				component: () => __vitePreload(() => import("./UserCheckView-CDEsWSKk.js"), __vite__mapDeps([80,2,4,5,19,16,6,7,8,9,10,18,11,35,3,12,13,14,34,40,26,17,27,28,29,30,78,39,79,57]), import.meta.url),
				meta: {
					requiresAuth: true,
					hideHero: true
				}
			},
			{
				path: "sorry-contact-support",
				name: "cloud-sorry-contact-support",
				component: () => __vitePreload(() => import("./CloudSorryContactSupportView-Ch3fYS43.js"), __vite__mapDeps([81,2,5,17,42,82]), import.meta.url)
			},
			{
				path: "auth-timeout",
				name: "cloud-auth-timeout",
				component: () => __vitePreload(() => import("./CloudAuthTimeoutView-DWxmpuVx.js"), __vite__mapDeps([83,2,5,19,16,6,7,8,9,10,18,15,4,17,11,20,12,3,13,14,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58]), import.meta.url),
				props: true
			},
			{
				path: "subscribe",
				name: "cloud-subscribe",
				component: () => __vitePreload(() => import("./CloudSubscriptionRedirectView-B-egdHUx.js"), __vite__mapDeps([84,2,4,5,17,15,16,6,7,8,9,10,18,19,11,20,12,3,13,14,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,85,86,87,57,58]), import.meta.url),
				meta: { requiresAuth: true }
			}
		]
	},
	{
		path: "/oauth",
		component: () => __vitePreload(() => import("./OAuthLayoutView-CteeYlxm.js"), __vite__mapDeps([88,2,5,60,4,14,15,16,17,6,7,8,9,10,18,19,11,20,12,3,13,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58]), import.meta.url),
		children: [{
			path: "consent",
			name: "cloud-oauth-consent",
			component: () => __vitePreload(() => import("./OAuthConsentView-BJ2XFiCY.js"), __vite__mapDeps([89,2,5,16,17,18,6,7,8,9,10,19,66,90,57]), import.meta.url)
		}]
	},
	{
		path: "/cloud/oauth/consent",
		redirect: (to) => ({
			path: "/oauth/consent",
			query: to.query
		})
	}
];
//#endregion
export { cloudOnboardingRoutes };

//# sourceMappingURL=onboardingCloudRoutes-hTP26UhM.js.map