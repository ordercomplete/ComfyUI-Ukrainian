import "./rolldown-runtime-C9Cmlsnw.js";
import { B as createTextVNode, Ct as withDirectives, D as Fragment, F as createCommentVNode, Ht as unref, I as createElementBlock, J as inject, M as computed, N as createBaseVNode, Nt as ref, Ot as isRef, P as createBlock, St as withCtx, T as withModifiers, U as defineComponent, V as createVNode, Wt as normalizeClass, X as mergeModels, at as openBlock, ht as useModel, nt as onMounted, ot as provide, qt as toDisplayString, rt as onUnmounted, st as renderList, ut as resolveDirective, vt as watch } from "./vendor-vue-core-oGuyqViA.js";
import { dt as PopoverTrigger_default } from "./vendor-reka-ui-CLUGudFd.js";
import { r as useI18n } from "./vendor-i18n-CPpp7rsM.js";
import { t as cn } from "./src-C1FpYMFF.js";
import { t as Button_default } from "./Button-By8A3toz.js";
import { y as useElementSize } from "./vendor-vueuse-De7x5bAw.js";
import { t as useToastStore } from "./toastStore-D7DQZkvm.js";
import { h as getExportFormatOptions, ka as resolveNode, m as SUPPORTED_HDRI_EXTENSIONS_ACCEPT, n as useSettingStore, nn as PopoverContent_default, p as SUPPORTED_HDRI_EXTENSIONS, rn as Popover_default, vi as LoadingOverlay_default } from "./settingStore-pm7IqVHI.js";
import { t as useDialogStore } from "./dialogStore-BAELBvsb.js";
import { t as Slider_default } from "./Slider-CDv5K1AE.js";
import { t as AnimationControls_default } from "./AnimationControls-DXzINbnL.js";
import { n as useLoad3dDrag, t as Load3dViewerContent_default } from "./Load3dViewerContent-X9d0nI3p.js";
import { t as useLoad3dService } from "./load3dService-DMEySLTa.js";
import { o as useLoad3d } from "./useLoad3d-DQeWn-fO.js";
//#region src/components/load3d/menubar/menuBarStyles.ts
var chipClass = "flex shrink-0 items-center gap-1.5 rounded-lg border-0 bg-interface-menu-surface px-2.5 py-1 text-sm text-base-foreground outline-none transition-colors hover:bg-button-active-surface focus-visible:ring-1 focus-visible:ring-ring";
var iconBtnClass = "flex size-8 items-center justify-center rounded-md border-0 bg-transparent text-base-foreground outline-none transition-colors hover:bg-button-hover-surface focus-visible:ring-1 focus-visible:ring-ring";
var panelClass = "w-48 max-h-80 overflow-y-auto flex flex-col gap-0.5 p-1.5 rounded-lg border-border-default bg-interface-menu-surface shadow-interface";
var rowClass = "flex w-full cursor-pointer items-center rounded-md border-0 bg-transparent px-2 py-1.5 text-left text-sm text-base-foreground outline-none hover:bg-button-hover-surface focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-inset";
function actionClass(active) {
	return cn("focus-visible:ring-ring flex shrink-0 items-center gap-1.5 rounded-md border-0 bg-transparent px-2 py-1 text-sm text-base-foreground transition-colors outline-none hover:bg-button-hover-surface focus-visible:ring-1", active && "bg-button-active-surface");
}
function tip(label) {
	return {
		value: label,
		showDelay: 300
	};
}
//#endregion
//#region src/components/load3d/menubar/usePopoverExclusivity.ts
var openPopoverKey = Symbol("load3dOpenPopover");
/**
* Keeps Load3D menubar popovers mutually exclusive. `@pointerdown.stop` on the
* Load3D container blocks reka-ui's document-level outside-pointerdown
* dismissal, so sibling popovers cannot close each other on their own — on
* Safari not even via the focus-outside fallback, because clicking a button
* there does not focus it.
*
* Call once per component; the returned factory yields a writable `open`
* binding per popover id. The open-popover id is shared with ancestor scopes
* via provide/inject, so exclusivity spans the whole menubar.
*/
function usePopoverExclusivity() {
	const openPopover = inject(openPopoverKey, null) ?? ref(null);
	provide(openPopoverKey, openPopover);
	return function exclusivePopover(id) {
		return computed({
			get: () => openPopover.value === id,
			set: (open) => {
				if (open) openPopover.value = id;
				else if (openPopover.value === id) openPopover.value = null;
			}
		});
	};
}
//#endregion
//#region src/components/load3d/menubar/CameraMenuGroup.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$10 = ["aria-label"];
var _hoisted_2$9 = { key: 0 };
var _hoisted_3$7 = ["aria-label"];
var _hoisted_4$7 = { key: 0 };
var _hoisted_5$7 = { class: "flex flex-col gap-2 p-1" };
var _hoisted_6$6 = { class: "text-sm text-base-foreground" };
//#endregion
//#region src/components/load3d/menubar/CameraMenuGroup.vue
var CameraMenuGroup_default = /* @__PURE__ */ defineComponent({
	__name: "CameraMenuGroup",
	props: /*@__PURE__*/ mergeModels({ compact: {
		type: Boolean,
		default: false
	} }, {
		"config": {},
		"configModifiers": {}
	}),
	emits: ["update:config"],
	setup(__props) {
		const config = useModel(__props, "config");
		const { t } = useI18n();
		const fovOpen = usePopoverExclusivity()("camera-fov");
		const cameraType = computed(() => config.value?.cameraType);
		const isPerspective = computed(() => cameraType.value === "perspective");
		const cameraTypeLabel = computed(() => cameraType.value ? t(`load3d.cameraType.${cameraType.value}`) : "");
		const fov = computed(() => config.value?.fov ?? 0);
		function switchCamera() {
			if (!config.value) return;
			config.value.cameraType = config.value.cameraType === "perspective" ? "orthographic" : "perspective";
		}
		function setFov(value) {
			if (config.value && value?.length) config.value.fov = value[0];
		}
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock(Fragment, null, [withDirectives((openBlock(), createElementBlock("button", {
				class: normalizeClass(unref(actionClass)(false)),
				type: "button",
				"aria-label": __props.compact ? unref(t)("load3d.menuBar.switchProjection") : void 0,
				onClick: switchCamera
			}, [_cache[1] || (_cache[1] = createBaseVNode("i", { class: "icon-[lucide--camera] size-4" }, null, -1)), !__props.compact ? (openBlock(), createElementBlock("span", _hoisted_2$9, toDisplayString(cameraTypeLabel.value), 1)) : createCommentVNode("", true)], 10, _hoisted_1$10)), [[
				_directive_tooltip,
				unref(tip)(unref(t)("load3d.menuBar.switchProjection")),
				void 0,
				{ bottom: true }
			]]), isPerspective.value ? (openBlock(), createBlock(Popover_default, {
				key: 0,
				open: unref(fovOpen),
				"onUpdate:open": _cache[0] || (_cache[0] = ($event) => isRef(fovOpen) ? fovOpen.value = $event : null)
			}, {
				default: withCtx(() => [createVNode(unref(PopoverTrigger_default), { "as-child": "" }, {
					default: withCtx(() => [withDirectives((openBlock(), createElementBlock("button", {
						class: normalizeClass(unref(actionClass)(false)),
						type: "button",
						"aria-label": __props.compact ? unref(t)("load3d.menuBar.fov") : void 0
					}, [_cache[2] || (_cache[2] = createBaseVNode("i", { class: "icon-[lucide--focus] size-4" }, null, -1)), !__props.compact ? (openBlock(), createElementBlock("span", _hoisted_4$7, toDisplayString(unref(t)("load3d.menuBar.fov")), 1)) : createCommentVNode("", true)], 10, _hoisted_3$7)), [[
						_directive_tooltip,
						unref(tip)(unref(t)("load3d.menuBar.fov")),
						void 0,
						{ bottom: true }
					]])]),
					_: 1
				}), createVNode(PopoverContent_default, {
					side: "bottom",
					align: "start",
					"side-offset": 8,
					class: normalizeClass(unref(cn)(unref(panelClass), "w-56"))
				}, {
					default: withCtx(() => [createBaseVNode("div", _hoisted_5$7, [createBaseVNode("span", _hoisted_6$6, toDisplayString(unref(t)("load3d.fov")), 1), createVNode(Slider_default, {
						"model-value": [fov.value],
						min: 10,
						max: 150,
						step: 1,
						class: "w-full",
						"onUpdate:modelValue": setFov
					}, null, 8, ["model-value"])])]),
					_: 1
				}, 8, ["class"])]),
				_: 1
			}, 8, ["open"])) : createCommentVNode("", true)], 64);
		};
	}
});
//#endregion
//#region src/components/load3d/menubar/GizmoMenuGroup.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$9 = ["aria-pressed", "aria-label"];
var _hoisted_2$8 = { key: 0 };
var _hoisted_3$6 = ["aria-pressed", "aria-label"];
var _hoisted_4$6 = { key: 0 };
var _hoisted_5$6 = ["aria-pressed", "aria-label"];
var _hoisted_6$5 = { key: 0 };
var _hoisted_7$5 = ["aria-pressed", "aria-label"];
var _hoisted_8$4 = { key: 0 };
var _hoisted_9$2 = ["aria-label"];
var _hoisted_10$1 = { key: 0 };
//#endregion
//#region src/components/load3d/menubar/GizmoMenuGroup.vue
var GizmoMenuGroup_default = /* @__PURE__ */ defineComponent({
	__name: "GizmoMenuGroup",
	props: /*@__PURE__*/ mergeModels({ compact: {
		type: Boolean,
		default: false
	} }, {
		"config": {},
		"configModifiers": {}
	}),
	emits: /*@__PURE__*/ mergeModels([
		"toggleGizmo",
		"setGizmoMode",
		"resetGizmoTransform"
	], ["update:config"]),
	setup(__props, { emit: __emit }) {
		const config = useModel(__props, "config");
		const emit = __emit;
		const { t } = useI18n();
		const gizmoEnabled = computed(() => config.value?.gizmo?.enabled ?? false);
		const gizmoMode = computed(() => config.value?.gizmo?.mode ?? "translate");
		function toggleGizmo() {
			const gizmo = config.value?.gizmo;
			if (!gizmo) return;
			gizmo.enabled = !gizmo.enabled;
			emit("toggleGizmo", gizmo.enabled);
		}
		function setGizmoMode(mode) {
			const gizmo = config.value?.gizmo;
			if (!gizmo) return;
			gizmo.mode = mode;
			emit("setGizmoMode", mode);
		}
		function resetGizmoTransform() {
			emit("resetGizmoTransform");
		}
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock(Fragment, null, [withDirectives((openBlock(), createElementBlock("button", {
				class: normalizeClass(unref(actionClass)(gizmoEnabled.value)),
				"aria-pressed": gizmoEnabled.value,
				type: "button",
				"aria-label": __props.compact ? unref(t)("load3d.gizmo.toggle") : void 0,
				onClick: toggleGizmo
			}, [_cache[3] || (_cache[3] = createBaseVNode("i", { class: "icon-[lucide--axis-3d] size-4" }, null, -1)), !__props.compact ? (openBlock(), createElementBlock("span", _hoisted_2$8, toDisplayString(unref(t)("load3d.gizmo.toggle")), 1)) : createCommentVNode("", true)], 10, _hoisted_1$9)), [[
				_directive_tooltip,
				unref(tip)(unref(t)("load3d.gizmo.toggle")),
				void 0,
				{ bottom: true }
			]]), gizmoEnabled.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
				withDirectives((openBlock(), createElementBlock("button", {
					class: normalizeClass(unref(actionClass)(gizmoMode.value === "translate")),
					"aria-pressed": gizmoMode.value === "translate",
					type: "button",
					"aria-label": __props.compact ? unref(t)("load3d.gizmo.translate") : void 0,
					onClick: _cache[0] || (_cache[0] = ($event) => setGizmoMode("translate"))
				}, [_cache[4] || (_cache[4] = createBaseVNode("i", { class: "icon-[lucide--move] size-4" }, null, -1)), !__props.compact ? (openBlock(), createElementBlock("span", _hoisted_4$6, toDisplayString(unref(t)("load3d.gizmo.translate")), 1)) : createCommentVNode("", true)], 10, _hoisted_3$6)), [[
					_directive_tooltip,
					unref(tip)(unref(t)("load3d.gizmo.translate")),
					void 0,
					{ bottom: true }
				]]),
				withDirectives((openBlock(), createElementBlock("button", {
					class: normalizeClass(unref(actionClass)(gizmoMode.value === "rotate")),
					"aria-pressed": gizmoMode.value === "rotate",
					type: "button",
					"aria-label": __props.compact ? unref(t)("load3d.gizmo.rotate") : void 0,
					onClick: _cache[1] || (_cache[1] = ($event) => setGizmoMode("rotate"))
				}, [_cache[5] || (_cache[5] = createBaseVNode("i", { class: "icon-[lucide--rotate-3d] size-4" }, null, -1)), !__props.compact ? (openBlock(), createElementBlock("span", _hoisted_6$5, toDisplayString(unref(t)("load3d.gizmo.rotate")), 1)) : createCommentVNode("", true)], 10, _hoisted_5$6)), [[
					_directive_tooltip,
					unref(tip)(unref(t)("load3d.gizmo.rotate")),
					void 0,
					{ bottom: true }
				]]),
				withDirectives((openBlock(), createElementBlock("button", {
					class: normalizeClass(unref(actionClass)(gizmoMode.value === "scale")),
					"aria-pressed": gizmoMode.value === "scale",
					type: "button",
					"aria-label": __props.compact ? unref(t)("load3d.gizmo.scale") : void 0,
					onClick: _cache[2] || (_cache[2] = ($event) => setGizmoMode("scale"))
				}, [_cache[6] || (_cache[6] = createBaseVNode("i", { class: "icon-[lucide--scale-3d] size-4" }, null, -1)), !__props.compact ? (openBlock(), createElementBlock("span", _hoisted_8$4, toDisplayString(unref(t)("load3d.gizmo.scale")), 1)) : createCommentVNode("", true)], 10, _hoisted_7$5)), [[
					_directive_tooltip,
					unref(tip)(unref(t)("load3d.gizmo.scale")),
					void 0,
					{ bottom: true }
				]]),
				withDirectives((openBlock(), createElementBlock("button", {
					class: normalizeClass(unref(actionClass)(false)),
					type: "button",
					"aria-label": __props.compact ? unref(t)("load3d.gizmo.reset") : void 0,
					onClick: resetGizmoTransform
				}, [_cache[7] || (_cache[7] = createBaseVNode("i", { class: "icon-[lucide--rotate-ccw] size-4" }, null, -1)), !__props.compact ? (openBlock(), createElementBlock("span", _hoisted_10$1, toDisplayString(unref(t)("load3d.gizmo.reset")), 1)) : createCommentVNode("", true)], 10, _hoisted_9$2)), [[
					_directive_tooltip,
					unref(tip)(unref(t)("load3d.gizmo.reset")),
					void 0,
					{ bottom: true }
				]])
			], 64)) : createCommentVNode("", true)], 64);
		};
	}
});
//#endregion
//#region src/components/load3d/menubar/HdriMenuGroup.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$8 = ["aria-label"];
var _hoisted_2$7 = { key: 0 };
var _hoisted_3$5 = ["accept"];
var _hoisted_4$5 = ["aria-pressed", "aria-label"];
var _hoisted_5$5 = { key: 0 };
var _hoisted_6$4 = ["aria-pressed", "aria-label"];
var _hoisted_7$4 = { key: 0 };
var _hoisted_8$3 = ["aria-label"];
var _hoisted_9$1 = { key: 0 };
//#endregion
//#region src/components/load3d/menubar/HdriMenuGroup.vue
var HdriMenuGroup_default = /* @__PURE__ */ defineComponent({
	__name: "HdriMenuGroup",
	props: /*@__PURE__*/ mergeModels({
		compact: {
			type: Boolean,
			default: false
		},
		sceneHasImage: {
			type: Boolean,
			default: false
		}
	}, {
		"config": {},
		"configModifiers": {}
	}),
	emits: /*@__PURE__*/ mergeModels(["updateHdriFile"], ["update:config"]),
	setup(__props, { emit: __emit }) {
		const config = useModel(__props, "config");
		const emit = __emit;
		const { t } = useI18n();
		const hdriPath = computed(() => config.value?.hdri?.hdriPath ?? "");
		const hdriEnabled = computed(() => config.value?.hdri?.enabled ?? false);
		const hdriShowAsBackground = computed(() => config.value?.hdri?.showAsBackground ?? false);
		const hdriFileRef = ref(null);
		function onHdriFilePicked(event) {
			const input = event.target;
			const file = input.files?.[0] ?? null;
			input.value = "";
			if (file) {
				const ext = `.${file.name.split(".").pop()?.toLowerCase() ?? ""}`;
				if (!SUPPORTED_HDRI_EXTENSIONS.has(ext)) {
					useToastStore().addAlert(t("toastMessages.unsupportedHDRIFormat"));
					return;
				}
			}
			emit("updateHdriFile", file);
		}
		function toggleHdriEnabled() {
			const hdri = config.value?.hdri;
			if (hdri) hdri.enabled = !hdri.enabled;
		}
		function toggleHdriShowAsBackground() {
			const hdri = config.value?.hdri;
			if (hdri) hdri.showAsBackground = !hdri.showAsBackground;
		}
		function removeHdri() {
			emit("updateHdriFile", null);
		}
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock(Fragment, null, [!__props.sceneHasImage || hdriPath.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [withDirectives((openBlock(), createElementBlock("button", {
				class: normalizeClass(unref(actionClass)(false)),
				type: "button",
				"aria-label": __props.compact ? hdriPath.value ? unref(t)("load3d.hdri.changeFile") : unref(t)("load3d.hdri.uploadFile") : void 0,
				onClick: _cache[0] || (_cache[0] = ($event) => hdriFileRef.value?.click())
			}, [_cache[1] || (_cache[1] = createBaseVNode("i", { class: "icon-[lucide--upload] size-4" }, null, -1)), !__props.compact ? (openBlock(), createElementBlock("span", _hoisted_2$7, toDisplayString(hdriPath.value ? unref(t)("load3d.hdri.changeFile") : unref(t)("load3d.hdri.uploadFile")), 1)) : createCommentVNode("", true)], 10, _hoisted_1$8)), [[
				_directive_tooltip,
				unref(tip)(hdriPath.value ? unref(t)("load3d.hdri.changeFile") : unref(t)("load3d.hdri.uploadFile")),
				void 0,
				{ bottom: true }
			]]), createBaseVNode("input", {
				ref_key: "hdriFileRef",
				ref: hdriFileRef,
				type: "file",
				accept: unref(SUPPORTED_HDRI_EXTENSIONS_ACCEPT),
				class: "pointer-events-none absolute size-0 opacity-0",
				onChange: onHdriFilePicked
			}, null, 40, _hoisted_3$5)], 64)) : createCommentVNode("", true), hdriPath.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
				withDirectives((openBlock(), createElementBlock("button", {
					class: normalizeClass(unref(actionClass)(hdriEnabled.value)),
					"aria-pressed": hdriEnabled.value,
					type: "button",
					"aria-label": __props.compact ? unref(t)("load3d.hdri.label") : void 0,
					onClick: toggleHdriEnabled
				}, [_cache[2] || (_cache[2] = createBaseVNode("i", { class: "icon-[lucide--globe] size-4" }, null, -1)), !__props.compact ? (openBlock(), createElementBlock("span", _hoisted_5$5, toDisplayString(unref(t)("load3d.hdri.label")), 1)) : createCommentVNode("", true)], 10, _hoisted_4$5)), [[
					_directive_tooltip,
					unref(tip)(unref(t)("load3d.hdri.label")),
					void 0,
					{ bottom: true }
				]]),
				withDirectives((openBlock(), createElementBlock("button", {
					class: normalizeClass(unref(actionClass)(hdriShowAsBackground.value)),
					"aria-pressed": hdriShowAsBackground.value,
					type: "button",
					"aria-label": __props.compact ? unref(t)("load3d.hdri.showAsBackground") : void 0,
					onClick: toggleHdriShowAsBackground
				}, [_cache[3] || (_cache[3] = createBaseVNode("i", { class: "icon-[lucide--image] size-4" }, null, -1)), !__props.compact ? (openBlock(), createElementBlock("span", _hoisted_7$4, toDisplayString(unref(t)("load3d.hdri.showAsBackground")), 1)) : createCommentVNode("", true)], 10, _hoisted_6$4)), [[
					_directive_tooltip,
					unref(tip)(unref(t)("load3d.hdri.showAsBackground")),
					void 0,
					{ bottom: true }
				]]),
				withDirectives((openBlock(), createElementBlock("button", {
					class: normalizeClass(unref(actionClass)(false)),
					type: "button",
					"aria-label": __props.compact ? unref(t)("load3d.hdri.removeFile") : void 0,
					onClick: removeHdri
				}, [_cache[4] || (_cache[4] = createBaseVNode("i", { class: "icon-[lucide--x] size-4" }, null, -1)), !__props.compact ? (openBlock(), createElementBlock("span", _hoisted_9$1, toDisplayString(unref(t)("load3d.hdri.removeFile")), 1)) : createCommentVNode("", true)], 10, _hoisted_8$3)), [[
					_directive_tooltip,
					unref(tip)(unref(t)("load3d.hdri.removeFile")),
					void 0,
					{ bottom: true }
				]])
			], 64)) : createCommentVNode("", true)], 64);
		};
	}
});
//#endregion
//#region src/components/load3d/menubar/LightMenuGroup.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$7 = ["aria-label"];
var _hoisted_2$6 = { key: 0 };
var _hoisted_3$4 = { class: "flex flex-col gap-2 p-1" };
var _hoisted_4$4 = { class: "text-sm text-base-foreground" };
var _hoisted_5$4 = {
	key: 1,
	class: "px-2 text-sm text-muted"
};
//#endregion
//#region src/components/load3d/menubar/LightMenuGroup.vue
var LightMenuGroup_default = /* @__PURE__ */ defineComponent({
	__name: "LightMenuGroup",
	props: /*@__PURE__*/ mergeModels({
		compact: {
			type: Boolean,
			default: false
		},
		isOriginalMaterial: {
			type: Boolean,
			default: false
		}
	}, {
		"config": {},
		"configModifiers": {}
	}),
	emits: ["update:config"],
	setup(__props) {
		const config = useModel(__props, "config");
		const { t } = useI18n();
		const intensityOpen = usePopoverExclusivity()("light-intensity");
		const settingStore = useSettingStore();
		const lightIntensityMinimum = settingStore.get("Comfy.Load3D.LightIntensityMinimum");
		const lightIntensityMaximum = settingStore.get("Comfy.Load3D.LightIntensityMaximum");
		const lightAdjustmentIncrement = settingStore.get("Comfy.Load3D.LightAdjustmentIncrement");
		const usesHdriIntensity = computed(() => !!config.value?.hdri?.hdriPath?.length && !!config.value?.hdri?.enabled);
		const sliderMin = computed(() => usesHdriIntensity.value ? 0 : lightIntensityMinimum);
		const sliderMax = computed(() => usesHdriIntensity.value ? 5 : lightIntensityMaximum);
		const sliderStep = computed(() => usesHdriIntensity.value ? .1 : lightAdjustmentIncrement);
		const sliderValue = computed(() => usesHdriIntensity.value ? config.value?.hdri?.intensity ?? 1 : config.value?.intensity ?? lightIntensityMinimum);
		function onIntensityUpdate(value) {
			if (!value?.length || !config.value) return;
			const next = value[0];
			if (usesHdriIntensity.value) {
				if (config.value.hdri) config.value.hdri.intensity = next;
			} else config.value.intensity = next;
		}
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return __props.isOriginalMaterial ? (openBlock(), createBlock(Popover_default, {
				key: 0,
				open: unref(intensityOpen),
				"onUpdate:open": _cache[0] || (_cache[0] = ($event) => isRef(intensityOpen) ? intensityOpen.value = $event : null)
			}, {
				default: withCtx(() => [createVNode(unref(PopoverTrigger_default), { "as-child": "" }, {
					default: withCtx(() => [withDirectives((openBlock(), createElementBlock("button", {
						class: normalizeClass(unref(actionClass)(false)),
						type: "button",
						"aria-label": __props.compact ? unref(t)("load3d.menuBar.intensity") : void 0
					}, [_cache[1] || (_cache[1] = createBaseVNode("i", { class: "icon-[lucide--sun] size-4" }, null, -1)), !__props.compact ? (openBlock(), createElementBlock("span", _hoisted_2$6, toDisplayString(unref(t)("load3d.menuBar.intensity")), 1)) : createCommentVNode("", true)], 10, _hoisted_1$7)), [[
						_directive_tooltip,
						unref(tip)(unref(t)("load3d.menuBar.intensity")),
						void 0,
						{ bottom: true }
					]])]),
					_: 1
				}), createVNode(PopoverContent_default, {
					side: "bottom",
					align: "start",
					"side-offset": 8,
					class: normalizeClass(unref(cn)(unref(panelClass), "w-56"))
				}, {
					default: withCtx(() => [createBaseVNode("div", _hoisted_3$4, [createBaseVNode("span", _hoisted_4$4, toDisplayString(unref(t)("load3d.lightIntensity")), 1), createVNode(Slider_default, {
						"model-value": [sliderValue.value],
						min: sliderMin.value,
						max: sliderMax.value,
						step: sliderStep.value,
						class: "w-full",
						"onUpdate:modelValue": onIntensityUpdate
					}, null, 8, [
						"model-value",
						"min",
						"max",
						"step"
					])])]),
					_: 1
				}, 8, ["class"])]),
				_: 1
			}, 8, ["open"])) : (openBlock(), createElementBlock("span", _hoisted_5$4, toDisplayString(unref(t)("load3d.menuBar.originalMaterialOnly")), 1));
		};
	}
});
//#endregion
//#region src/components/load3d/menubar/ModelMenuGroup.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$6 = ["aria-label"];
var _hoisted_2$5 = { key: 0 };
var _hoisted_3$3 = ["onClick"];
var _hoisted_4$3 = ["aria-label"];
var _hoisted_5$3 = { key: 0 };
var _hoisted_6$3 = ["onClick"];
var _hoisted_7$3 = ["aria-pressed", "aria-label"];
var _hoisted_8$2 = { key: 0 };
//#endregion
//#region src/components/load3d/menubar/ModelMenuGroup.vue
var ModelMenuGroup_default = /* @__PURE__ */ defineComponent({
	__name: "ModelMenuGroup",
	props: /*@__PURE__*/ mergeModels({
		compact: {
			type: Boolean,
			default: false
		},
		hasSkeleton: {
			type: Boolean,
			default: false
		},
		materialModes: { default: () => [
			"original",
			"clay",
			"normal",
			"wireframe"
		] }
	}, {
		"config": {},
		"configModifiers": {}
	}),
	emits: ["update:config"],
	setup(__props) {
		const config = useModel(__props, "config");
		const { t } = useI18n();
		const upDirection = computed(() => config.value?.upDirection);
		const materialMode = computed(() => config.value?.materialMode);
		const showSkeleton = computed(() => config.value?.showSkeleton ?? false);
		const exclusivePopover = usePopoverExclusivity();
		const upDirectionOpen = exclusivePopover("model-up-direction");
		const materialOpen = exclusivePopover("model-material");
		const upDirections = [
			"original",
			"-x",
			"+x",
			"-y",
			"+y",
			"-z",
			"+z"
		];
		function setUpDirection(direction) {
			if (config.value) config.value.upDirection = direction;
		}
		function setMaterialMode(mode) {
			if (config.value) config.value.materialMode = mode;
		}
		function toggleSkeleton() {
			if (config.value) config.value.showSkeleton = !config.value.showSkeleton;
		}
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock(Fragment, null, [
				createVNode(Popover_default, {
					open: unref(upDirectionOpen),
					"onUpdate:open": _cache[0] || (_cache[0] = ($event) => isRef(upDirectionOpen) ? upDirectionOpen.value = $event : null)
				}, {
					default: withCtx(() => [createVNode(unref(PopoverTrigger_default), { "as-child": "" }, {
						default: withCtx(() => [withDirectives((openBlock(), createElementBlock("button", {
							class: normalizeClass(unref(actionClass)(false)),
							type: "button",
							"aria-label": __props.compact ? unref(t)("load3d.menuBar.upDirection") : void 0
						}, [_cache[2] || (_cache[2] = createBaseVNode("i", { class: "icon-[lucide--move-3d] size-4" }, null, -1)), !__props.compact ? (openBlock(), createElementBlock("span", _hoisted_2$5, toDisplayString(unref(t)("load3d.menuBar.upDirection")), 1)) : createCommentVNode("", true)], 10, _hoisted_1$6)), [[
							_directive_tooltip,
							unref(tip)(unref(t)("load3d.menuBar.upDirection")),
							void 0,
							{ bottom: true }
						]])]),
						_: 1
					}), createVNode(PopoverContent_default, {
						side: "bottom",
						align: "start",
						"side-offset": 8,
						class: normalizeClass(unref(panelClass))
					}, {
						default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(upDirections, (d) => {
							return createBaseVNode("button", {
								key: d,
								type: "button",
								class: normalizeClass(unref(cn)(unref(rowClass), upDirection.value === d && "bg-button-active-surface")),
								onClick: ($event) => setUpDirection(d)
							}, toDisplayString(d.toUpperCase()), 11, _hoisted_3$3);
						}), 64))]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				}, 8, ["open"]),
				__props.materialModes.length ? (openBlock(), createBlock(Popover_default, {
					key: 0,
					open: unref(materialOpen),
					"onUpdate:open": _cache[1] || (_cache[1] = ($event) => isRef(materialOpen) ? materialOpen.value = $event : null)
				}, {
					default: withCtx(() => [createVNode(unref(PopoverTrigger_default), { "as-child": "" }, {
						default: withCtx(() => [withDirectives((openBlock(), createElementBlock("button", {
							class: normalizeClass(unref(actionClass)(false)),
							type: "button",
							"aria-label": __props.compact ? unref(t)("load3d.menuBar.material") : void 0
						}, [_cache[3] || (_cache[3] = createBaseVNode("i", { class: "icon-[lucide--box] size-4" }, null, -1)), !__props.compact ? (openBlock(), createElementBlock("span", _hoisted_5$3, toDisplayString(unref(t)("load3d.menuBar.material")), 1)) : createCommentVNode("", true)], 10, _hoisted_4$3)), [[
							_directive_tooltip,
							unref(tip)(unref(t)("load3d.menuBar.material")),
							void 0,
							{ bottom: true }
						]])]),
						_: 1
					}), createVNode(PopoverContent_default, {
						side: "bottom",
						align: "start",
						"side-offset": 8,
						class: normalizeClass(unref(panelClass))
					}, {
						default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.materialModes, (m) => {
							return openBlock(), createElementBlock("button", {
								key: m,
								type: "button",
								class: normalizeClass(unref(cn)(unref(rowClass), materialMode.value === m && "bg-button-active-surface")),
								onClick: ($event) => setMaterialMode(m)
							}, toDisplayString(unref(t)(`load3d.materialModes.${m}`)), 11, _hoisted_6$3);
						}), 128))]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				}, 8, ["open"])) : createCommentVNode("", true),
				__props.hasSkeleton ? withDirectives((openBlock(), createElementBlock("button", {
					key: 1,
					class: normalizeClass(unref(actionClass)(showSkeleton.value)),
					"aria-pressed": showSkeleton.value,
					type: "button",
					"aria-label": __props.compact ? unref(t)("load3d.menuBar.skeleton") : void 0,
					onClick: toggleSkeleton
				}, [_cache[4] || (_cache[4] = createBaseVNode("i", { class: "icon-[lucide--bone] size-4" }, null, -1)), !__props.compact ? (openBlock(), createElementBlock("span", _hoisted_8$2, toDisplayString(unref(t)("load3d.menuBar.skeleton")), 1)) : createCommentVNode("", true)], 10, _hoisted_7$3)), [[
					_directive_tooltip,
					unref(tip)(unref(t)("load3d.menuBar.skeleton")),
					void 0,
					{ bottom: true }
				]]) : createCommentVNode("", true)
			], 64);
		};
	}
});
//#endregion
//#region src/components/load3d/menubar/RecordMenuControl.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$5 = ["aria-label"];
var _hoisted_2$4 = { key: 0 };
var _hoisted_3$2 = {
	key: 1,
	class: "flex shrink-0 items-center gap-0.5 rounded-lg bg-button-active-surface py-0.5 pr-0.5 pl-1 text-sm text-base-foreground"
};
var _hoisted_4$2 = ["aria-label"];
var _hoisted_5$2 = ["aria-label"];
var _hoisted_6$2 = ["aria-label"];
var _hoisted_7$2 = { key: 0 };
//#endregion
//#region src/components/load3d/menubar/RecordMenuControl.vue
var RecordMenuControl_default = /* @__PURE__ */ defineComponent({
	__name: "RecordMenuControl",
	props: /*@__PURE__*/ mergeModels({ compact: {
		type: Boolean,
		default: false
	} }, {
		"isRecording": { type: Boolean },
		"isRecordingModifiers": {},
		"hasRecording": { type: Boolean },
		"hasRecordingModifiers": {},
		"recordingDuration": {},
		"recordingDurationModifiers": {}
	}),
	emits: /*@__PURE__*/ mergeModels([
		"startRecording",
		"stopRecording",
		"exportRecording",
		"clearRecording"
	], [
		"update:isRecording",
		"update:hasRecording",
		"update:recordingDuration"
	]),
	setup(__props, { emit: __emit }) {
		const isRecording = useModel(__props, "isRecording");
		const hasRecording = useModel(__props, "hasRecording");
		const recordingDuration = useModel(__props, "recordingDuration");
		const emit = __emit;
		const { t } = useI18n();
		const menuOpen = usePopoverExclusivity()("recording-menu");
		function downloadRecording() {
			menuOpen.value = false;
			emit("exportRecording");
		}
		function startNewRecording() {
			menuOpen.value = false;
			emit("startRecording");
		}
		function deleteRecording() {
			menuOpen.value = false;
			emit("clearRecording");
		}
		function formatDuration(seconds) {
			const minutes = Math.floor(seconds / 60);
			const remainingSeconds = Math.floor(seconds % 60);
			return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
		}
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return isRecording.value ? withDirectives((openBlock(), createElementBlock("button", {
				key: 0,
				class: normalizeClass(unref(chipClass)),
				type: "button",
				"aria-label": unref(t)("load3d.menuBar.stopRecording"),
				onClick: _cache[0] || (_cache[0] = ($event) => emit("stopRecording"))
			}, [_cache[4] || (_cache[4] = createBaseVNode("span", { class: "size-2 animate-pulse rounded-full bg-red-500" }, null, -1)), !__props.compact ? (openBlock(), createElementBlock("span", _hoisted_2$4, toDisplayString(unref(t)("load3d.menuBar.recording")), 1)) : createCommentVNode("", true)], 10, _hoisted_1$5)), [[
				_directive_tooltip,
				unref(tip)(unref(t)("load3d.menuBar.stopRecording")),
				void 0,
				{ top: true }
			]]) : hasRecording.value ? (openBlock(), createElementBlock("div", _hoisted_3$2, [createVNode(Popover_default, {
				open: unref(menuOpen),
				"onUpdate:open": _cache[1] || (_cache[1] = ($event) => isRef(menuOpen) ? menuOpen.value = $event : null)
			}, {
				default: withCtx(() => [createVNode(unref(PopoverTrigger_default), { "as-child": "" }, {
					default: withCtx(() => [withDirectives((openBlock(), createElementBlock("button", {
						class: "focus-visible:ring-ring flex items-center gap-1.5 rounded-md border-0 bg-transparent px-1 py-0.5 text-sm text-base-foreground transition-colors outline-none hover:bg-button-hover-surface focus-visible:ring-1",
						type: "button",
						"aria-label": unref(t)("load3d.menuBar.videoRecordingTooltip"),
						"data-testid": "load3d-recording-duration"
					}, [_cache[5] || (_cache[5] = createBaseVNode("i", { class: "icon-[lucide--film] size-4" }, null, -1)), createTextVNode(" " + toDisplayString(formatDuration(recordingDuration.value ?? 0)), 1)], 8, _hoisted_4$2)), [[
						_directive_tooltip,
						unref(tip)(unref(t)("load3d.menuBar.videoRecordingTooltip")),
						void 0,
						{ top: true }
					]])]),
					_: 1
				}), createVNode(PopoverContent_default, {
					side: "bottom",
					align: "start",
					"side-offset": 8,
					class: normalizeClass(unref(panelClass))
				}, {
					default: withCtx(() => [
						createBaseVNode("button", {
							type: "button",
							class: normalizeClass(unref(cn)(unref(rowClass), "gap-2")),
							onClick: downloadRecording
						}, [_cache[6] || (_cache[6] = createBaseVNode("i", { class: "icon-[lucide--download] size-4" }, null, -1)), createTextVNode(" " + toDisplayString(unref(t)("load3d.menuBar.downloadRecording")), 1)], 2),
						createBaseVNode("button", {
							type: "button",
							class: normalizeClass(unref(cn)(unref(rowClass), "gap-2")),
							onClick: startNewRecording
						}, [_cache[7] || (_cache[7] = createBaseVNode("i", { class: "icon-[lucide--video] size-4" }, null, -1)), createTextVNode(" " + toDisplayString(unref(t)("load3d.menuBar.startNewRecording")), 1)], 2),
						createBaseVNode("button", {
							type: "button",
							class: normalizeClass(unref(cn)(unref(rowClass), "gap-2")),
							onClick: deleteRecording
						}, [_cache[8] || (_cache[8] = createBaseVNode("i", { class: "icon-[lucide--trash-2] size-4" }, null, -1)), createTextVNode(" " + toDisplayString(unref(t)("load3d.menuBar.deleteRecording")), 1)], 2)
					]),
					_: 1
				}, 8, ["class"])]),
				_: 1
			}, 8, ["open"]), withDirectives((openBlock(), createElementBlock("button", {
				class: "focus-visible:ring-ring flex size-6 items-center justify-center rounded-md border-0 bg-transparent text-base-foreground transition-colors outline-none hover:bg-button-hover-surface focus-visible:ring-1",
				type: "button",
				"aria-label": unref(t)("load3d.menuBar.deleteRecording"),
				onClick: _cache[2] || (_cache[2] = ($event) => emit("clearRecording"))
			}, [..._cache[9] || (_cache[9] = [createBaseVNode("i", { class: "icon-[lucide--x] size-3.5" }, null, -1)])], 8, _hoisted_5$2)), [[
				_directive_tooltip,
				unref(tip)(unref(t)("load3d.menuBar.deleteRecording")),
				void 0,
				{ top: true }
			]])])) : withDirectives((openBlock(), createElementBlock("button", {
				key: 2,
				class: normalizeClass(unref(chipClass)),
				type: "button",
				"aria-label": __props.compact ? unref(t)("load3d.menuBar.record") : void 0,
				onClick: _cache[3] || (_cache[3] = ($event) => emit("startRecording"))
			}, [_cache[10] || (_cache[10] = createBaseVNode("i", { class: "icon-[lucide--video] size-4" }, null, -1)), !__props.compact ? (openBlock(), createElementBlock("span", _hoisted_7$2, toDisplayString(unref(t)("load3d.menuBar.record")), 1)) : createCommentVNode("", true)], 10, _hoisted_6$2)), [[
				_directive_tooltip,
				unref(tip)(unref(t)("load3d.menuBar.record")),
				void 0,
				{ top: true }
			]]);
		};
	}
});
//#endregion
//#region src/components/load3d/menubar/SceneMenuGroup.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = ["aria-pressed", "aria-label"];
var _hoisted_2$3 = { key: 0 };
var _hoisted_3$1 = ["aria-label"];
var _hoisted_4$1 = { key: 0 };
var _hoisted_5$1 = ["value"];
var _hoisted_6$1 = ["aria-label"];
var _hoisted_7$1 = { key: 0 };
var _hoisted_8$1 = ["aria-pressed", "aria-label"];
var _hoisted_9 = { key: 0 };
var _hoisted_10 = ["aria-label"];
var _hoisted_11 = { key: 0 };
var _hoisted_12 = { class: "flex flex-col gap-2 p-1" };
var _hoisted_13 = { class: "text-sm text-base-foreground" };
var _hoisted_14 = ["aria-label"];
var _hoisted_15 = { key: 0 };
//#endregion
//#region src/components/load3d/menubar/SceneMenuGroup.vue
var SceneMenuGroup_default = /* @__PURE__ */ defineComponent({
	__name: "SceneMenuGroup",
	props: /*@__PURE__*/ mergeModels({
		compact: {
			type: Boolean,
			default: false
		},
		canUseBackgroundImage: {
			type: Boolean,
			default: true
		},
		hdriActive: {
			type: Boolean,
			default: false
		}
	}, {
		"config": {},
		"configModifiers": {},
		"fov": {},
		"fovModifiers": {}
	}),
	emits: /*@__PURE__*/ mergeModels(["updateBackgroundImage"], ["update:config", "update:fov"]),
	setup(__props, { emit: __emit }) {
		const config = useModel(__props, "config");
		const fov = useModel(__props, "fov");
		const emit = __emit;
		const { t } = useI18n();
		const showGrid = computed(() => config.value?.showGrid ?? false);
		const bgColor = computed(() => config.value?.backgroundColor ?? "#000000");
		const hasImage = computed(() => !!config.value?.backgroundImage && config.value.backgroundImage !== "");
		const isPanorama = computed(() => config.value?.backgroundRenderMode === "panorama");
		const fovValue = computed(() => fov.value ?? 10);
		const colorRef = ref(null);
		const bgImageRef = ref(null);
		const fovOpen = usePopoverExclusivity()("scene-fov");
		function toggleGrid() {
			if (config.value) config.value.showGrid = !config.value.showGrid;
		}
		function setBackgroundColor(event) {
			if (config.value) config.value.backgroundColor = event.target.value;
		}
		function onBackgroundImagePicked(event) {
			const input = event.target;
			const file = input.files?.[0];
			input.value = "";
			if (file) emit("updateBackgroundImage", file);
		}
		function removeBackgroundImage() {
			emit("updateBackgroundImage", null);
		}
		function togglePanorama() {
			if (!config.value) return;
			config.value.backgroundRenderMode = config.value.backgroundRenderMode === "panorama" ? "tiled" : "panorama";
		}
		function setFov(value) {
			if (value?.length) fov.value = value[0];
		}
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock(Fragment, null, [
				withDirectives((openBlock(), createElementBlock("button", {
					class: normalizeClass(unref(actionClass)(showGrid.value)),
					"aria-pressed": showGrid.value,
					type: "button",
					"aria-label": __props.compact ? unref(t)("load3d.menuBar.showGrid") : void 0,
					onClick: toggleGrid
				}, [_cache[3] || (_cache[3] = createBaseVNode("i", { class: "icon-[lucide--grid-3x3] size-4" }, null, -1)), !__props.compact ? (openBlock(), createElementBlock("span", _hoisted_2$3, toDisplayString(unref(t)("load3d.menuBar.showGrid")), 1)) : createCommentVNode("", true)], 10, _hoisted_1$4)), [[
					_directive_tooltip,
					unref(tip)(unref(t)("load3d.menuBar.showGrid")),
					void 0,
					{ bottom: true }
				]]),
				!hasImage.value && !__props.hdriActive ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
					withDirectives((openBlock(), createElementBlock("button", {
						class: normalizeClass(unref(actionClass)(false)),
						type: "button",
						"aria-label": __props.compact ? unref(t)("load3d.menuBar.bgColor") : void 0,
						onClick: _cache[0] || (_cache[0] = ($event) => colorRef.value?.click())
					}, [_cache[4] || (_cache[4] = createBaseVNode("i", { class: "icon-[lucide--palette] size-4" }, null, -1)), !__props.compact ? (openBlock(), createElementBlock("span", _hoisted_4$1, toDisplayString(unref(t)("load3d.menuBar.bgColor")), 1)) : createCommentVNode("", true)], 10, _hoisted_3$1)), [[
						_directive_tooltip,
						unref(tip)(unref(t)("load3d.menuBar.bgColor")),
						void 0,
						{ bottom: true }
					]]),
					createBaseVNode("input", {
						ref_key: "colorRef",
						ref: colorRef,
						type: "color",
						class: "pointer-events-none absolute size-0 opacity-0",
						value: bgColor.value,
						onInput: setBackgroundColor
					}, null, 40, _hoisted_5$1),
					__props.canUseBackgroundImage ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [withDirectives((openBlock(), createElementBlock("button", {
						class: normalizeClass(unref(actionClass)(false)),
						type: "button",
						"aria-label": __props.compact ? unref(t)("load3d.menuBar.bgImage") : void 0,
						onClick: _cache[1] || (_cache[1] = ($event) => bgImageRef.value?.click())
					}, [_cache[5] || (_cache[5] = createBaseVNode("i", { class: "icon-[lucide--image] size-4" }, null, -1)), !__props.compact ? (openBlock(), createElementBlock("span", _hoisted_7$1, toDisplayString(unref(t)("load3d.menuBar.bgImage")), 1)) : createCommentVNode("", true)], 10, _hoisted_6$1)), [[
						_directive_tooltip,
						unref(tip)(unref(t)("load3d.menuBar.bgImage")),
						void 0,
						{ bottom: true }
					]]), createBaseVNode("input", {
						ref_key: "bgImageRef",
						ref: bgImageRef,
						type: "file",
						accept: "image/*",
						class: "pointer-events-none absolute size-0 opacity-0",
						"data-testid": "scene-bg-image-input",
						onChange: onBackgroundImagePicked
					}, null, 544)], 64)) : createCommentVNode("", true)
				], 64)) : createCommentVNode("", true),
				hasImage.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
					withDirectives((openBlock(), createElementBlock("button", {
						class: normalizeClass(unref(actionClass)(isPanorama.value)),
						"aria-pressed": isPanorama.value,
						type: "button",
						"aria-label": __props.compact ? unref(t)("load3d.menuBar.panorama") : void 0,
						onClick: togglePanorama
					}, [_cache[6] || (_cache[6] = createBaseVNode("i", { class: "icon-[lucide--globe] size-4" }, null, -1)), !__props.compact ? (openBlock(), createElementBlock("span", _hoisted_9, toDisplayString(unref(t)("load3d.menuBar.panorama")), 1)) : createCommentVNode("", true)], 10, _hoisted_8$1)), [[
						_directive_tooltip,
						unref(tip)(unref(t)("load3d.menuBar.panorama")),
						void 0,
						{ bottom: true }
					]]),
					isPanorama.value ? (openBlock(), createBlock(Popover_default, {
						key: 0,
						open: unref(fovOpen),
						"onUpdate:open": _cache[2] || (_cache[2] = ($event) => isRef(fovOpen) ? fovOpen.value = $event : null)
					}, {
						default: withCtx(() => [createVNode(unref(PopoverTrigger_default), { "as-child": "" }, {
							default: withCtx(() => [withDirectives((openBlock(), createElementBlock("button", {
								class: normalizeClass(unref(actionClass)(false)),
								type: "button",
								"aria-label": __props.compact ? unref(t)("load3d.menuBar.fov") : void 0
							}, [_cache[7] || (_cache[7] = createBaseVNode("i", { class: "icon-[lucide--focus] size-4" }, null, -1)), !__props.compact ? (openBlock(), createElementBlock("span", _hoisted_11, toDisplayString(unref(t)("load3d.menuBar.fov")), 1)) : createCommentVNode("", true)], 10, _hoisted_10)), [[
								_directive_tooltip,
								unref(tip)(unref(t)("load3d.menuBar.fov")),
								void 0,
								{ bottom: true }
							]])]),
							_: 1
						}), createVNode(PopoverContent_default, {
							side: "bottom",
							align: "start",
							"side-offset": 8,
							class: normalizeClass(unref(cn)(unref(panelClass), "w-56"))
						}, {
							default: withCtx(() => [createBaseVNode("div", _hoisted_12, [createBaseVNode("span", _hoisted_13, toDisplayString(unref(t)("load3d.fov")), 1), createVNode(Slider_default, {
								"model-value": [fovValue.value],
								min: 10,
								max: 150,
								step: 1,
								class: "w-full",
								"onUpdate:modelValue": setFov
							}, null, 8, ["model-value"])])]),
							_: 1
						}, 8, ["class"])]),
						_: 1
					}, 8, ["open"])) : createCommentVNode("", true),
					withDirectives((openBlock(), createElementBlock("button", {
						class: normalizeClass(unref(actionClass)(false)),
						type: "button",
						"aria-label": __props.compact ? unref(t)("load3d.menuBar.removeBackground") : void 0,
						onClick: removeBackgroundImage
					}, [_cache[8] || (_cache[8] = createBaseVNode("i", { class: "icon-[lucide--x] size-4" }, null, -1)), !__props.compact ? (openBlock(), createElementBlock("span", _hoisted_15, toDisplayString(unref(t)("load3d.menuBar.removeBackground")), 1)) : createCommentVNode("", true)], 10, _hoisted_14)), [[
						_directive_tooltip,
						unref(tip)(unref(t)("load3d.menuBar.removeBackground")),
						void 0,
						{ bottom: true }
					]])
				], 64)) : createCommentVNode("", true)
			], 64);
		};
	}
});
//#endregion
//#region src/components/load3d/controls/ViewerControls.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = { class: "relative rounded-lg bg-backdrop/30" };
var _hoisted_2$2 = { class: "flex flex-col gap-2" };
//#endregion
//#region src/components/load3d/controls/ViewerControls.vue
var ViewerControls_default = /* @__PURE__ */ defineComponent({
	__name: "ViewerControls",
	props: { node: {} },
	setup(__props) {
		const { t } = useI18n();
		const openIn3DViewer = () => {
			const props = { node: __props.node };
			useDialogStore().showDialog({
				key: "global-load3d-viewer",
				title: t("load3d.viewer.title"),
				component: Load3dViewerContent_default,
				props,
				dialogComponentProps: {
					renderer: "reka",
					size: "full",
					contentClass: "w-[80vw] h-[80vh] max-h-[80vh]",
					maximizable: true,
					onClose: async () => {
						await useLoad3dService().handleViewerClose(props.node);
					}
				}
			});
		};
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock("div", _hoisted_1$3, [createBaseVNode("div", _hoisted_2$2, [withDirectives((openBlock(), createBlock(Button_default, {
				size: "icon",
				variant: "textonly",
				class: "rounded-full",
				"aria-label": unref(t)("load3d.openIn3DViewer"),
				onClick: openIn3DViewer
			}, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createBaseVNode("i", { class: "pi pi-expand text-lg text-base-foreground" }, null, -1)])]),
				_: 1
			}, 8, ["aria-label"])), [[
				_directive_tooltip,
				{
					value: unref(t)("load3d.openIn3DViewer"),
					showDelay: 300
				},
				void 0,
				{ right: true }
			]])])]);
		};
	}
});
//#endregion
//#region src/components/load3d/Load3DMenuBar.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = { class: "pointer-events-none absolute inset-0 flex flex-col" };
var _hoisted_2$1 = ["onClick"];
var _hoisted_3 = { class: "flex items-center gap-1" };
var _hoisted_4 = { class: "flex items-center gap-1" };
var _hoisted_5 = ["aria-label"];
var _hoisted_6 = ["aria-label"];
var _hoisted_7 = ["aria-label"];
var _hoisted_8 = ["onClick"];
var compactWidthThreshold = 480;
//#endregion
//#region src/components/load3d/Load3DMenuBar.vue
var Load3DMenuBar_default = /* @__PURE__ */ defineComponent({
	__name: "Load3DMenuBar",
	props: /*@__PURE__*/ mergeModels({
		canUseLighting: {
			type: Boolean,
			default: true
		},
		canUseHdri: {
			type: Boolean,
			default: true
		},
		canUseGizmo: {
			type: Boolean,
			default: true
		},
		canExport: {
			type: Boolean,
			default: true
		},
		canUseBackgroundImage: {
			type: Boolean,
			default: true
		},
		canFitToViewer: {
			type: Boolean,
			default: true
		},
		canCenterCameraOnModel: {
			type: Boolean,
			default: true
		},
		canUseRecording: {
			type: Boolean,
			default: true
		},
		enableViewer: {
			type: Boolean,
			default: false
		},
		node: { default: null },
		materialModes: { default: () => [
			"original",
			"clay",
			"normal",
			"wireframe"
		] },
		hasSkeleton: {
			type: Boolean,
			default: false
		},
		sourceFormat: { default: null }
	}, {
		"sceneConfig": {},
		"sceneConfigModifiers": {},
		"modelConfig": {},
		"modelConfigModifiers": {},
		"cameraConfig": {},
		"cameraConfigModifiers": {},
		"lightConfig": {},
		"lightConfigModifiers": {},
		"isRecording": { type: Boolean },
		"isRecordingModifiers": {},
		"hasRecording": { type: Boolean },
		"hasRecordingModifiers": {},
		"recordingDuration": {},
		"recordingDurationModifiers": {}
	}),
	emits: /*@__PURE__*/ mergeModels([
		"updateBackgroundImage",
		"updateHdriFile",
		"exportModel",
		"fitToViewer",
		"centerCamera",
		"toggleGizmo",
		"setGizmoMode",
		"resetGizmoTransform",
		"startRecording",
		"stopRecording",
		"exportRecording",
		"clearRecording"
	], [
		"update:sceneConfig",
		"update:modelConfig",
		"update:cameraConfig",
		"update:lightConfig",
		"update:isRecording",
		"update:hasRecording",
		"update:recordingDuration"
	]),
	setup(__props, { emit: __emit }) {
		const sceneConfig = useModel(__props, "sceneConfig");
		const modelConfig = useModel(__props, "modelConfig");
		const cameraConfig = useModel(__props, "cameraConfig");
		const lightConfig = useModel(__props, "lightConfig");
		const isRecording = useModel(__props, "isRecording");
		const hasRecording = useModel(__props, "hasRecording");
		const recordingDuration = useModel(__props, "recordingDuration");
		const emit = __emit;
		const { t } = useI18n();
		const categoryDefs = computed(() => [
			{
				key: "scene",
				label: t("load3d.scene"),
				show: !!sceneConfig.value
			},
			{
				key: "model",
				label: t("load3d.model3d"),
				show: !!modelConfig.value
			},
			{
				key: "camera",
				label: t("load3d.camera"),
				show: !!cameraConfig.value
			},
			{
				key: "light",
				label: t("load3d.light"),
				show: __props.canUseLighting && !!lightConfig.value && !!modelConfig.value
			},
			{
				key: "hdri",
				label: t("load3d.hdri.label"),
				show: __props.canUseHdri && !!lightConfig.value
			},
			{
				key: "gizmo",
				label: t("load3d.gizmo.label"),
				show: __props.canUseGizmo && !!modelConfig.value
			}
		].filter((c) => c.show));
		const activeCategory = ref("scene");
		const activeLabel = computed(() => categoryDefs.value.find((c) => c.key === activeCategory.value)?.label ?? "");
		watch(categoryDefs, (defs) => {
			if (!defs.some((c) => c.key === activeCategory.value)) activeCategory.value = defs[0]?.key ?? "scene";
		});
		const exclusivePopover = usePopoverExclusivity();
		const categoryMenuOpen = exclusivePopover("category-menu");
		const exportOpen = exclusivePopover("export");
		const sceneHasImage = computed(() => !!sceneConfig.value?.backgroundImage && sceneConfig.value.backgroundImage !== "");
		const hdriActive = computed(() => !!lightConfig.value?.hdri?.hdriPath && !!lightConfig.value?.hdri?.enabled);
		const isOriginalMaterial = computed(() => modelConfig.value?.materialMode === "original");
		const cameraFov = computed({
			get: () => cameraConfig.value?.fov ?? 0,
			set: (value) => {
				if (cameraConfig.value) cameraConfig.value.fov = value;
			}
		});
		const exportFormats = computed(() => getExportFormatOptions(__props.sourceFormat));
		const topBarRef = ref(null);
		const { width: topW } = useElementSize(topBarRef);
		const compact = computed(() => topW.value > 0 && topW.value < compactWidthThreshold);
		function selectCategory(key) {
			activeCategory.value = key;
			categoryMenuOpen.value = false;
		}
		function onExport(format) {
			emit("exportModel", format);
			exportOpen.value = false;
		}
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock("div", _hoisted_1$2, [
				createBaseVNode("div", {
					ref_key: "topBarRef",
					ref: topBarRef,
					class: "pointer-events-auto flex h-10 items-center gap-1 bg-interface-menu-surface px-2",
					onWheel: _cache[13] || (_cache[13] = withModifiers(() => {}, ["stop"]))
				}, [
					createVNode(Popover_default, {
						open: unref(categoryMenuOpen),
						"onUpdate:open": _cache[0] || (_cache[0] = ($event) => isRef(categoryMenuOpen) ? categoryMenuOpen.value = $event : null)
					}, {
						default: withCtx(() => [createVNode(unref(PopoverTrigger_default), { "as-child": "" }, {
							default: withCtx(() => [createBaseVNode("button", {
								class: normalizeClass(unref(chipClass)),
								type: "button",
								"data-testid": "load3d-category-menu"
							}, [createTextVNode(toDisplayString(activeLabel.value) + " ", 1), _cache[25] || (_cache[25] = createBaseVNode("i", { class: "icon-[lucide--chevron-down] size-4 opacity-70" }, null, -1))], 2)]),
							_: 1
						}), createVNode(PopoverContent_default, {
							side: "bottom",
							align: "start",
							"side-offset": 8,
							class: normalizeClass(unref(panelClass))
						}, {
							default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(categoryDefs.value, (c) => {
								return openBlock(), createElementBlock("button", {
									key: c.key,
									type: "button",
									class: normalizeClass(unref(cn)(unref(rowClass), activeCategory.value === c.key && "bg-button-active-surface")),
									onClick: ($event) => selectCategory(c.key)
								}, toDisplayString(c.label), 11, _hoisted_2$1);
							}), 128))]),
							_: 1
						}, 8, ["class"])]),
						_: 1
					}, 8, ["open"]),
					_cache[26] || (_cache[26] = createBaseVNode("div", { class: "mx-1 h-5 w-px shrink-0 bg-interface-menu-stroke" }, null, -1)),
					activeCategory.value === "scene" && sceneConfig.value ? (openBlock(), createBlock(SceneMenuGroup_default, {
						key: 0,
						config: sceneConfig.value,
						"onUpdate:config": _cache[1] || (_cache[1] = ($event) => sceneConfig.value = $event),
						fov: cameraFov.value,
						"onUpdate:fov": _cache[2] || (_cache[2] = ($event) => cameraFov.value = $event),
						compact: compact.value,
						"can-use-background-image": __props.canUseBackgroundImage,
						"hdri-active": hdriActive.value,
						onUpdateBackgroundImage: _cache[3] || (_cache[3] = ($event) => emit("updateBackgroundImage", $event))
					}, null, 8, [
						"config",
						"fov",
						"compact",
						"can-use-background-image",
						"hdri-active"
					])) : activeCategory.value === "model" && modelConfig.value ? (openBlock(), createBlock(ModelMenuGroup_default, {
						key: 1,
						config: modelConfig.value,
						"onUpdate:config": _cache[4] || (_cache[4] = ($event) => modelConfig.value = $event),
						compact: compact.value,
						"material-modes": __props.materialModes,
						"has-skeleton": __props.hasSkeleton
					}, null, 8, [
						"config",
						"compact",
						"material-modes",
						"has-skeleton"
					])) : activeCategory.value === "camera" && cameraConfig.value ? (openBlock(), createBlock(CameraMenuGroup_default, {
						key: 2,
						config: cameraConfig.value,
						"onUpdate:config": _cache[5] || (_cache[5] = ($event) => cameraConfig.value = $event),
						compact: compact.value
					}, null, 8, ["config", "compact"])) : activeCategory.value === "light" && lightConfig.value && modelConfig.value ? (openBlock(), createBlock(LightMenuGroup_default, {
						key: 3,
						config: lightConfig.value,
						"onUpdate:config": _cache[6] || (_cache[6] = ($event) => lightConfig.value = $event),
						compact: compact.value,
						"is-original-material": isOriginalMaterial.value
					}, null, 8, [
						"config",
						"compact",
						"is-original-material"
					])) : activeCategory.value === "hdri" && lightConfig.value ? (openBlock(), createBlock(HdriMenuGroup_default, {
						key: 4,
						config: lightConfig.value,
						"onUpdate:config": _cache[7] || (_cache[7] = ($event) => lightConfig.value = $event),
						compact: compact.value,
						"scene-has-image": sceneHasImage.value,
						onUpdateHdriFile: _cache[8] || (_cache[8] = ($event) => emit("updateHdriFile", $event))
					}, null, 8, [
						"config",
						"compact",
						"scene-has-image"
					])) : activeCategory.value === "gizmo" && modelConfig.value ? (openBlock(), createBlock(GizmoMenuGroup_default, {
						key: 5,
						config: modelConfig.value,
						"onUpdate:config": _cache[9] || (_cache[9] = ($event) => modelConfig.value = $event),
						compact: compact.value,
						onToggleGizmo: _cache[10] || (_cache[10] = ($event) => emit("toggleGizmo", $event)),
						onSetGizmoMode: _cache[11] || (_cache[11] = ($event) => emit("setGizmoMode", $event)),
						onResetGizmoTransform: _cache[12] || (_cache[12] = ($event) => emit("resetGizmoTransform"))
					}, null, 8, ["config", "compact"])) : createCommentVNode("", true)
				], 544),
				createBaseVNode("div", { class: normalizeClass(unref(cn)("flex-1", isRecording.value && "border-2 border-node-component-executing")) }, null, 2),
				createBaseVNode("div", {
					class: "pointer-events-auto flex h-10 items-center justify-between gap-1 bg-interface-menu-surface px-2",
					onWheel: _cache[24] || (_cache[24] = withModifiers(() => {}, ["stop"]))
				}, [createBaseVNode("div", _hoisted_3, [__props.canUseRecording ? (openBlock(), createBlock(RecordMenuControl_default, {
					key: 0,
					"is-recording": isRecording.value,
					"onUpdate:isRecording": _cache[14] || (_cache[14] = ($event) => isRecording.value = $event),
					"has-recording": hasRecording.value,
					"onUpdate:hasRecording": _cache[15] || (_cache[15] = ($event) => hasRecording.value = $event),
					"recording-duration": recordingDuration.value,
					"onUpdate:recordingDuration": _cache[16] || (_cache[16] = ($event) => recordingDuration.value = $event),
					compact: compact.value,
					onStartRecording: _cache[17] || (_cache[17] = ($event) => emit("startRecording")),
					onStopRecording: _cache[18] || (_cache[18] = ($event) => emit("stopRecording")),
					onExportRecording: _cache[19] || (_cache[19] = ($event) => emit("exportRecording")),
					onClearRecording: _cache[20] || (_cache[20] = ($event) => emit("clearRecording"))
				}, null, 8, [
					"is-recording",
					"has-recording",
					"recording-duration",
					"compact"
				])) : createCommentVNode("", true)]), createBaseVNode("div", _hoisted_4, [
					__props.enableViewer && __props.node ? (openBlock(), createBlock(ViewerControls_default, {
						key: 0,
						node: __props.node
					}, null, 8, ["node"])) : createCommentVNode("", true),
					__props.canFitToViewer ? withDirectives((openBlock(), createElementBlock("button", {
						key: 1,
						class: normalizeClass(unref(iconBtnClass)),
						type: "button",
						"aria-label": unref(t)("load3d.fitToViewer"),
						onClick: _cache[21] || (_cache[21] = ($event) => emit("fitToViewer"))
					}, [..._cache[27] || (_cache[27] = [createBaseVNode("i", { class: "icon-[lucide--scan] size-4" }, null, -1)])], 10, _hoisted_5)), [[
						_directive_tooltip,
						unref(tip)(unref(t)("load3d.fitToViewer")),
						void 0,
						{ top: true }
					]]) : createCommentVNode("", true),
					__props.canCenterCameraOnModel ? withDirectives((openBlock(), createElementBlock("button", {
						key: 2,
						class: normalizeClass(unref(iconBtnClass)),
						type: "button",
						"aria-label": unref(t)("load3d.centerCameraOnModel"),
						onClick: _cache[22] || (_cache[22] = ($event) => emit("centerCamera"))
					}, [..._cache[28] || (_cache[28] = [createBaseVNode("i", { class: "icon-[lucide--crosshair] size-4" }, null, -1)])], 10, _hoisted_6)), [[
						_directive_tooltip,
						unref(tip)(unref(t)("load3d.centerCameraOnModel")),
						void 0,
						{ top: true }
					]]) : createCommentVNode("", true),
					__props.canExport ? (openBlock(), createBlock(Popover_default, {
						key: 3,
						open: unref(exportOpen),
						"onUpdate:open": _cache[23] || (_cache[23] = ($event) => isRef(exportOpen) ? exportOpen.value = $event : null)
					}, {
						default: withCtx(() => [createVNode(unref(PopoverTrigger_default), { "as-child": "" }, {
							default: withCtx(() => [withDirectives((openBlock(), createElementBlock("button", {
								class: normalizeClass(unref(iconBtnClass)),
								type: "button",
								"aria-label": unref(t)("load3d.export")
							}, [..._cache[29] || (_cache[29] = [createBaseVNode("i", { class: "icon-[lucide--download] size-4" }, null, -1)])], 10, _hoisted_7)), [[
								_directive_tooltip,
								unref(tip)(unref(t)("load3d.export")),
								void 0,
								{ top: true }
							]])]),
							_: 1
						}), createVNode(PopoverContent_default, {
							side: "top",
							align: "end",
							"side-offset": 8,
							class: normalizeClass(unref(panelClass))
						}, {
							default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(exportFormats.value, (format) => {
								return openBlock(), createElementBlock("button", {
									key: format.value,
									type: "button",
									class: normalizeClass(unref(rowClass)),
									onClick: ($event) => onExport(format.value)
								}, toDisplayString(format.label), 11, _hoisted_8);
							}), 128))]),
							_: 1
						}, 8, ["class"])]),
						_: 1
					}, 8, ["open"])) : createCommentVNode("", true)
				])], 32)
			]);
		};
	}
});
//#endregion
//#region src/components/load3d/Load3DScene.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = {
	key: 0,
	class: "pointer-events-none absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
};
var _hoisted_2 = { class: "rounded-lg border-2 border-dashed border-blue-400 bg-blue-500/20 px-6 py-4 text-lg font-medium text-blue-100" };
//#endregion
//#region src/components/load3d/Load3DScene.vue
var Load3DScene_default = /* @__PURE__ */ defineComponent({
	__name: "Load3DScene",
	props: {
		initializeLoad3d: { type: Function },
		cleanup: { type: Function },
		loading: { type: Boolean },
		loadingMessage: {},
		onModelDrop: { type: Function },
		isPreview: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const container = ref(null);
		function focusContainer() {
			container.value?.focus();
		}
		const { isDragging, dragMessage, handleDragOver, handleDragLeave, handleDrop } = useLoad3dDrag({
			onModelDrop: async (file) => {
				if (props.onModelDrop) await props.onModelDrop(file);
			},
			disabled: computed(() => props.isPreview)
		});
		onMounted(() => {
			if (container.value) props.initializeLoad3d(container.value);
		});
		onUnmounted(() => {
			props.cleanup();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "container",
				ref: container,
				class: "relative size-full min-h-[200px]",
				"data-capture-wheel": "true",
				tabindex: "-1",
				onPointerdown: withModifiers(focusContainer, ["stop"]),
				onMousedown: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"])),
				onContextmenu: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop", "prevent"])),
				onDragover: _cache[2] || (_cache[2] = withModifiers((...args) => unref(handleDragOver) && unref(handleDragOver)(...args), ["prevent", "stop"])),
				onDragleave: _cache[3] || (_cache[3] = withModifiers((...args) => unref(handleDragLeave) && unref(handleDragLeave)(...args), ["stop"])),
				onDrop: _cache[4] || (_cache[4] = withModifiers((...args) => unref(handleDrop) && unref(handleDrop)(...args), ["prevent", "stop"]))
			}, [createVNode(LoadingOverlay_default, {
				loading: __props.loading,
				"loading-message": __props.loadingMessage
			}, null, 8, ["loading", "loading-message"]), !__props.isPreview && unref(isDragging) ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createBaseVNode("div", _hoisted_2, toDisplayString(unref(dragMessage)), 1)])) : createCommentVNode("", true)], 544);
		};
	}
});
//#endregion
//#region src/components/load3d/Load3D.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "pointer-events-none absolute top-0 left-0 size-full" };
//#endregion
//#region src/components/load3d/Load3D.vue
var Load3D_default = /* @__PURE__ */ defineComponent({
	__name: "Load3D",
	props: {
		widget: {},
		nodeId: {},
		canUseRecording: {
			type: Boolean,
			default: true
		},
		canUseHdri: {
			type: Boolean,
			default: true
		},
		canUseBackgroundImage: {
			type: Boolean,
			default: true
		}
	},
	setup(__props) {
		function isComponentWidget(widget) {
			return "node" in widget && widget.node !== void 0;
		}
		const node = ref(null);
		if (isComponentWidget(__props.widget)) node.value = __props.widget.node;
		else if (__props.nodeId) onMounted(() => {
			node.value = resolveNode(__props.nodeId) ?? null;
		});
		const { sceneConfig, modelConfig, cameraConfig, lightConfig, isRecording, isPreview, canFitToViewer, canCenterCameraOnModel, canUseGizmo, canUseLighting, canExport, materialModes, hasSkeleton, sourceFormat, hasRecording, recordingDuration, animations, playing, selectedSpeed, selectedAnimation, animationProgress, animationDuration, loading, loadingMessage, initializeLoad3d, handleMouseEnter, handleMouseLeave, handleStartRecording, handleStopRecording, handleExportRecording, handleClearRecording, handleSeek, handleBackgroundImageUpdate, handleHDRIFileUpdate, handleExportModel, handleModelDrop, handleFitToViewer, handleCenterCameraOnModel, handleToggleGizmo, handleSetGizmoMode, handleResetGizmoTransform, cleanup } = useLoad3d(node);
		const enable3DViewer = computed(() => useSettingStore().get("Comfy.Load3D.3DViewerEnable"));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: "relative size-full",
				onMouseenter: _cache[13] || (_cache[13] = (...args) => unref(handleMouseEnter) && unref(handleMouseEnter)(...args)),
				onMouseleave: _cache[14] || (_cache[14] = (...args) => unref(handleMouseLeave) && unref(handleMouseLeave)(...args)),
				onPointerdown: _cache[15] || (_cache[15] = withModifiers(() => {}, ["stop"]))
			}, [node.value ? (openBlock(), createBlock(Load3DScene_default, {
				key: 0,
				"initialize-load3d": unref(initializeLoad3d),
				cleanup: unref(cleanup),
				loading: unref(loading),
				"loading-message": unref(loadingMessage),
				"on-model-drop": unref(isPreview) ? void 0 : unref(handleModelDrop),
				"is-preview": unref(isPreview)
			}, null, 8, [
				"initialize-load3d",
				"cleanup",
				"loading",
				"loading-message",
				"on-model-drop",
				"is-preview"
			])) : createCommentVNode("", true), createBaseVNode("div", _hoisted_1, [createVNode(Load3DMenuBar_default, {
				"scene-config": unref(sceneConfig),
				"onUpdate:sceneConfig": _cache[0] || (_cache[0] = ($event) => isRef(sceneConfig) ? sceneConfig.value = $event : null),
				"model-config": unref(modelConfig),
				"onUpdate:modelConfig": _cache[1] || (_cache[1] = ($event) => isRef(modelConfig) ? modelConfig.value = $event : null),
				"camera-config": unref(cameraConfig),
				"onUpdate:cameraConfig": _cache[2] || (_cache[2] = ($event) => isRef(cameraConfig) ? cameraConfig.value = $event : null),
				"light-config": unref(lightConfig),
				"onUpdate:lightConfig": _cache[3] || (_cache[3] = ($event) => isRef(lightConfig) ? lightConfig.value = $event : null),
				"is-recording": unref(isRecording),
				"onUpdate:isRecording": _cache[4] || (_cache[4] = ($event) => isRef(isRecording) ? isRecording.value = $event : null),
				"has-recording": unref(hasRecording),
				"onUpdate:hasRecording": _cache[5] || (_cache[5] = ($event) => isRef(hasRecording) ? hasRecording.value = $event : null),
				"recording-duration": unref(recordingDuration),
				"onUpdate:recordingDuration": _cache[6] || (_cache[6] = ($event) => isRef(recordingDuration) ? recordingDuration.value = $event : null),
				"can-use-gizmo": unref(canUseGizmo),
				"can-use-lighting": unref(canUseLighting),
				"can-export": unref(canExport),
				"can-use-hdri": __props.canUseHdri,
				"can-use-background-image": __props.canUseBackgroundImage,
				"can-fit-to-viewer": unref(canFitToViewer),
				"can-center-camera-on-model": unref(canCenterCameraOnModel),
				node: node.value,
				"enable-viewer": enable3DViewer.value,
				"can-use-recording": __props.canUseRecording && !unref(isPreview),
				"material-modes": unref(materialModes),
				"has-skeleton": unref(hasSkeleton),
				"source-format": unref(sourceFormat),
				onUpdateBackgroundImage: unref(handleBackgroundImageUpdate),
				onUpdateHdriFile: unref(handleHDRIFileUpdate),
				onExportModel: unref(handleExportModel),
				onFitToViewer: unref(handleFitToViewer),
				onCenterCamera: unref(handleCenterCameraOnModel),
				onToggleGizmo: unref(handleToggleGizmo),
				onSetGizmoMode: unref(handleSetGizmoMode),
				onResetGizmoTransform: unref(handleResetGizmoTransform),
				onStartRecording: unref(handleStartRecording),
				onStopRecording: unref(handleStopRecording),
				onExportRecording: unref(handleExportRecording),
				onClearRecording: unref(handleClearRecording)
			}, null, 8, [
				"scene-config",
				"model-config",
				"camera-config",
				"light-config",
				"is-recording",
				"has-recording",
				"recording-duration",
				"can-use-gizmo",
				"can-use-lighting",
				"can-export",
				"can-use-hdri",
				"can-use-background-image",
				"can-fit-to-viewer",
				"can-center-camera-on-model",
				"node",
				"enable-viewer",
				"can-use-recording",
				"material-modes",
				"has-skeleton",
				"source-format",
				"onUpdateBackgroundImage",
				"onUpdateHdriFile",
				"onExportModel",
				"onFitToViewer",
				"onCenterCamera",
				"onToggleGizmo",
				"onSetGizmoMode",
				"onResetGizmoTransform",
				"onStartRecording",
				"onStopRecording",
				"onExportRecording",
				"onClearRecording"
			]), unref(animations) && unref(animations).length > 0 ? (openBlock(), createBlock(AnimationControls_default, {
				key: 0,
				animations: unref(animations),
				"onUpdate:animations": _cache[7] || (_cache[7] = ($event) => isRef(animations) ? animations.value = $event : null),
				playing: unref(playing),
				"onUpdate:playing": _cache[8] || (_cache[8] = ($event) => isRef(playing) ? playing.value = $event : null),
				"selected-speed": unref(selectedSpeed),
				"onUpdate:selectedSpeed": _cache[9] || (_cache[9] = ($event) => isRef(selectedSpeed) ? selectedSpeed.value = $event : null),
				"selected-animation": unref(selectedAnimation),
				"onUpdate:selectedAnimation": _cache[10] || (_cache[10] = ($event) => isRef(selectedAnimation) ? selectedAnimation.value = $event : null),
				"animation-progress": unref(animationProgress),
				"onUpdate:animationProgress": _cache[11] || (_cache[11] = ($event) => isRef(animationProgress) ? animationProgress.value = $event : null),
				"animation-duration": unref(animationDuration),
				"onUpdate:animationDuration": _cache[12] || (_cache[12] = ($event) => isRef(animationDuration) ? animationDuration.value = $event : null),
				onSeek: unref(handleSeek)
			}, null, 8, [
				"animations",
				"playing",
				"selected-speed",
				"selected-animation",
				"animation-progress",
				"animation-duration",
				"onSeek"
			])) : createCommentVNode("", true)])], 32);
		};
	}
});
//#endregion
export { Load3D_default as t };

//# sourceMappingURL=Load3D-tzuD2pDL.js.map