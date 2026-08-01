const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./api-CXBrUPPO.js","./api-btlSMXR9.js","./rolldown-runtime-C9Cmlsnw.js","./vendor-primevue-T0qpAVQN.js","./vendor-vue-core-oGuyqViA.js","./vendor-other-hebp3VVz.js","./vendor-three-CAgYnvrp.js","./vendor-zod-DrbcGYyw.js","./vendor-firebase-Ct6mBV2V.js","./vendor-tiptap-CQtgpFeu.js","./vendor-vueuse-De7x5bAw.js","./vendor-axios-BPNLFQfO.js","./devFeatureFlagOverride-Bl3R9S_5.js","./toastStore-D7DQZkvm.js","./vendor-other-DODGPXtn.css"])))=>i.map(i=>d[i]);
import "./rolldown-runtime-C9Cmlsnw.js";
import { lt as __vitePreload } from "./vendor-primevue-T0qpAVQN.js";
import { n as cachedConsolidatedBillingEnabled, o as remoteConfig, r as cachedTeamWorkspacesEnabled, s as remoteConfigState, t as cachedBillingControlEnabled } from "./remoteConfig-F6WCXiNB.js";
//#region src/platform/remoteConfig/refreshRemoteConfig.ts
var FEATURES_FETCH_TIMEOUT_MS = 5e3;
async function fetchRemoteConfig(useAuth, signal) {
	const { api } = await __vitePreload(async () => {
		const { api } = await import("./api-CXBrUPPO.js");
		return { api };
	}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]), import.meta.url);
	if (!useAuth) return fetch(api.apiURL("/features"), {
		cache: "no-store",
		signal
	});
	return api.fetchApi("/features", { cache: "no-store" });
}
/**
* Loads remote configuration from the backend /features endpoint
* and updates the reactive remoteConfig ref.
*
* Sets remoteConfigState to:
* - 'anonymous' when loaded without auth
* - 'authenticated' when loaded with auth
* - 'error' when load fails
*/
async function refreshRemoteConfig(options = {}) {
	const { useAuth = true } = options;
	const controller = useAuth ? null : new AbortController();
	const timeoutId = controller ? setTimeout(() => controller.abort(), FEATURES_FETCH_TIMEOUT_MS) : null;
	try {
		const response = await fetchRemoteConfig(useAuth, controller?.signal);
		if (response.ok) {
			const config = await response.json();
			window.__CONFIG__ = config;
			remoteConfig.value = config;
			remoteConfigState.value = useAuth ? "authenticated" : "anonymous";
			if (useAuth) {
				cachedTeamWorkspacesEnabled.value = Boolean(config.team_workspaces_enabled);
				cachedConsolidatedBillingEnabled.value = Boolean(config.consolidated_billing_enabled);
				cachedBillingControlEnabled.value = Boolean(config.billing_control_enabled);
			}
			return;
		}
		console.warn("Failed to load remote config:", response.statusText);
		if (response.status === 401 || response.status === 403) {
			window.__CONFIG__ = {};
			remoteConfig.value = {};
			remoteConfigState.value = "error";
		}
	} catch (error) {
		console.error("Failed to fetch remote config:", error);
		window.__CONFIG__ = {};
		remoteConfig.value = {};
		remoteConfigState.value = "error";
	} finally {
		if (timeoutId !== null) clearTimeout(timeoutId);
	}
}
//#endregion
export { refreshRemoteConfig as t };

//# sourceMappingURL=refreshRemoteConfig-Cz18EQBT.js.map