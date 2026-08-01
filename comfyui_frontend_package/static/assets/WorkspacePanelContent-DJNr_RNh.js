import "./rolldown-runtime-C9Cmlsnw.js";
import { B as createTextVNode, Ht as unref, I as createElementBlock, M as computed, N as createBaseVNode, Nt as ref, P as createBlock, St as withCtx, U as defineComponent, V as createVNode, Wt as normalizeClass, at as openBlock, f as storeToRefs, qt as toDisplayString } from "./vendor-vue-core-oGuyqViA.js";
import { _ as TabsTrigger_default, b as TabsRoot_default, v as TabsList_default, y as TabsContent_default } from "./vendor-reka-ui-CLUGudFd.js";
import { t as cn } from "./src-C1FpYMFF.js";
import { ct as whenever } from "./vendor-vueuse-De7x5bAw.js";
import { Li as useTeamWorkspaceStore, ir as useWorkspaceUI } from "./settingStore-pm7IqVHI.js";
import { t as WorkspaceProfilePic_default } from "./WorkspaceProfilePic-LeJkcWgK.js";
import { t as SubscriptionPanelContentWorkspace_default } from "./SubscriptionPanelContentWorkspace-BpXuoLtJ.js";
import { n as useTeamPlan, r as BillingStatusBanner_default, t as MembersPanelContent_default } from "./MembersPanelContent-DNHyeWWb.js";
//#region src/platform/workspace/components/dialogs/settings/WorkspacePanelContent.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex size-full flex-col" };
var _hoisted_2 = { class: "mb-6 flex items-center gap-4" };
var _hoisted_3 = { class: "text-3xl font-semibold text-base-foreground" };
var tabTriggerBase = "flex items-center justify-center shrink-0 px-2.5 py-2 text-sm rounded-lg cursor-pointer transition-all duration-200 outline-hidden border-none";
var tabTriggerActive = "bg-interface-menu-component-surface-hovered text-text-primary font-bold";
var tabTriggerInactive = "bg-transparent text-text-secondary hover:bg-button-hover-surface focus:bg-button-hover-surface";
//#endregion
//#region src/platform/workspace/components/dialogs/settings/WorkspacePanelContent.vue
var WorkspacePanelContent_default = /* @__PURE__ */ defineComponent({
	__name: "WorkspacePanelContent",
	props: { defaultTab: { default: "plan" } },
	setup(__props) {
		const workspaceStore = useTeamWorkspaceStore();
		const { workspaceName, members } = storeToRefs(workspaceStore);
		const { fetchMembers, fetchPendingInvites } = workspaceStore;
		const { workspaceRole } = useWorkspaceUI();
		const { hasTeamPlan, isPlanLoading } = useTeamPlan();
		const activeTab = ref(__props.defaultTab);
		const showMembersTabCount = computed(() => hasTeamPlan.value && members.value.length > 1);
		whenever(() => hasTeamPlan.value && !isPlanLoading.value, () => Promise.allSettled([fetchMembers(), fetchPendingInvites()]), { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("header", _hoisted_2, [createVNode(WorkspaceProfilePic_default, {
				class: "size-12 text-3xl!",
				"workspace-name": unref(workspaceName)
			}, null, 8, ["workspace-name"]), createBaseVNode("h1", _hoisted_3, toDisplayString(unref(workspaceName)), 1)]), createVNode(unref(TabsRoot_default), {
				modelValue: activeTab.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activeTab.value = $event)
			}, {
				default: withCtx(() => [
					createVNode(unref(TabsList_default), { class: "flex items-center gap-2 pb-1" }, {
						default: withCtx(() => [createVNode(unref(TabsTrigger_default), {
							value: "plan",
							class: normalizeClass(unref(cn)(tabTriggerBase, activeTab.value === "plan" ? tabTriggerActive : tabTriggerInactive))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.tabs.planCredits")), 1)]),
							_: 1
						}, 8, ["class"]), createVNode(unref(TabsTrigger_default), {
							value: "members",
							class: normalizeClass(unref(cn)(tabTriggerBase, activeTab.value === "members" ? tabTriggerActive : tabTriggerInactive))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(showMembersTabCount.value ? _ctx.$t("workspacePanel.tabs.membersCount", { count: unref(members).length }) : _ctx.$t("workspacePanel.members.header")), 1)]),
							_: 1
						}, 8, ["class"])]),
						_: 1
					}),
					createVNode(BillingStatusBanner_default, { class: "mt-4" }),
					createVNode(unref(TabsContent_default), {
						value: "plan",
						class: "mt-4"
					}, {
						default: withCtx(() => [createVNode(SubscriptionPanelContentWorkspace_default)]),
						_: 1
					}),
					createVNode(unref(TabsContent_default), {
						value: "members",
						class: "mt-4"
					}, {
						default: withCtx(() => [(openBlock(), createBlock(MembersPanelContent_default, { key: unref(workspaceRole) }))]),
						_: 1
					})
				]),
				_: 1
			}, 8, ["modelValue"])]);
		};
	}
});
//#endregion
export { WorkspacePanelContent_default as default };

//# sourceMappingURL=WorkspacePanelContent-DJNr_RNh.js.map