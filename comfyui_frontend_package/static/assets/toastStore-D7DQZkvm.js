import "./rolldown-runtime-C9Cmlsnw.js";
import { Nt as ref, u as defineStore } from "./vendor-vue-core-oGuyqViA.js";
//#region src/platform/updates/common/toastStore.ts
var useToastStore = defineStore("toast", () => {
	const messagesToAdd = ref([]);
	const messagesToRemove = ref([]);
	const removeAllRequested = ref(false);
	function add(message) {
		messagesToAdd.value = [...messagesToAdd.value, message];
	}
	function remove(message) {
		messagesToRemove.value = [...messagesToRemove.value, message];
	}
	function removeAll() {
		removeAllRequested.value = true;
	}
	function addAlert(message) {
		add({
			severity: "warn",
			summary: "Alert",
			detail: message
		});
	}
	return {
		messagesToAdd,
		messagesToRemove,
		removeAllRequested,
		add,
		remove,
		removeAll,
		addAlert
	};
});
//#endregion
export { useToastStore as t };

//# sourceMappingURL=toastStore-D7DQZkvm.js.map