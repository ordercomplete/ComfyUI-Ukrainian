import "./rolldown-runtime-C9Cmlsnw.js";
//#region src/base/webviewDetection.ts
var SOCIAL_APP_PATTERNS = /FBAN|FBAV|Instagram|Line\/|Snapchat|TikTok|musical_ly/i;
var IOS_FIRST_PARTY_BROWSER_PATTERNS = /CriOS|FxiOS|OPiOS|EdgiOS/i;
function isAndroidWebView(ua) {
	return /\bwv\b/.test(ua) && /Android/.test(ua);
}
function isIOSWebView(ua) {
	if (!/AppleWebKit/i.test(ua)) return false;
	if (/Safari\//i.test(ua)) return false;
	if (IOS_FIRST_PARTY_BROWSER_PATTERNS.test(ua)) return false;
	return true;
}
function isSocialAppBrowser(ua) {
	return SOCIAL_APP_PATTERNS.test(ua);
}
function isFirstPartyIOSBrowser(ua) {
	if (IOS_FIRST_PARTY_BROWSER_PATTERNS.test(ua)) return true;
	if (!/iPhone|iPad|iPod|Macintosh.*Mobile\//i.test(ua)) return false;
	return /Safari\//i.test(ua) && /Version\//i.test(ua);
}
function hasWkWebViewMessageBridge() {
	try {
		const win = globalThis;
		return typeof win.webkit === "object" && win.webkit !== null && typeof win.webkit.messageHandlers === "object";
	} catch {
		return false;
	}
}
function hasReactNativeWebViewBridge() {
	try {
		return globalThis.ReactNativeWebView != null;
	} catch {
		return false;
	}
}
function isEmbeddedWebView(ua = navigator.userAgent) {
	if (isSocialAppBrowser(ua)) return true;
	if (isAndroidWebView(ua)) return true;
	if (isIOSWebView(ua)) return true;
	if (hasReactNativeWebViewBridge()) return true;
	if (!isFirstPartyIOSBrowser(ua) && hasWkWebViewMessageBridge()) return true;
	return false;
}
//#endregion
export { isEmbeddedWebView as t };

//# sourceMappingURL=webviewDetection-DsB6Z2yt.js.map