import "./rolldown-runtime-C9Cmlsnw.js";
import { H as script } from "./vendor-primevue-T0qpAVQN.js";
import { At as onScopeDispose, C as vShow, Ct as withDirectives, F as createCommentVNode, Ht as unref, I as createElementBlock, It as shallowRef, M as computed, N as createBaseVNode, Nt as ref, P as createBlock, St as withCtx, U as defineComponent, V as createVNode, Wt as normalizeClass, at as openBlock, f as storeToRefs, kt as markRaw, nt as onMounted, qt as toDisplayString, rt as onUnmounted, ut as resolveDirective } from "./vendor-vue-core-oGuyqViA.js";
import { r as useI18n } from "./vendor-i18n-CPpp7rsM.js";
import { U as debounce } from "./vendor-other-hebp3VVz.js";
import { t as cn } from "./src-C1FpYMFF.js";
import { t as Button_default } from "./Button-By8A3toz.js";
import { b as useEventListener, tt as until, v as useElementHover } from "./vendor-vueuse-De7x5bAw.js";
import { i as api } from "./api-btlSMXR9.js";
import { F as useExecutionStore } from "./settingStore-pm7IqVHI.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-CxSqLFJz.js";
import { t as electronAPI } from "./envUtil-DDRnAAj_.js";
import { n as require_addon_fit, t as require_xterm } from "./vendor-xterm-zRj51aqw.js";
//#region src/composables/bottomPanelTabs/useLogsTerminal.ts
/**
* Drives the built-in logs terminal: initial load, live `logs` stream, and
* full resync when the backend WebSocket reconnects (e.g., after a reboot).
*
* Listeners are registered synchronously so we cannot miss a `reconnected`
* event during the mount-time fetch/subscribe awaits. In-flight fetches are
* tied to AbortControllers so that:
*   - rapid double-reconnects don't interleave writes / double-subscribe
*   - unmount mid-fetch never writes to a disposed terminal
*/
function useLogsTerminal(terminal) {
	const { t } = useI18n();
	const errorMessage = ref("");
	const loading = ref(true);
	let mountController;
	let resyncController;
	const writeEntries = (entries) => {
		terminal.value?.write(entries.map((e) => e.m).join(""));
	};
	const resyncLogs = async () => {
		mountController?.abort();
		resyncController?.abort();
		const controller = new AbortController();
		resyncController = controller;
		const { signal } = controller;
		try {
			const logs = await api.getRawLogs();
			if (signal.aborted || !terminal.value) return;
			terminal.value.reset();
			writeEntries(logs.entries);
			terminal.value.scrollToBottom();
			await api.subscribeLogs(true);
			if (signal.aborted) return;
			errorMessage.value = "";
			loading.value = false;
		} catch (err) {
			if (signal.aborted) return;
			console.error("Error resyncing logs after reconnect", err);
			errorMessage.value = t("logsTerminal.resyncError");
		}
	};
	useEventListener(api, "logs", (e) => {
		writeEntries(e.detail.entries);
	});
	useEventListener(api, "reconnected", () => {
		resyncLogs();
	});
	onMounted(async () => {
		if (!terminal.value) await until(terminal).toBeTruthy();
		const controller = new AbortController();
		mountController = controller;
		const { signal } = controller;
		try {
			const logs = await api.getRawLogs();
			if (signal.aborted || !terminal.value) return;
			writeEntries(logs.entries);
		} catch (err) {
			if (signal.aborted) return;
			console.error("Error loading logs", err);
			errorMessage.value = t("logsTerminal.loadError");
			loading.value = false;
			return;
		}
		const { clientId } = storeToRefs(useExecutionStore());
		if (!clientId.value) await until(clientId).not.toBeNull();
		if (signal.aborted) return;
		try {
			await api.subscribeLogs(true);
		} catch (err) {
			if (signal.aborted) return;
			console.error("Error subscribing to logs", err);
		}
		if (!signal.aborted) loading.value = false;
	});
	onScopeDispose(() => {
		mountController?.abort();
		resyncController?.abort();
		if (!api.clientId) return;
		api.subscribeLogs(false).catch((err) => {
			console.error("Error unsubscribing from logs", err);
		});
	});
	return {
		errorMessage,
		loading
	};
}
//#endregion
//#region src/composables/bottomPanelTabs/useTerminal.ts
var import_addon_fit = require_addon_fit();
var import_xterm = require_xterm();
function useTerminal(element) {
	const fitAddon = new import_addon_fit.FitAddon();
	const terminal = markRaw(new import_xterm.Terminal({
		convertEol: true,
		theme: void 0
	}));
	terminal.loadAddon(fitAddon);
	terminal.attachCustomKeyEventHandler((event) => {
		if (event.type === "keydown" && (event.ctrlKey || event.metaKey) && (event.key === "c" && terminal.hasSelection() || event.key === "v")) return false;
		return true;
	});
	onMounted(async () => {
		if (element.value) terminal.open(element.value);
	});
	onUnmounted(() => {
		terminal.dispose();
	});
	return {
		terminal,
		useAutoSize({ root, autoRows = true, autoCols = true, minCols = Number.NEGATIVE_INFINITY, minRows = Number.NEGATIVE_INFINITY, onResize }) {
			const ensureValidRows = (rows) => {
				if (rows == null || isNaN(rows)) return (root.value?.clientHeight ?? 80) / 20;
				return rows;
			};
			const ensureValidCols = (cols) => {
				if (cols == null || isNaN(cols)) return (root.value?.clientWidth ?? 80) / 8;
				return cols;
			};
			const resize = () => {
				const dims = fitAddon.proposeDimensions();
				terminal.resize(Math.max(autoCols ? ensureValidCols(dims?.cols) : terminal.cols, minCols), Math.max(autoRows ? ensureValidRows(dims?.rows) : terminal.rows, minRows));
				onResize?.();
			};
			const resizeObserver = new ResizeObserver(debounce(resize, 25));
			onMounted(async () => {
				if (root.value) {
					resizeObserver.observe(root.value);
					resize();
				}
			});
			onUnmounted(() => {
				resizeObserver.disconnect();
			});
			return { resize };
		}
	};
}
//#endregion
//#region src/components/bottomPanel/tabs/terminal/BaseTerminal.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { class: "p-terminal size-full rounded-none p-2" };
//#endregion
//#region src/components/bottomPanel/tabs/terminal/BaseTerminal.vue
var BaseTerminal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "BaseTerminal",
	emits: ["created", "unmounted"],
	setup(__props, { emit: __emit }) {
		const { t } = useI18n();
		const emit = __emit;
		const terminalEl = ref();
		const rootEl = ref();
		const hasSelection = ref(false);
		const isHovered = useElementHover(rootEl);
		const terminalData = useTerminal(terminalEl);
		emit("created", terminalData, ref(rootEl));
		const { terminal } = terminalData;
		let selectionDisposable;
		const tooltipText = computed(() => {
			return hasSelection.value ? t("serverStart.copySelectionTooltip") : t("serverStart.copyAllTooltip");
		});
		const handleCopy = async () => {
			const existingSelection = terminal.getSelection();
			const shouldSelectAll = !existingSelection;
			if (shouldSelectAll) terminal.selectAll();
			const selectedText = shouldSelectAll ? terminal.getSelection() : existingSelection;
			if (selectedText) {
				await navigator.clipboard.writeText(selectedText);
				if (shouldSelectAll) terminal.clearSelection();
			}
		};
		onMounted(() => {
			selectionDisposable = terminal.onSelectionChange(() => {
				hasSelection.value = terminal.hasSelection();
			});
		});
		onUnmounted(() => {
			selectionDisposable?.dispose();
			emit("unmounted");
		});
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock("div", {
				ref_key: "rootEl",
				ref: rootEl,
				"data-testid": "terminal-root",
				class: "relative size-full overflow-hidden bg-neutral-900"
			}, [createBaseVNode("div", _hoisted_1$1, [createBaseVNode("div", {
				ref_key: "terminalEl",
				ref: terminalEl,
				"data-testid": "terminal-host",
				class: "terminal-host h-full"
			}, null, 512)]), withDirectives((openBlock(), createBlock(Button_default, {
				"data-testid": "terminal-copy-button",
				variant: "secondary",
				size: "sm",
				class: normalizeClass(unref(cn)("absolute top-2 right-8 transition-opacity", { "pointer-events-none opacity-0 select-none": !unref(isHovered) })),
				"aria-label": tooltipText.value,
				onClick: handleCopy
			}, {
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createBaseVNode("i", { class: "pi pi-copy" }, null, -1)])]),
				_: 1
			}, 8, ["class", "aria-label"])), [[
				_directive_tooltip,
				{
					value: tooltipText.value,
					showDelay: 300
				},
				void 0,
				{ left: true }
			]])], 512);
		};
	}
}), [["__scopeId", "data-v-b1b65723"]]);
//#endregion
//#region src/components/bottomPanel/tabs/terminal/LogsTerminal.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "size-full bg-transparent" };
var _hoisted_2 = {
	key: 0,
	"data-testid": "terminal-error-message",
	class: "p-4 text-center"
};
//#endregion
//#region src/components/bottomPanel/tabs/terminal/LogsTerminal.vue
var LogsTerminal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "LogsTerminal",
	setup(__props) {
		const terminal = shallowRef();
		const { errorMessage, loading } = useLogsTerminal(terminal);
		const terminalCreated = ({ terminal: instance, useAutoSize }, root) => {
			useAutoSize({
				root,
				autoRows: true,
				autoCols: true,
				minCols: 80
			});
			terminal.value = instance;
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [unref(errorMessage) ? (openBlock(), createElementBlock("p", _hoisted_2, toDisplayString(unref(errorMessage)), 1)) : unref(loading) ? (openBlock(), createBlock(unref(script), {
				key: 1,
				"data-testid": "terminal-loading-spinner",
				class: "relative inset-0 z-10 flex h-full items-center justify-center"
			})) : createCommentVNode("", true), withDirectives(createVNode(BaseTerminal_default, { onCreated: terminalCreated }, null, 512), [[vShow, !unref(loading) && !unref(errorMessage)]])]);
		};
	}
}), [["__scopeId", "data-v-eeb0228f"]]);
//#endregion
//#region src/components/bottomPanel/tabs/terminal/CommandTerminal.vue
var CommandTerminal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "CommandTerminal",
	setup(__props) {
		const terminalCreated = ({ terminal, useAutoSize }, root) => {
			const terminalApi = electronAPI().Terminal;
			let offData;
			let offOutput;
			useAutoSize({
				root,
				autoRows: true,
				autoCols: true,
				onResize: async () => {
					if (!terminal.element?.offsetParent) return;
					await terminalApi.resize(terminal.cols, terminal.rows);
				}
			});
			onMounted(async () => {
				offData = terminal.onData(async (message) => {
					await terminalApi.write(message);
				});
				offOutput = terminalApi.onOutput((message) => {
					terminal.write(message);
				});
				const restore = await terminalApi.restore();
				setTimeout(() => {
					if (restore.buffer.length) {
						terminal.resize(restore.size.cols, restore.size.rows);
						terminal.write(restore.buffer.join(""));
					}
				}, 500);
			});
			onUnmounted(() => {
				offData?.dispose();
				offOutput?.();
			});
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(BaseTerminal_default, { onCreated: terminalCreated });
		};
	}
}), [["__scopeId", "data-v-49782f06"]]);
//#endregion
//#region src/composables/bottomPanelTabs/useTerminalTabs.ts
function useLogsTerminalTab() {
	return {
		id: "logs-terminal",
		title: "Logs",
		titleKey: "g.logs",
		component: markRaw(LogsTerminal_default),
		type: "vue"
	};
}
function useCommandTerminalTab() {
	return {
		id: "command-terminal",
		title: "Terminal",
		titleKey: "g.terminal",
		component: markRaw(CommandTerminal_default),
		type: "vue"
	};
}
//#endregion
export { useCommandTerminalTab, useLogsTerminalTab };

//# sourceMappingURL=useTerminalTabs-DRiZIuo-.js.map