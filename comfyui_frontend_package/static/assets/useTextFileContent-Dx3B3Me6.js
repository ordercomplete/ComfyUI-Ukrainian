import "./rolldown-runtime-C9Cmlsnw.js";
import { Bt as toValue, Nt as ref } from "./vendor-vue-core-oGuyqViA.js";
import { o as computedAsync } from "./vendor-vueuse-De7x5bAw.js";
//#region src/composables/useTextFileContent.ts
function useTextFileContent(source) {
	const isLoading = ref(false);
	const hasError = ref(false);
	return {
		textContent: computedAsync(async () => {
			hasError.value = false;
			const { content, url } = toValue(source) ?? {};
			if (content !== void 0) return content;
			if (!url) return "";
			const response = await fetch(url);
			if (!response.ok) {
				hasError.value = true;
				return "";
			}
			return await response.text();
		}, "", {
			evaluating: isLoading,
			onError: () => {
				hasError.value = true;
			}
		}),
		isLoading,
		hasError
	};
}
//#endregion
export { useTextFileContent as t };

//# sourceMappingURL=useTextFileContent-Dx3B3Me6.js.map