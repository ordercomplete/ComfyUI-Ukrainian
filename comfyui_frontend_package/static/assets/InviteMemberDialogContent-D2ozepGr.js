import "./rolldown-runtime-C9Cmlsnw.js";
import { B as createTextVNode, D as Fragment, I as createElementBlock, M as computed, N as createBaseVNode, Nt as ref, St as withCtx, U as defineComponent, V as createVNode, at as openBlock, qt as toDisplayString } from "./vendor-vue-core-oGuyqViA.js";
import { t as Button_default } from "./Button-By8A3toz.js";
import { Li as useTeamWorkspaceStore } from "./settingStore-pm7IqVHI.js";
import { t as useDialogStore } from "./dialogStore-BAELBvsb.js";
import { t as InviteMembersForm_default } from "./InviteMembersForm-Bm-vAKdv.js";
//#region src/platform/workspace/components/dialogs/InviteMemberDialogContent.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex w-full max-w-lg flex-col rounded-2xl border border-border-default bg-base-background" };
var _hoisted_2 = { class: "flex h-12 items-center justify-between border-b border-border-default px-4" };
var _hoisted_3 = { class: "m-0 text-sm font-normal text-base-foreground" };
var _hoisted_4 = ["aria-label"];
var _hoisted_5 = { class: "flex flex-col gap-2 p-4" };
var _hoisted_6 = { class: "flex items-center justify-end gap-4 p-4" };
var _hoisted_7 = { class: "p-4" };
var _hoisted_8 = { class: "m-0 text-sm/5 text-muted-foreground" };
var _hoisted_9 = { class: "flex items-center justify-end p-4" };
//#endregion
//#region src/platform/workspace/components/dialogs/InviteMemberDialogContent.vue
var InviteMemberDialogContent_default = /* @__PURE__ */ defineComponent({
	__name: "InviteMemberDialogContent",
	setup(__props) {
		const dialogStore = useDialogStore();
		const workspaceStore = useTeamWorkspaceStore();
		const step = ref("form");
		const invitedEmails = ref([]);
		const inviteForm = ref();
		const invitableSeats = computed(() => Math.max(0, 30 - workspaceStore.totalMemberSlots));
		const canSubmit = computed(() => inviteForm.value?.canSubmit ?? false);
		const loading = computed(() => inviteForm.value?.loading ?? false);
		function onClose() {
			dialogStore.closeDialog({ key: "invite-member" });
		}
		function handleInvite() {
			inviteForm.value?.submit()?.catch(console.error);
		}
		function onInvited(emails) {
			invitedEmails.value = emails;
			step.value = "invited";
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [createBaseVNode("h2", _hoisted_3, toDisplayString(_ctx.$t("workspacePanel.inviteMemberDialog.title")), 1), createBaseVNode("button", {
				class: "focus-visible:ring-secondary-foreground cursor-pointer rounded-sm border-none bg-transparent p-0 text-muted-foreground transition-colors hover:text-base-foreground focus-visible:ring-1 focus-visible:outline-none",
				"aria-label": _ctx.$t("g.close"),
				onClick: onClose
			}, [..._cache[0] || (_cache[0] = [createBaseVNode("i", { class: "pi pi-times size-4" }, null, -1)])], 8, _hoisted_4)]), step.value === "form" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("div", _hoisted_5, [createVNode(InviteMembersForm_default, {
				ref_key: "inviteForm",
				ref: inviteForm,
				"auto-focus": "",
				"show-submit": false,
				source: "settings_members",
				"submit-label": _ctx.$t("workspacePanel.invite"),
				placeholder: _ctx.$t("workspacePanel.inviteMemberDialog.placeholder"),
				"max-seats": invitableSeats.value,
				"tags-input-class": "min-h-10 w-full bg-secondary-background",
				onSubmitted: onInvited
			}, null, 8, [
				"submit-label",
				"placeholder",
				"max-seats"
			])]), createBaseVNode("div", _hoisted_6, [createVNode(Button_default, {
				variant: "muted-textonly",
				onClick: onClose
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("g.cancel")), 1)]),
				_: 1
			}), createVNode(Button_default, {
				variant: "secondary",
				size: "lg",
				loading: loading.value,
				disabled: !canSubmit.value,
				onClick: handleInvite
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.invite")), 1)]),
				_: 1
			}, 8, ["loading", "disabled"])])], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createBaseVNode("div", _hoisted_7, [createBaseVNode("p", _hoisted_8, toDisplayString(_ctx.$t("workspacePanel.inviteMemberDialog.invitedMessage", { emails: invitedEmails.value.join(", ") }, invitedEmails.value.length)), 1)]), createBaseVNode("div", _hoisted_9, [createVNode(Button_default, {
				variant: "secondary",
				size: "lg",
				onClick: onClose
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("g.close")), 1)]),
				_: 1
			})])], 64))]);
		};
	}
});
//#endregion
export { InviteMemberDialogContent_default as default };

//# sourceMappingURL=InviteMemberDialogContent-D2ozepGr.js.map