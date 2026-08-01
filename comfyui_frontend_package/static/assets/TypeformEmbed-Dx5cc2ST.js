import "./rolldown-runtime-C9Cmlsnw.js";
import { Ht as unref, I as createElementBlock, U as defineComponent, Wt as normalizeClass, _t as useTemplateRef, at as openBlock, qt as toDisplayString } from "./vendor-vue-core-oGuyqViA.js";
import { r as useI18n } from "./vendor-i18n-CPpp7rsM.js";
import { n as useTypeformEmbed } from "./useTypeformEmbed-DUkqWdpw.js";
//#region src/platform/surveys/TypeformEmbed.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	key: 0,
	class: "text-danger flex h-full items-center text-sm"
};
var _hoisted_2 = [
	"data-tf-widget",
	"data-tf-hidden",
	"data-tf-redirect-target",
	"data-tf-auto-resize"
];
//#endregion
//#region src/platform/surveys/TypeformEmbed.vue
var TypeformEmbed_default = /* @__PURE__ */ defineComponent({
	__name: "TypeformEmbed",
	props: {
		typeformId: {},
		hiddenFields: {},
		autoResize: {
			type: Boolean,
			default: false
		},
		redirectTarget: {}
	},
	setup(__props) {
		const { t } = useI18n();
		const typeformRef = useTemplateRef("typeformRef");
		const { typeformError, isValidTypeformId } = useTypeformEmbed(typeformRef, () => __props.typeformId);
		return (_ctx, _cache) => {
			return unref(typeformError) || !unref(isValidTypeformId) ? (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString(unref(t)("typeform.loadError")), 1)) : (openBlock(), createElementBlock("div", {
				key: 1,
				ref_key: "typeformRef",
				ref: typeformRef,
				"data-testid": "typeform-embed",
				"data-tf-widget": __props.typeformId,
				"data-tf-hidden": __props.hiddenFields,
				"data-tf-redirect-target": __props.redirectTarget,
				"data-tf-auto-resize": __props.autoResize || void 0,
				class: normalizeClass(__props.autoResize ? "w-full" : "size-full")
			}, null, 10, _hoisted_2));
		};
	}
});
//#endregion
export { TypeformEmbed_default as t };

//# sourceMappingURL=TypeformEmbed-Dx5cc2ST.js.map