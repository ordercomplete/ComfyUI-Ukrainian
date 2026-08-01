import "./rolldown-runtime-C9Cmlsnw.js";
import { i as script, y as script$1 } from "./vendor-primevue-T0qpAVQN.js";
import { B as createTextVNode, D as Fragment, F as createCommentVNode, Ht as unref, I as createElementBlock, M as computed, N as createBaseVNode, Nt as ref, St as withCtx, U as defineComponent, V as createVNode, Wt as normalizeClass, at as openBlock, qt as toDisplayString } from "./vendor-vue-core-oGuyqViA.js";
import { r as useI18n } from "./vendor-i18n-CPpp7rsM.js";
//#region src/components/dialog/content/signin/PasswordFields.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "mb-2 flex items-center justify-between" };
var _hoisted_2 = {
	class: "text-base font-medium opacity-80",
	for: "comfy-org-sign-up-password"
};
var _hoisted_3 = { class: "flex flex-col gap-1" };
var _hoisted_4 = {
	key: 0,
	class: "text-sm"
};
var _hoisted_5 = { class: "mt-1 space-y-1" };
var _hoisted_6 = {
	class: "mb-2 text-base font-medium opacity-80",
	for: "comfy-org-sign-up-confirm-password"
};
var _hoisted_7 = {
	key: 0,
	class: "text-red-500"
};
//#endregion
//#region src/components/dialog/content/signin/PasswordFields.vue
var PasswordFields_default = /* @__PURE__ */ defineComponent({
	__name: "PasswordFields",
	setup(__props) {
		const { t } = useI18n();
		const password = ref("");
		const passwordChecks = computed(() => ({
			length: password.value.length >= 8 && password.value.length <= 32,
			uppercase: /[A-Z]/.test(password.value),
			lowercase: /[a-z]/.test(password.value),
			number: /\d/.test(password.value),
			special: /[^A-Za-z0-9]/.test(password.value)
		}));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(script), {
				name: "password",
				class: "flex flex-col gap-2"
			}, {
				default: withCtx(($field) => [
					createBaseVNode("div", _hoisted_1, [createBaseVNode("label", _hoisted_2, toDisplayString(unref(t)("auth.signup.passwordLabel")), 1)]),
					createVNode(unref(script$1), {
						modelValue: password.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => password.value = $event),
						"input-id": "comfy-org-sign-up-password",
						"pt:pc-input-text:root:autocomplete": "new-password",
						name: "password",
						feedback: false,
						"toggle-mask": "",
						placeholder: unref(t)("auth.signup.passwordPlaceholder"),
						class: normalizeClass([{ "p-invalid": $field.invalid }, "h-10"]),
						fluid: ""
					}, null, 8, [
						"modelValue",
						"placeholder",
						"class"
					]),
					createBaseVNode("div", _hoisted_3, [$field.dirty || $field.invalid ? (openBlock(), createElementBlock("small", _hoisted_4, [createTextVNode(toDisplayString(unref(t)("validation.password.requirements")) + ": ", 1), createBaseVNode("ul", _hoisted_5, [
						createBaseVNode("li", { class: normalizeClass({ "text-red-500": !passwordChecks.value.length }) }, toDisplayString(unref(t)("validation.password.minLength")), 3),
						createBaseVNode("li", { class: normalizeClass({ "text-red-500": !passwordChecks.value.uppercase }) }, toDisplayString(unref(t)("validation.password.uppercase")), 3),
						createBaseVNode("li", { class: normalizeClass({ "text-red-500": !passwordChecks.value.lowercase }) }, toDisplayString(unref(t)("validation.password.lowercase")), 3),
						createBaseVNode("li", { class: normalizeClass({ "text-red-500": !passwordChecks.value.number }) }, toDisplayString(unref(t)("validation.password.number")), 3),
						createBaseVNode("li", { class: normalizeClass({ "text-red-500": !passwordChecks.value.special }) }, toDisplayString(unref(t)("validation.password.special")), 3)
					])])) : createCommentVNode("", true)])
				]),
				_: 1
			}), createVNode(unref(script), {
				name: "confirmPassword",
				class: "flex flex-col gap-2"
			}, {
				default: withCtx(($field) => [
					createBaseVNode("label", _hoisted_6, toDisplayString(unref(t)("auth.login.confirmPasswordLabel")), 1),
					createVNode(unref(script$1), {
						name: "confirmPassword",
						"input-id": "comfy-org-sign-up-confirm-password",
						"pt:pc-input-text:root:autocomplete": "new-password",
						feedback: false,
						"toggle-mask": "",
						placeholder: unref(t)("auth.login.confirmPasswordPlaceholder"),
						class: normalizeClass([{ "p-invalid": $field.invalid }, "h-10"]),
						fluid: ""
					}, null, 8, ["placeholder", "class"]),
					$field.error ? (openBlock(), createElementBlock("small", _hoisted_7, toDisplayString($field.error.message), 1)) : createCommentVNode("", true)
				]),
				_: 1
			})], 64);
		};
	}
});
//#endregion
export { PasswordFields_default as t };

//# sourceMappingURL=PasswordFields-mDnf1EDI.js.map