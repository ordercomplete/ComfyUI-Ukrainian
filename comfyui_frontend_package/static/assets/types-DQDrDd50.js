import "./rolldown-runtime-C9Cmlsnw.js";
import { n as useTelemetry } from "./telemetry-C8VBI5GP.js";
//#region src/platform/telemetry/topupTracker.ts
var STORAGE_KEY = "pending_topup_timestamp";
var MAX_AGE_MS = 1440 * 60 * 1e3;
/**
* Start tracking a credit top-up purchase.
* Call this before opening the Stripe checkout window.
*/
function startTopupTracking() {
	localStorage.setItem(STORAGE_KEY, Date.now().toString());
}
/**
* Check if a pending top-up has completed by looking for a credit_added event
* that occurred after the tracking started.
*
* @param events - Array of audit log events to check
* @returns true if a completed top-up was detected and telemetry was sent
*/
function checkForCompletedTopup(events) {
	const timestampStr = localStorage.getItem(STORAGE_KEY);
	if (!timestampStr) return false;
	const timestamp = parseInt(timestampStr, 10);
	if (Date.now() - timestamp > MAX_AGE_MS) {
		localStorage.removeItem(STORAGE_KEY);
		return false;
	}
	if (!events || events.length === 0) return false;
	if (events.find((e) => (e.event_type === "credit_added" || e.event_type === "topup_completed") && e.createdAt && new Date(e.createdAt).getTime() > timestamp)) {
		useTelemetry()?.trackApiCreditTopupSucceeded();
		localStorage.removeItem(STORAGE_KEY);
		return true;
	}
	return false;
}
/**
* Clear any pending top-up tracking.
* Useful for testing or manual cleanup.
*/
function clearTopupTracking() {
	localStorage.removeItem(STORAGE_KEY);
}
/**
* Consume a pending top-up marker on window focus. Clears the marker and
* reports whether a non-expired purchase was awaiting a balance refresh.
*/
function consumePendingTopup() {
	const timestampStr = localStorage.getItem(STORAGE_KEY);
	if (!timestampStr) return false;
	localStorage.removeItem(STORAGE_KEY);
	const timestamp = parseInt(timestampStr, 10);
	return Date.now() - timestamp <= MAX_AGE_MS;
}
//#endregion
//#region src/platform/telemetry/types.ts
/**
* Telemetry event constants
*
* Event naming conventions:
* - 'app:' prefix: UI/user interaction events
* - No prefix: Backend/system events (execution lifecycle)
*/
var TelemetryEvents = {
	USER_SIGN_UP_OPENED: "app:user_sign_up_opened",
	USER_AUTH_COMPLETED: "app:user_auth_completed",
	USER_AUTH_FAILED: "app:user_auth_failed",
	USER_LOGGED_IN: "app:user_logged_in",
	RUN_BUTTON_CLICKED: "app:run_button_click",
	SUBSCRIPTION_REQUIRED_MODAL_OPENED: "app:subscription_required_modal_opened",
	SUBSCRIBE_NOW_BUTTON_CLICKED: "app:subscribe_now_button_clicked",
	MONTHLY_SUBSCRIPTION_SUCCEEDED: "app:monthly_subscription_succeeded",
	MONTHLY_SUBSCRIPTION_CANCELLED: "app:monthly_subscription_cancelled",
	SUBSCRIPTION_CANCEL_FLOW_OPENED: "app:subscription_cancel_flow_opened",
	SUBSCRIPTION_CANCEL_CONFIRMED: "app:subscription_cancel_confirmed",
	SUBSCRIPTION_CANCEL_ABANDONED: "app:subscription_cancel_abandoned",
	SUBSCRIPTION_CANCEL_FAILED: "app:subscription_cancel_failed",
	RESUBSCRIBE_BUTTON_CLICKED: "app:resubscribe_button_clicked",
	ADD_API_CREDIT_BUTTON_CLICKED: "app:add_api_credit_button_clicked",
	API_CREDIT_TOPUP_BUTTON_PURCHASE_CLICKED: "app:api_credit_topup_button_purchase_clicked",
	API_CREDIT_TOPUP_SUCCEEDED: "app:api_credit_topup_succeeded",
	WORKSPACE_INVITE_SENT: "app:workspace_invite_sent",
	WORKSPACE_INVITE_FAILED: "app:workspace_invite_failed",
	BEGIN_CHECKOUT: "begin_checkout",
	BILLING_SUBSCRIPTION_CHECKOUT_SUCCEEDED: "billing.subscription_checkout.succeeded",
	BILLING_SUBSCRIPTION_CHECKOUT_FAILED: "billing.subscription_checkout.failed",
	BILLING_OPERATION_SUCCEEDED: "billing.operation.succeeded",
	BILLING_OPERATION_FAILED: "billing.operation.failed",
	BILLING_OPERATION_TIMEOUT: "billing.operation.timeout",
	BILLING_RESUBSCRIBE_SUCCEEDED: "billing.resubscribe.succeeded",
	BILLING_RESUBSCRIBE_FAILED: "billing.resubscribe.failed",
	BILLING_TOPUP_SUCCEEDED: "billing.topup.succeeded",
	BILLING_TOPUP_FAILED: "billing.topup.failed",
	BILLING_DOWNGRADE_TO_PERSONAL_STARTED: "billing.downgrade_to_personal.started",
	BILLING_DOWNGRADE_TO_PERSONAL_SUCCEEDED: "billing.downgrade_to_personal.succeeded",
	BILLING_DOWNGRADE_TO_PERSONAL_FAILED: "billing.downgrade_to_personal.failed",
	USER_SURVEY_OPENED: "app:user_survey_opened",
	USER_SURVEY_SUBMITTED: "app:user_survey_submitted",
	ONBOARDING_TOUR_STARTED: "app:onboarding_tour_started",
	ONBOARDING_TOUR_STEP_SHOWN: "app:onboarding_tour_step_shown",
	ONBOARDING_TOUR_COMPLETED: "app:onboarding_tour_completed",
	ONBOARDING_TOUR_SKIPPED: "app:onboarding_tour_skipped",
	USER_EMAIL_VERIFY_OPENED: "app:user_email_verify_opened",
	USER_EMAIL_VERIFY_REQUESTED: "app:user_email_verify_requested",
	USER_EMAIL_VERIFY_COMPLETED: "app:user_email_verify_completed",
	TEMPLATE_WORKFLOW_OPENED: "app:template_workflow_opened",
	TEMPLATE_LIBRARY_OPENED: "app:template_library_opened",
	TEMPLATE_LIBRARY_CLOSED: "app:template_library_closed",
	WORKFLOW_IMPORTED: "app:workflow_imported",
	WORKFLOW_OPENED: "app:workflow_opened",
	ENTER_LINEAR_MODE: "app:app_mode_opened",
	SHARE_FLOW: "app:share_flow",
	SHARE_LINK_OPENED: "app:share_link_opened",
	PAGE_VISIBILITY_CHANGED: "app:page_visibility_changed",
	TAB_COUNT_TRACKING: "app:tab_count_tracking",
	SHELL_LAYOUT: "app:shell_layout",
	NODE_SEARCH: "app:node_search",
	NODE_SEARCH_RESULT_SELECTED: "app:node_search_result_selected",
	SEARCH_QUERY: "app:search_query",
	NODE_ADDED: "app:node_added_to_workflow",
	TEMPLATE_FILTER_CHANGED: "app:template_filter_changed",
	SETTING_CHANGED: "app:setting_changed",
	HELP_CENTER_OPENED: "app:help_center_opened",
	HELP_RESOURCE_CLICKED: "app:help_resource_clicked",
	HELP_CENTER_CLOSED: "app:help_center_closed",
	WORKFLOW_CREATED: "app:workflow_created",
	WORKFLOW_SAVED: "app:workflow_saved",
	DEFAULT_VIEW_SET: "app:default_view_set",
	EXECUTION_START: "execution_start",
	EXECUTION_ERROR: "execution_error",
	EXECUTION_SUCCESS: "execution_success",
	SHARED_WORKFLOW_RUN: "app:shared_workflow_run",
	UI_BUTTON_CLICKED: "app:ui_button_clicked",
	WIDGET_FAVORITE_TOGGLED: "app:widget_favorite_toggled",
	PAGE_VIEW: "app:page_view"
};
TelemetryEvents.ONBOARDING_TOUR_STARTED, TelemetryEvents.ONBOARDING_TOUR_STEP_SHOWN, TelemetryEvents.ONBOARDING_TOUR_COMPLETED, TelemetryEvents.ONBOARDING_TOUR_SKIPPED;
var CANCELLATION_STAGE_EVENTS = {
	flow_opened: TelemetryEvents.SUBSCRIPTION_CANCEL_FLOW_OPENED,
	confirmed: TelemetryEvents.SUBSCRIPTION_CANCEL_CONFIRMED,
	abandoned: TelemetryEvents.SUBSCRIPTION_CANCEL_ABANDONED,
	failed: TelemetryEvents.SUBSCRIPTION_CANCEL_FAILED
};
var executionTriggerSources = [
	"button",
	"keybinding",
	"legacy_ui",
	"unknown",
	"linear",
	"auto_queue"
];
function normalizeExecutionTriggerSource(value) {
	return executionTriggerSources.find((triggerSource) => triggerSource === value) ?? "unknown";
}
//#endregion
export { clearTopupTracking as a, checkForCompletedTopup as i, TelemetryEvents as n, consumePendingTopup as o, normalizeExecutionTriggerSource as r, startTopupTracking as s, CANCELLATION_STAGE_EVENTS as t };

//# sourceMappingURL=types-DQDrDd50.js.map