import "./rolldown-runtime-C9Cmlsnw.js";
import "./toastStore-D7DQZkvm.js";
import "./i18n-B4bSsdRi.js";
//#region src/base/common/downloadUtil.ts
/**
* Utility functions for downloading files
*/
var DEFAULT_DOWNLOAD_FILENAME = "download.png";
/**
* Trigger a download by creating a temporary anchor element
* @param href - The URL or blob URL to download
* @param filename - The filename to suggest to the browser
*/
function triggerLinkDownload(href, filename) {
	const link = document.createElement("a");
	link.href = href;
	link.download = filename;
	link.style.display = "none";
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}
/**
* Download a file from a URL by creating a temporary anchor element
* @param url - The URL of the file to download (must be a valid URL string)
* @param filename - Optional filename override (will use URL filename or default if not provided)
* @throws {Error} If the URL is invalid or empty
*/
function downloadFile(url, filename) {
	if (!url || typeof url !== "string" || url.trim().length === 0) throw new Error("Invalid URL provided for download");
	triggerLinkDownload(url, filename || extractFilenameFromUrl(url) || DEFAULT_DOWNLOAD_FILENAME);
}
/**
* Download a Blob by creating a temporary object URL and anchor element
* @param filename - The filename to suggest to the browser
* @param blob - The Blob to download
*/
function downloadBlob(filename, blob) {
	const url = URL.createObjectURL(blob);
	triggerLinkDownload(url, filename);
	queueMicrotask(() => URL.revokeObjectURL(url));
}
/**
* Extract filename from a URL's query parameters
* @param url - The URL to extract filename from
* @returns The extracted filename or null if not found
*/
var extractFilenameFromUrl = (url) => {
	try {
		return new URL(url, window.location.origin).searchParams.get("filename");
	} catch {
		return null;
	}
};
/**
* Open a file URL in a new browser tab.
* On cloud, fetches the resource as a blob first to avoid GCS redirects
* that would trigger an auto-download instead of displaying the file.
*
* Opens the tab synchronously to preserve the user-gesture context
* (browsers block window.open after an await), then navigates it to
* the blob URL once the fetch completes.
*/
async function openFileInNewTab(url) {
	window.open(url, "_blank");
}
//#endregion
export { downloadFile as n, openFileInNewTab as r, downloadBlob as t };

//# sourceMappingURL=downloadUtil-C_j21ea1.js.map