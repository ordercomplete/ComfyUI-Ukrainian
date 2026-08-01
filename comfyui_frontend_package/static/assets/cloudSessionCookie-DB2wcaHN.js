import "./rolldown-runtime-C9Cmlsnw.js";
import { Ti as useExtensionService } from "./settingStore-pm7IqVHI.js";
import { n as clearOAuthRequestId } from "./oauthState-C2i-lBuU.js";
import { t as useSessionCookie } from "./useSessionCookie-Cdl-3R8m.js";
//#region src/extensions/core/cloudSessionCookie.ts
/**
* Cloud-only extension that manages session cookies for authentication.
* Creates session cookie on login, refreshes it when token refreshes, and deletes on logout.
*/
useExtensionService().registerExtension({
	name: "Comfy.Cloud.SessionCookie",
	onAuthUserResolved: async () => {
		const { createSession } = useSessionCookie();
		await createSession();
	},
	onAuthTokenRefreshed: async () => {
		const { createSession } = useSessionCookie();
		await createSession();
	},
	onAuthUserLogout: async () => {
		clearOAuthRequestId();
		const { deleteSession } = useSessionCookie();
		await deleteSession();
	}
});
//#endregion

//# sourceMappingURL=cloudSessionCookie-DB2wcaHN.js.map