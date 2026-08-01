import "./rolldown-runtime-C9Cmlsnw.js";
import { C as script, at as ZIndex } from "./vendor-primevue-T0qpAVQN.js";
import { At as onScopeDispose, B as createTextVNode, Bt as toValue, D as Fragment, F as createCommentVNode, G as guardReactiveProps, Gt as normalizeProps, Ht as unref, I as createElementBlock, It as shallowRef, J as inject, Kt as normalizeStyle, L as createPropsRestProxy, M as computed, N as createBaseVNode, Nt as ref, Ot as isRef, P as createBlock, St as withCtx, U as defineComponent, V as createVNode, Wt as normalizeClass, Z as mergeProps, at as openBlock, ct as renderSlot, f as storeToRefs, nt as onMounted, ot as provide, qt as toDisplayString, st as renderList, u as defineStore, vt as watch } from "./vendor-vue-core-oGuyqViA.js";
import { B as RadioGroupRoot_default, G as PaginationRoot_default, H as PaginationNext_default, J as HoverCardPortal_default, K as PaginationEllipsis_default, U as PaginationListItem_default, V as PaginationPrev_default, W as PaginationList_default, X as HoverCardRoot_default, Y as HoverCardContent_default$1, ln as useForwardProps, q as HoverCardTrigger_default$1, z as RadioGroupItem_default } from "./vendor-reka-ui-CLUGudFd.js";
import { r as useI18n } from "./vendor-i18n-CPpp7rsM.js";
import { t as cn } from "./src-C1FpYMFF.js";
import { n as buttonVariants, t as Button_default } from "./Button-By8A3toz.js";
import { i as api } from "./api-btlSMXR9.js";
import { _ as objectType, b as stringType, c as booleanType, s as arrayType } from "./vendor-zod-DrbcGYyw.js";
import { Dn as Skeleton_default, H as useNodeDefStore, Ji as getComfyPlatformBaseUrl, Li as useTeamWorkspaceStore, Va as SearchInput_default, Xa as getProviderName, Ya as getProviderIcon, ir as useWorkspaceUI, ki as useCurrentUser } from "./settingStore-pm7IqVHI.js";
import { n as useFeatureFlags } from "./useFeatureFlags-CvjPiCWD.js";
import { t as useDialogStore } from "./dialogStore-BAELBvsb.js";
import { m as showConfirmDialog } from "./DialogHeader-BkpfMvwx.js";
import { t as WorkspaceProfilePic_default } from "./WorkspaceProfilePic-LeJkcWgK.js";
import { t as SubscriptionPanelContentWorkspace_default } from "./SubscriptionPanelContentWorkspace-BpXuoLtJ.js";
import { r as BillingStatusBanner_default, t as MembersPanelContent_default } from "./MembersPanelContent-DNHyeWWb.js";
var partnerProviderCatalogResponseSchema = objectType({ providers: arrayType(objectType({
	provider_id: stringType(),
	display_name: stringType(),
	node_categories: arrayType(stringType())
})) });
var partnerProviderPolicyEntrySchema = objectType({
	provider_id: stringType(),
	enabled: booleanType()
});
var partnerNodePolicyResponseSchema = objectType({
	enforcement_enabled: booleanType(),
	providers: arrayType(partnerProviderPolicyEntrySchema)
});
var PartnerNodePolicyApiError = class extends Error {
	status;
	constructor(status, message) {
		super(message);
		this.status = status;
		this.name = "PartnerNodePolicyApiError";
	}
};
function normalizePolicy(data) {
	return {
		enforcementEnabled: data.enforcement_enabled,
		providers: data.providers.map(({ provider_id, enabled }) => ({
			providerId: provider_id,
			enabled
		}))
	};
}
function throwResponseError(response) {
	throw new PartnerNodePolicyApiError(response.status, response.statusText);
}
async function getPartnerProviders() {
	const response = await api.fetchApi("/providers", { cache: "no-store" });
	if (!response.ok) throwResponseError(response);
	return partnerProviderCatalogResponseSchema.parse(await response.json()).providers.map(({ provider_id, display_name, node_categories }) => ({
		id: provider_id,
		displayName: display_name,
		nodeCategories: node_categories
	}));
}
async function getPartnerNodePolicy() {
	const response = await api.fetchApi("/workspace/provider-policy", { cache: "no-store" });
	if (response.status === 404) return null;
	if (!response.ok) throwResponseError(response);
	return normalizePolicy(partnerNodePolicyResponseSchema.parse(await response.json()));
}
async function updatePartnerNodePolicy(policy) {
	const response = await api.fetchApi("/workspace/provider-policy", {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			enforcement_enabled: policy.enforcementEnabled,
			providers: policy.providers.map(({ providerId, enabled }) => ({
				provider_id: providerId,
				enabled
			}))
		})
	});
	if (!response.ok) throwResponseError(response);
	return normalizePolicy(partnerNodePolicyResponseSchema.parse(await response.json()));
}
//#endregion
//#region src/platform/workspace/stores/partnerNodeGovernanceStore.ts
var usePartnerNodeGovernanceStore = defineStore("partnerNodeGovernance", () => {
	const { flags } = useFeatureFlags();
	const workspaceStore = useTeamWorkspaceStore();
	const providers = shallowRef([]);
	const policy = shallowRef(null);
	const status = ref("inactive");
	const error = shallowRef(null);
	const activeSaveIdsByWorkspace = shallowRef(/* @__PURE__ */ new Map());
	let requestVersion = 0;
	let nextSaveId = 0;
	const governedWorkspaceId = computed(() => flags.partnerNodeGovernanceEnabled ? workspaceStore.activeWorkspace?.id ?? null : null);
	const isSaving = computed(() => {
		const workspaceId = governedWorkspaceId.value;
		return workspaceId !== null && activeSaveIdsByWorkspace.value.has(workspaceId);
	});
	function createInitialPolicy() {
		return {
			enforcementEnabled: false,
			providers: providers.value.map(({ id }) => ({
				providerId: id,
				enabled: true
			}))
		};
	}
	function isProviderEnabled(providerId) {
		if (!policy.value) return true;
		return policy.value.providers.find((provider) => provider.providerId === providerId)?.enabled === true;
	}
	async function loadPolicy() {
		const workspaceId = governedWorkspaceId.value;
		const version = ++requestVersion;
		if (!workspaceId) {
			providers.value = [];
			policy.value = null;
			status.value = "inactive";
			error.value = null;
			return;
		}
		providers.value = [];
		policy.value = null;
		status.value = "loading";
		error.value = null;
		try {
			const [nextProviders, nextPolicy] = await Promise.all([getPartnerProviders(), getPartnerNodePolicy()]);
			if (version !== requestVersion || governedWorkspaceId.value !== workspaceId) return;
			providers.value = nextProviders;
			policy.value = nextPolicy;
			status.value = nextPolicy ? "configured" : "unconfigured";
		} catch (loadError) {
			if (version !== requestVersion || governedWorkspaceId.value !== workspaceId) return;
			providers.value = [];
			policy.value = null;
			error.value = loadError instanceof Error ? loadError : /* @__PURE__ */ new Error("Failed to load partner provider policy");
			status.value = loadError instanceof PartnerNodePolicyApiError && loadError.status === 403 ? "ineligible" : "error";
		}
	}
	async function savePolicy(nextPolicy) {
		const workspaceId = governedWorkspaceId.value;
		if (!workspaceId) return;
		if (activeSaveIdsByWorkspace.value.has(workspaceId)) throw new Error("Provider policy save already in progress");
		const version = ++requestVersion;
		const saveId = ++nextSaveId;
		activeSaveIdsByWorkspace.value = new Map(activeSaveIdsByWorkspace.value).set(workspaceId, saveId);
		try {
			const savedPolicy = await updatePartnerNodePolicy(nextPolicy);
			if (version !== requestVersion || governedWorkspaceId.value !== workspaceId) return;
			policy.value = savedPolicy;
			status.value = "configured";
			error.value = null;
		} catch (saveError) {
			if (version !== requestVersion || governedWorkspaceId.value !== workspaceId) return;
			if (saveError instanceof PartnerNodePolicyApiError && saveError.status === 422) await loadPolicy();
			throw saveError;
		} finally {
			if (activeSaveIdsByWorkspace.value.get(workspaceId) === saveId) {
				const nextActiveSaveIds = new Map(activeSaveIdsByWorkspace.value);
				nextActiveSaveIds.delete(workspaceId);
				activeSaveIdsByWorkspace.value = nextActiveSaveIds;
			}
		}
	}
	async function setProviderEnabled(providerId, enabled) {
		if (!providers.value.some(({ id }) => id === providerId)) return;
		const currentPolicy = policy.value ?? createInitialPolicy();
		const nextProviders = currentPolicy.providers.find((provider) => provider.providerId === providerId) ? currentPolicy.providers.map((provider) => provider.providerId === providerId ? {
			...provider,
			enabled
		} : provider) : [...currentPolicy.providers, {
			providerId,
			enabled
		}];
		await savePolicy({
			...currentPolicy,
			enforcementEnabled: currentPolicy.enforcementEnabled || !enabled,
			providers: nextProviders
		});
	}
	async function setAllProvidersEnabled(enabled) {
		const currentPolicy = policy.value ?? createInitialPolicy();
		await savePolicy({
			...currentPolicy,
			enforcementEnabled: currentPolicy.enforcementEnabled || !enabled,
			providers: providers.value.map(({ id }) => ({
				providerId: id,
				enabled
			}))
		});
	}
	async function setEnforcementEnabled(enabled) {
		const currentPolicy = policy.value ?? createInitialPolicy();
		await savePolicy({
			...currentPolicy,
			enforcementEnabled: enabled,
			providers: enabled ? currentPolicy.providers : providers.value.map(({ id }) => ({
				providerId: id,
				enabled: true
			}))
		});
	}
	watch(governedWorkspaceId, () => void loadPolicy(), { immediate: true });
	return {
		providers,
		policy,
		status,
		error,
		isSaving,
		governedWorkspaceId,
		isProviderEnabled,
		loadPolicy,
		setProviderEnabled,
		setAllProvidersEnabled,
		setEnforcementEnabled
	};
});
//#endregion
//#region src/platform/workspace/components/dialogs/settings/PartnerNodeAccessPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$5 = {
	class: "flex min-h-0 grow flex-col gap-6 overflow-auto",
	"aria-labelledby": "partner-node-access-title"
};
var _hoisted_2$3 = { class: "flex min-h-20 items-center justify-between gap-2 rounded-2xl bg-secondary-background px-4 py-3 font-inter" };
var _hoisted_3$3 = { class: "min-w-0 flex-1" };
var _hoisted_4$1 = {
	id: "partner-node-access-title",
	class: "m-0 truncate text-sm leading-[normal] font-normal text-base-foreground"
};
var _hoisted_5$1 = {
	key: 0,
	class: "m-0 mt-2 truncate text-sm leading-[normal] font-normal text-muted-foreground"
};
var _hoisted_6$1 = {
	key: 0,
	class: "text-sm text-muted-foreground"
};
var _hoisted_7$1 = ["aria-label"];
var _hoisted_8$1 = {
	key: 2,
	role: "alert",
	class: "flex min-h-48 flex-col items-center justify-center gap-3 rounded-2xl border border-interface-stroke p-6 text-center"
};
var _hoisted_9$1 = { class: "text-sm text-muted-foreground" };
var _hoisted_10$1 = {
	key: 3,
	role: "status",
	class: "flex min-h-48 items-center justify-center rounded-2xl border border-interface-stroke p-6 text-center"
};
var _hoisted_11$1 = { class: "text-sm text-muted-foreground" };
var _hoisted_12$1 = { class: "flex flex-wrap items-center justify-between gap-3" };
var _hoisted_13$1 = { class: "w-full max-w-64" };
var _hoisted_14$1 = { class: "sr-only" };
var _hoisted_15$1 = { class: "flex items-center gap-2" };
var _hoisted_16$1 = {
	key: 0,
	role: "alert",
	class: "rounded-lg bg-destructive-background/10 px-4 py-3 text-sm text-destructive-background"
};
var _hoisted_17$1 = [
	"aria-label",
	"aria-disabled",
	"inert"
];
var _hoisted_18 = {
	role: "row",
	class: "grid h-10 grid-cols-[minmax(0,1fr)_2.5rem] items-center gap-2 px-2 text-sm text-muted-foreground lg:grid-cols-[minmax(0,1fr)_12rem_2.5rem]"
};
var _hoisted_19 = ["aria-sort"];
var _hoisted_20 = ["aria-sort"];
var _hoisted_21 = {
	role: "row",
	class: "grid h-10 grid-cols-[minmax(0,1fr)_2.5rem] items-center gap-2 border-b border-secondary-background px-2 last:border-b-0 hover:bg-secondary-background/40 lg:grid-cols-[minmax(0,1fr)_12rem_2.5rem]"
};
var _hoisted_22 = {
	role: "cell",
	class: "min-w-0"
};
var _hoisted_23 = {
	class: "flex size-5 shrink-0 items-center justify-center rounded-full bg-interface-panel-hover-surface",
	"aria-hidden": "true"
};
var _hoisted_24 = { class: "truncate" };
var _hoisted_25 = {
	role: "cell",
	class: "hidden text-sm text-muted-foreground lg:block"
};
var _hoisted_26 = {
	role: "cell",
	class: "flex h-8 w-10 items-center justify-end justify-self-end"
};
var _hoisted_27 = {
	role: "cell",
	class: "truncate pl-17 text-muted-foreground"
};
var _hoisted_28 = {
	key: 0,
	class: "flex min-h-40 items-center justify-center p-6 text-sm text-muted-foreground"
};
//#endregion
//#region src/platform/workspace/components/dialogs/settings/PartnerNodeAccessPanel.vue
var PartnerNodeAccessPanel_default = /* @__PURE__ */ defineComponent({
	__name: "PartnerNodeAccessPanel",
	setup(__props) {
		const governanceStore = usePartnerNodeGovernanceStore();
		const { governedWorkspaceId, isSaving, policy, providers, status } = storeToRefs(governanceStore);
		const { isProviderEnabled, loadPolicy, setAllProvidersEnabled, setEnforcementEnabled, setProviderEnabled } = governanceStore;
		const { nodeDefsByName } = storeToRefs(useNodeDefStore());
		const dialogStore = useDialogStore();
		const { workspaceRole } = useWorkspaceUI();
		const { t } = useI18n();
		const searchQuery = ref("");
		const expandedProviderIds = ref(/* @__PURE__ */ new Set());
		const saveError = ref(false);
		const sortField = ref("provider");
		const sortDirection = ref("ascending");
		const isRestricted = computed(() => policy.value?.enforcementEnabled === true);
		const isPolicyLoaded = computed(() => status.value === "configured" || status.value === "unconfigured");
		const isReadOnly = computed(() => workspaceRole.value !== "owner");
		const canEditPolicy = computed(() => !isReadOnly.value && isPolicyLoaded.value);
		const providerRows = computed(() => providers.value.filter(({ nodeCategories }) => nodeCategories.length > 0).map((provider) => {
			const nodes = Object.values(nodeDefsByName.value).filter((nodeDef) => nodeDef.api_node && provider.nodeCategories.includes(getProviderName(nodeDef.category))).map((nodeDef) => ({
				id: nodeDef.name,
				name: nodeDef.display_name || nodeDef.name
			})).sort((a, b) => a.name.localeCompare(b.name));
			return {
				...provider,
				enabled: isProviderEnabled(provider.id),
				nodes
			};
		}));
		const filteredProviders = computed(() => {
			const query = searchQuery.value.trim().toLocaleLowerCase();
			if (!query) return providerRows.value;
			return providerRows.value.flatMap((provider) => {
				if (provider.displayName.toLocaleLowerCase().includes(query)) return provider;
				const nodes = provider.nodes.filter(({ name }) => name.toLocaleLowerCase().includes(query));
				return nodes.length > 0 ? [{
					...provider,
					nodes
				}] : [];
			});
		});
		const sortedProviders = computed(() => [...filteredProviders.value].sort((a, b) => {
			const result = sortField.value === "provider" ? a.displayName.localeCompare(b.displayName) : Number(a.enabled) * a.nodes.length - Number(b.enabled) * b.nodes.length;
			return (sortDirection.value === "ascending" ? result : -result) || a.displayName.localeCompare(b.displayName);
		}));
		function sortBy(field) {
			if (sortField.value === field) {
				sortDirection.value = sortDirection.value === "ascending" ? "descending" : "ascending";
				return;
			}
			sortField.value = field;
			sortDirection.value = field === "provider" ? "ascending" : "descending";
		}
		function toggleExpanded(providerId) {
			const nextIds = new Set(expandedProviderIds.value);
			if (nextIds.has(providerId)) nextIds.delete(providerId);
			else nextIds.add(providerId);
			expandedProviderIds.value = nextIds;
		}
		function isProviderExpanded(providerId) {
			return searchQuery.value.trim().length > 0 || expandedProviderIds.value.has(providerId);
		}
		async function performSave(action) {
			saveError.value = false;
			try {
				await action();
			} catch {
				saveError.value = true;
			}
		}
		function saveProviderChange(providerId, enabled) {
			performSave(() => setProviderEnabled(providerId, enabled));
		}
		async function handleEnableAll() {
			await performSave(() => setAllProvidersEnabled(true));
		}
		function createPolicyConfirmationGuard() {
			const sourceWorkspaceId = governedWorkspaceId.value;
			const sourcePolicy = policy.value;
			if (!sourceWorkspaceId) return null;
			return () => workspaceRole.value === "owner" && governedWorkspaceId.value === sourceWorkspaceId && policy.value === sourcePolicy;
		}
		function confirmDisableAll() {
			const canConfirm = createPolicyConfirmationGuard();
			if (!canConfirm) return;
			const dialog = showConfirmDialog({
				headerProps: { title: t("workspacePanel.partnerNodes.disableAllTitle") },
				props: { promptText: t("workspacePanel.partnerNodes.disableAllMessage") },
				footerProps: {
					confirmText: t("workspacePanel.partnerNodes.disableAll"),
					confirmVariant: "destructive",
					optionsDisabled: isSaving,
					onCancel: () => dialogStore.closeDialog(dialog),
					onConfirm: async () => {
						if (!canConfirm()) {
							dialogStore.closeDialog(dialog);
							return;
						}
						await performSave(() => setAllProvidersEnabled(false));
						dialogStore.closeDialog(dialog);
					}
				}
			});
		}
		function requestEnforcementMode(enabled) {
			if (enabled === isRestricted.value) return;
			confirmAccessModeChange(enabled, () => setEnforcementEnabled(enabled));
		}
		function confirmAccessModeChange(enabled, action) {
			const canConfirm = createPolicyConfirmationGuard();
			if (!canConfirm) return;
			const key = enabled ? "restrictAccess" : "allowAllAccess";
			const dialog = showConfirmDialog({
				headerProps: { title: t(`workspacePanel.partnerNodes.${key}Title`) },
				props: { promptText: `${t(`workspacePanel.partnerNodes.${key}Message`)} ${t(`workspacePanel.partnerNodes.${key}Hint`)}` },
				footerProps: {
					confirmText: t("g.confirm"),
					confirmVariant: "primary",
					optionsDisabled: isSaving,
					onCancel: () => dialogStore.closeDialog(dialog),
					onConfirm: async () => {
						if (!canConfirm()) {
							dialogStore.closeDialog(dialog);
							return;
						}
						await performSave(action);
						dialogStore.closeDialog(dialog);
					}
				}
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("section", _hoisted_1$5, [
				createBaseVNode("div", _hoisted_2$3, [createBaseVNode("div", _hoisted_3$3, [createBaseVNode("h2", _hoisted_4$1, toDisplayString(_ctx.$t("workspacePanel.partnerNodes.title")), 1), isPolicyLoaded.value ? (openBlock(), createElementBlock("p", _hoisted_5$1, toDisplayString(_ctx.$t(isRestricted.value ? "workspacePanel.partnerNodes.restrictedDescription" : "workspacePanel.partnerNodes.unrestrictedDescription")), 1)) : createCommentVNode("", true)]), isPolicyLoaded.value ? (openBlock(), createBlock(unref(RadioGroupRoot_default), {
					key: 0,
					"model-value": isRestricted.value ? "restricted" : "unrestricted",
					orientation: "horizontal",
					disabled: unref(isSaving) || !canEditPolicy.value,
					"aria-label": _ctx.$t("workspacePanel.partnerNodes.accessMode"),
					class: "flex w-48 gap-1 rounded-lg bg-secondary-background-hover p-1",
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => requestEnforcementMode($event === "restricted"))
				}, {
					default: withCtx(() => [createVNode(unref(RadioGroupItem_default), {
						value: "unrestricted",
						class: normalizeClass(unref(cn)(unref(buttonVariants)({ variant: "textonly" }), "flex-1 px-2 leading-[normal] font-normal", !isRestricted.value && "bg-base-foreground text-base-background hover:bg-base-foreground"))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.partnerNodes.unrestricted")), 1)]),
						_: 1
					}, 8, ["class"]), createVNode(unref(RadioGroupItem_default), {
						value: "restricted",
						class: normalizeClass(unref(cn)(unref(buttonVariants)({ variant: "textonly" }), "flex-1 px-2 leading-[normal] font-normal", isRestricted.value && "bg-base-foreground text-base-background hover:bg-base-foreground"))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.partnerNodes.restricted")), 1)]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				}, 8, [
					"model-value",
					"disabled",
					"aria-label"
				])) : createCommentVNode("", true)]),
				isReadOnly.value ? (openBlock(), createElementBlock("p", _hoisted_6$1, toDisplayString(_ctx.$t("workspacePanel.partnerNodes.ownerOnly")), 1)) : createCommentVNode("", true),
				unref(status) === "loading" ? (openBlock(), createElementBlock("div", {
					key: 1,
					"aria-label": _ctx.$t("workspacePanel.partnerNodes.loading"),
					class: "space-y-3"
				}, [createVNode(Skeleton_default, { class: "h-10 w-full" }), (openBlock(), createElementBlock(Fragment, null, renderList(5, (index) => {
					return createVNode(Skeleton_default, {
						key: index,
						class: "h-12 w-full"
					});
				}), 64))], 8, _hoisted_7$1)) : unref(status) === "error" ? (openBlock(), createElementBlock("div", _hoisted_8$1, [createBaseVNode("p", _hoisted_9$1, toDisplayString(_ctx.$t("workspacePanel.partnerNodes.loadError")), 1), createVNode(Button_default, {
					variant: "secondary",
					onClick: unref(loadPolicy)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.partnerNodes.retry")), 1)]),
					_: 1
				}, 8, ["onClick"])])) : unref(status) === "ineligible" || unref(status) === "inactive" ? (openBlock(), createElementBlock("div", _hoisted_10$1, [createBaseVNode("p", _hoisted_11$1, toDisplayString(_ctx.$t("workspacePanel.partnerNodes.unavailable")), 1)])) : (openBlock(), createElementBlock(Fragment, { key: 4 }, [
					createBaseVNode("div", _hoisted_12$1, [createBaseVNode("label", _hoisted_13$1, [createBaseVNode("span", _hoisted_14$1, toDisplayString(_ctx.$t("workspacePanel.partnerNodes.searchPlaceholder")), 1), createVNode(SearchInput_default, {
						modelValue: searchQuery.value,
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => searchQuery.value = $event),
						placeholder: _ctx.$t("workspacePanel.partnerNodes.searchPlaceholder"),
						size: "lg",
						class: "w-full"
					}, null, 8, ["modelValue", "placeholder"])]), createBaseVNode("div", _hoisted_15$1, [isRestricted.value ? (openBlock(), createBlock(Button_default, {
						key: 0,
						variant: "textonly",
						size: "lg",
						disabled: unref(isSaving) || !canEditPolicy.value,
						onClick: handleEnableAll
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.partnerNodes.enableAll")), 1)]),
						_: 1
					}, 8, ["disabled"])) : createCommentVNode("", true), createVNode(Button_default, {
						variant: "textonly",
						size: "lg",
						disabled: !isRestricted.value || unref(isSaving) || !canEditPolicy.value,
						onClick: confirmDisableAll
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.partnerNodes.disableAll")), 1)]),
						_: 1
					}, 8, ["disabled"])])]),
					saveError.value ? (openBlock(), createElementBlock("p", _hoisted_16$1, toDisplayString(_ctx.$t("workspacePanel.partnerNodes.saveError")), 1)) : createCommentVNode("", true),
					createBaseVNode("div", {
						role: "table",
						"aria-label": _ctx.$t("workspacePanel.partnerNodes.tableLabel"),
						"aria-disabled": !isRestricted.value,
						inert: !isRestricted.value,
						class: normalizeClass(unref(cn)("min-h-0 overflow-auto rounded-2xl border border-interface-stroke px-4 py-3", !isRestricted.value && "pointer-events-none opacity-50"))
					}, [
						createBaseVNode("div", _hoisted_18, [
							createBaseVNode("span", {
								role: "columnheader",
								"aria-sort": sortField.value === "provider" ? sortDirection.value : "none"
							}, [createVNode(Button_default, {
								variant: "textonly",
								size: "unset",
								class: "gap-2 p-0 text-sm font-normal text-muted-foreground",
								onClick: _cache[2] || (_cache[2] = ($event) => sortBy("provider"))
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.partnerNodes.columns.provider")) + " ", 1), createBaseVNode("i", {
									class: normalizeClass(unref(cn)("size-4 transition-transform", sortField.value === "provider" ? "icon-[lucide--arrow-down]" : "icon-[lucide--arrow-up-down]", sortField.value === "provider" && sortDirection.value === "descending" && "rotate-180")),
									"aria-hidden": "true"
								}, null, 2)]),
								_: 1
							})], 8, _hoisted_19),
							createBaseVNode("span", {
								role: "columnheader",
								"aria-sort": sortField.value === "nodes" ? sortDirection.value : "none",
								class: "hidden lg:block"
							}, [createVNode(Button_default, {
								variant: "textonly",
								size: "unset",
								class: "gap-2 p-0 text-sm font-normal text-muted-foreground",
								onClick: _cache[3] || (_cache[3] = ($event) => sortBy("nodes"))
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.partnerNodes.columns.nodes")) + " ", 1), createBaseVNode("i", {
									class: normalizeClass(unref(cn)("size-4 transition-transform", sortField.value === "nodes" ? "icon-[lucide--arrow-down]" : "icon-[lucide--arrow-up-down]", sortField.value === "nodes" && sortDirection.value === "descending" && "rotate-180")),
									"aria-hidden": "true"
								}, null, 2)]),
								_: 1
							})], 8, _hoisted_20),
							_cache[4] || (_cache[4] = createBaseVNode("span", { role: "columnheader" }, null, -1))
						]),
						_cache[7] || (_cache[7] = createBaseVNode("div", {
							"aria-hidden": "true",
							class: "my-2 border-t border-border-default"
						}, null, -1)),
						(openBlock(true), createElementBlock(Fragment, null, renderList(sortedProviders.value, (provider) => {
							return openBlock(), createElementBlock(Fragment, { key: provider.id }, [createBaseVNode("div", _hoisted_21, [
								createBaseVNode("div", _hoisted_22, [createVNode(Button_default, {
									variant: "textonly",
									size: "unset",
									class: "h-10 w-full justify-start gap-2 p-0 text-left font-normal hover:bg-transparent",
									"aria-expanded": isProviderExpanded(provider.id),
									onClick: ($event) => toggleExpanded(provider.id)
								}, {
									default: withCtx(() => [
										createBaseVNode("i", {
											class: normalizeClass(unref(cn)("size-4 shrink-0 transition-transform", "icon-[lucide--chevron-down]", !isProviderExpanded(provider.id) && "-rotate-90")),
											"aria-hidden": "true"
										}, null, 2),
										createBaseVNode("span", _hoisted_23, [createBaseVNode("i", { class: normalizeClass(unref(cn)(unref(getProviderIcon)(provider.nodeCategories[0] ?? provider.displayName), "size-3")) }, null, 2)]),
										createBaseVNode("span", _hoisted_24, toDisplayString(provider.displayName), 1)
									]),
									_: 2
								}, 1032, ["aria-expanded", "onClick"])]),
								createBaseVNode("span", _hoisted_25, toDisplayString(_ctx.$t("workspacePanel.partnerNodes.nodeCount", provider.enabled ? provider.nodes.length : 0)), 1),
								createBaseVNode("div", _hoisted_26, [createVNode(unref(script), {
									"model-value": provider.enabled,
									disabled: !isRestricted.value || unref(isSaving) || !canEditPolicy.value,
									"aria-label": _ctx.$t("workspacePanel.partnerNodes.toggleProvider", { provider: provider.displayName }),
									class: "transition-transform active:scale-90",
									"onUpdate:modelValue": ($event) => saveProviderChange(provider.id, $event)
								}, null, 8, [
									"model-value",
									"disabled",
									"aria-label",
									"onUpdate:modelValue"
								])])
							]), (openBlock(true), createElementBlock(Fragment, null, renderList(isProviderExpanded(provider.id) ? provider.nodes : [], (node) => {
								return openBlock(), createElementBlock("div", {
									key: node.id,
									role: "row",
									class: "grid h-10 grid-cols-[minmax(0,1fr)_2.5rem] items-center gap-2 border-b border-secondary-background bg-secondary-background/40 px-2 text-sm last:border-b-0 lg:grid-cols-[minmax(0,1fr)_12rem_2.5rem]"
								}, [
									createBaseVNode("span", _hoisted_27, toDisplayString(node.name), 1),
									_cache[5] || (_cache[5] = createBaseVNode("span", {
										role: "cell",
										class: "hidden lg:block"
									}, null, -1)),
									_cache[6] || (_cache[6] = createBaseVNode("span", { role: "cell" }, null, -1))
								]);
							}), 128))], 64);
						}), 128)),
						sortedProviders.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_28, toDisplayString(_ctx.$t("workspacePanel.partnerNodes.noResults")), 1)) : createCommentVNode("", true)
					], 10, _hoisted_17$1)
				], 64))
			]);
		};
	}
});
//#endregion
//#region src/components/ui/hover-card/hoverCardContext.ts
var hoverCardOpenKey = Symbol("hoverCardOpen");
//#endregion
//#region src/components/ui/hover-card/HoverCard.vue
var HoverCard_default = /* @__PURE__ */ defineComponent({
	__name: "HoverCard",
	props: {
		defaultOpen: { type: Boolean },
		open: { type: Boolean },
		openDelay: {},
		closeDelay: {}
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const forwarded = useForwardProps(props);
		const isOpen = ref(forwarded.value.open ?? props.defaultOpen ?? false);
		provide(hoverCardOpenKey, isOpen);
		watch(() => forwarded.value.open, (open) => {
			if (open !== void 0) isOpen.value = open;
		});
		function handleOpenUpdate(open) {
			if (forwarded.value.open === void 0) isOpen.value = open;
			emits("update:open", open);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(HoverCardRoot_default), mergeProps(unref(forwarded), { "onUpdate:open": handleOpenUpdate }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region src/components/ui/hover-card/HoverCardContent.vue?vue&type=script&setup=true&lang.ts
var MODAL_BASE_Z_INDEX = 1700;
//#endregion
//#region src/components/ui/hover-card/HoverCardContent.vue
var HoverCardContent_default = /* @__PURE__ */ defineComponent({
	__name: "HoverCardContent",
	props: {
		forceMount: { type: Boolean },
		side: { default: "bottom" },
		sideOffset: { default: 8 },
		sideFlip: { type: Boolean },
		align: {},
		alignOffset: {},
		alignFlip: { type: Boolean },
		avoidCollisions: { type: Boolean },
		collisionBoundary: {},
		collisionPadding: {},
		arrowPadding: {},
		sticky: {},
		hideWhenDetached: { type: Boolean },
		positionStrategy: {},
		updatePositionStrategy: {},
		disableUpdateOnLayoutShift: { type: Boolean },
		prioritizePosition: { type: Boolean },
		reference: {},
		asChild: { type: Boolean },
		as: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(__props) {
		const rest = createPropsRestProxy(__props, [
			"class",
			"side",
			"sideOffset"
		]);
		const forwarded = useForwardProps(computed(() => rest));
		const open = inject(hoverCardOpenKey, void 0);
		const contentStyle = computed(() => {
			if (!open?.value) return void 0;
			const topZIndex = ZIndex.getCurrent("modal");
			return topZIndex >= MODAL_BASE_Z_INDEX ? { zIndex: topZIndex + 1 } : void 0;
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(HoverCardPortal_default), null, {
				default: withCtx(() => [createVNode(unref(HoverCardContent_default$1), mergeProps(unref(forwarded), {
					side: __props.side,
					"side-offset": __props.sideOffset,
					style: contentStyle.value,
					class: unref(cn)("z-1700 rounded-lg border border-border-subtle bg-secondary-background p-2.5 shadow-md outline-none", __props.class)
				}), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16, [
					"side",
					"side-offset",
					"style",
					"class"
				])]),
				_: 3
			});
		};
	}
});
//#endregion
//#region src/components/ui/hover-card/HoverCardTrigger.vue
var HoverCardTrigger_default = /* @__PURE__ */ defineComponent({
	__name: "HoverCardTrigger",
	props: {
		reference: {},
		asChild: { type: Boolean },
		as: {}
	},
	setup(__props) {
		const forwarded = useForwardProps(__props);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(HoverCardTrigger_default$1), normalizeProps(guardReactiveProps(unref(forwarded))), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region src/components/ui/pagination/Pagination.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = { class: "flex items-center gap-1" };
var ellipsisClass = "inline-flex size-8 items-center justify-center text-sm text-muted-foreground";
//#endregion
//#region src/components/ui/pagination/Pagination.vue
var Pagination_default = /* @__PURE__ */ defineComponent({
	__name: "Pagination",
	props: {
		page: { default: 1 },
		total: {},
		itemsPerPage: { default: 10 }
	},
	emits: ["update:page"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(PaginationRoot_default), {
				page: __props.page,
				total: __props.total,
				"items-per-page": __props.itemsPerPage,
				"sibling-count": 1,
				"show-edges": "",
				"onUpdate:page": _cache[0] || (_cache[0] = (p) => emit("update:page", p))
			}, {
				default: withCtx(() => [createBaseVNode("div", _hoisted_1$4, [
					createVNode(unref(PaginationPrev_default), { "as-child": "" }, {
						default: withCtx(() => [createVNode(Button_default, {
							variant: "muted-textonly",
							size: "md",
							class: "text-sm"
						}, {
							default: withCtx(() => [_cache[1] || (_cache[1] = createBaseVNode("i", { class: "icon-[lucide--chevron-left] size-4" }, null, -1)), createTextVNode(" " + toDisplayString(_ctx.$t("g.previous")), 1)]),
							_: 1
						})]),
						_: 1
					}),
					createVNode(unref(PaginationList_default), { class: "flex items-center gap-1" }, {
						default: withCtx(({ items }) => [(openBlock(true), createElementBlock(Fragment, null, renderList(items, (item, index) => {
							return openBlock(), createElementBlock(Fragment, { key: index }, [item.type === "page" ? (openBlock(), createBlock(unref(PaginationListItem_default), {
								key: 0,
								value: item.value,
								"as-child": ""
							}, {
								default: withCtx(() => [createVNode(Button_default, {
									variant: item.value === __props.page ? "secondary" : "muted-textonly",
									size: "icon"
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(item.value), 1)]),
									_: 2
								}, 1032, ["variant"])]),
								_: 2
							}, 1032, ["value"])) : (openBlock(), createBlock(unref(PaginationEllipsis_default), {
								key: 1,
								index,
								class: normalizeClass(ellipsisClass)
							}, {
								default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode(" … ", -1)])]),
								_: 1
							}, 8, ["index"]))], 64);
						}), 128))]),
						_: 1
					}),
					createVNode(unref(PaginationNext_default), { "as-child": "" }, {
						default: withCtx(() => [createVNode(Button_default, {
							variant: "muted-textonly",
							size: "md",
							class: "text-sm"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("g.next")) + " ", 1), _cache[3] || (_cache[3] = createBaseVNode("i", { class: "icon-[lucide--chevron-right] size-4" }, null, -1))]),
							_: 1
						})]),
						_: 1
					})
				])]),
				_: 1
			}, 8, [
				"page",
				"total",
				"items-per-page"
			]);
		};
	}
});
//#endregion
//#region src/components/ui/table/Table.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = { class: "w-full table-fixed caption-bottom border-separate border-spacing-0 text-sm" };
//#endregion
//#region src/components/ui/table/Table.vue
var Table_default = /* @__PURE__ */ defineComponent({
	__name: "Table",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(unref(cn)("relative w-full overflow-auto", __props.class)) }, [createBaseVNode("table", _hoisted_1$3, [renderSlot(_ctx.$slots, "default")])], 2);
		};
	}
});
//#endregion
//#region src/components/ui/table/TableBody.vue
var TableBody_default = /* @__PURE__ */ defineComponent({
	__name: "TableBody",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("tbody", { class: normalizeClass(unref(cn)("[&_tr:last-child]:border-0", __props.class)) }, [renderSlot(_ctx.$slots, "default")], 2);
		};
	}
});
//#endregion
//#region src/components/ui/table/TableCell.vue
var TableCell_default = /* @__PURE__ */ defineComponent({
	__name: "TableCell",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("td", { class: normalizeClass(unref(cn)("px-2 py-2.5 align-middle whitespace-nowrap", __props.class)) }, [renderSlot(_ctx.$slots, "default")], 2);
		};
	}
});
//#endregion
//#region src/components/ui/table/TableHead.vue
var TableHead_default = /* @__PURE__ */ defineComponent({
	__name: "TableHead",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("th", {
				scope: "col",
				class: normalizeClass(unref(cn)("h-10 px-2 text-left align-middle text-sm font-normal whitespace-nowrap text-muted-foreground", __props.class))
			}, [renderSlot(_ctx.$slots, "default")], 2);
		};
	}
});
//#endregion
//#region src/components/ui/table/TableHeader.vue
var TableHeader_default = /* @__PURE__ */ defineComponent({
	__name: "TableHeader",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("thead", { class: normalizeClass(unref(cn)("[&_tr]:border-b [&_tr]:border-interface-stroke/60", __props.class)) }, [renderSlot(_ctx.$slots, "default")], 2);
		};
	}
});
//#endregion
//#region src/components/ui/table/TableRow.vue
var TableRow_default = /* @__PURE__ */ defineComponent({
	__name: "TableRow",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("tr", { class: normalizeClass(unref(cn)("border-b border-interface-stroke/60 transition-colors hover:bg-secondary-background/50 data-[state=selected]:bg-secondary-background/50", __props.class)) }, [renderSlot(_ctx.$slots, "default")], 2);
		};
	}
});
//#endregion
//#region src/platform/workspace/composables/useAutoPageSize.ts
var FALLBACK_ROW_HEIGHT = 41;
var MIN_ROWS = 5;
/**
* Derive a table's rows-per-page from the live height of its scroll container so
* a taller dialog shows more rows instead of leaving empty space. Row and header
* heights are read from the rendered table, so it adapts if the design changes.
*/
function useAutoPageSize(containerRef, min = MIN_ROWS) {
	const pageSize = ref(min);
	function measure() {
		const container = containerRef.value;
		if (!container) return;
		const rowHeight = container.querySelector("tbody tr")?.getBoundingClientRect().height || FALLBACK_ROW_HEIGHT;
		const headerHeight = container.querySelector("thead")?.getBoundingClientRect().height ?? 0;
		const fit = Math.floor((container.clientHeight - headerHeight) / rowHeight);
		pageSize.value = Math.max(min, fit);
	}
	let observer = null;
	watch(containerRef, (el) => {
		observer?.disconnect();
		if (!el) return;
		observer = new ResizeObserver(() => measure());
		observer.observe(el);
		const table = el.querySelector("table");
		if (table) observer.observe(table);
	}, { immediate: true });
	onScopeDispose(() => observer?.disconnect());
	return { pageSize };
}
//#endregion
//#region src/platform/workspace/composables/useWorkspaceActivity.ts
/**
* Headless state for the workspace Activity ledger: role-scoped filtering,
* search, sort, auto-paginated slicing, and per-user rollups.
*
* `source` is the data seam. It defaults to an empty list, so the ledger renders
* its empty state until a caller supplies events; the per-workspace usage API
* that will feed it is tracked in FE-1249. Swapping in real data means passing a
* populated ref/getter here — every downstream computed stays untouched.
*/
function useWorkspaceActivity(search, pageSize, selfUserId = null, source = []) {
	const page = ref(1);
	const perPage = computed(() => Math.max(1, toValue(pageSize)));
	const sortField = ref("date");
	const sortDirection = ref("desc");
	const base = computed(() => {
		const events = toValue(source);
		const self = toValue(selfUserId);
		if (self === null) return events;
		return events.filter((event) => event.credited || event.userId === self);
	});
	const filtered = computed(() => {
		const q = toValue(search).trim().toLowerCase();
		if (!q) return base.value;
		return base.value.filter((event) => event.userName.toLowerCase().includes(q) || event.eventType.toLowerCase().includes(q));
	});
	const sorted = computed(() => {
		const dir = sortDirection.value === "asc" ? 1 : -1;
		return [...filtered.value].sort((a, b) => {
			if (sortField.value === "credits") return dir * (a.credits - b.credits);
			if (sortField.value === "user") return dir * a.userName.localeCompare(b.userName);
			if (sortField.value === "eventType") return dir * a.eventType.localeCompare(b.eventType);
			if (sortField.value === "detail") {
				const aCount = Number.parseInt(a.detail, 10);
				const bCount = Number.parseInt(b.detail, 10);
				if (!Number.isNaN(aCount) && !Number.isNaN(bCount)) return dir * (aCount - bCount);
				return dir * a.detail.localeCompare(b.detail);
			}
			return dir * (a.date.getTime() - b.date.getTime());
		});
	});
	const total = computed(() => filtered.value.length);
	const pagedItems = computed(() => {
		const start = (page.value - 1) * perPage.value;
		return sorted.value.slice(start, start + perPage.value);
	});
	function toggleSort(field) {
		if (sortField.value === field) sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
		else {
			sortField.value = field;
			sortDirection.value = "desc";
		}
	}
	watch([total, perPage], ([count]) => {
		const lastPage = Math.max(1, Math.ceil(count / perPage.value));
		if (page.value > lastPage) page.value = lastPage;
	});
	return {
		page,
		total,
		itemsPerPage: perPage,
		pagedItems,
		sortField,
		sortDirection,
		toggleSort,
		userSummaries: computed(() => {
			const map = /* @__PURE__ */ new Map();
			for (const event of base.value) {
				if (event.credited || !event.userId) continue;
				const existing = map.get(event.userId);
				if (!existing) map.set(event.userId, {
					totalCredits: event.credits,
					lastActivity: event.date
				});
				else {
					existing.totalCredits += event.credits;
					if (event.date > existing.lastActivity) existing.lastActivity = event.date;
				}
			}
			return map;
		})
	};
}
//#endregion
//#region src/platform/workspace/utils/badgeColor.ts
var BADGE_COLORS = [
	"#956252",
	"#3e465f",
	"#424f45",
	"#90646e",
	"#6d5a7a",
	"#4f6b6b",
	"#7a6a4a",
	"#5a6270"
];
/** Stable muted badge color for a user, keyed by name/email. */
function userBadgeColor(seed) {
	let hash = 0;
	for (let i = 0; i < seed.length; i++) hash = hash * 31 + seed.charCodeAt(i) >>> 0;
	return BADGE_COLORS[hash % BADGE_COLORS.length];
}
//#endregion
//#region src/platform/workspace/utils/relativeTime.ts
var MINUTE_MS = 60 * 1e3;
var HOUR_MS = 60 * MINUTE_MS;
var DAY_MS = 24 * HOUR_MS;
/**
* Abbreviated "time ago" label (e.g. "6 min ago", "2 hr ago", "3 days ago"),
* matching the member-list activity column. Copy is injected so callers can
* supply localized, pluralized strings.
*/
function formatRelativeTime(date, now, labels) {
	const elapsed = Math.max(0, now.getTime() - date.getTime());
	if (elapsed < MINUTE_MS) return labels.justNow;
	if (elapsed < HOUR_MS) return labels.minutesAgo(Math.floor(elapsed / MINUTE_MS));
	if (elapsed < DAY_MS) return labels.hoursAgo(Math.floor(elapsed / HOUR_MS));
	return labels.daysAgo(Math.floor(elapsed / DAY_MS));
}
//#endregion
//#region src/platform/workspace/components/dialogs/settings/WorkspaceActivityContent.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = { class: "flex min-h-0 flex-1 flex-col gap-4" };
var _hoisted_2$2 = { class: "text-2xs font-bold text-base-foreground" };
var _hoisted_3$2 = { class: "truncate text-sm text-base-foreground" };
var _hoisted_4 = { class: "flex w-full flex-col gap-2" };
var _hoisted_5 = { class: "flex h-5 items-center justify-between" };
var _hoisted_6 = { class: "text-sm text-muted-foreground" };
var _hoisted_7 = { class: "flex items-center gap-1" };
var _hoisted_8 = { class: "text-sm text-base-foreground tabular-nums" };
var _hoisted_9 = { class: "flex h-5 items-center justify-between" };
var _hoisted_10 = { class: "text-sm text-muted-foreground" };
var _hoisted_11 = { class: "text-sm text-base-foreground" };
var _hoisted_12 = {
	key: 1,
	class: "text-sm text-muted-foreground"
};
var _hoisted_13 = { class: "flex h-5 items-center justify-between gap-4" };
var _hoisted_14 = { class: "text-sm whitespace-nowrap text-muted-foreground" };
var _hoisted_15 = { class: "truncate text-sm text-base-foreground" };
var _hoisted_16 = { class: "flex flex-col gap-3 @2xl:h-8 @2xl:flex-row @2xl:items-center" };
var _hoisted_17 = {
	key: 0,
	class: "flex items-center"
};
var sortHeaderClass = "flex cursor-pointer items-center gap-1 border-none bg-transparent p-0 text-left font-[inherit] text-sm text-muted-foreground";
//#endregion
//#region src/platform/workspace/components/dialogs/settings/WorkspaceActivityContent.vue
var WorkspaceActivityContent_default = /* @__PURE__ */ defineComponent({
	__name: "WorkspaceActivityContent",
	props: {
		search: {},
		events: { default: () => [] }
	},
	setup(__props) {
		const { t, d } = useI18n();
		const tableContainer = ref(null);
		const { pageSize } = useAutoPageSize(tableContainer, 1);
		const { workspaceRole } = useWorkspaceUI();
		const { resolvedUserInfo } = useCurrentUser();
		const canViewTeamUsage = computed(() => workspaceRole.value === "owner");
		const selfUserId = computed(() => canViewTeamUsage.value ? null : resolvedUserInfo.value?.id ?? "");
		const fullActivityUrl = `${getComfyPlatformBaseUrl()}/profile/usage`;
		const { page, total, itemsPerPage, pagedItems, sortField, sortDirection, toggleSort, userSummaries } = useWorkspaceActivity(() => __props.search, pageSize, selfUserId, () => __props.events);
		function summaryFor(userId) {
			return (userId ? userSummaries.value.get(userId) : void 0) ?? {
				totalCredits: 0,
				lastActivity: /* @__PURE__ */ new Date()
			};
		}
		function lastActivityLabel(userId) {
			return formatRelativeTime(summaryFor(userId).lastActivity, /* @__PURE__ */ new Date(), {
				justNow: t("workspacePanel.members.activity.justNow"),
				minutesAgo: (n) => t("workspacePanel.members.activity.minutesAgo", { n }),
				hoursAgo: (n) => t("workspacePanel.members.activity.hoursAgo", { n }),
				daysAgo: (n) => t("workspacePanel.members.activity.daysAgo", n)
			});
		}
		function sortIcon(field) {
			if (sortField.value !== field) return "icon-[lucide--chevrons-up-down] size-3";
			return sortDirection.value === "asc" ? "icon-[lucide--chevron-up] size-3" : "icon-[lucide--chevron-down] size-3";
		}
		function ariaSort(field) {
			if (sortField.value !== field) return "none";
			return sortDirection.value === "asc" ? "ascending" : "descending";
		}
		function formatDate(date) {
			return d(date, {
				month: "short",
				day: "numeric",
				hour: "2-digit",
				minute: "2-digit",
				hour12: true
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$2, [createBaseVNode("div", {
				ref_key: "tableContainer",
				ref: tableContainer,
				class: "flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-interface-stroke/60"
			}, [createVNode(Table_default, { class: "min-h-0 flex-1 px-4" }, {
				default: withCtx(() => [createVNode(TableHeader_default, { class: "sticky top-0 z-10 bg-base-background" }, {
					default: withCtx(() => [createVNode(TableRow_default, { class: "hover:bg-transparent [&>th]:h-14 [&>th]:border-b [&>th]:border-interface-stroke/60" }, {
						default: withCtx(() => [
							createVNode(TableHead_default, {
								class: "w-40",
								"aria-sort": ariaSort("date")
							}, {
								default: withCtx(() => [createBaseVNode("button", {
									class: normalizeClass(sortHeaderClass),
									onClick: _cache[0] || (_cache[0] = ($event) => unref(toggleSort)("date"))
								}, [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.activity.columns.date")) + " ", 1), createBaseVNode("i", { class: normalizeClass(sortIcon("date")) }, null, 2)])]),
								_: 1
							}, 8, ["aria-sort"]),
							createVNode(TableHead_default, {
								class: "w-56",
								"aria-sort": ariaSort("user")
							}, {
								default: withCtx(() => [createBaseVNode("button", {
									class: normalizeClass(sortHeaderClass),
									onClick: _cache[1] || (_cache[1] = ($event) => unref(toggleSort)("user"))
								}, [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.activity.columns.user")) + " ", 1), createBaseVNode("i", { class: normalizeClass(sortIcon("user")) }, null, 2)])]),
								_: 1
							}, 8, ["aria-sort"]),
							createVNode(TableHead_default, { "aria-sort": ariaSort("eventType") }, {
								default: withCtx(() => [createBaseVNode("button", {
									class: normalizeClass(sortHeaderClass),
									onClick: _cache[2] || (_cache[2] = ($event) => unref(toggleSort)("eventType"))
								}, [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.activity.columns.eventType")) + " ", 1), createBaseVNode("i", { class: normalizeClass(sortIcon("eventType")) }, null, 2)])]),
								_: 1
							}, 8, ["aria-sort"]),
							createVNode(TableHead_default, {
								class: "w-32",
								"aria-sort": ariaSort("detail")
							}, {
								default: withCtx(() => [createBaseVNode("button", {
									class: normalizeClass(sortHeaderClass),
									onClick: _cache[3] || (_cache[3] = ($event) => unref(toggleSort)("detail"))
								}, [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.activity.columns.eventDetails")) + " ", 1), createBaseVNode("i", { class: normalizeClass(sortIcon("detail")) }, null, 2)])]),
								_: 1
							}, 8, ["aria-sort"]),
							createVNode(TableHead_default, {
								class: "w-40",
								"aria-sort": ariaSort("credits")
							}, {
								default: withCtx(() => [createBaseVNode("button", {
									class: normalizeClass(unref(cn)(sortHeaderClass, "ml-auto")),
									onClick: _cache[4] || (_cache[4] = ($event) => unref(toggleSort)("credits"))
								}, [
									_cache[6] || (_cache[6] = createBaseVNode("i", { class: "icon-[lucide--coins] size-4" }, null, -1)),
									createTextVNode(" " + toDisplayString(_ctx.$t("workspacePanel.activity.columns.creditsUsed")) + " ", 1),
									createBaseVNode("i", { class: normalizeClass(sortIcon("credits")) }, null, 2)
								], 2)]),
								_: 1
							}, 8, ["aria-sort"])
						]),
						_: 1
					})]),
					_: 1
				}), createVNode(TableBody_default, null, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(pagedItems), (event) => {
						return openBlock(), createBlock(TableRow_default, {
							key: event.id,
							class: "hover:bg-transparent [&:last-child>td]:border-b-0 [&>td]:border-b [&>td]:border-interface-stroke/20"
						}, {
							default: withCtx(() => [
								createVNode(TableCell_default, { class: "text-sm text-muted-foreground tabular-nums" }, {
									default: withCtx(() => [createTextVNode(toDisplayString(formatDate(event.date)), 1)]),
									_: 2
								}, 1024),
								createVNode(TableCell_default, null, {
									default: withCtx(() => [event.userName ? (openBlock(), createBlock(HoverCard_default, {
										key: 0,
										"open-delay": 150,
										"close-delay": 0
									}, {
										default: withCtx(() => [createVNode(HoverCardTrigger_default, {
											as: "div",
											class: "flex w-fit cursor-default items-center gap-3"
										}, {
											default: withCtx(() => [createBaseVNode("span", {
												class: "flex size-5 shrink-0 items-center justify-center rounded-full",
												style: normalizeStyle({ backgroundColor: unref(userBadgeColor)(event.userName) })
											}, [createBaseVNode("span", _hoisted_2$2, toDisplayString(event.userName.charAt(0).toUpperCase()), 1)], 4), createBaseVNode("span", _hoisted_3$2, toDisplayString(event.userName), 1)]),
											_: 2
										}, 1024), createVNode(HoverCardContent_default, {
											class: "w-64",
											align: "start"
										}, {
											default: withCtx(() => [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [createBaseVNode("span", _hoisted_6, toDisplayString(_ctx.$t("workspacePanel.activity.hoverCard.totalCreditsUsed")), 1), createBaseVNode("span", _hoisted_7, [_cache[7] || (_cache[7] = createBaseVNode("i", { class: "icon-[lucide--coins] size-4 text-muted-foreground" }, null, -1)), createBaseVNode("span", _hoisted_8, toDisplayString(summaryFor(event.userId).totalCredits.toLocaleString()), 1)])]), createBaseVNode("div", _hoisted_9, [createBaseVNode("span", _hoisted_10, toDisplayString(_ctx.$t("workspacePanel.activity.hoverCard.lastActivity")), 1), createBaseVNode("span", _hoisted_11, toDisplayString(lastActivityLabel(event.userId)), 1)])])]),
											_: 2
										}, 1024)]),
										_: 2
									}, 1024)) : (openBlock(), createElementBlock("span", _hoisted_12, "—"))]),
									_: 2
								}, 1024),
								createVNode(TableCell_default, { class: "text-sm text-muted-foreground" }, {
									default: withCtx(() => [event.partnerNode ? (openBlock(), createBlock(HoverCard_default, {
										key: 0,
										"open-delay": 150,
										"close-delay": 0
									}, {
										default: withCtx(() => [createVNode(HoverCardTrigger_default, {
											as: "span",
											class: "cursor-default"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(event.eventType), 1)]),
											_: 2
										}, 1024), createVNode(HoverCardContent_default, {
											class: "w-72",
											align: "start"
										}, {
											default: withCtx(() => [createBaseVNode("div", _hoisted_13, [createBaseVNode("span", _hoisted_14, toDisplayString(_ctx.$t("workspacePanel.activity.hoverCard.partnerNodeUsed")), 1), createBaseVNode("span", _hoisted_15, toDisplayString(event.partnerNode), 1)])]),
											_: 2
										}, 1024)]),
										_: 2
									}, 1024)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(event.eventType), 1)], 64))]),
									_: 2
								}, 1024),
								createVNode(TableCell_default, { class: "text-sm text-muted-foreground tabular-nums" }, {
									default: withCtx(() => [createTextVNode(toDisplayString(event.detail || "—"), 1)]),
									_: 2
								}, 1024),
								createVNode(TableCell_default, { class: normalizeClass(unref(cn)("text-right text-sm tabular-nums", event.credited ? "text-credit" : "text-muted-foreground")) }, {
									default: withCtx(() => [createTextVNode(toDisplayString(event.credited ? "+" : "") + toDisplayString(event.credits.toLocaleString()), 1)]),
									_: 2
								}, 1032, ["class"])
							]),
							_: 2
						}, 1024);
					}), 128)), unref(pagedItems).length === 0 ? (openBlock(), createBlock(TableRow_default, {
						key: 0,
						class: "hover:bg-transparent"
					}, {
						default: withCtx(() => [createVNode(TableCell_default, {
							colspan: 5,
							class: "py-6 text-center text-sm text-muted-foreground"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.activity.empty")), 1)]),
							_: 1
						})]),
						_: 1
					})) : createCommentVNode("", true)]),
					_: 1
				})]),
				_: 1
			})], 512), createBaseVNode("div", _hoisted_16, [canViewTeamUsage.value ? (openBlock(), createElementBlock("div", _hoisted_17, [createBaseVNode("a", {
				href: fullActivityUrl,
				target: "_blank",
				rel: "noopener noreferrer",
				class: "flex cursor-pointer items-center gap-1 text-sm text-muted-foreground no-underline transition-colors hover:text-base-foreground"
			}, [_cache[8] || (_cache[8] = createBaseVNode("i", { class: "icon-[lucide--external-link] size-4" }, null, -1)), createTextVNode(" " + toDisplayString(_ctx.$t("workspacePanel.activity.fullActivity")), 1)])])) : createCommentVNode("", true), createVNode(Pagination_default, {
				page: unref(page),
				"onUpdate:page": _cache[5] || (_cache[5] = ($event) => isRef(page) ? page.value = $event : null),
				total: unref(total),
				"items-per-page": unref(itemsPerPage),
				class: "@2xl:ml-auto"
			}, null, 8, [
				"page",
				"total",
				"items-per-page"
			])])]);
		};
	}
});
//#endregion
//#region src/platform/workspace/components/dialogs/settings/PlanCreditsPanelContent.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { class: "flex min-h-0 flex-1 flex-col" };
var _hoisted_2$1 = { class: "mb-4 flex w-full flex-col gap-3 @2xl:flex-row @2xl:items-center @2xl:gap-9" };
var _hoisted_3$1 = { class: "flex min-w-0 flex-1 items-center gap-2" };
//#endregion
//#region src/platform/workspace/components/dialogs/settings/PlanCreditsPanelContent.vue
var PlanCreditsPanelContent_default = /* @__PURE__ */ defineComponent({
	__name: "PlanCreditsPanelContent",
	setup(__props) {
		const { t } = useI18n();
		const tabs = computed(() => [{
			key: "overview",
			label: t("workspacePanel.planCredits.tabs.overview")
		}, {
			key: "activity",
			label: t("workspacePanel.planCredits.tabs.activity")
		}]);
		const activeView = ref("overview");
		const searchQuery = ref("");
		function setView(view) {
			activeView.value = view;
			searchQuery.value = "";
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$1, [createBaseVNode("div", _hoisted_2$1, [createBaseVNode("div", _hoisted_3$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(tabs.value, (tab) => {
				return openBlock(), createBlock(Button_default, {
					key: tab.key,
					variant: activeView.value === tab.key ? "secondary" : "muted-textonly",
					size: "lg",
					onClick: ($event) => setView(tab.key)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(tab.label), 1)]),
					_: 2
				}, 1032, ["variant", "onClick"]);
			}), 128))]), activeView.value === "activity" ? (openBlock(), createBlock(SearchInput_default, {
				key: 0,
				modelValue: searchQuery.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
				placeholder: _ctx.$t("g.search"),
				size: "lg",
				class: "w-full @2xl:w-64"
			}, null, 8, ["modelValue", "placeholder"])) : createCommentVNode("", true)]), activeView.value === "overview" ? (openBlock(), createBlock(SubscriptionPanelContentWorkspace_default, { key: 0 })) : (openBlock(), createBlock(WorkspaceActivityContent_default, {
				key: 1,
				search: searchQuery.value
			}, null, 8, ["search"]))]);
		};
	}
});
//#endregion
//#region src/platform/workspace/components/dialogs/settings/WorkspaceMembersPanelContent.vue
var WorkspaceMembersPanelContent_default = /* @__PURE__ */ defineComponent({
	__name: "WorkspaceMembersPanelContent",
	setup(__props) {
		const { fetchMembers, fetchPendingInvites } = useTeamWorkspaceStore();
		const { workspaceRole } = useWorkspaceUI();
		onMounted(() => {
			Promise.allSettled([fetchMembers(), fetchPendingInvites()]);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(MembersPanelContent_default, { key: unref(workspaceRole) });
		};
	}
});
//#endregion
//#region src/platform/workspace/components/dialogs/settings/WorkspaceSettingsPanelContent.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "@container flex size-full min-h-0 flex-col" };
var _hoisted_2 = { class: "mb-6 flex items-center gap-4" };
var _hoisted_3 = { class: "text-3xl font-semibold text-base-foreground" };
//#endregion
//#region src/platform/workspace/components/dialogs/settings/WorkspaceSettingsPanelContent.vue
var WorkspaceSettingsPanelContent_default = /* @__PURE__ */ defineComponent({
	__name: "WorkspaceSettingsPanelContent",
	props: { section: {} },
	setup(__props) {
		const { workspaceName } = storeToRefs(useTeamWorkspaceStore());
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [
				createBaseVNode("header", _hoisted_2, [createVNode(WorkspaceProfilePic_default, {
					class: "size-12 text-3xl!",
					"workspace-name": unref(workspaceName)
				}, null, 8, ["workspace-name"]), createBaseVNode("h1", _hoisted_3, toDisplayString(unref(workspaceName)), 1)]),
				createVNode(BillingStatusBanner_default, { class: "mb-4" }),
				__props.section === "planCredits" ? (openBlock(), createBlock(PlanCreditsPanelContent_default, { key: 0 })) : __props.section === "members" ? (openBlock(), createBlock(WorkspaceMembersPanelContent_default, { key: 1 })) : (openBlock(), createBlock(PartnerNodeAccessPanel_default, { key: 2 }))
			]);
		};
	}
});
//#endregion
export { WorkspaceSettingsPanelContent_default as default };

//# sourceMappingURL=WorkspaceSettingsPanelContent-DJqoDyU6.js.map