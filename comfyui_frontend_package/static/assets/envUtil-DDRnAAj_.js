import "./rolldown-runtime-C9Cmlsnw.js";
//#region src/utils/envUtil.ts
function electronAPI() {
	return window.electronAPI;
}
function showNativeSystemMenu() {
	electronAPI()?.showContextMenu();
}
function isNativeWindow() {
	return false;
}
//#endregion
export { isNativeWindow as n, showNativeSystemMenu as r, electronAPI as t };

//# sourceMappingURL=envUtil-DDRnAAj_.js.map