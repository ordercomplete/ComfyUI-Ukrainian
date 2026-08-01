const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./commands-TKtFDFQb.js","./commands-DJua3xt8.js","./main-hQS29BSI.js","./main-CNXm6Bpt.js","./nodeDefs-BZPOVikP.js","./nodeDefs-ODHPSASO.js","./settings-CpvglR1q.js","./settings-BZV9bK15.js"])))=>i.map(i=>d[i]);
import "./rolldown-runtime-C9Cmlsnw.js";
import { lt as __vitePreload } from "./vendor-primevue-T0qpAVQN.js";
import { n as createI18n } from "./vendor-i18n-CPpp7rsM.js";
import { qt as commands_default } from "./commands-DJua3xt8.js";
import { jt as main_default } from "./main-CNXm6Bpt.js";
import { ah as nodeDefs_default } from "./nodeDefs-ODHPSASO.js";
import { $t as settings_default } from "./settings-BZV9bK15.js";
//#region src/locales/localeConfig.ts
var localeFiles = /* #__PURE__ */ Object.assign({
	"./ar/commands.json": () => __vitePreload(() => import("./commands-uQIrnyLl.js"), [], import.meta.url),
	"./ar/main.json": () => __vitePreload(() => import("./main-80CMzv7p.js"), [], import.meta.url),
	"./ar/nodeDefs.json": () => __vitePreload(() => import("./nodeDefs-BYAaENFm.js"), [], import.meta.url),
	"./ar/settings.json": () => __vitePreload(() => import("./settings-Bn863oTk.js"), [], import.meta.url),
	"./en/commands.json": () => __vitePreload(() => import("./commands-TKtFDFQb.js"), __vite__mapDeps([0,1]), import.meta.url),
	"./en/main.json": () => __vitePreload(() => import("./main-hQS29BSI.js"), __vite__mapDeps([2,3]), import.meta.url),
	"./en/nodeDefs.json": () => __vitePreload(() => import("./nodeDefs-BZPOVikP.js"), __vite__mapDeps([4,5]), import.meta.url),
	"./en/settings.json": () => __vitePreload(() => import("./settings-CpvglR1q.js"), __vite__mapDeps([6,7]), import.meta.url),
	"./es/commands.json": () => __vitePreload(() => import("./commands-CHKl7FpD.js"), [], import.meta.url),
	"./es/main.json": () => __vitePreload(() => import("./main-BR-gsYDx.js"), [], import.meta.url),
	"./es/nodeDefs.json": () => __vitePreload(() => import("./nodeDefs-C2lx_JfS.js"), [], import.meta.url),
	"./es/settings.json": () => __vitePreload(() => import("./settings-0eDSzGy3.js"), [], import.meta.url),
	"./fa/commands.json": () => __vitePreload(() => import("./commands-48PTLZYQ.js"), [], import.meta.url),
	"./fa/main.json": () => __vitePreload(() => import("./main-BZgbdfJa.js"), [], import.meta.url),
	"./fa/nodeDefs.json": () => __vitePreload(() => import("./nodeDefs-BtkVo0W9.js"), [], import.meta.url),
	"./fa/settings.json": () => __vitePreload(() => import("./settings-CVVkjIT3.js"), [], import.meta.url),
	"./fr/commands.json": () => __vitePreload(() => import("./commands-B1myttjd.js"), [], import.meta.url),
	"./fr/main.json": () => __vitePreload(() => import("./main-CDmBE_CR.js"), [], import.meta.url),
	"./fr/nodeDefs.json": () => __vitePreload(() => import("./nodeDefs-XKfFuZ2W.js"), [], import.meta.url),
	"./fr/settings.json": () => __vitePreload(() => import("./settings-Cq82zYdo.js"), [], import.meta.url),
	"./he/commands.json": () => __vitePreload(() => import("./commands-C0UdQdcx.js"), [], import.meta.url),
	"./he/main.json": () => __vitePreload(() => import("./main-pst1fe6C.js"), [], import.meta.url),
	"./he/nodeDefs.json": () => __vitePreload(() => import("./nodeDefs-Cg2LvcxC.js"), [], import.meta.url),
	"./he/settings.json": () => __vitePreload(() => import("./settings-CAtnMrRs.js"), [], import.meta.url),
	"./ja/commands.json": () => __vitePreload(() => import("./commands-UjKcMg6P.js"), [], import.meta.url),
	"./ja/main.json": () => __vitePreload(() => import("./main-DEc-oCNC.js"), [], import.meta.url),
	"./ja/nodeDefs.json": () => __vitePreload(() => import("./nodeDefs-N8EZbZiF.js"), [], import.meta.url),
	"./ja/settings.json": () => __vitePreload(() => import("./settings-DXX1vc_Y.js"), [], import.meta.url),
	"./ko/commands.json": () => __vitePreload(() => import("./commands-C8YXCqLT.js"), [], import.meta.url),
	"./ko/main.json": () => __vitePreload(() => import("./main-BuCZXIOg.js"), [], import.meta.url),
	"./ko/nodeDefs.json": () => __vitePreload(() => import("./nodeDefs-Ye0Y3qqk.js"), [], import.meta.url),
	"./ko/settings.json": () => __vitePreload(() => import("./settings-B_DhCDid.js"), [], import.meta.url),
	"./pt-BR/commands.json": () => __vitePreload(() => import("./commands-lOjT5_iG.js"), [], import.meta.url),
	"./pt-BR/main.json": () => __vitePreload(() => import("./main-BSIzvkB6.js"), [], import.meta.url),
	"./pt-BR/nodeDefs.json": () => __vitePreload(() => import("./nodeDefs-Dsol-fpU.js"), [], import.meta.url),
	"./pt-BR/settings.json": () => __vitePreload(() => import("./settings-Daet4xNs.js"), [], import.meta.url),
	"./ru/commands.json": () => __vitePreload(() => import("./commands-CFmD5oCr.js"), [], import.meta.url),
	"./ru/main.json": () => __vitePreload(() => import("./main-DTUYeSe2.js"), [], import.meta.url),
	"./ru/nodeDefs.json": () => __vitePreload(() => import("./nodeDefs-CqkzMRyY.js"), [], import.meta.url),
	"./ru/settings.json": () => __vitePreload(() => import("./settings-CAvwhVPR.js"), [], import.meta.url),
	"./tr/commands.json": () => __vitePreload(() => import("./commands-yV6ZvMYn.js"), [], import.meta.url),
	"./tr/main.json": () => __vitePreload(() => import("./main--wJsv70Q.js"), [], import.meta.url),
	"./tr/nodeDefs.json": () => __vitePreload(() => import("./nodeDefs-9XKCuZIy.js"), [], import.meta.url),
	"./tr/settings.json": () => __vitePreload(() => import("./settings-Y9l6Ha7X.js"), [], import.meta.url),
	"./uk/commands.json": () => __vitePreload(() => import("./commands-Q4XVBC_i.js"), [], import.meta.url),
	"./uk/main.json": () => __vitePreload(() => import("./main-CM1Y4lgq.js"), [], import.meta.url),
	"./uk/nodeDefs.json": () => __vitePreload(() => import("./nodeDefs-6_OSqomM.js"), [], import.meta.url),
	"./uk/settings.json": () => __vitePreload(() => import("./settings-CTZtNjCz.js"), [], import.meta.url),
	"./zh/commands.json": () => __vitePreload(() => import("./commands-C1yZylLE.js"), [], import.meta.url),
	"./zh/main.json": () => __vitePreload(() => import("./main-DiiiWuoJ.js"), [], import.meta.url),
	"./zh/nodeDefs.json": () => __vitePreload(() => import("./nodeDefs-DoV7vQCM.js"), [], import.meta.url),
	"./zh/settings.json": () => __vitePreload(() => import("./settings-BdLwHiUN.js"), [], import.meta.url),
	"./zh-TW/commands.json": () => __vitePreload(() => import("./commands-WgxGYIIR.js"), [], import.meta.url),
	"./zh-TW/main.json": () => __vitePreload(() => import("./main-D0lqITQs.js"), [], import.meta.url),
	"./zh-TW/nodeDefs.json": () => __vitePreload(() => import("./nodeDefs-Dbmac27J.js"), [], import.meta.url),
	"./zh-TW/settings.json": () => __vitePreload(() => import("./settings-DC48UsbS.js"), [], import.meta.url)
});
function loadersFor(locale) {
	return {
		main: localeFiles[`./${locale}/main.json`],
		nodeDefs: localeFiles[`./${locale}/nodeDefs.json`],
		commands: localeFiles[`./${locale}/commands.json`],
		settings: localeFiles[`./${locale}/settings.json`]
	};
}
var localeDefinitions = {
	en: {
		text: "English",
		loaders: null
	},
	zh: {
		text: "中文",
		loaders: loadersFor("zh")
	},
	"zh-TW": {
		text: "繁體中文",
		loaders: loadersFor("zh-TW")
	},
	ru: {
		text: "Русский",
		loaders: loadersFor("ru")
	},
	ja: {
		text: "日本語",
		loaders: loadersFor("ja")
	},
	ko: {
		text: "한국어",
		loaders: loadersFor("ko")
	},
	fr: {
		text: "Français",
		loaders: loadersFor("fr")
	},
	es: {
		text: "Español",
		loaders: loadersFor("es")
	},
	ar: {
		text: "عربي",
		loaders: loadersFor("ar")
	},
	tr: {
		text: "Türkçe",
		loaders: loadersFor("tr")
	},
	"pt-BR": {
		text: "Português (BR)",
		loaders: loadersFor("pt-BR")
	},
	fa: {
		text: "فارسی",
		loaders: loadersFor("fa")
	},
	he: {
		text: "עברית",
		loaders: loadersFor("he")
	},
	uk: {
		text: "Українська",
		loaders: loadersFor("uk")
	}
};
var SUPPORTED_LOCALES = Object.keys(localeDefinitions);
var SUPPORTED_LOCALE_OPTIONS = SUPPORTED_LOCALES.map((value) => ({
	value,
	text: localeDefinitions[value].text
}));
var supportedLocaleByLower = new Map(SUPPORTED_LOCALES.map((locale) => [locale.toLowerCase(), locale]));
function matchSingle(candidate) {
	const normalized = candidate.toLowerCase();
	return supportedLocaleByLower.get(normalized) ?? supportedLocaleByLower.get(normalized.split("-")[0]);
}
function resolveSupportedLocale(input) {
	const candidates = Array.isArray(input) ? input : input ? [input] : [];
	for (const candidate of candidates) {
		if (!candidate) continue;
		const matched = matchSingle(candidate);
		if (matched) return matched;
	}
	return "en";
}
function getDefaultLocale() {
	return resolveSupportedLocale(navigator.languages);
}
//#endregion
//#region src/i18n.ts
function buildLocale(main, nodes, commands, settings) {
	return {
		...main,
		nodeDefs: nodes,
		commands,
		settings
	};
}
var loadedLocales = /* @__PURE__ */ new Set(["en"]);
var loadingLocales = /* @__PURE__ */ new Map();
var customNodesI18nData = {};
/**
* Dynamically load a shipped locale's bundles (nodeDefs, commands, settings).
* Callers must pre-resolve untrusted input via `resolveSupportedLocale` or
* `setActiveLocale`, which is the boundary helper for arbitrary input.
*/
async function loadLocale(locale) {
	if (loadedLocales.has(locale)) return;
	const existingLoad = loadingLocales.get(locale);
	if (existingLoad) {
		await existingLoad;
		return;
	}
	const loaders = localeDefinitions[locale].loaders;
	if (!loaders) return;
	const loadPromise = (async () => {
		try {
			const [main, nodes, commands, settings] = await Promise.all([
				loaders.main(),
				loaders.nodeDefs(),
				loaders.commands(),
				loaders.settings()
			]);
			const messages = buildLocale(main.default, nodes.default, commands.default, settings.default);
			i18n.global.setLocaleMessage(locale, messages);
			loadedLocales.add(locale);
			if (customNodesI18nData[locale]) i18n.global.mergeLocaleMessage(locale, customNodesI18nData[locale]);
		} catch (error) {
			console.error(`Failed to load locale "${locale}":`, error);
			throw error;
		} finally {
			loadingLocales.delete(locale);
		}
	})();
	loadingLocales.set(locale, loadPromise);
	await loadPromise;
}
/**
* Boundary helper for arbitrary locale input (settings, browser preferences):
* resolves to a shipped tag, loads it, and updates the active locale.
*
* Returns the resolved tag so callers can detect a clamp (e.g. a stale stored
* `Comfy.Locale` from an older build) and self-heal persisted state.
*/
async function setActiveLocale(input) {
	const resolved = resolveSupportedLocale(input);
	if (typeof input === "string" && input && input !== resolved) console.warn(`Locale "${input}" not shipped; using "${resolved}"`);
	await loadLocale(resolved);
	i18n.global.locale.value = resolved;
	return resolved;
}
/**
* Stores the data for later use when locales are lazily loaded,
* and immediately merges data for already-loaded locales.
*/
function mergeCustomNodesI18n(i18nData) {
	for (const key of Object.keys(customNodesI18nData)) delete customNodesI18nData[key];
	Object.assign(customNodesI18nData, i18nData);
	for (const [locale, message] of Object.entries(i18nData)) if (loadedLocales.has(locale)) i18n.global.mergeLocaleMessage(locale, message);
}
var messages = { en: buildLocale(main_default, nodeDefs_default, commands_default, settings_default) };
var i18n = createI18n({
	legacy: false,
	locale: getDefaultLocale(),
	fallbackLocale: "en",
	escapeParameter: true,
	messages,
	missingWarn: /^(?!settings\.Comfy_Locale\.options\.).+/,
	fallbackWarn: /^(?!settings\.Comfy_Locale\.options\.).+/
});
/** Convenience shorthand: i18n.global */
var t = i18n.global.t;
var te = (key, locale) => i18n.global.te(key, locale ?? i18n.global.locale.value);
var d = i18n.global.d;
var tm = i18n.global.tm;
function rawTranslationOrFallback(key, fallbackMessage) {
	const message = tm(key);
	return typeof message === "string" ? message : fallbackMessage;
}
/**
* Safe translation function that returns the fallback message if the key is not found.
* Invalid message syntax falls back to the raw locale message instead of crashing.
*
* @param key - The key to translate.
* @param fallbackMessage - The fallback message to use if the key is not found.
*/
function st(key, fallbackMessage) {
	if (!te(key)) return fallbackMessage;
	try {
		return t(key);
	} catch (error) {
		if (!(error instanceof SyntaxError)) throw error;
		return rawTranslationOrFallback(key, fallbackMessage);
	}
}
/**
* Safe raw translation function for strings that may contain i18n syntax.
*
* @param key - The key for the raw locale message.
* @param fallbackMessage - The fallback message to use if the key is not found
* or the locale message is not a string.
*/
function stRaw(key, fallbackMessage) {
	if (!te(key)) return fallbackMessage;
	return rawTranslationOrFallback(key, fallbackMessage);
}
//#endregion
export { setActiveLocale as a, t as c, getDefaultLocale as d, resolveSupportedLocale as f, mergeCustomNodesI18n as i, te as l, i18n as n, st as o, loadLocale as r, stRaw as s, d as t, SUPPORTED_LOCALE_OPTIONS as u };

//# sourceMappingURL=i18n-B4bSsdRi.js.map