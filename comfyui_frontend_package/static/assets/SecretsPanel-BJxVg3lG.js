import { r as __name } from "./rolldown-runtime-C9Cmlsnw.js";
import { $ as script, D as script$3, H as script$4, d as script$2, y as script$1 } from "./vendor-primevue-T0qpAVQN.js";
import { B as createTextVNode, Bt as toValue, Ct as withDirectives, D as Fragment, F as createCommentVNode, Ht as unref, I as createElementBlock, M as computed, N as createBaseVNode, Nt as ref, P as createBlock, St as withCtx, T as withModifiers, U as defineComponent, V as createVNode, Wt as normalizeClass, X as mergeModels, _t as useTemplateRef, at as openBlock, ht as useModel, jt as reactive, mt as useId, qt as toDisplayString, st as renderList, ut as resolveDirective, vt as watch } from "./vendor-vue-core-oGuyqViA.js";
import { r as useI18n } from "./vendor-i18n-CPpp7rsM.js";
import { t as Button_default } from "./Button-By8A3toz.js";
import { ct as whenever } from "./vendor-vueuse-De7x5bAw.js";
import { i as api } from "./api-btlSMXR9.js";
import { t as useToastStore } from "./toastStore-D7DQZkvm.js";
import { t as useDialogStore } from "./dialogStore-BAELBvsb.js";
import { c as parseIsoDateSafe, d as DialogOverlay_default, f as DialogContent_default, l as DialogTitle_default, m as showConfirmDialog, n as DialogClose_default, p as Dialog_default, t as DialogHeader_default, u as DialogPortal_default } from "./DialogHeader-BkpfMvwx.js";
import { a as Select_default, i as SelectContent_default, n as SelectTrigger_default, r as SelectItem_default, t as SelectValue_default } from "./SelectValue-Bfpp46Bi.js";
import { t as Textarea_default } from "./Textarea-CJruBtuz.js";
import { r as vRekaZIndex } from "./vRekaZIndex-BN7u4ENl.js";
//#region src/platform/secrets/types.ts
var SECRET_ERROR_CODES = [
	"INVALID_REQUEST",
	"INVALID_PROVIDER",
	"DUPLICATE_NAME",
	"DUPLICATE_PROVIDER",
	"FORBIDDEN",
	"NOT_FOUND"
];
//#endregion
//#region src/platform/secrets/api/secretsApi.ts
var SecretsApiError = class extends Error {
	status;
	code;
	constructor(message, status, code) {
		super(message);
		this.status = status;
		this.code = code;
		this.name = "SecretsApiError";
	}
};
async function handleResponse(response) {
	if (!response.ok) {
		let errorData = {};
		try {
			errorData = await response.json();
		} catch {}
		const code = SECRET_ERROR_CODES.includes(errorData.code) ? errorData.code : void 0;
		throw new SecretsApiError(errorData.message ?? response.statusText, response.status, code);
	}
	return response.json();
}
async function listSecrets() {
	return (await handleResponse(await api.fetchApi("/secrets"))).data;
}
async function listSecretProviders() {
	return (await handleResponse(await api.fetchApi("/secrets/providers"))).data ?? [];
}
async function createSecret(payload) {
	return handleResponse(await api.fetchApi("/secrets", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(payload)
	}));
}
async function updateSecret(id, payload) {
	return handleResponse(await api.fetchApi(`/secrets/${id}`, {
		method: "PATCH",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(payload)
	}));
}
async function deleteSecret(id) {
	const response = await api.fetchApi(`/secrets/${id}`, { method: "DELETE" });
	if (!response.ok) await handleResponse(response);
}
//#endregion
//#region src/platform/secrets/composables/useSecrets.ts
function useSecrets() {
	const { t } = useI18n();
	const toastStore = useToastStore();
	const loading = ref(false);
	const secrets = ref([]);
	const availableProviders = ref(null);
	const operatingSecretId = ref(null);
	const existingProviders = computed(() => secrets.value.map((s) => s.provider).filter((p) => p != null));
	async function fetchSecrets() {
		loading.value = true;
		try {
			secrets.value = await listSecrets();
		} catch (err) {
			if (err instanceof SecretsApiError) toastStore.add({
				severity: "error",
				summary: t("g.error"),
				detail: err.message
			});
			else {
				console.error("Unexpected error fetching secrets:", err);
				toastStore.add({
					severity: "error",
					summary: t("g.error"),
					detail: t("g.unknownError")
				});
			}
		} finally {
			loading.value = false;
		}
	}
	async function fetchProviders() {
		try {
			availableProviders.value = await listSecretProviders();
		} catch (err) {
			console.error("Unexpected error fetching secret providers:", err);
		}
	}
	async function deleteSecret$1(secret) {
		operatingSecretId.value = secret.id;
		try {
			await deleteSecret(secret.id);
			secrets.value = secrets.value.filter((s) => s.id !== secret.id);
		} catch (err) {
			if (err instanceof SecretsApiError) toastStore.add({
				severity: "error",
				summary: t("g.error"),
				detail: err.message
			});
			else {
				console.error("Unexpected error deleting secret:", err);
				toastStore.add({
					severity: "error",
					summary: t("g.error"),
					detail: t("g.unknownError")
				});
			}
		} finally {
			operatingSecretId.value = null;
		}
	}
	__name(deleteSecret$1, "deleteSecret");
	return {
		loading,
		secrets,
		availableProviders,
		operatingSecretId,
		existingProviders,
		fetchSecrets,
		fetchProviders,
		deleteSecret: deleteSecret$1
	};
}
//#endregion
//#region src/platform/secrets/providers.ts
/**
* Presentational metadata for known providers: how a provider id renders
* (label, logo, help text). This table is NOT the source of truth for which
* providers a user may configure — that list is server-driven via
* `GET /secrets/providers`. Ids the server returns that are absent here fall
* back to the raw id with no logo, so adding a provider server-side renders
* without an FE change (a dedicated logo/label is an optional enhancement).
*/
var SECRET_PROVIDERS = [
	{
		value: "huggingface",
		label: "HuggingFace",
		logo: "/assets/images/hf-logo.svg"
	},
	{
		value: "civitai",
		label: "Civitai",
		logo: "/assets/images/civitai.svg"
	},
	{
		value: "runway",
		label: "Runway",
		logo: "/assets/images/runway.svg",
		helpKey: "secrets.providerHelp.runway"
	},
	{
		value: "gemini",
		label: "Google Gemini",
		logo: "/assets/images/gemini.svg",
		helpKey: "secrets.providerHelp.gemini"
	}
];
/**
* Providers shown as a sensible default before the server list resolves, and to
* seed the disabled selector in edit mode. This is NOT the source of truth for
* which providers a user may configure — once `GET /secrets/providers` resolves,
* its list is rendered verbatim.
*/
var DEFAULT_PROVIDER_IDS = ["huggingface", "civitai"];
function findProvider(provider) {
	if (!provider) return void 0;
	return SECRET_PROVIDERS.find((p) => p.value === provider);
}
function getProviderLabel(provider) {
	if (!provider) return "";
	return findProvider(provider)?.label ?? provider;
}
function getProviderLogo(provider) {
	return findProvider(provider)?.logo;
}
function getProviderHelpKey(provider) {
	return findProvider(provider)?.helpKey;
}
//#endregion
//#region src/platform/secrets/composables/useSecretForm.ts
function isJsonObject(value) {
	try {
		const parsed = JSON.parse(value);
		return typeof parsed === "object" && parsed !== null && !Array.isArray(parsed);
	} catch {
		return false;
	}
}
var MAX_JSON_FILE_BYTES = 1024 * 1024;
var CREDENTIAL_TYPE_TO_INPUT = {
	api_key: "text",
	gcp_service_account: "json_file"
};
function useSecretForm(options) {
	const { t } = useI18n();
	const { mode, secret: secretRef, existingProviders, availableProviders = null, visible, onSaved } = options;
	const loading = ref(false);
	const apiErrorCode = ref(null);
	const apiErrorMessage = ref(null);
	const fileName = ref("");
	const form = reactive({
		name: "",
		secretValue: "",
		provider: null
	});
	const errors = reactive({
		name: "",
		secretValue: "",
		provider: ""
	});
	const providerInfoById = computed(() => {
		const map = /* @__PURE__ */ new Map();
		for (const info of toValue(availableProviders) ?? []) map.set(info.id, info);
		return map;
	});
	const providerOptions = computed(() => {
		const available = toValue(availableProviders);
		let ids;
		if (mode === "edit") {
			const stored = toValue(secretRef)?.provider;
			ids = stored && !DEFAULT_PROVIDER_IDS.some((id) => id === stored) ? [...DEFAULT_PROVIDER_IDS, stored] : [...DEFAULT_PROVIDER_IDS];
		} else ids = available === null ? [...DEFAULT_PROVIDER_IDS] : [...new Set(available.map((p) => p.id))];
		const existing = toValue(existingProviders);
		return ids.map((id) => ({
			value: id,
			label: providerInfoById.value.get(id)?.label ?? getProviderLabel(id),
			logo: getProviderLogo(id),
			disabled: mode === "edit" ? false : existing.includes(id)
		}));
	});
	const selectedInputType = computed(() => {
		const storedCredentialType = mode === "edit" ? toValue(secretRef)?.credential_type : void 0;
		if (storedCredentialType) return CREDENTIAL_TYPE_TO_INPUT[storedCredentialType] ?? "text";
		if (!form.provider) return "text";
		return providerInfoById.value.get(form.provider)?.input_type ?? "text";
	});
	watch(providerOptions, (resolvedOptions) => {
		if (form.provider && !resolvedOptions.some((o) => o.value === form.provider)) form.provider = null;
	});
	const providerHelp = computed(() => t(getProviderHelpKey(form.provider ?? void 0) ?? "secrets.providerHint"));
	const apiError = computed(() => {
		if (!apiErrorCode.value && !apiErrorMessage.value) return null;
		switch (apiErrorCode.value) {
			case "DUPLICATE_NAME": return t("secrets.errors.duplicateName");
			case "DUPLICATE_PROVIDER": return t("secrets.errors.duplicateProvider");
			default: return apiErrorMessage.value;
		}
	});
	function resetForm() {
		const secret = toValue(secretRef);
		if (mode === "edit" && secret) {
			form.name = secret.name;
			form.provider = secret.provider ?? null;
			form.secretValue = "";
		} else {
			form.name = "";
			form.secretValue = "";
			form.provider = null;
		}
		fileName.value = "";
		errors.name = "";
		errors.secretValue = "";
		errors.provider = "";
		apiErrorCode.value = null;
		apiErrorMessage.value = null;
	}
	let latestFileReadId = 0;
	async function loadSecretFromFile(file) {
		if (!file) return;
		errors.secretValue = "";
		if (file.size > MAX_JSON_FILE_BYTES) {
			errors.secretValue = t("secrets.errors.fileTooLarge");
			return;
		}
		const readId = ++latestFileReadId;
		try {
			const text = await file.text();
			if (readId !== latestFileReadId) return;
			form.secretValue = text;
			fileName.value = file.name;
		} catch {
			if (readId !== latestFileReadId) return;
			errors.secretValue = t("secrets.errors.fileReadFailed");
		}
	}
	watch(() => form.provider, () => {
		latestFileReadId++;
		form.secretValue = "";
		fileName.value = "";
	});
	whenever(() => visible.value, resetForm);
	function validate() {
		errors.name = "";
		errors.secretValue = "";
		errors.provider = "";
		if (!form.name.trim()) {
			errors.name = t("secrets.errors.nameRequired");
			return false;
		}
		if (form.name.length > 255) {
			errors.name = t("secrets.errors.nameTooLong");
			return false;
		}
		if (!form.provider) {
			errors.provider = t("secrets.errors.providerRequired");
			return false;
		}
		if (mode === "create" && !form.secretValue) {
			errors.secretValue = t("secrets.errors.secretValueRequired");
			return false;
		}
		if (selectedInputType.value === "json_file" && form.secretValue && !isJsonObject(form.secretValue)) {
			errors.secretValue = t("secrets.errors.invalidJson");
			return false;
		}
		return true;
	}
	async function handleSubmit() {
		if (!validate()) return;
		loading.value = true;
		apiErrorCode.value = null;
		apiErrorMessage.value = null;
		try {
			const secret = toValue(secretRef);
			if (mode === "create") await createSecret({
				name: form.name.trim(),
				secret_value: form.secretValue,
				provider: form.provider
			});
			else if (secret) {
				const updatePayload = { name: form.name.trim() };
				if (form.secretValue) updatePayload.secret_value = form.secretValue;
				await updateSecret(secret.id, updatePayload);
			}
			onSaved();
			visible.value = false;
		} catch (err) {
			if (err instanceof SecretsApiError) {
				apiErrorCode.value = err.code ?? null;
				apiErrorMessage.value = err.message;
			}
		} finally {
			loading.value = false;
		}
	}
	return {
		form,
		errors,
		loading,
		apiError,
		providerOptions,
		providerHelp,
		selectedInputType,
		fileName,
		loadSecretFromFile,
		handleSubmit
	};
}
//#endregion
//#region src/platform/secrets/components/SecretFormDialog.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = { class: "flex flex-col gap-1" };
var _hoisted_2$2 = {
	for: "secret-provider",
	class: "text-sm font-medium"
};
var _hoisted_3$2 = { class: "flex items-center gap-2" };
var _hoisted_4$2 = ["src"];
var _hoisted_5$2 = {
	key: 0,
	class: "text-red-500"
};
var _hoisted_6$2 = {
	key: 1,
	class: "text-muted"
};
var _hoisted_7$2 = { class: "flex flex-col gap-1" };
var _hoisted_8$2 = {
	for: "secret-name",
	class: "text-sm font-medium"
};
var _hoisted_9$2 = {
	key: 0,
	class: "text-red-500"
};
var _hoisted_10$1 = { class: "flex flex-col gap-1" };
var _hoisted_11$1 = {
	for: "secret-value",
	class: "text-sm font-medium"
};
var _hoisted_12 = {
	key: 0,
	class: "text-sm text-muted"
};
var _hoisted_13 = {
	key: 2,
	class: "text-red-500"
};
var _hoisted_14 = {
	key: 3,
	class: "text-muted"
};
var _hoisted_15 = {
	key: 0,
	class: "text-destructive text-sm"
};
var _hoisted_16 = { class: "flex justify-end gap-2 py-2" };
//#endregion
//#region src/platform/secrets/components/SecretFormDialog.vue
var SecretFormDialog_default = /* @__PURE__ */ defineComponent({
	__name: "SecretFormDialog",
	props: /*@__PURE__*/ mergeModels({
		secret: {},
		existingProviders: { default: () => [] },
		availableProviders: { default: null },
		mode: { default: "create" }
	}, {
		"visible": {
			type: Boolean,
			default: false
		},
		"visibleModifiers": {}
	}),
	emits: /*@__PURE__*/ mergeModels(["saved"], ["update:visible"]),
	setup(__props, { emit: __emit }) {
		const visible = useModel(__props, "visible");
		const emit = __emit;
		const { t } = useI18n();
		const titleId = useId();
		const fileInput = useTemplateRef("fileInput");
		const { form, errors, loading, apiError, providerOptions, providerHelp, selectedInputType, fileName, loadSecretFromFile, handleSubmit } = useSecretForm({
			mode: __props.mode,
			secret: () => __props.secret,
			existingProviders: () => __props.existingProviders,
			availableProviders: () => __props.availableProviders,
			visible,
			onSaved: () => emit("saved")
		});
		const secretValueHint = computed(() => {
			if (selectedInputType.value === "json_file") return __props.mode === "edit" ? t("secrets.jsonFileHintEdit") : t("secrets.jsonFileHint");
			return __props.mode === "edit" ? t("secrets.secretValueHintEdit") : t("secrets.secretValueHint");
		});
		async function onFileChange(event) {
			const input = event.target;
			await loadSecretFromFile(input.files?.[0] ?? null);
			input.value = "";
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Dialog_default, {
				open: visible.value,
				"onUpdate:open": _cache[8] || (_cache[8] = ($event) => visible.value = $event)
			}, {
				default: withCtx(() => [createVNode(DialogPortal_default, null, {
					default: withCtx(() => [withDirectives(createVNode(DialogOverlay_default, null, null, 512), [[unref(vRekaZIndex)]]), withDirectives((openBlock(), createBlock(DialogContent_default, {
						size: "md",
						"aria-labelledby": unref(titleId),
						onPointerDownOutside: _cache[7] || (_cache[7] = withModifiers(() => {}, ["prevent"]))
					}, {
						default: withCtx(() => [createVNode(DialogHeader_default, null, {
							default: withCtx(() => [createVNode(DialogTitle_default, { id: unref(titleId) }, {
								default: withCtx(() => [createTextVNode(toDisplayString(__props.mode === "create" ? _ctx.$t("secrets.addSecret") : _ctx.$t("secrets.editSecret")), 1)]),
								_: 1
							}, 8, ["id"]), createVNode(DialogClose_default)]),
							_: 1
						}), createBaseVNode("form", {
							class: "flex flex-col gap-4 px-4 py-2",
							onSubmit: _cache[6] || (_cache[6] = withModifiers((...args) => unref(handleSubmit) && unref(handleSubmit)(...args), ["prevent"]))
						}, [
							createBaseVNode("div", _hoisted_1$2, [
								createBaseVNode("label", _hoisted_2$2, toDisplayString(_ctx.$t("secrets.provider")), 1),
								createVNode(Select_default, {
									modelValue: unref(form).provider,
									"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).provider = $event),
									disabled: __props.mode === "edit"
								}, {
									default: withCtx(() => [createVNode(SelectTrigger_default, {
										id: "secret-provider",
										class: "w-full",
										autofocus: ""
									}, {
										default: withCtx(() => [createVNode(SelectValue_default, { placeholder: _ctx.$t("g.none") }, null, 8, ["placeholder"])]),
										_: 1
									}), createVNode(SelectContent_default, { "disable-portal": "" }, {
										default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(providerOptions), (option) => {
											return openBlock(), createBlock(SelectItem_default, {
												key: option.value || "none",
												value: option.value,
												disabled: option.disabled
											}, {
												default: withCtx(() => [createBaseVNode("span", _hoisted_3$2, [option.logo ? (openBlock(), createElementBlock("img", {
													key: 0,
													src: option.logo,
													alt: "",
													class: "size-4"
												}, null, 8, _hoisted_4$2)) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(option.label), 1)])]),
												_: 2
											}, 1032, ["value", "disabled"]);
										}), 128))]),
										_: 1
									})]),
									_: 1
								}, 8, ["modelValue", "disabled"]),
								unref(errors).provider ? (openBlock(), createElementBlock("small", _hoisted_5$2, toDisplayString(unref(errors).provider), 1)) : (openBlock(), createElementBlock("small", _hoisted_6$2, toDisplayString(unref(providerHelp)), 1))
							]),
							createBaseVNode("div", _hoisted_7$2, [
								createBaseVNode("label", _hoisted_8$2, toDisplayString(_ctx.$t("secrets.name")), 1),
								createVNode(unref(script), {
									id: "secret-name",
									modelValue: unref(form).name,
									"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).name = $event),
									placeholder: _ctx.$t("secrets.namePlaceholder"),
									class: normalizeClass({ "p-invalid": unref(errors).name })
								}, null, 8, [
									"modelValue",
									"placeholder",
									"class"
								]),
								unref(errors).name ? (openBlock(), createElementBlock("small", _hoisted_9$2, toDisplayString(unref(errors).name), 1)) : createCommentVNode("", true)
							]),
							createBaseVNode("div", _hoisted_10$1, [
								createBaseVNode("label", _hoisted_11$1, toDisplayString(_ctx.$t("secrets.secretValue")), 1),
								unref(selectedInputType) === "json_file" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
									createVNode(Button_default, {
										type: "button",
										variant: "secondary",
										size: "sm",
										class: "w-fit",
										onClick: _cache[2] || (_cache[2] = ($event) => fileInput.value?.click())
									}, {
										default: withCtx(() => [_cache[9] || (_cache[9] = createBaseVNode("i", { class: "pi pi-upload" }, null, -1)), createTextVNode(" " + toDisplayString(_ctx.$t("secrets.uploadJsonFile")), 1)]),
										_: 1
									}),
									createBaseVNode("input", {
										ref_key: "fileInput",
										ref: fileInput,
										type: "file",
										accept: "application/json,.json",
										class: "hidden",
										onChange: onFileChange
									}, null, 544),
									unref(fileName) ? (openBlock(), createElementBlock("span", _hoisted_12, toDisplayString(unref(fileName)), 1)) : createCommentVNode("", true),
									createVNode(Textarea_default, {
										id: "secret-value",
										modelValue: unref(form).secretValue,
										"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(form).secretValue = $event),
										placeholder: _ctx.$t("secrets.jsonFilePlaceholder"),
										class: normalizeClass(["min-h-32 font-mono", { "p-invalid": unref(errors).secretValue }])
									}, null, 8, [
										"modelValue",
										"placeholder",
										"class"
									])
								], 64)) : (openBlock(), createBlock(unref(script$1), {
									key: 1,
									id: "secret-value",
									modelValue: unref(form).secretValue,
									"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(form).secretValue = $event),
									placeholder: __props.mode === "edit" ? _ctx.$t("secrets.secretValuePlaceholderEdit") : _ctx.$t("secrets.secretValuePlaceholder"),
									feedback: false,
									"toggle-mask": "",
									fluid: "",
									class: normalizeClass({ "p-invalid": unref(errors).secretValue })
								}, null, 8, [
									"modelValue",
									"placeholder",
									"class"
								])),
								unref(errors).secretValue ? (openBlock(), createElementBlock("small", _hoisted_13, toDisplayString(unref(errors).secretValue), 1)) : (openBlock(), createElementBlock("small", _hoisted_14, toDisplayString(secretValueHint.value), 1))
							]),
							unref(apiError) ? (openBlock(), createElementBlock("span", _hoisted_15, toDisplayString(unref(apiError)), 1)) : createCommentVNode("", true),
							createBaseVNode("div", _hoisted_16, [createVNode(Button_default, {
								variant: "secondary",
								type: "button",
								tabindex: "0",
								onClick: _cache[5] || (_cache[5] = ($event) => visible.value = false)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("g.cancel")), 1)]),
								_: 1
							}), createVNode(Button_default, {
								type: "submit",
								tabindex: "0",
								loading: unref(loading)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("g.save")), 1)]),
								_: 1
							}, 8, ["loading"])])
						], 32)]),
						_: 1
					}, 8, ["aria-labelledby"])), [[unref(vRekaZIndex)]])]),
					_: 1
				})]),
				_: 1
			}, 8, ["open"]);
		};
	}
});
//#endregion
//#region src/platform/secrets/components/SecretListItem.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { class: "bg-base-raised-surface flex items-center justify-between rounded-lg border border-border-default p-4" };
var _hoisted_2$1 = { class: "flex flex-col gap-1" };
var _hoisted_3$1 = { class: "flex items-center gap-2" };
var _hoisted_4$1 = { class: "font-medium text-base-foreground" };
var _hoisted_5$1 = ["src", "alt"];
var _hoisted_6$1 = {
	key: 1,
	class: "bg-base-surface rounded-sm px-2 py-0.5 text-xs text-muted"
};
var _hoisted_7$1 = { class: "flex gap-3 text-xs text-muted" };
var _hoisted_8$1 = { key: 0 };
var _hoisted_9$1 = { key: 1 };
var _hoisted_10 = { class: "flex items-center gap-2" };
var _hoisted_11 = {
	key: 0,
	class: "pi pi-spinner pi-spin text-muted"
};
//#endregion
//#region src/platform/secrets/components/SecretListItem.vue
var SecretListItem_default = /* @__PURE__ */ defineComponent({
	__name: "SecretListItem",
	props: {
		secret: {},
		loading: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	emits: ["edit", "delete"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const { d, t } = useI18n();
		const providerLabel = computed(() => getProviderLabel(__props.secret.provider));
		const providerLogo = computed(() => getProviderLogo(__props.secret.provider));
		function formatIsoDate(iso) {
			const date = parseIsoDateSafe(iso);
			return date ? d(date, { dateStyle: "medium" }) : "";
		}
		const createdDate = computed(() => formatIsoDate(__props.secret.created_at));
		const lastUsedDate = computed(() => formatIsoDate(__props.secret.last_used_at));
		const createdAtLabel = computed(() => createdDate.value ? t("secrets.createdAt", { date: createdDate.value }, { escapeParameter: false }) : "");
		const lastUsedLabel = computed(() => lastUsedDate.value ? t("secrets.lastUsed", { date: lastUsedDate.value }, { escapeParameter: false }) : "");
		const editLabel = computed(() => t("g.edit"));
		const deleteLabel = computed(() => t("g.delete"));
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock("div", _hoisted_1$1, [createBaseVNode("div", _hoisted_2$1, [createBaseVNode("div", _hoisted_3$1, [createBaseVNode("span", _hoisted_4$1, toDisplayString(__props.secret.name), 1), providerLogo.value ? (openBlock(), createElementBlock("img", {
				key: 0,
				src: providerLogo.value,
				alt: providerLabel.value,
				class: "size-5"
			}, null, 8, _hoisted_5$1)) : __props.secret.provider ? (openBlock(), createElementBlock("span", _hoisted_6$1, toDisplayString(providerLabel.value), 1)) : createCommentVNode("", true)]), createBaseVNode("div", _hoisted_7$1, [createdAtLabel.value ? (openBlock(), createElementBlock("span", _hoisted_8$1, toDisplayString(createdAtLabel.value), 1)) : createCommentVNode("", true), lastUsedLabel.value ? (openBlock(), createElementBlock("span", _hoisted_9$1, toDisplayString(lastUsedLabel.value), 1)) : createCommentVNode("", true)])]), createBaseVNode("div", _hoisted_10, [__props.loading ? (openBlock(), createElementBlock("i", _hoisted_11)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [withDirectives((openBlock(), createBlock(Button_default, {
				variant: "muted-textonly",
				size: "icon-sm",
				"aria-label": editLabel.value,
				disabled: __props.disabled,
				onClick: _cache[0] || (_cache[0] = ($event) => emit("edit"))
			}, {
				default: withCtx(() => [..._cache[2] || (_cache[2] = [createBaseVNode("i", { class: "pi pi-pen-to-square" }, null, -1)])]),
				_: 1
			}, 8, ["aria-label", "disabled"])), [[_directive_tooltip, {
				value: editLabel.value,
				showDelay: 300
			}]]), withDirectives((openBlock(), createBlock(Button_default, {
				variant: "muted-textonly",
				size: "icon-sm",
				"aria-label": deleteLabel.value,
				disabled: __props.disabled,
				onClick: _cache[1] || (_cache[1] = ($event) => emit("delete"))
			}, {
				default: withCtx(() => [..._cache[3] || (_cache[3] = [createBaseVNode("i", { class: "pi pi-trash" }, null, -1)])]),
				_: 1
			}, 8, ["aria-label", "disabled"])), [[_directive_tooltip, {
				value: deleteLabel.value,
				showDelay: 300
			}]])], 64))])]);
		};
	}
});
//#endregion
//#region src/platform/secrets/components/SecretsPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex h-full flex-col" };
var _hoisted_2 = { class: "text-2xl font-bold" };
var _hoisted_3 = { class: "mt-1 text-sm text-muted" };
var _hoisted_4 = { class: "mt-1 text-sm text-muted" };
var _hoisted_5 = { class: "my-4 flex items-center justify-between" };
var _hoisted_6 = { class: "my-0 text-lg font-semibold" };
var _hoisted_7 = {
	key: 0,
	class: "flex items-center justify-center py-8"
};
var _hoisted_8 = {
	key: 1,
	class: "py-4 text-center text-sm text-muted"
};
var _hoisted_9 = {
	key: 2,
	class: "flex flex-col gap-3"
};
//#endregion
//#region src/platform/secrets/components/SecretsPanel.vue
var SecretsPanel_default = /* @__PURE__ */ defineComponent({
	__name: "SecretsPanel",
	setup(__props) {
		const { t } = useI18n();
		const dialogStore = useDialogStore();
		const { loading, secrets, availableProviders, operatingSecretId, existingProviders, fetchSecrets, fetchProviders, deleteSecret } = useSecrets();
		const createDialogVisible = ref(false);
		const editDialogVisible = ref(false);
		const selectedSecret = ref();
		function openCreateDialog() {
			createDialogVisible.value = true;
		}
		function openEditDialog(secret) {
			selectedSecret.value = secret;
			editDialogVisible.value = true;
		}
		function confirmDelete(secret) {
			const dialog = showConfirmDialog({
				headerProps: { title: t("secrets.deleteConfirmTitle") },
				props: { promptText: t("secrets.deleteConfirmMessage", { name: secret.name }) },
				footerProps: {
					confirmText: t("g.delete"),
					confirmVariant: "destructive",
					onCancel: () => dialogStore.closeDialog(dialog),
					onConfirm: async () => {
						dialogStore.closeDialog(dialog);
						await deleteSecret(secret);
					}
				}
			});
		}
		fetchSecrets();
		fetchProviders();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(script$2), {
				value: "Secrets",
				class: "h-full"
			}, {
				default: withCtx(() => [createBaseVNode("div", _hoisted_1, [
					createBaseVNode("div", null, [
						createBaseVNode("h2", _hoisted_2, toDisplayString(_ctx.$t("secrets.title")), 1),
						createBaseVNode("p", _hoisted_3, toDisplayString(_ctx.$t("secrets.description")), 1),
						createBaseVNode("p", _hoisted_4, toDisplayString(_ctx.$t("secrets.descriptionUsage")), 1)
					]),
					createVNode(unref(script$3), { class: "my-4" }),
					createBaseVNode("div", _hoisted_5, [createBaseVNode("h3", _hoisted_6, toDisplayString(_ctx.$t("secrets.modelProviders")), 1), createVNode(Button_default, { onClick: openCreateDialog }, {
						default: withCtx(() => [_cache[2] || (_cache[2] = createBaseVNode("i", { class: "pi pi-plus mr-1" }, null, -1)), createTextVNode(" " + toDisplayString(_ctx.$t("secrets.addSecret")), 1)]),
						_: 1
					})]),
					unref(loading) ? (openBlock(), createElementBlock("div", _hoisted_7, [createVNode(unref(script$4), { class: "size-8" })])) : unref(secrets).length === 0 ? (openBlock(), createElementBlock("div", _hoisted_8, toDisplayString(_ctx.$t("secrets.noSecrets")), 1)) : (openBlock(), createElementBlock("div", _hoisted_9, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(secrets), (secret) => {
						return openBlock(), createBlock(SecretListItem_default, {
							key: secret.id,
							secret,
							loading: unref(operatingSecretId) === secret.id,
							disabled: unref(operatingSecretId) !== null,
							onEdit: ($event) => openEditDialog(secret),
							onDelete: ($event) => confirmDelete(secret)
						}, null, 8, [
							"secret",
							"loading",
							"disabled",
							"onEdit",
							"onDelete"
						]);
					}), 128))])),
					createVNode(SecretFormDialog_default, {
						visible: createDialogVisible.value,
						"onUpdate:visible": _cache[0] || (_cache[0] = ($event) => createDialogVisible.value = $event),
						mode: "create",
						"existing-providers": unref(existingProviders),
						"available-providers": unref(availableProviders),
						onSaved: unref(fetchSecrets)
					}, null, 8, [
						"visible",
						"existing-providers",
						"available-providers",
						"onSaved"
					]),
					createVNode(SecretFormDialog_default, {
						visible: editDialogVisible.value,
						"onUpdate:visible": _cache[1] || (_cache[1] = ($event) => editDialogVisible.value = $event),
						mode: "edit",
						secret: selectedSecret.value,
						"existing-providers": unref(existingProviders),
						"available-providers": unref(availableProviders),
						onSaved: unref(fetchSecrets)
					}, null, 8, [
						"visible",
						"secret",
						"existing-providers",
						"available-providers",
						"onSaved"
					])
				])]),
				_: 1
			});
		};
	}
});
//#endregion
export { SecretsPanel_default as default };

//# sourceMappingURL=SecretsPanel-BJxVg3lG.js.map