import "./rolldown-runtime-C9Cmlsnw.js";
import { M as computed, Nt as ref } from "./vendor-vue-core-oGuyqViA.js";
import { V as useStorage } from "./vendor-vueuse-De7x5bAw.js";
//#region src/platform/remoteConfig/remoteConfig.ts
/**
* Remote configuration service
*
* Fetches configuration from the server at runtime, enabling:
* - Feature flags without rebuilding
* - Server-side feature discovery
* - Version compatibility management
* - Avoiding vendor lock-in for native apps
*
* This module is tree-shaken in OSS builds.
*/
/**
* Current load state of remote configuration
*/
var remoteConfigState = ref("unloaded");
/**
* Whether the authenticated config has been loaded.
* Use this to gate access to user-specific feature flags like teamWorkspacesEnabled.
*/
var isAuthenticatedConfigLoaded = computed(() => remoteConfigState.value === "authenticated");
/**
* Reactive remote configuration
* Updated whenever config is loaded from the server
*/
var remoteConfig = ref({});
function configValueOrDefault(remoteConfig, key, defaultValue) {
	return remoteConfig[key] || defaultValue;
}
var cachedTeamWorkspacesEnabled = useStorage("team_workspaces_enabled", void 0);
var cachedConsolidatedBillingEnabled = useStorage("consolidated_billing_enabled", void 0);
var cachedBillingControlEnabled = useStorage("billing_control_enabled", void 0);
//#endregion
export { isAuthenticatedConfigLoaded as a, configValueOrDefault as i, cachedConsolidatedBillingEnabled as n, remoteConfig as o, cachedTeamWorkspacesEnabled as r, remoteConfigState as s, cachedBillingControlEnabled as t };

//# sourceMappingURL=remoteConfig-F6WCXiNB.js.map