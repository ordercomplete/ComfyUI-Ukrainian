import "./rolldown-runtime-C9Cmlsnw.js";
import { X as useToast } from "./vendor-primevue-T0qpAVQN.js";
import { B as createTextVNode, D as Fragment, F as createCommentVNode, Ht as unref, I as createElementBlock, M as computed, Nt as ref, P as createBlock, St as withCtx, U as defineComponent, V as createVNode, Wt as normalizeClass, at as openBlock, mt as useId, qt as toDisplayString, st as renderList } from "./vendor-vue-core-oGuyqViA.js";
import { r as useI18n } from "./vendor-i18n-CPpp7rsM.js";
import { t as cn } from "./src-C1FpYMFF.js";
import { t as Button_default } from "./Button-By8A3toz.js";
import { n as useTelemetry } from "./telemetry-C8VBI5GP.js";
import { Jr as TagsInputItemText_default, Li as useTeamWorkspaceStore, Qr as TagsInput_default, Xr as TagsInputItem_default, Yr as TagsInputItemDelete_default, Zr as TagsInputInput_default } from "./settingStore-pm7IqVHI.js";
//#region src/platform/workspace/utils/inviteEmails.ts
var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var EMAIL_DELIMITER = /[,\s]+/;
function normalizeEmail(value) {
	return value.trim().toLowerCase();
}
function isValidEmail(email) {
	return EMAIL_REGEX.test(email);
}
/** Normalize, drop blanks, dedupe (case-insensitive), then clamp to `maxSeats`. */
function sanitizeInviteEmails(values, maxSeats) {
	const unique = [...new Set(values.map(normalizeEmail).filter(Boolean))];
	return unique.length > maxSeats ? unique.slice(0, maxSeats) : unique;
}
//#endregion
//#region src/platform/workspace/components/InviteMembersForm.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex flex-col gap-2" };
var _hoisted_2 = ["id"];
var _hoisted_3 = ["id"];
//#endregion
//#region src/platform/workspace/components/InviteMembersForm.vue
var InviteMembersForm_default = /* @__PURE__ */ defineComponent({
	__name: "InviteMembersForm",
	props: {
		submitLabel: {},
		placeholder: {},
		source: {},
		cancelLabel: {},
		maxSeats: { default: () => Number.POSITIVE_INFINITY },
		showSubmit: {
			type: Boolean,
			default: true
		},
		autoFocus: {
			type: Boolean,
			default: false
		},
		tagsInputClass: { default: "min-h-10 w-full bg-tertiary-background px-3 focus-within:bg-tertiary-background hover:bg-tertiary-background-hover" }
	},
	emits: ["submitted", "cancel"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const emit = __emit;
		const { t } = useI18n();
		const toast = useToast();
		const telemetry = useTelemetry();
		const workspaceStore = useTeamWorkspaceStore();
		const emails = ref([]);
		const invitedEmails = ref([]);
		const loading = ref(false);
		const invalidEmailsHintId = useId();
		const seatLimitHintId = useId();
		const invalidEmails = computed(() => emails.value.filter((email) => !isValidEmail(email)));
		const isAtSeatLimit = computed(() => emails.value.length >= __props.maxSeats);
		const canSubmit = computed(() => emails.value.length > 0 && emails.value.length <= __props.maxSeats && invalidEmails.value.length === 0);
		const describedBy = computed(() => [invalidEmails.value.length > 0 ? invalidEmailsHintId : void 0, isAtSeatLimit.value ? seatLimitHintId : void 0].filter(Boolean).join(" ") || void 0);
		function onEmailsUpdate(value) {
			emails.value = sanitizeInviteEmails(value, __props.maxSeats);
		}
		async function onSubmit() {
			if (loading.value || !canSubmit.value) return;
			loading.value = true;
			try {
				const emailSnapshot = [...emails.value];
				const results = await Promise.allSettled(emailSnapshot.map((email) => workspaceStore.createInvite(email)));
				const failedEmails = emailSnapshot.filter((_, index) => results[index].status === "rejected");
				const successfulEmails = emailSnapshot.filter((_, index) => results[index].status === "fulfilled");
				if (successfulEmails.length > 0) {
					invitedEmails.value.push(...successfulEmails);
					telemetry?.trackWorkspaceInviteSent({
						source: __props.source,
						count: successfulEmails.length
					});
				}
				if (failedEmails.length === 0) {
					emit("submitted", [...invitedEmails.value]);
					return;
				}
				telemetry?.trackWorkspaceInviteFailed({
					source: __props.source,
					attempted_count: emailSnapshot.length,
					failed_count: failedEmails.length
				});
				emails.value = failedEmails;
				toast.add({
					severity: "error",
					summary: t("workspacePanel.inviteMemberDialog.failedCount", failedEmails.length),
					life: 5e3
				});
			} finally {
				loading.value = false;
			}
		}
		__expose({
			submit: onSubmit,
			get canSubmit() {
				return canSubmit.value;
			},
			get loading() {
				return loading.value;
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [
				createVNode(TagsInput_default, {
					"always-editing": "",
					"add-on-paste": "",
					"add-on-blur": "",
					delimiter: unref(EMAIL_DELIMITER),
					"convert-value": unref(normalizeEmail),
					"model-value": emails.value,
					class: normalizeClass(__props.tagsInputClass),
					"onUpdate:modelValue": onEmailsUpdate
				}, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(emails.value, (email) => {
						return openBlock(), createBlock(TagsInputItem_default, {
							key: email,
							value: email,
							class: normalizeClass(unref(cn)("rounded-full", !unref(isValidEmail)(email) && "bg-danger/20 text-danger"))
						}, {
							default: withCtx(() => [createVNode(TagsInputItemText_default), createVNode(TagsInputItemDelete_default)]),
							_: 1
						}, 8, ["value", "class"]);
					}), 128)), createVNode(TagsInputInput_default, {
						"auto-focus": __props.autoFocus,
						class: "min-w-0 text-sm",
						"aria-label": __props.placeholder,
						"aria-describedby": describedBy.value,
						placeholder: emails.value.length === 0 ? __props.placeholder : void 0
					}, null, 8, [
						"auto-focus",
						"aria-label",
						"aria-describedby",
						"placeholder"
					])]),
					_: 1
				}, 8, [
					"delimiter",
					"convert-value",
					"model-value",
					"class"
				]),
				invalidEmails.value.length > 0 ? (openBlock(), createElementBlock("p", {
					key: 0,
					id: unref(invalidEmailsHintId),
					role: "alert",
					class: "text-danger m-0 text-xs"
				}, toDisplayString(_ctx.$t("workspacePanel.inviteMemberDialog.invalidEmailCount", invalidEmails.value.length)), 9, _hoisted_2)) : createCommentVNode("", true),
				isAtSeatLimit.value ? (openBlock(), createElementBlock("p", {
					key: 1,
					id: unref(seatLimitHintId),
					"aria-live": "polite",
					class: "m-0 text-xs text-muted-foreground"
				}, toDisplayString(_ctx.$t("workspacePanel.inviteMemberDialog.seatLimitReached", __props.maxSeats)), 9, _hoisted_3)) : createCommentVNode("", true),
				__props.showSubmit ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(unref(cn)("flex", __props.cancelLabel ? "items-center justify-end gap-4" : "flex-col"))
				}, [__props.cancelLabel ? (openBlock(), createBlock(Button_default, {
					key: 0,
					variant: "muted-textonly",
					size: "lg",
					onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("cancel"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.cancelLabel), 1)]),
					_: 1
				})) : createCommentVNode("", true), createVNode(Button_default, {
					variant: "secondary",
					size: "lg",
					class: normalizeClass(unref(cn)(!__props.cancelLabel && "w-full rounded-lg")),
					loading: loading.value,
					disabled: !canSubmit.value,
					"aria-busy": loading.value,
					"aria-label": loading.value ? _ctx.$t("g.loading") : __props.submitLabel,
					onClick: onSubmit
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.submitLabel), 1)]),
					_: 1
				}, 8, [
					"class",
					"loading",
					"disabled",
					"aria-busy",
					"aria-label"
				])], 2)) : createCommentVNode("", true)
			]);
		};
	}
});
//#endregion
export { InviteMembersForm_default as t };

//# sourceMappingURL=InviteMembersForm-Bm-vAKdv.js.map