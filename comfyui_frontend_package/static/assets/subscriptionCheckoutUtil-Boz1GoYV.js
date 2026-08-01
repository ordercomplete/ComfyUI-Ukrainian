import "./rolldown-runtime-C9Cmlsnw.js";
import "./vendor-vue-core-oGuyqViA.js";
import "./telemetry-C8VBI5GP.js";
import "./api-btlSMXR9.js";
import "./settingStore-pm7IqVHI.js";
import "./i18n-B4bSsdRi.js";
import "./useFeatureFlags-CvjPiCWD.js";
/**
* Core subscription checkout logic shared between PricingTable and
* SubscriptionRedirectView. Handles:
* - Ensuring the user is authenticated
* - Calling the backend checkout endpoint
* - Normalizing error responses
* - Opening the checkout URL in a new tab when available
*
* Callers are responsible for:
* - Guarding on cloud-only behavior (isCloud)
* - Managing loading state
* - Wrapping with error handling (e.g. useErrorHandling)
*/
async function performSubscriptionCheckout(tierKey, currentBillingCycle, options = {}) {}
//#endregion
export { performSubscriptionCheckout as t };

//# sourceMappingURL=subscriptionCheckoutUtil-Boz1GoYV.js.map