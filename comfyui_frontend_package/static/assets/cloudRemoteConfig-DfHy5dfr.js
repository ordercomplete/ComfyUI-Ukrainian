import "./rolldown-runtime-C9Cmlsnw.js";
import { st as watchDebounced } from "./vendor-vueuse-De7x5bAw.js";
import { Ti as useExtensionService, ki as useCurrentUser, tr as useBillingContext } from "./settingStore-pm7IqVHI.js";
import { t as refreshRemoteConfig } from "./refreshRemoteConfig-Cz18EQBT.js";
//#region src/extensions/core/cloudRemoteConfig.ts
/**
* Cloud-only extension that polls for remote config updates
* Initial config load happens in main.ts before any other imports
*/
useExtensionService().registerExtension({
	name: "Comfy.Cloud.RemoteConfig",
	setup: async () => {
		const { isLoggedIn } = useCurrentUser();
		const { isActiveSubscription } = useBillingContext();
		watchDebounced([isLoggedIn, isActiveSubscription], () => {
			if (!isLoggedIn.value) return;
			refreshRemoteConfig();
		}, {
			debounce: 256,
			immediate: true
		});
		setInterval(() => void refreshRemoteConfig(), 6e5);
	}
});
//#endregion

//# sourceMappingURL=cloudRemoteConfig-DfHy5dfr.js.map