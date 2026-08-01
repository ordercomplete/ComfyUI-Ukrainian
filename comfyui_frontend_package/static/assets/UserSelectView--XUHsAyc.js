import "./rolldown-runtime-C9Cmlsnw.js";
import { $ as script, D as script$1, Y as script$2, ot as script$3 } from "./vendor-primevue-T0qpAVQN.js";
import { B as createTextVNode, C as vShow, Ct as withDirectives, F as createCommentVNode, Ht as unref, I as createElementBlock, M as computed, N as createBaseVNode, Nt as ref, P as createBlock, St as withCtx, U as defineComponent, V as createVNode, Wt as normalizeClass, at as openBlock, c as useRouter, ct as renderSlot, nt as onMounted, qt as toDisplayString, w as withKeys } from "./vendor-vue-core-oGuyqViA.js";
import { t as Button_default } from "./Button-By8A3toz.js";
import { t as useUserStore } from "./userStore-rNaWLZbN.js";
import { n as isNativeWindow } from "./envUtil-DDRnAAj_.js";
//#region src/views/templates/BaseViewTemplate.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { class: "flex w-full grow items-center justify-center overflow-auto" };
//#endregion
//#region src/views/templates/BaseViewTemplate.vue
var BaseViewTemplate_default = /* @__PURE__ */ defineComponent({
	__name: "BaseViewTemplate",
	props: { dark: {
		type: Boolean,
		default: false
	} },
	setup(__props) {
		const topMenuRef = ref(null);
		onMounted(async () => {});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(["flex h-svh w-screen flex-col font-sans", [__props.dark ? "dark-theme bg-neutral-900 text-neutral-300" : "bg-neutral-300 text-neutral-900"]]) }, [withDirectives(createBaseVNode("div", {
				ref_key: "topMenuRef",
				ref: topMenuRef,
				class: "app-drag h-(--comfy-topbar-height) w-full"
			}, null, 512), [[vShow, unref(isNativeWindow)()]]), createBaseVNode("div", _hoisted_1$1, [renderSlot(_ctx.$slots, "default")])], 2);
		};
	}
});
//#endregion
//#region src/views/UserSelectView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	id: "comfy-user-selection",
	class: "relative min-w-84 rounded-lg bg-(--comfy-menu-bg) p-5 px-10 shadow-lg"
};
var _hoisted_2 = { class: "flex w-full flex-col items-center" };
var _hoisted_3 = { class: "flex w-full flex-col gap-2" };
var _hoisted_4 = { for: "new-user-input" };
var _hoisted_5 = { class: "flex w-full flex-col gap-2" };
var _hoisted_6 = { for: "existing-user-select" };
var _hoisted_7 = { class: "mt-5" };
//#endregion
//#region src/views/UserSelectView.vue
var UserSelectView_default = /* @__PURE__ */ defineComponent({
	__name: "UserSelectView",
	setup(__props) {
		const userStore = useUserStore();
		const router = useRouter();
		const selectedUser = ref(null);
		const newUsername = ref("");
		const loginError = ref("");
		const createNewUser = computed(() => newUsername.value.trim() !== "");
		const newUserExistsError = computed(() => {
			return userStore.users.find((user) => user.username === newUsername.value) ? `User "${newUsername.value}" already exists` : "";
		});
		const error = computed(() => newUserExistsError.value || loginError.value);
		const login = async () => {
			try {
				const user = createNewUser.value ? await userStore.createUser(newUsername.value) : selectedUser.value;
				if (!user) throw new Error("No user selected");
				await userStore.login(user);
				await router.push("/");
			} catch (err) {
				loginError.value = err instanceof Error ? err.message : JSON.stringify(err);
			}
		};
		onMounted(async () => {
			document.getElementById("splash-loader")?.remove();
			await userStore.initialize();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(BaseViewTemplate_default, { dark: "" }, {
				default: withCtx(() => [createBaseVNode("main", _hoisted_1, [_cache[2] || (_cache[2] = createBaseVNode("h1", { class: "my-2.5 mb-7 font-normal" }, "ComfyUI", -1)), createBaseVNode("div", _hoisted_2, [
					createBaseVNode("div", _hoisted_3, [createBaseVNode("label", _hoisted_4, toDisplayString(_ctx.$t("userSelect.newUser")) + ":", 1), createVNode(unref(script), {
						id: "new-user-input",
						modelValue: newUsername.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => newUsername.value = $event),
						placeholder: _ctx.$t("userSelect.enterUsername"),
						onKeyup: withKeys(login, ["enter"])
					}, null, 8, ["modelValue", "placeholder"])]),
					createVNode(unref(script$1)),
					createBaseVNode("div", _hoisted_5, [
						createBaseVNode("label", _hoisted_6, toDisplayString(_ctx.$t("userSelect.existingUser")) + ":", 1),
						createVNode(unref(script$2), {
							modelValue: selectedUser.value,
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedUser.value = $event),
							class: "w-full",
							"input-id": "existing-user-select",
							options: unref(userStore).users,
							"option-label": "username",
							placeholder: _ctx.$t("userSelect.selectUser"),
							disabled: createNewUser.value
						}, null, 8, [
							"modelValue",
							"options",
							"placeholder",
							"disabled"
						]),
						error.value ? (openBlock(), createBlock(unref(script$3), {
							key: 0,
							severity: "error"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(error.value), 1)]),
							_: 1
						})) : createCommentVNode("", true)
					]),
					createBaseVNode("footer", _hoisted_7, [createVNode(Button_default, { onClick: login }, {
						default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("userSelect.next")), 1)]),
						_: 1
					})])
				])])]),
				_: 1
			});
		};
	}
});
//#endregion
export { UserSelectView_default as default };

//# sourceMappingURL=UserSelectView--XUHsAyc.js.map