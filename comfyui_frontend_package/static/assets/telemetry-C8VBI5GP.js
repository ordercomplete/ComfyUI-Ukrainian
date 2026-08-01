import "./rolldown-runtime-C9Cmlsnw.js";
//#region src/platform/telemetry/index.ts
var _telemetryRegistry = null;
/**
* Get the telemetry dispatcher for tracking events.
* Returns null in OSS builds - all tracking calls become no-ops.
*
* Usage: useTelemetry()?.trackAuth({ method: 'google' })
*/
function useTelemetry() {
	return _telemetryRegistry;
}
function setTelemetryRegistry(registry) {
	_telemetryRegistry = registry;
}
//#endregion
export { useTelemetry as n, setTelemetryRegistry as t };

//# sourceMappingURL=telemetry-C8VBI5GP.js.map