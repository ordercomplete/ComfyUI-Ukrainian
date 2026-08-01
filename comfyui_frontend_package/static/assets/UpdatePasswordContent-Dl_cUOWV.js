import "./rolldown-runtime-C9Cmlsnw.js";
import { a as script, r as zodResolver } from "./vendor-primevue-T0qpAVQN.js";
import { B as createTextVNode, Ht as unref, Nt as ref, P as createBlock, St as withCtx, U as defineComponent, V as createVNode, at as openBlock, qt as toDisplayString } from "./vendor-vue-core-oGuyqViA.js";
import { t as Button_default } from "./Button-By8A3toz.js";
import { dr as useAuthActions } from "./settingStore-pm7IqVHI.js";
import { i as updatePasswordSchema } from "./signInSchema-Dmokl1xj.js";
import { t as PasswordFields_default } from "./PasswordFields-mDnf1EDI.js";
//#endregion
//#region src/components/dialog/content/UpdatePasswordContent.vue
var UpdatePasswordContent_default = /* @__PURE__ */ defineComponent({
	__name: "UpdatePasswordContent",
	props: { onSuccess: { type: Function } },
	setup(__props) {
		const authActions = useAuthActions();
		const loading = ref(false);
		const onSubmit = async (event) => {
			if (event.valid) {
				loading.value = true;
				try {
					await authActions.updatePassword(event.values.password);
					__props.onSuccess();
				} finally {
					loading.value = false;
				}
			}
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(script), {
				"data-testid": "update-password-dialog",
				class: "flex w-96 flex-col gap-6",
				resolver: unref(zodResolver)(unref(updatePasswordSchema)),
				onSubmit
			}, {
				default: withCtx(() => [createVNode(PasswordFields_default), createVNode(Button_default, {
					type: "submit",
					class: "mt-4 h-10 font-medium",
					loading: loading.value
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("userSettings.updatePassword")), 1)]),
					_: 1
				}, 8, ["loading"])]),
				_: 1
			}, 8, ["resolver"]);
		};
	}
});
//#endregion
export { UpdatePasswordContent_default as default };

//# sourceMappingURL=UpdatePasswordContent-Dl_cUOWV.js.map