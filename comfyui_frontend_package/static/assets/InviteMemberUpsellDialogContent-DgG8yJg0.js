import "./rolldown-runtime-C9Cmlsnw.js";
import { B as createTextVNode, Ht as unref, I as createElementBlock, N as createBaseVNode, St as withCtx, U as defineComponent, V as createVNode, at as openBlock, qt as toDisplayString } from "./vendor-vue-core-oGuyqViA.js";
import { t as Button_default } from "./Button-By8A3toz.js";
import { rr as useSubscriptionDialog, tr as useBillingContext } from "./settingStore-pm7IqVHI.js";
import { t as useDialogStore } from "./dialogStore-BAELBvsb.js";
//#region src/platform/workspace/components/dialogs/InviteMemberUpsellDialogContent.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex w-full max-w-[512px] flex-col rounded-2xl border border-border-default bg-base-background" };
var _hoisted_2 = { class: "flex h-12 items-center justify-between border-b border-border-default px-4" };
var _hoisted_3 = { class: "m-0 text-sm font-normal text-base-foreground" };
var _hoisted_4 = ["aria-label"];
var _hoisted_5 = { class: "flex flex-col gap-4 p-4" };
var _hoisted_6 = { class: "m-0 text-sm text-muted-foreground" };
var _hoisted_7 = { class: "flex items-center justify-end gap-4 p-4" };
//#endregion
//#region src/platform/workspace/components/dialogs/InviteMemberUpsellDialogContent.vue
var InviteMemberUpsellDialogContent_default = /* @__PURE__ */ defineComponent({
	__name: "InviteMemberUpsellDialogContent",
	setup(__props) {
		const dialogStore = useDialogStore();
		const { isActiveSubscription } = useBillingContext();
		const subscriptionDialog = useSubscriptionDialog();
		function onDismiss() {
			dialogStore.closeDialog({ key: "invite-member-upsell" });
		}
		function onUpgrade() {
			dialogStore.closeDialog({ key: "invite-member-upsell" });
			subscriptionDialog.show({
				planMode: "team",
				reason: "invite_member_upsell"
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [
				createBaseVNode("div", _hoisted_2, [createBaseVNode("h2", _hoisted_3, toDisplayString(unref(isActiveSubscription) ? _ctx.$t("workspacePanel.inviteUpsellDialog.titleSingleSeat") : _ctx.$t("workspacePanel.inviteUpsellDialog.titleNotSubscribed")), 1), createBaseVNode("button", {
					class: "focus-visible:ring-secondary-foreground cursor-pointer rounded-sm border-none bg-transparent p-0 text-muted-foreground transition-colors hover:text-base-foreground focus-visible:ring-1 focus-visible:outline-none",
					"aria-label": _ctx.$t("g.close"),
					onClick: onDismiss
				}, [..._cache[0] || (_cache[0] = [createBaseVNode("i", { class: "pi pi-times size-4" }, null, -1)])], 8, _hoisted_4)]),
				createBaseVNode("div", _hoisted_5, [createBaseVNode("p", _hoisted_6, toDisplayString(unref(isActiveSubscription) ? _ctx.$t("workspacePanel.inviteUpsellDialog.messageSingleSeat") : _ctx.$t("workspacePanel.inviteUpsellDialog.messageNotSubscribed")), 1)]),
				createBaseVNode("div", _hoisted_7, [createVNode(Button_default, {
					variant: "muted-textonly",
					onClick: onDismiss
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("g.cancel")), 1)]),
					_: 1
				}), createVNode(Button_default, {
					variant: "primary",
					size: "lg",
					onClick: onUpgrade
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.inviteUpsellDialog.upgradeToTeam")), 1)]),
					_: 1
				})])
			]);
		};
	}
});
//#endregion
export { InviteMemberUpsellDialogContent_default as default };

//# sourceMappingURL=InviteMemberUpsellDialogContent-DgG8yJg0.js.map