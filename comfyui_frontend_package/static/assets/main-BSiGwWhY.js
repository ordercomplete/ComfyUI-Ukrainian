const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./GraphView-rB7Fd4WD.js","./rolldown-runtime-C9Cmlsnw.js","./vendor-primevue-T0qpAVQN.js","./vendor-vue-core-oGuyqViA.js","./vendor-reka-ui-CLUGudFd.js","./vendor-i18n-CPpp7rsM.js","./vendor-other-hebp3VVz.js","./vendor-three-CAgYnvrp.js","./vendor-zod-DrbcGYyw.js","./vendor-firebase-Ct6mBV2V.js","./vendor-tiptap-CQtgpFeu.js","./src-C1FpYMFF.js","./Button-By8A3toz.js","./vendor-vueuse-De7x5bAw.js","./telemetry-C8VBI5GP.js","./api-btlSMXR9.js","./vendor-axios-BPNLFQfO.js","./devFeatureFlagOverride-Bl3R9S_5.js","./toastStore-D7DQZkvm.js","./settingStore-pm7IqVHI.js","./vendor-markdown-CeCiL7x5.js","./vendor-yjs-tEUnrtST.js","./ColorPicker-CPcI1_JS.js","./useModalLiftedZIndex-D-brf-IL.js","./SelectValue-Bfpp46Bi.js","./i18n-B4bSsdRi.js","./commands-DJua3xt8.js","./main-CNXm6Bpt.js","./nodeDefs-ODHPSASO.js","./settings-BZV9bK15.js","./Popover-lQ8j8DnS.js","./formatUtil-gEy6QwfT.js","./downloadUtil-C_j21ea1.js","./remoteConfig-F6WCXiNB.js","./useFeatureFlags-CvjPiCWD.js","./dialogStore-BAELBvsb.js","./userStore-rNaWLZbN.js","./widgetTypes-DCo-gXsA.js","./vendor-sentry-NtE0Edaa.js","./useErrorHandling-qSb1ezo_.js","./systemStatsStore-DX61eilr.js","./_plugin-vue_export-helper-CxSqLFJz.js","./useImageQuiet-DBL4QWSj.js","./DialogHeader-BkpfMvwx.js","./Input-B7kLLN1i.js","./Loader-CoxcNRNx.js","./Switch-CI-CYYu8.js","./envUtil-DDRnAAj_.js","./useExternalLink-dnLPgbQx.js","./types-DQDrDd50.js","./VideoPlayOverlay-ClskzJvp.js","./WaveAudioPlayer-CDD_sIiw.js","./Slider-CDv5K1AE.js","./useTextFileContent-Dx3B3Me6.js","./useFeatureUsageTracker-B5Lg6nSg.js","./markdownRendererUtil-BNoM8xu5.js","./ButtonGroup-COPmojS_.js","./SubscribeToRun-Bkf2RqlP.js","./ScrubableNumberInput-Da92nH0x.js","./curveUtils-C6l6KL7z.js","./keybindingService-hcJ8JpQE.js","./UserAvatar-B9iDEjme.js","./hdrFormatUtil-BP9awyTK.js","./useClickDragGuard-Bm7Ym1J4.js","./useTypeformEmbed-DUkqWdpw.js","./loadExternalScript-BDfeWV5F.js","./feedbackDialog-DoTEKVgz.js","./TypeformEmbed-Dx5cc2ST.js","./layout-CaAofiYn.js","./useConflictDetection-Bd_qpvxb.js","./errorUtil-Bu6ObRx2.js","./vRekaZIndex-BN7u4ENl.js","./WorkspaceProfilePic-LeJkcWgK.js","./GlobalToast-BDv3ETPc.js","./TopbarBadge-BieGYWRp.js","./SubscribeButton-sO8jAz7s.js","./missingModelDownload-2XvjfcuH.js","./serverConfigStore-CzCqF-9p.js","./releaseStore-CA7DSBDr.js","./workflowShareService-DTbJzYgL.js","./useWorkspaceTierLabel-XdsH01PC.js","./useTransformState-LpGflNmu.js","./vendor-other-DODGPXtn.css","./settingStore-CnXwLYSV.css","./useConflictDetection-BulFL8Bd.css","./GraphView-C7f7dfsj.css","./UserSelectView--XUHsAyc.js","./refreshRemoteConfig-CSwNI_Sc.js","./refreshRemoteConfig-Cz18EQBT.js","./initHostTelemetry-BDcd0eJq.js"])))=>i.map(i=>d[i]);
import "./rolldown-runtime-C9Cmlsnw.js";
import { A as PrimeVue, E as Tooltip, F as script$1, ct as definePreset, k as script, lt as __vitePreload, n as index, s as ToastService } from "./vendor-primevue-T0qpAVQN.js";
import { B as createTextVNode, Ct as withDirectives, D as Fragment, F as createCommentVNode, Ht as unref, I as createElementBlock, M as computed, N as createBaseVNode, Nt as ref, P as createBlock, R as createSlots, St as withCtx, U as defineComponent, V as createVNode, Wt as normalizeClass, Z as mergeProps, at as openBlock, ct as renderSlot, dt as resolveDynamicComponent, g as createApp, i as createWebHistory, l as createPinia, lt as resolveComponent, n as createRouter, nt as onMounted, qt as toDisplayString, r as createWebHashHistory, st as renderList, vt as watch } from "./vendor-vue-core-oGuyqViA.js";
import { r as useI18n } from "./vendor-i18n-CPpp7rsM.js";
import { A as VueFire, ct as isEqual, j as VueFireAuth } from "./vendor-other-hebp3VVz.js";
import { t as cn } from "./src-C1FpYMFF.js";
import { t as Button_default } from "./Button-By8A3toz.js";
import { x as useFavicon } from "./vendor-vueuse-De7x5bAw.js";
import { n as useTelemetry } from "./telemetry-C8VBI5GP.js";
import { i as api } from "./api-btlSMXR9.js";
import { t as useToastStore } from "./toastStore-D7DQZkvm.js";
import { $i as autoExposeKnownPreviewNodes, Co as isWidgetValue, Gi as hydratePreservedQuery, Hi as capturePreservedQuery, Ii as useAuthStore, Ka as promotedInputWidget, Q as useWorkspaceStore, So as resolveSubgraphInputTarget, Ss as toNodeId, Ui as clearPreservedQuery, Vi as PRESERVED_QUERY_NAMESPACES, Wi as getPreservedQueryParam, X as setAssertReporter, bo as parseProxyWidgets, bs as UNASSIGNED_NODE_ID, ca as isPreviewPseudoWidget, cs as useWidgetValueStore, fs as usePreviewExposureStore, go as LGraph, i as app$1, ia as getPromotableWidgets, ps as nextUniqueName, qn as useDialogService, ra as findHostInputForPromotion, rr as useSubscriptionDialog, rt as DialogFooter_default, xo as resolveConcretePromotedWidget, yo as parseProxyWidgetErrorQuarantine } from "./settingStore-pm7IqVHI.js";
import { c as t, n as i18n } from "./i18n-B4bSsdRi.js";
import { o as remoteConfig } from "./remoteConfig-F6WCXiNB.js";
import "./useFeatureFlags-CvjPiCWD.js";
import { t as useDialogStore } from "./dialogStore-BAELBvsb.js";
import { t as useUserStore } from "./userStore-rNaWLZbN.js";
import { t as init } from "./vendor-sentry-NtE0Edaa.js";
import { b as initializeApp } from "./vendor-firebase-Ct6mBV2V.js";
import { d as DialogOverlay_default, f as DialogContent_default, l as DialogTitle_default, n as DialogClose_default, p as Dialog_default, t as DialogHeader_default, u as DialogPortal_default } from "./DialogHeader-BkpfMvwx.js";
import "./envUtil-DDRnAAj_.js";
import "./refreshRemoteConfig-Cz18EQBT.js";
import { t as captureOAuthRequestId } from "./oauthState-C2i-lBuU.js";
import { m as useBootstrapStore, p as config_default, t as useConflictDetection } from "./useConflictDetection-Bd_qpvxb.js";
import { r as vRekaZIndex } from "./vRekaZIndex-BN7u4ENl.js";
//#region src/config/firebase.ts
var DEV_CONFIG = {
	apiKey: "AIzaSyDa_YMeyzV0SkVe92vBZ1tVikWBmOU5KVE",
	authDomain: "dreamboothy-dev.firebaseapp.com",
	databaseURL: "https://dreamboothy-dev-default-rtdb.firebaseio.com",
	projectId: "dreamboothy-dev",
	storageBucket: "dreamboothy-dev.appspot.com",
	messagingSenderId: "313257147182",
	appId: "1:313257147182:web:be38f6ebf74345fc7618bf",
	measurementId: "G-YEVSMYXSPY"
};
var BUILD_TIME_CONFIG = DEV_CONFIG;
/**
* Firebase config for the current backend: the server's firebase_config (cloud builds),
* else the bundled DEV_CONFIG when the server reports a dev-tier backend, else the build-time default.
*/
function getFirebaseConfig() {
	const runtimeConfig = remoteConfig.value.firebase_config;
	if (runtimeConfig) return runtimeConfig;
	if (remoteConfig.value.firebase_env === "dev") return DEV_CONFIG;
	return BUILD_TIME_CONFIG;
}
//#endregion
//#region src/core/graph/subgraph/migration/proxyWidgetMigration.ts
var LEGACY_PROXY_WIDGET_PREFIX_PATTERN = /^\s*(\d+)\s*:\s*(.+)$/;
function stripLegacyPrefixes(sourceWidgetName) {
	let remaining = sourceWidgetName;
	let deepestPrefixId;
	while (true) {
		const match = LEGACY_PROXY_WIDGET_PREFIX_PATTERN.exec(remaining);
		if (!match) return {
			sourceWidgetName: remaining,
			deepestPrefixId
		};
		deepestPrefixId = toNodeId(match[1]);
		remaining = match[2];
	}
}
function canResolveLegacyProxy(hostNode, sourceNodeId, widgetName) {
	return resolveConcretePromotedWidget(hostNode, sourceNodeId, widgetName).status === "resolved";
}
function normalizeLegacyProxyWidgetEntry(hostNode, sourceNodeId, sourceWidgetName, disambiguatingSourceNodeId) {
	const normalizedSourceNodeId = toNodeId(sourceNodeId);
	const normalizedDisambiguatingSourceNodeId = disambiguatingSourceNodeId === void 0 ? void 0 : toNodeId(disambiguatingSourceNodeId);
	if (canResolveLegacyProxy(hostNode, sourceNodeId, sourceWidgetName)) return {
		sourceNodeId: normalizedSourceNodeId,
		sourceWidgetName,
		...normalizedDisambiguatingSourceNodeId && { disambiguatingSourceNodeId: normalizedDisambiguatingSourceNodeId }
	};
	const stripped = stripLegacyPrefixes(sourceWidgetName);
	const patchDisambiguatingSourceNodeId = stripped.deepestPrefixId ?? normalizedDisambiguatingSourceNodeId;
	return {
		sourceNodeId: normalizedSourceNodeId,
		sourceWidgetName: stripped.sourceWidgetName,
		...patchDisambiguatingSourceNodeId && { disambiguatingSourceNodeId: patchDisambiguatingSourceNodeId }
	};
}
function resolveSourceWidget(sourceNode, sourceWidgetName, disambiguatingSourceNodeId) {
	if (sourceNode.isSubgraphNode()) {
		const input = sourceNode.inputs.find((input) => {
			const target = resolveSubgraphInputTarget(sourceNode, input.name);
			if (disambiguatingSourceNodeId) return target?.widgetName === sourceWidgetName && target.nodeId === disambiguatingSourceNodeId;
			if (input.name === sourceWidgetName) return true;
			return target?.widgetName === sourceWidgetName;
		});
		if (input?.widgetId) return promotedInputWidget(input) ?? void 0;
	}
	return sourceNode.widgets?.find((w) => w.name === sourceWidgetName) ?? getPromotableWidgets(sourceNode).find((w) => w.name === sourceWidgetName);
}
var PRIMITIVE_NODE_TYPE = "PrimitiveNode";
var QUARANTINE_PROPERTY = "proxyWidgetErrorQuarantine";
var QUARANTINE_VERSION = 1;
var PROXY_BYPASS_MARKER_PROPERTY = "proxyBypassedToSubgraphInput";
function flushProxyWidgetMigration(args) {
	const { hostNode, hostWidgetValues } = args;
	const tuples = parseProxyWidgets(hostNode.properties.proxyWidgets);
	if (tuples.length === 0) return;
	const normalizedEntries = tuples.map((originalEntry) => {
		const [sourceNodeId, sourceWidgetName, disambiguator] = originalEntry;
		return {
			originalEntry,
			normalized: normalizeLegacyProxyWidgetEntry(hostNode, sourceNodeId, sourceWidgetName, disambiguator)
		};
	});
	const cohort = normalizedEntries.map((entry) => entry.normalized);
	const pending = normalizedEntries.map((entry, index) => {
		const { value, isHole } = pickHostValue(hostWidgetValues, index);
		return {
			...entry,
			hostValue: value,
			isHole,
			plan: classify(hostNode, entry.normalized, cohort)
		};
	});
	const previewStore = usePreviewExposureStore();
	const quarantineToAppend = [];
	const primitiveCohorts = /* @__PURE__ */ new Map();
	for (const entry of pending) switch (entry.plan.kind) {
		case "primitiveBypass": {
			const c = primitiveCohorts.get(entry.plan.primitiveNodeId) ?? [];
			c.push(entry);
			primitiveCohorts.set(entry.plan.primitiveNodeId, c);
			break;
		}
		case "alreadyLinked": {
			const r = repairAlreadyLinked(hostNode, entry, entry.plan.subgraphInputName);
			if (!r.ok) quarantineToAppend.push(quarantineFor(entry, r.reason));
			break;
		}
		case "createSubgraphInput": {
			const r = repairCreateSubgraphInput(hostNode, entry, entry.plan.sourceWidgetName);
			if (!r.ok) quarantineToAppend.push(quarantineFor(entry, r.reason));
			break;
		}
		case "previewExposure": {
			const r = migratePreview(hostNode, entry, previewStore, entry.plan);
			if (!r.ok) quarantineToAppend.push(quarantineFor(entry, r.reason));
			break;
		}
		case "quarantine":
			quarantineToAppend.push(quarantineFor(entry, entry.plan.reason));
			break;
	}
	for (const c of primitiveCohorts.values()) {
		const r = repairPrimitive(hostNode, c);
		if (!r.ok) for (const e of c) quarantineToAppend.push(quarantineFor(e, r.reason));
	}
	if (quarantineToAppend.length > 0) appendQuarantine(hostNode, quarantineToAppend);
	delete hostNode.properties.proxyWidgets;
}
function pickHostValue(hostWidgetValues, index) {
	if (hostWidgetValues === void 0 || index < 0 || index >= hostWidgetValues.length || !Object.hasOwn(hostWidgetValues, index)) return {
		value: void 0,
		isHole: true
	};
	const raw = hostWidgetValues[index];
	if (!isWidgetValue(raw)) return {
		value: void 0,
		isHole: true
	};
	return {
		value: raw,
		isHole: false
	};
}
function collectTargetsStrict(hostNode, primitiveNode) {
	const subgraph = hostNode.subgraph;
	const linkIds = (primitiveNode.outputs?.[0])?.links ?? [];
	const targets = [];
	for (const linkId of linkIds) {
		const link = subgraph.links.get(linkId);
		if (!link) return void 0;
		if (link.target_id === UNASSIGNED_NODE_ID) return void 0;
		targets.push({
			targetNodeId: link.target_id,
			targetSlot: link.target_slot
		});
	}
	return targets;
}
function collectTargetsSkippingDangling(hostNode, primitiveNode) {
	const subgraph = hostNode.subgraph;
	return (primitiveNode.outputs?.[0]?.links ?? []).flatMap((linkId) => {
		const link = subgraph.links.get(linkId);
		return link && link.target_id !== UNASSIGNED_NODE_ID ? [{
			targetNodeId: link.target_id,
			targetSlot: link.target_slot
		}] : [];
	});
}
function cohortDuplicatesPrimitive(cohort, primitiveNodeId) {
	return cohort.filter((entry) => entry.sourceNodeId === primitiveNodeId).length >= 2;
}
function classify(hostNode, normalized, cohort) {
	const linkedInput = findHostInputForPromotion(hostNode, normalized.sourceNodeId, normalized.sourceWidgetName);
	if (linkedInput) return {
		kind: "alreadyLinked",
		subgraphInputName: linkedInput.name
	};
	const sourceNode = hostNode.subgraph.getNodeById(normalized.sourceNodeId);
	if (!sourceNode) return {
		kind: "quarantine",
		reason: "missingSourceNode"
	};
	if (sourceNode.type === PRIMITIVE_NODE_TYPE) {
		const bypassedTo = sourceNode.properties?.[PROXY_BYPASS_MARKER_PROPERTY];
		if (typeof bypassedTo === "string") {
			const existingInput = hostNode.inputs.find((input) => input.name === bypassedTo);
			if (existingInput) return {
				kind: "alreadyLinked",
				subgraphInputName: existingInput.name
			};
		}
		const targets = collectTargetsSkippingDangling(hostNode, sourceNode);
		const cohortDuplicated = cohortDuplicatesPrimitive(cohort, normalized.sourceNodeId);
		if (targets.length >= 1 || cohortDuplicated) return {
			kind: "primitiveBypass",
			primitiveNodeId: sourceNode.id,
			sourceWidgetName: normalized.sourceWidgetName,
			targets
		};
		return {
			kind: "quarantine",
			reason: "unlinkedSourceWidget"
		};
	}
	const sourceWidget = resolveSourceWidget(sourceNode, normalized.sourceWidgetName, normalized.disambiguatingSourceNodeId);
	if (!sourceWidget) return {
		kind: "quarantine",
		reason: "missingSourceWidget"
	};
	if (normalized.sourceWidgetName.startsWith("$$") || isPreviewPseudoWidget(sourceWidget)) return {
		kind: "previewExposure",
		sourcePreviewName: normalized.sourceWidgetName
	};
	return {
		kind: "createSubgraphInput",
		sourceWidgetName: normalized.sourceWidgetName
	};
}
function applyHostValueToInput(input, entry) {
	if (!input.widgetId || entry.isHole) return Boolean(input.widgetId);
	return useWidgetValueStore().setValue(input.widgetId, entry.hostValue);
}
function applyHostLabelToInput(input, label) {
	if (label === void 0) return;
	input.label = label;
	if (!input.widgetId) return;
	const state = useWidgetValueStore().getWidget(input.widgetId);
	if (state) state.label = label;
}
function addUniqueSubgraphInput(subgraph, baseName, type) {
	const uniqueName = nextUniqueName(baseName, subgraph.inputs.map((input) => input.name));
	return subgraph.addInput(uniqueName, type);
}
function repairAlreadyLinked(hostNode, entry, subgraphInputName) {
	const matches = hostNode.inputs.filter((input) => input.name === subgraphInputName);
	if (matches.length === 0) return {
		ok: false,
		reason: "missingSubgraphInput"
	};
	if (matches.length > 1) return {
		ok: false,
		reason: "ambiguousSubgraphInput"
	};
	const hostInput = matches[0];
	if (!applyHostValueToInput(hostInput, entry)) return {
		ok: false,
		reason: "missingSubgraphInput"
	};
	return {
		ok: true,
		subgraphInputName: hostInput.name
	};
}
function repairCreateSubgraphInput(hostNode, entry, sourceWidgetName) {
	const subgraph = hostNode.subgraph;
	const sourceNode = subgraph.getNodeById(entry.normalized.sourceNodeId);
	if (!sourceNode) return {
		ok: false,
		reason: "missingSourceNode"
	};
	const sourceWidget = resolveSourceWidget(sourceNode, sourceWidgetName, entry.normalized.disambiguatingSourceNodeId);
	if (!sourceWidget) return {
		ok: false,
		reason: "missingSourceWidget"
	};
	const slot = sourceNode.getSlotFromWidget(sourceWidget);
	if (!slot) {
		console.warn("[proxyWidgetMigration] source widget has no backing input slot; quarantining", {
			sourceNodeId: entry.normalized.sourceNodeId,
			sourceWidgetName
		});
		return {
			ok: false,
			reason: "missingSubgraphInput"
		};
	}
	const newSubgraphInput = addUniqueSubgraphInput(subgraph, sourceWidgetName, String(slot.type ?? sourceWidget.type ?? "*"));
	if (slot.label !== void 0) newSubgraphInput.label = slot.label;
	if (!newSubgraphInput.connect(slot, sourceNode)) {
		subgraph.removeInput(newSubgraphInput);
		return {
			ok: false,
			reason: "missingSubgraphInput"
		};
	}
	const hostInput = hostNode.inputs.find((input) => input.name === newSubgraphInput.name);
	if (hostInput) {
		applyHostLabelToInput(hostInput, slot.label);
		applyHostValueToInput(hostInput, entry);
	}
	return {
		ok: true,
		subgraphInputName: newSubgraphInput.name
	};
}
var PRIMITIVE_FAILED = {
	ok: false,
	reason: "primitiveBypassFailed"
};
function failPrimitive(message, ctx) {
	console.warn(`[proxyWidgetMigration] ${message}`, ctx);
	return PRIMITIVE_FAILED;
}
function userRenamedTitle(primitiveNode) {
	const title = primitiveNode.title;
	return title && title !== PRIMITIVE_NODE_TYPE ? title : void 0;
}
function validateCohort(cohort) {
	const first = cohort[0];
	if (!first || first.plan.kind !== "primitiveBypass") return { ok: false };
	const { primitiveNodeId, sourceWidgetName } = first.plan;
	for (const entry of cohort) if (entry.plan.kind !== "primitiveBypass" || entry.plan.primitiveNodeId !== primitiveNodeId || entry.plan.sourceWidgetName !== sourceWidgetName) return { ok: false };
	const uniqueEntries = [];
	for (const entry of cohort) if (!uniqueEntries.some((k) => isEqual(k.normalized, entry.normalized))) uniqueEntries.push(entry);
	return {
		ok: true,
		primitiveNodeId,
		sourceWidgetName,
		uniqueEntries
	};
}
function rollback(hostNode, primitiveNode, newSubgraphInput, snapshot) {
	if (newSubgraphInput) try {
		hostNode.subgraph.removeInput(newSubgraphInput);
	} catch (e) {
		console.warn("[proxyWidgetMigration] rollback removeInput failed", e);
	}
	for (const link of snapshot) {
		const targetNode = hostNode.subgraph.getNodeById(link.targetNodeId);
		if (!targetNode) continue;
		primitiveNode.connect(link.primitiveSlot, targetNode, link.targetSlot);
	}
}
function repairPrimitive(hostNode, cohort) {
	const validated = validateCohort(cohort);
	if (!validated.ok) return failPrimitive("cohort validation failed", { cohort });
	const subgraph = hostNode.subgraph;
	const primitiveNode = subgraph.getNodeById(validated.primitiveNodeId);
	if (!primitiveNode) return failPrimitive("primitive node missing", validated);
	if (primitiveNode.type !== PRIMITIVE_NODE_TYPE) return failPrimitive("node is not a PrimitiveNode", primitiveNode.type);
	const targets = collectTargetsStrict(hostNode, primitiveNode);
	if (!targets?.length) return failPrimitive("no targets to reconnect", validated);
	const primitiveOutput = primitiveNode.outputs?.[0];
	if (!primitiveOutput) return failPrimitive("primitive has no output");
	const primitiveOutputType = String(primitiveOutput.type ?? "*");
	for (const target of targets) {
		const targetNode = subgraph.getNodeById(target.targetNodeId);
		if (!targetNode) return failPrimitive("target node missing", target);
		const targetSlot = targetNode.inputs?.[target.targetSlot];
		if (!targetSlot) return failPrimitive("target slot missing", target);
		const targetType = String(targetSlot.type ?? "*");
		if (targetType !== primitiveOutputType && targetType !== "*" && primitiveOutputType !== "*") return failPrimitive("target slot type incompatible", {
			target,
			targetType,
			primitiveOutputType
		});
	}
	const baseName = userRenamedTitle(primitiveNode) ?? validated.sourceWidgetName;
	const snapshot = (primitiveOutput.links ?? []).map((id) => subgraph.links.get(id)).filter((l) => l !== void 0 && l.target_id !== UNASSIGNED_NODE_ID).map((l) => ({
		primitiveSlot: l.origin_slot,
		targetNodeId: l.target_id,
		targetSlot: l.target_slot
	}));
	let newSubgraphInput;
	try {
		newSubgraphInput = addUniqueSubgraphInput(subgraph, baseName, primitiveOutputType);
		for (const snap of snapshot) {
			const targetNode = subgraph.getNodeById(snap.targetNodeId);
			if (!targetNode) throw new Error(`target node ${snap.targetNodeId} disappeared mid-mutation`);
			targetNode.disconnectInput(snap.targetSlot, false);
		}
		for (const target of targets) {
			const targetNode = subgraph.getNodeById(target.targetNodeId);
			if (!targetNode) throw new Error(`target node ${target.targetNodeId} disappeared`);
			const targetSlot = targetNode.inputs?.[target.targetSlot];
			if (!targetSlot) throw new Error(`target slot ${target.targetSlot} disappeared`);
			if (!newSubgraphInput.connect(targetSlot, targetNode)) throw new Error("SubgraphInput.connect returned no link");
		}
	} catch (e) {
		rollback(hostNode, primitiveNode, newSubgraphInput, snapshot);
		return failPrimitive("mutation failed; rolled back", { error: e });
	}
	const hostInput = hostNode.inputs.find((input) => input.name === newSubgraphInput.name);
	if (hostInput) {
		const valueEntry = validated.uniqueEntries.find((e) => !e.isHole);
		if (valueEntry) applyHostValueToInput(hostInput, valueEntry);
		else {
			const primitiveValue = primitiveNode.widgets?.find((w) => w.name === validated.sourceWidgetName)?.value;
			if (primitiveValue !== void 0) applyHostValueToInput(hostInput, {
				...validated.uniqueEntries[0],
				hostValue: primitiveValue,
				isHole: false
			});
		}
	}
	primitiveNode.properties ??= {};
	primitiveNode.properties[PROXY_BYPASS_MARKER_PROPERTY] = newSubgraphInput.name;
	return {
		ok: true,
		subgraphInputName: newSubgraphInput.name,
		reconnectCount: targets.length
	};
}
function migratePreview(hostNode, entry, store, plan) {
	const sourceNode = hostNode.subgraph.getNodeById(entry.normalized.sourceNodeId);
	if (!sourceNode) return {
		ok: false,
		reason: "missingSourceNode"
	};
	if (!plan.sourcePreviewName.startsWith("$$")) {
		if (!sourceNode.widgets?.find((w) => w.name === plan.sourcePreviewName)) return {
			ok: false,
			reason: "missingSourceWidget"
		};
	}
	const hostNodeLocator = String(hostNode.id);
	const existing = store.getExposures(hostNode.rootGraph.id, hostNodeLocator).find((exposure) => exposure.sourceNodeId === entry.normalized.sourceNodeId && exposure.sourcePreviewName === plan.sourcePreviewName);
	if (existing) return {
		ok: true,
		previewName: existing.name
	};
	return {
		ok: true,
		previewName: store.addExposure(hostNode.rootGraph.id, hostNodeLocator, {
			sourceNodeId: entry.normalized.sourceNodeId,
			sourcePreviewName: plan.sourcePreviewName
		}).name
	};
}
function quarantineFor(entry, reason) {
	return makeQuarantineEntry({
		originalEntry: entry.originalEntry,
		reason,
		hostValue: entry.isHole ? void 0 : entry.hostValue
	});
}
function appendQuarantine(hostNode, entries) {
	if (entries.length === 0) return;
	for (const { originalEntry: [sourceNodeId, inputName], hostValue } of entries) {
		if (sourceNodeId !== "-1" || hostValue === void 0) continue;
		const input = hostNode.inputs.find((input) => input.name === inputName);
		if (input?.widgetId) useWidgetValueStore().setValue(input.widgetId, hostValue);
	}
	const merged = [...parseProxyWidgetErrorQuarantine(hostNode.properties[QUARANTINE_PROPERTY])];
	for (const candidate of entries) if (!merged.some((e) => isEqual(e.originalEntry, candidate.originalEntry))) merged.push(candidate);
	if (merged.length === 0) delete hostNode.properties[QUARANTINE_PROPERTY];
	else hostNode.properties[QUARANTINE_PROPERTY] = merged;
}
function makeQuarantineEntry(args) {
	const entry = {
		originalEntry: args.originalEntry,
		reason: args.reason,
		attemptedAtVersion: QUARANTINE_VERSION
	};
	if (args.hostValue !== void 0) entry.hostValue = args.hostValue;
	return entry;
}
//#endregion
//#region src/platform/workspace/auth/WorkspaceAuthGate.vue
var WorkspaceAuthGate_default = /* @__PURE__ */ defineComponent({
	__name: "WorkspaceAuthGate",
	setup(__props) {
		/**
		* WorkspaceAuthGate - Conditional auth checkpoint for workspace mode.
		*
		* This gate ensures proper initialization order for workspace-scoped auth:
		* 1. Wait for Firebase auth to resolve
		* 2. Check if teamWorkspacesEnabled feature flag is on
		* 3. If YES: Initialize workspace token and store before rendering
		* 4. If NO: Render immediately using existing Firebase auth
		*
		* This prevents race conditions where API calls use Firebase tokens
		* instead of workspace tokens when the workspace feature is enabled.
		*
		* The splash loader in index.html (z-9999) covers the screen during this
		* phase, so no separate loading indicator is needed here.
		*/
		const isReady = ref(true);
		useSubscriptionDialog();
		async function initialize() {}
		onMounted(() => {
			initialize();
		});
		return (_ctx, _cache) => {
			return isReady.value ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/views/layouts/LayoutDefault.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { class: "relative size-full overflow-hidden" };
//#endregion
//#region src/views/layouts/LayoutDefault.vue
var LayoutDefault_default = /* @__PURE__ */ defineComponent({
	__name: "LayoutDefault",
	setup(__props) {
		useFavicon("/assets/favicon.ico");
		return (_ctx, _cache) => {
			const _component_router_view = resolveComponent("router-view");
			return openBlock(), createBlock(WorkspaceAuthGate_default, null, {
				default: withCtx(() => [createBaseVNode("main", _hoisted_1$1, [createVNode(_component_router_view)])]),
				_: 1
			});
		};
	}
});
//#endregion
//#region src/platform/cloud/onboarding/desktopLoginRedemption.ts
var NAMESPACE = PRESERVED_QUERY_NAMESPACES.DESKTOP_LOGIN;
var DESKTOP_LOGIN_CODE_KEY = "desktop_login_code";
var DESKTOP_LOGIN_CODE_PATTERN = /^dlc_[A-Za-z0-9_-]{20,256}$/;
var TERMINAL_REDEEM_STATUSES = /* @__PURE__ */ new Set([
	400,
	403,
	404,
	409,
	410
]);
var MAX_REDEEM_ATTEMPTS = 2;
var RETRY_DELAY_MS = 5e3;
var REDEEM_TIMEOUT_MS = 1e4;
var codeStates = /* @__PURE__ */ new Map();
var draining = false;
var retriggerRequested = false;
function getCodeState(code) {
	const existing = codeStates.get(code);
	if (existing) return existing;
	const fresh = {
		attempts: 0,
		approvedUserUid: null,
		settled: false,
		forceTokenRefresh: false
	};
	codeStates.set(code, fresh);
	return fresh;
}
function clearStashIfHolds(code) {
	if (getPreservedQueryParam(NAMESPACE, DESKTOP_LOGIN_CODE_KEY) === code) clearPreservedQuery(NAMESPACE);
}
function settle(code, state) {
	state.settled = true;
	clearStashIfHolds(code);
}
function handleTransientFailure(code, state, reason) {
	console.warn(`[DesktopLoginRedemption] Redeem request failed: ${reason}`);
	if (state.attempts < MAX_REDEEM_ATTEMPTS) {
		setTimeout(() => {
			redeemPendingDesktopLoginCode();
		}, RETRY_DELAY_MS);
		return;
	}
	settle(code, state);
	useToastStore().add({
		severity: "error",
		summary: t("desktopLogin.failedSummary"),
		detail: t("desktopLogin.failedDetail"),
		life: 6e3
	});
}
async function confirmRedemption(state, uid) {
	if (state.approvedUserUid === uid) return true;
	if (await useDialogService().confirm({
		title: t("desktopLogin.confirmSummary"),
		message: t("desktopLogin.confirmMessage")
	}) !== true) return false;
	state.approvedUserUid = uid;
	return true;
}
async function redeemCode(code) {
	const state = getCodeState(code);
	if (state.settled) {
		clearStashIfHolds(code);
		return;
	}
	const user = useAuthStore().currentUser;
	if (!user) return;
	if (!await confirmRedemption(state, user.uid)) {
		settle(code, state);
		return;
	}
	const approvedUser = useAuthStore().currentUser;
	if (!approvedUser || approvedUser.uid !== state.approvedUserUid) return;
	state.attempts++;
	let idToken;
	try {
		idToken = await approvedUser.getIdToken(state.forceTokenRefresh);
	} catch {
		handleTransientFailure(code, state, "could not get id token");
		return;
	}
	let response;
	try {
		response = await fetch(api.apiURL("/auth/desktop-login-codes/redeem"), {
			method: "POST",
			headers: {
				Authorization: `Bearer ${idToken}`,
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ code }),
			signal: AbortSignal.timeout(REDEEM_TIMEOUT_MS)
		});
	} catch (error) {
		handleTransientFailure(code, state, error instanceof Error && error.name === "TimeoutError" ? "request timed out" : "network error");
		return;
	}
	if (response.ok) {
		settle(code, state);
		useToastStore().add({
			severity: "success",
			summary: t("desktopLogin.successSummary"),
			detail: t("desktopLogin.successDetail"),
			life: 4e3
		});
		return;
	}
	if (TERMINAL_REDEEM_STATUSES.has(response.status)) {
		settle(code, state);
		useToastStore().add({
			severity: "error",
			summary: t("desktopLogin.expiredSummary"),
			detail: t("desktopLogin.expiredDetail"),
			life: 6e3
		});
		return;
	}
	if (response.status === 401) state.forceTokenRefresh = true;
	handleTransientFailure(code, state, `status ${response.status}`);
}
async function redeemPendingDesktopLoginCode() {
	if (draining) {
		retriggerRequested = true;
		return;
	}
	draining = true;
	try {
		do {
			retriggerRequested = false;
			const code = getPreservedQueryParam(NAMESPACE, DESKTOP_LOGIN_CODE_KEY);
			if (!code) continue;
			if (!DESKTOP_LOGIN_CODE_PATTERN.test(code)) {
				clearPreservedQuery(NAMESPACE);
				continue;
			}
			await redeemCode(code);
			if (code !== getPreservedQueryParam(NAMESPACE, DESKTOP_LOGIN_CODE_KEY)) retriggerRequested = true;
		} while (retriggerRequested);
	} catch (error) {
		console.error("[DesktopLoginRedemption] Redemption failed:", error);
	} finally {
		draining = false;
	}
}
//#endregion
//#region src/platform/navigation/preservedQueryTracker.ts
var installPreservedQueryTracker = (router, definitions) => {
	router.beforeEach((to, _from, next) => {
		const queryKeys = new Set(Object.keys(to.query));
		const keysToStrip = /* @__PURE__ */ new Set();
		definitions.forEach(({ namespace, keys, requiredKey, stripAfterCapture }) => {
			hydratePreservedQuery(namespace);
			const presentKeys = keys.filter((key) => queryKeys.has(key));
			if (presentKeys.length === 0) return;
			if (requiredKey && !queryKeys.has(requiredKey)) {
				clearPreservedQuery(namespace);
				return;
			}
			capturePreservedQuery(namespace, to.query, keys, { merge: stripAfterCapture });
			if (stripAfterCapture) presentKeys.forEach((key) => keysToStrip.add(key));
		});
		if (keysToStrip.size === 0) {
			next();
			return;
		}
		const cleanedQuery = { ...to.query };
		keysToStrip.forEach((key) => delete cleanedQuery[key]);
		next({
			path: to.path,
			query: cleanedQuery,
			hash: to.hash
		});
	});
};
var isFileProtocol = window.location.protocol === "file:";
/**
* Determine base path for the router.
* - Electron: always root
* - Cloud: use Vite's BASE_URL (configured at build time)
* - Standard web (including reverse proxy subpaths): use window.location.pathname
*   to support deployments like http://mysite.com/ComfyUI/
*/
function getBasePath() {
	return window.location.pathname;
}
var basePath = getBasePath();
function trackPageView() {
	useTelemetry()?.trackPageView(document.title, { path: window.location.href });
}
var router = createRouter({
	history: isFileProtocol ? createWebHashHistory() : createWebHistory(basePath),
	routes: [...[], {
		path: "/",
		component: LayoutDefault_default,
		children: [{
			path: "",
			name: "GraphView",
			component: () => __vitePreload(() => import("./GraphView-rB7Fd4WD.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85]), import.meta.url),
			beforeEnter: async (_to, _from, next) => {
				const userStore = useUserStore();
				await userStore.initialize();
				if (userStore.needsLogin) next("/user-select");
				else next();
			}
		}, {
			path: "user-select",
			name: "UserSelectView",
			component: () => __vitePreload(() => import("./UserSelectView--XUHsAyc.js"), __vite__mapDeps([86,1,2,3,12,4,6,7,8,9,10,11,36,15,13,16,17,18,47,82]), import.meta.url)
		}]
	}],
	scrollBehavior(_to, _from, savedPosition) {
		if (savedPosition) return savedPosition;
		else return { top: 0 };
	}
});
installPreservedQueryTracker(router, [
	{
		namespace: PRESERVED_QUERY_NAMESPACES.TEMPLATE,
		keys: [
			"template",
			"source",
			"mode"
		]
	},
	{
		namespace: PRESERVED_QUERY_NAMESPACES.SHARE,
		keys: ["share"]
	},
	{
		namespace: PRESERVED_QUERY_NAMESPACES.INVITE,
		keys: ["invite"]
	},
	{
		namespace: PRESERVED_QUERY_NAMESPACES.CREATE_WORKSPACE,
		keys: ["create_workspace"]
	},
	{
		namespace: PRESERVED_QUERY_NAMESPACES.OAUTH,
		keys: ["oauth_request_id"]
	},
	{
		namespace: PRESERVED_QUERY_NAMESPACES.PRICING,
		keys: [
			"pricing",
			"stop",
			"cycle"
		],
		requiredKey: "pricing"
	},
	{
		namespace: PRESERVED_QUERY_NAMESPACES.DESKTOP_LOGIN,
		keys: ["desktop_login_code"],
		stripAfterCapture: true
	}
]);
router.beforeEach((to, _from, next) => {
	captureOAuthRequestId(to.query);
	next();
});
router.afterEach(() => {
	trackPageView();
});
//#endregion
//#region src/components/ui/dialog/DialogMaximize.vue
var DialogMaximize_default = /* @__PURE__ */ defineComponent({
	__name: "DialogMaximize",
	props: { maximized: {
		type: Boolean,
		default: false
	} },
	emits: ["toggle"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const { t } = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Button_default, {
				"aria-label": __props.maximized ? unref(t)("g.restoreDialog") : unref(t)("g.maximizeDialog"),
				size: "icon",
				variant: "muted-textonly",
				onClick: _cache[0] || (_cache[0] = ($event) => emit("toggle"))
			}, {
				default: withCtx(() => [createBaseVNode("i", { class: normalizeClass(__props.maximized ? "icon-[lucide--minimize-2]" : "icon-[lucide--maximize-2]") }, null, 2)]),
				_: 1
			}, 8, ["aria-label"]);
		};
	}
});
//#endregion
//#region src/components/dialog/rekaPrimeVueBridge.ts
var OUTSIDE_LAYER_SELECTORS = `.p-select-overlay, .p-colorpicker-panel, .p-popover, .p-autocomplete-overlay, .p-overlay, .p-overlay-mask, .p-dialog, .p-toast, [data-reka-popper-content-wrapper], [data-reka-dialog-content], [data-reka-menu-content], [data-reka-context-menu-content], [role="dialog"], [role="menu"], [role="listbox"], [role="tooltip"]`;
function isInsideOverlay(target) {
	return target instanceof Element && target.closest(OUTSIDE_LAYER_SELECTORS) !== null;
}
function onRekaPointerDownOutside(options, event, isActive = true) {
	if (!isActive) {
		event.preventDefault();
		return;
	}
	if (isInsideOverlay(event.detail.originalEvent.target)) {
		event.preventDefault();
		return;
	}
	if (options.dismissableMask === false) event.preventDefault();
}
function onRekaFocusOutside(event, options = {}) {
	if (options.dismissOnFocusOutside === false) {
		event.preventDefault();
		return;
	}
	if (isInsideOverlay(event.detail.originalEvent.target)) event.preventDefault();
}
//#endregion
//#region src/components/dialog/GlobalDialog.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex items-center gap-1" };
var _hoisted_2 = { key: 0 };
var _hoisted_3 = ["id"];
//#endregion
//#region src/components/dialog/GlobalDialog.vue
var GlobalDialog_default = /* @__PURE__ */ defineComponent({
	__name: "GlobalDialog",
	setup(__props) {
		const dialogStore = useDialogStore();
		function isRekaItem(item) {
			return item.dialogComponentProps.renderer === "reka";
		}
		function onRekaOpenChange(key, open) {
			if (!open) dialogStore.closeDialog({ key });
		}
		function onRekaOpenAutoFocus(event, key) {
			const autofocusEl = document.querySelector(`[aria-labelledby="${CSS.escape(key)}"]`)?.querySelector("[autofocus]");
			if (autofocusEl) {
				event.preventDefault();
				autofocusEl.focus();
			}
		}
		function toggleMaximize(item) {
			item.dialogComponentProps.maximized = !item.dialogComponentProps.maximized;
		}
		return (_ctx, _cache) => {
			return openBlock(true), createElementBlock(Fragment, null, renderList(unref(dialogStore).dialogStack, (item) => {
				return openBlock(), createElementBlock(Fragment, { key: item.key }, [isRekaItem(item) ? (openBlock(), createBlock(Dialog_default, {
					key: 0,
					open: item.visible,
					modal: item.dialogComponentProps.modal ?? true,
					"onUpdate:open": (open) => onRekaOpenChange(item.key, open)
				}, {
					default: withCtx(() => [createVNode(DialogPortal_default, null, {
						default: withCtx(() => [withDirectives(createVNode(DialogOverlay_default, { class: normalizeClass(item.dialogComponentProps.overlayClass) }, null, 8, ["class"]), [[unref(vRekaZIndex)]]), withDirectives((openBlock(), createBlock(DialogContent_default, {
							size: item.dialogComponentProps.size ?? "md",
							maximized: !!item.dialogComponentProps.maximized,
							class: normalizeClass(item.dialogComponentProps.contentClass),
							"aria-labelledby": item.key,
							onOpenAutoFocus: (e) => onRekaOpenAutoFocus(e, item.key),
							onEscapeKeyDown: (e) => item.dialogComponentProps.closeOnEscape === false && e.preventDefault(),
							onPointerDownOutside: (e) => unref(onRekaPointerDownOutside)(item.dialogComponentProps, e, unref(dialogStore).activeKey === item.key),
							onFocusOutside: (e) => unref(onRekaFocusOutside)(e, item.dialogComponentProps),
							onMousedown: () => unref(dialogStore).riseDialog({ key: item.key })
						}, {
							default: withCtx(() => [item.dialogComponentProps.headless ? (openBlock(), createBlock(resolveDynamicComponent(item.component), mergeProps({
								key: 0,
								ref_for: true
							}, item.contentProps, { maximized: item.dialogComponentProps.maximized }), null, 16, ["maximized"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
								createVNode(DialogHeader_default, { class: normalizeClass(item.dialogComponentProps.headerClass) }, {
									default: withCtx(() => [item.headerComponent ? (openBlock(), createBlock(resolveDynamicComponent(item.headerComponent), mergeProps({
										key: 0,
										ref_for: true
									}, item.headerProps, { id: item.key }), null, 16, ["id"])) : (openBlock(), createBlock(DialogTitle_default, {
										key: 1,
										id: item.key
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(item.title || " "), 1)]),
										_: 2
									}, 1032, ["id"])), createBaseVNode("div", _hoisted_1, [item.dialogComponentProps.maximizable ? (openBlock(), createBlock(DialogMaximize_default, {
										key: 0,
										maximized: !!item.dialogComponentProps.maximized,
										onToggle: ($event) => toggleMaximize(item)
									}, null, 8, ["maximized", "onToggle"])) : createCommentVNode("", true), item.dialogComponentProps.closable !== false ? (openBlock(), createBlock(DialogClose_default, { key: 1 })) : createCommentVNode("", true)])]),
									_: 2
								}, 1032, ["class"]),
								createBaseVNode("div", { class: normalizeClass(unref(cn)("flex-1 overflow-auto px-4 py-2", item.dialogComponentProps.bodyClass)) }, [(openBlock(), createBlock(resolveDynamicComponent(item.component), mergeProps({ ref_for: true }, item.contentProps, { maximized: item.dialogComponentProps.maximized }), null, 16, ["maximized"]))], 2),
								item.footerComponent ? (openBlock(), createBlock(DialogFooter_default, {
									key: 0,
									class: normalizeClass(item.dialogComponentProps.footerClass)
								}, {
									default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(item.footerComponent), mergeProps({ ref_for: true }, item.footerProps), null, 16))]),
									_: 2
								}, 1032, ["class"])) : createCommentVNode("", true)
							], 64))]),
							_: 2
						}, 1032, [
							"size",
							"maximized",
							"class",
							"aria-labelledby",
							"onOpenAutoFocus",
							"onEscapeKeyDown",
							"onPointerDownOutside",
							"onFocusOutside",
							"onMousedown"
						])), [[unref(vRekaZIndex)]])]),
						_: 2
					}, 1024)]),
					_: 2
				}, 1032, [
					"open",
					"modal",
					"onUpdate:open"
				])) : (openBlock(), createBlock(unref(script), mergeProps({
					key: 1,
					visible: item.visible,
					"onUpdate:visible": ($event) => item.visible = $event,
					class: "global-dialog"
				}, { ref_for: true }, item.dialogComponentProps, { "aria-labelledby": item.key }), createSlots({
					header: withCtx(() => [!item.dialogComponentProps?.headless ? (openBlock(), createElementBlock("div", _hoisted_2, [item.headerComponent ? (openBlock(), createBlock(resolveDynamicComponent(item.headerComponent), mergeProps({
						key: 0,
						ref_for: true
					}, item.headerProps, { id: item.key }), null, 16, ["id"])) : (openBlock(), createElementBlock("h3", {
						key: 1,
						id: item.key
					}, toDisplayString(item.title || " "), 9, _hoisted_3))])) : createCommentVNode("", true)]),
					default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(item.component), mergeProps({ ref_for: true }, item.contentProps, { maximized: item.dialogComponentProps.maximized }), null, 16, ["maximized"]))]),
					_: 2
				}, [item.footerComponent ? {
					name: "footer",
					fn: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(item.footerComponent), mergeProps({ ref_for: true }, item.footerProps), null, 16))]),
					key: "0"
				} : void 0]), 1040, [
					"visible",
					"onUpdate:visible",
					"aria-labelledby"
				]))], 64);
			}), 128);
		};
	}
});
//#endregion
//#region src/utils/preloadErrorUtil.ts
var CSS_PRELOAD_RE = /Unable to preload CSS for (.+)/;
var JS_DYNAMIC_IMPORT_RE = /Failed to fetch dynamically imported module:\s*(.+)/;
var URL_FALLBACK_RE = /https?:\/\/[^\s"')]+/;
var FONT_EXTENSIONS = /* @__PURE__ */ new Set([
	"woff",
	"woff2",
	"ttf",
	"otf",
	"eot"
]);
var IMAGE_EXTENSIONS = /* @__PURE__ */ new Set([
	"png",
	"jpg",
	"jpeg",
	"gif",
	"svg",
	"webp",
	"avif",
	"ico"
]);
function extractUrl(message) {
	const cssMatch = message.match(CSS_PRELOAD_RE);
	if (cssMatch) return cssMatch[1].trim();
	const jsMatch = message.match(JS_DYNAMIC_IMPORT_RE);
	if (jsMatch) return jsMatch[1].trim();
	const fallbackMatch = message.match(URL_FALLBACK_RE);
	if (fallbackMatch) return fallbackMatch[0];
	return null;
}
function detectFileType(url) {
	const ext = new URL(url, "https://cloud.comfy.org").pathname.split(".").pop()?.toLowerCase();
	if (!ext) return "unknown";
	const cleanExt = ext.split("?")[0];
	if (cleanExt === "js" || cleanExt === "mjs") return "js";
	if (cleanExt === "css") return "css";
	if (FONT_EXTENSIONS.has(cleanExt)) return "font";
	if (IMAGE_EXTENSIONS.has(cleanExt)) return "image";
	return "unknown";
}
function extractChunkName(url) {
	const filename = new URL(url, "https://cloud.comfy.org").pathname.split("/").pop();
	if (!filename) return null;
	return filename.replace(/\.[^.]+$/, "").replace(/-[a-f0-9]{6,}$/, "") || null;
}
function parsePreloadError(error) {
	const message = error.message || String(error);
	const url = extractUrl(message);
	return {
		url,
		fileType: url ? detectFileType(url) : "unknown",
		chunkName: url ? extractChunkName(url) : null,
		message
	};
}
//#endregion
//#region src/App.vue
var App_default = /* @__PURE__ */ defineComponent({
	__name: "App",
	setup(__props) {
		const workspaceStore = useWorkspaceStore();
		app$1.extensionManager = useWorkspaceStore();
		const conflictDetection = useConflictDetection();
		const isLoading = computed(() => workspaceStore.spinner);
		watch(isLoading, (loading, prevLoading) => {
			if (prevLoading && !loading) document.getElementById("splash-loader")?.remove();
		}, { flush: "post" });
		onMounted(() => {
			window["__COMFYUI_FRONTEND_VERSION__"] = config_default.app_version;
			window.addEventListener("vite:preloadError", (event) => {
				event.preventDefault();
				const info = parsePreloadError(event.payload);
				console.error("[vite:preloadError]", {
					url: info.url,
					fileType: info.fileType,
					chunkName: info.chunkName,
					message: info.message
				});
			});
			conflictDetection.initializeConflictDetection();
		});
		return (_ctx, _cache) => {
			const _component_router_view = resolveComponent("router-view");
			return openBlock(), createElementBlock(Fragment, null, [
				createVNode(_component_router_view),
				createVNode(GlobalDialog_default),
				createVNode(unref(script$1), {
					"full-screen": "",
					blocked: isLoading.value
				}, null, 8, ["blocked"])
			], 64);
		};
	}
});
//#endregion
//#region src/main.ts
var hasHostTelemetryBridge = Boolean(window.__comfyDesktop2?.Telemetry);
var { refreshRemoteConfig } = await __vitePreload(async () => {
	const { refreshRemoteConfig } = await import("./refreshRemoteConfig-CSwNI_Sc.js");
	return { refreshRemoteConfig };
}, __vite__mapDeps([87,88,1,2,3,33,13]), import.meta.url);
await refreshRemoteConfig({ useAuth: false });
if (hasHostTelemetryBridge) {
	const { initHostTelemetry } = await __vitePreload(async () => {
		const { initHostTelemetry } = await import("./initHostTelemetry-BDcd0eJq.js");
		return { initHostTelemetry };
	}, __vite__mapDeps([89,1,13,3,14,17,33,49]), import.meta.url);
	initHostTelemetry();
}
var ComfyUIPreset = definePreset(index, { semantic: { primary: index["primitive"].blue } });
var firebaseApp = initializeApp(getFirebaseConfig());
var app = createApp(App_default);
var pinia = createPinia();
init({
	app,
	dsn: "",
	enabled: false,
	release: "1.49.0",
	normalizeDepth: 8,
	tracesSampleRate: 0,
	replaysSessionSampleRate: 0,
	replaysOnErrorSampleRate: 0,
	integrations: [],
	autoSessionTracking: false,
	defaultIntegrations: false
});
setAssertReporter((message) => {});
app.directive("tooltip", Tooltip);
app.use(router).use(PrimeVue, {
	zIndex: {
		modal: 1800,
		overlay: 1800,
		menu: 1800,
		tooltip: 2e3
	},
	theme: {
		preset: ComfyUIPreset,
		options: {
			prefix: "p",
			cssLayer: {
				name: "primevue",
				order: "theme, base, primevue"
			},
			darkModeSelector: ".dark-theme, :root:has(.dark-theme)"
		}
	}
}).use(ToastService).use(pinia).use(i18n).use(VueFire, {
	firebaseApp,
	modules: [VueFireAuth()]
});
LGraph.proxyWidgetMigrationFlush = (hostNode, nodeData) => flushProxyWidgetMigration({
	hostNode,
	hostWidgetValues: nodeData?.widgets_values
});
LGraph.autoExposePreviewNodes = (hostNode) => autoExposeKnownPreviewNodes(hostNode);
useBootstrapStore(pinia).startStoreBootstrap();
app.mount("#vue-app");
//#endregion

//# sourceMappingURL=main-BSiGwWhY.js.map