const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ValueControlPopover-X92ck1qf.js","./rolldown-runtime-C9Cmlsnw.js","./vendor-primevue-T0qpAVQN.js","./vendor-vue-core-oGuyqViA.js","./Button-By8A3toz.js","./vendor-reka-ui-CLUGudFd.js","./vendor-other-hebp3VVz.js","./vendor-three-CAgYnvrp.js","./vendor-zod-DrbcGYyw.js","./vendor-firebase-Ct6mBV2V.js","./vendor-tiptap-CQtgpFeu.js","./src-C1FpYMFF.js","./settingStore-pm7IqVHI.js","./vendor-i18n-CPpp7rsM.js","./vendor-vueuse-De7x5bAw.js","./telemetry-C8VBI5GP.js","./vendor-axios-BPNLFQfO.js","./api-btlSMXR9.js","./devFeatureFlagOverride-Bl3R9S_5.js","./toastStore-D7DQZkvm.js","./vendor-markdown-CeCiL7x5.js","./vendor-yjs-tEUnrtST.js","./ColorPicker-CPcI1_JS.js","./useModalLiftedZIndex-D-brf-IL.js","./SelectValue-Bfpp46Bi.js","./i18n-B4bSsdRi.js","./commands-DJua3xt8.js","./main-CNXm6Bpt.js","./nodeDefs-ODHPSASO.js","./settings-BZV9bK15.js","./Popover-lQ8j8DnS.js","./formatUtil-gEy6QwfT.js","./downloadUtil-C_j21ea1.js","./remoteConfig-F6WCXiNB.js","./useFeatureFlags-CvjPiCWD.js","./dialogStore-BAELBvsb.js","./userStore-rNaWLZbN.js","./widgetTypes-DCo-gXsA.js","./vendor-sentry-NtE0Edaa.js","./useErrorHandling-qSb1ezo_.js","./systemStatsStore-DX61eilr.js","./_plugin-vue_export-helper-CxSqLFJz.js","./useImageQuiet-DBL4QWSj.js","./DialogHeader-BkpfMvwx.js","./Input-B7kLLN1i.js","./Loader-CoxcNRNx.js","./Switch-CI-CYYu8.js","./envUtil-DDRnAAj_.js","./useExternalLink-dnLPgbQx.js","./types-DQDrDd50.js","./VideoPlayOverlay-ClskzJvp.js","./WaveAudioPlayer-CDD_sIiw.js","./Slider-CDv5K1AE.js","./useTextFileContent-Dx3B3Me6.js","./useFeatureUsageTracker-B5Lg6nSg.js","./markdownRendererUtil-BNoM8xu5.js","./vendor-other-DODGPXtn.css","./settingStore-CnXwLYSV.css"])))=>i.map(i=>d[i]);
import "./rolldown-runtime-C9Cmlsnw.js";
import { lt as __vitePreload } from "./vendor-primevue-T0qpAVQN.js";
import { F as createCommentVNode, H as defineAsyncComponent, Ht as unref, I as createElementBlock, Nt as ref, P as createBlock, St as withCtx, U as defineComponent, V as createVNode, Wt as normalizeClass, X as mergeModels, Z as mergeProps, at as openBlock, dt as resolveDynamicComponent, ht as useModel, qt as toDisplayString, vt as watch } from "./vendor-vue-core-oGuyqViA.js";
import { r as useI18n } from "./vendor-i18n-CPpp7rsM.js";
import { t as cn } from "./src-C1FpYMFF.js";
import { t as Popover_default } from "./Popover-lQ8j8DnS.js";
//#region src/renderer/extensions/vueNodes/widgets/components/ValueControlButton.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["aria-label"];
var _hoisted_2 = {
	key: 1,
	class: "text-xs font-normal text-primary-background"
};
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/ValueControlButton.vue
var ValueControlButton_default = /* @__PURE__ */ defineComponent({
	__name: "ValueControlButton",
	props: {
		mode: {},
		variant: { default: "badge" }
	},
	setup(__props) {
		const { t } = useI18n();
		const iconMap = {
			fixed: "icon-[lucide--pencil-off]",
			randomize: "icon-[lucide--shuffle]",
			increment: null,
			decrement: null
		};
		const textMap = {
			increment: "+1",
			decrement: "-1",
			fixed: null,
			randomize: null
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("button", {
				"data-testid": "value-control",
				type: "button",
				"aria-label": unref(t)("widgets.valueControl." + __props.mode),
				class: normalizeClass(unref(cn)("flex shrink-0 cursor-pointer items-center justify-center border-none focus-visible:ring-2 focus-visible:ring-primary-background focus-visible:ring-offset-1 focus-visible:outline-none", __props.variant === "badge" ? "h-4.5 w-8 rounded-full" : "size-6 rounded-sm", __props.mode !== "fixed" ? "bg-primary-background/30 hover:bg-primary-background-hover/30" : "bg-transparent"))
			}, [iconMap[__props.mode] ? (openBlock(), createElementBlock("i", {
				key: 0,
				"aria-hidden": "true",
				class: normalizeClass(unref(cn)(iconMap[__props.mode] ?? "", "text-xs", __props.mode === "fixed" ? "text-muted-foreground" : "text-primary-background"))
			}, null, 2)) : textMap[__props.mode] ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(textMap[__props.mode]), 1)) : createCommentVNode("", true)], 10, _hoisted_1$1);
		};
	}
});
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetWithControl.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "relative grid grid-cols-subgrid" };
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetWithControl.vue
var WidgetWithControl_default = /* @__PURE__ */ defineComponent({
	__name: "WidgetWithControl",
	props: /*@__PURE__*/ mergeModels({
		widget: {},
		component: {}
	}, {
		"modelValue": {},
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const ValueControlPopover = defineAsyncComponent(() => __vitePreload(() => import("./ValueControlPopover-X92ck1qf.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57]), import.meta.url));
		const props = __props;
		const modelValue = useModel(__props, "modelValue");
		const controlModel = ref(props.widget.controlWidget.value);
		watch(controlModel, props.widget.controlWidget.update);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(resolveDynamicComponent(__props.component), mergeProps(_ctx.$attrs, {
				modelValue: modelValue.value,
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => modelValue.value = $event),
				widget: __props.widget
			}), {
				default: withCtx(() => [createVNode(Popover_default, null, {
					button: withCtx(() => [createVNode(ValueControlButton_default, {
						mode: controlModel.value,
						class: "mr-1 self-center"
					}, null, 8, ["mode"])]),
					default: withCtx(() => [createVNode(unref(ValueControlPopover), {
						modelValue: controlModel.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => controlModel.value = $event)
					}, null, 8, ["modelValue"])]),
					_: 1
				})]),
				_: 1
			}, 16, ["modelValue", "widget"]))]);
		};
	}
});
//#endregion
export { WidgetWithControl_default as t };

//# sourceMappingURL=WidgetWithControl-CpTdgvP6.js.map