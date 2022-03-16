export const HEADER_MENU_HEIGHT = 48;
export const APP_BAR_HEIGHT = 108;
export const APP_BAR_COLOR = "#F5F5F5";

export const DRAWER_WIDTH = 268;
export const DRAWER_CLOSED_WIDTH = 72;
export const DRAWER_COLOR = "#EEEEEE";
export const SIDEBAR_OPENED_LS = "sidebar_opened"; // localStorage
export const ACTIVE_LINK_OPENED = "#E4E4E4";
export const ACTIVE_LINK_CLOSED = "#00000030";

export const MISSION_TITLE = "OPERA - DATA ACCOUNTABILITY";

export const EDIT_GLOBAL_FILTER = "EDIT_GLOBAL_FILTER";
export const EDIT_DATA_SUMMARY_FILTER = "EDIT_DATA_SUMMARY_FILTER";
export const EDIT_DOWNLINK_FILTER = "EDIT_DOWNLINK_FILTER";
export const EDIT_OBSERVATION_FILTER = "EDIT_OBSERVATION_FILTER";
export const EDIT_REPORT_FILTER = "EDIT_REPORT_FILTER";
export const INCOMING = "INCOMING";
export const OUTPUT = "OUTPUT";
export const ALL = "ALL";
export const DOWNLINK = "DOWNLINK";
export const OBSERVATION = "OBSERVATION";
export const REPORTS = "REPORTS";

export const START_DATE = "START_DATE";
export const END_DATE = "END_DATE";
export const PRESET = "PRESET";
export const PRODUCT_TYPE = "PRODUCT_TYPE";
export const SOURCE = "SOURCE";
export const CRID = "CRID";
export const PROCESSING_MODE = "PROCESSING_MODE";
export const REPORT_TYPE = "REPORT_TYPE";
export const WORKFLOW_START_DATE = "WORKFLOW_START_DATE";
export const WORKFLOW_END_DATE = "WORKFLOW_END_DATE";
export const WORKFLOW_PRESET = "WORKFLOW_PRESET";
export const LAST_MODIFIED_START_DATE = "LAST_MODIFIED_START_DATE";
export const LAST_MODIFIED_END_DATE = "LAST_MODIFIED_END_DATE";
export const LAST_MODIFIED_PRESET = "LAST_MODIFIED_PRESET";
export const OBSERVATION_START_DATE = "OBSERVATION_START_DATE";
export const OBSERVATION_END_DATE = "OBSERVATION_END_DATE";
export const OBSERVATION_PRESET = "OBSERVATION_PRESET";
export const OBSERVATION_ID = "OBSERVATION_ID";
export const DATATAKE_ID = "DATATAKE_ID";
export const L0B_RRSD_ID = "L0B_RRSD_ID";
export const LDF_FILENAME = "LDF_FILENAME";
export const VCID = "VCID";
export const SHOW_LATEST_VERSION = "SHOW_LATEST_VERSION";
export const CYCLE_SECONDARY_ID = "CYCLE_SECONDARY_ID";
export const CYCLE_REFERENCE_ID = "CYCLE_REFERENCE_ID";
export const TRACK_ID = "TRACK_ID";
export const FRAME_ID = "FRAME_ID";

export const DATA = "DATA";
export const SUMMARY = "SUMMARY";

export const URL_TO_VALUES_DICT = {
  start_date: "startDate",
  end_date: "endDate",
  prod_type: "productType",
  proc_mode: "processingMode",
  source: "source",
  crid: "crid",
  workflow_start: "workflowStartDate",
  workflow_end: "workflowEndDate",
  lm_start: "lastModifiedStartDate",
  lm_end: "lastModifiedEndDate",
  obs_start: "observationStartDate",
  obs_end: "observationEndDate",
  obs_id: "observationID",
  dt_id: "datatakeID",
  l0b_rrsd_id: "l0bRrsdID",
  ldf_filename: "ldfFilename",
  vcid: "vcid",
};

export const VALUES_TO_URL_DICT = {
  startDate: "start_date",
  endDate: "end_date",
  processingMode: "proc_mode",
  productType: "prod_type",
  source: "source",
  crid: "crid",
  workflowStartDate: "workflow_start",
  workflowEndDate: "workflow_end",
  lastModifiedStartDate: "lm_start",
  lastModifiedEndDate: "lm_end",
  observationStartDate: "obs_start",
  observationEndDate: "obs_end",
  observationID: "obs_id",
  datatakeID: "dt_id",
  l0bRrsdID: "l0b_rrsd_id",
  vcid: "vcid",
  ldfFilename: "ldf_filename",
};

export const DATA_ACCOUNTABILITY_REPORTS = [
  "IncomingFiles",
  "GeneratedSdsProducts",
  "DaacOutgoingProducts",
];
export const DATA_ACCOUNTABILITY_REPORT = "DataAccountabilityReport";
