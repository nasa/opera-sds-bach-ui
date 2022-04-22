import axios from "axios";
import { DEFAULT_HOST, SUFFIX } from "@bach/config";
import mozartConfig from "@bach/config/mozartConfig.json";

import { URL_TO_VALUES_DICT, VALUES_TO_URL_DICT } from "@bach/constants";
import { buildAPIUrl } from "@bach/api/utils";

export async function makeAPIGet(paths, params, data) {
  const url = buildAPIUrl(paths, `${DEFAULT_HOST}${SUFFIX}`);
  const config = { method: "GET", url };
  if (data !== null) {
    config.data = data;
  }
  const response = await axios.get(url, { params });
  return response;
}

export function getVenue() {
  return mozartConfig.VENUE;
}

/**
 * reads query params from URL and converts to object
 * @param {Object} location - React Router object
 * @returns {Object} urlParams in object form
 */
export function getUrlParams(location) {
  const { search } = location;

  const params = {};
  if (search) {
    const paramsString = search.split("?")[1];
    const splitParams = paramsString.split("&");

    splitParams.map((param) => {
      const splitParam = param.split("=");
      const [key, value] = splitParam;
      params[key] = value;
      return [key, value];
    });
  }
  return params;
}

/**
 * maps state values with VALUES_TO_URL_DICT and pushes them to URL query parameters
 * @param {Object} values - current state values to push to URL
 * @param {Object} navigate - React router object to update query parameters
 * @param {Object} location - React router object to get pathname
 */
export function pushUrlParams(values, location, navigate) {
  const newUrlParams = Object.entries(values)
    .filter(([k, ,]) => k in VALUES_TO_URL_DICT && values[k]) // checking if value exists in mapper and exists
    .reduce((obj, [k, v]) => ({ ...obj, [VALUES_TO_URL_DICT[k]]: v }), {}); // converting array to object

  const queryParams = new URLSearchParams(newUrlParams).toString();
  const urlParamsString = decodeURIComponent(queryParams);
  navigate(`${location.pathname}?${urlParamsString}`);
}

/**
 * reads URL params then maps & converts to object
 *  for each query param, sets state in parent component
 *  used when mounting the component (see pages/Observations/index.jsx)
 * @param {Object} location - React Router object
 * @param {Object: func} dispatch - set of reducer dispatch functions
 */
export function pullUrlParams(location, dispatch) {
  const {
    setStartDate,
    setEndDate,
    setPreset,
    setProductType,
    setSource,
    setWorkflowStartDate,
    setWorkflowEndDate,
    setLastModifiedStartDate,
    setLastModifiedEndDate,
    setObservationStartDate,
    setObservationEndDate,
    setObservationId,
    setDatatakeId,
    setL0bRrsdId,
    setLdfFilename,
    setVCID,
    setCycleReferenceID,
    setCycleSecondaryID,
    setTrackID,
    setFrameID,
    setCRID,
    setProcessingMode,
    setReportType,
  } = dispatch;

  const params = getUrlParams(location);

  const convertedParams = Object.entries(params)
    .filter(([k, ,]) => k in URL_TO_VALUES_DICT && params[k]) // checking if value exists in mapper and exists
    .reduce((obj, [k, v]) => ({ ...obj, [URL_TO_VALUES_DICT[k]]: v }), {}); // converting array to object

  Object.entries(convertedParams).forEach(([key, value]) => {
    switch (key) {
      case "startDate":
        setStartDate(value);
        break;
      case "endDate":
        setEndDate(value);
        break;
      case "preset":
        setPreset(value);
        break;
      case "productType":
        setProductType(value);
        break;
      case "source":
        setSource(value);
        break;
      case "obs_id":
        setObservationId(value);
        break;
      case "dt_id":
        setDatatakeId(value);
        break;
      case "lm_start":
        setLastModifiedStartDate(value);
        break;
      case "lm_end":
        setLastModifiedEndDate(value);
        break;
      case "workflow_start":
        setWorkflowStartDate(value);
        break;
      case "workflow_end":
        setWorkflowEndDate(value);
        break;
      case "obs_start":
        setObservationStartDate(value);
        break;
      case "obs_end":
        setObservationEndDate(value);
        break;
      case "l0b_rrsd_id":
        setL0bRrsdId(value);
        break;
      case "ldf_filename":
        setLdfFilename(value);
        break;
      case "vcid":
        setVCID(value);
        break;
      case "cycle_ref":
        setCycleReferenceID(value);
        break;
      case "cycle_sec":
        setCycleSecondaryID(value);
        break;
      case "track":
        setTrackID(value);
        break;
      case "frame":
        setFrameID(value);
        break;
      case "crid":
        setCRID(value);
        break;
      case "processing_mode":
        setProcessingMode(value);
        break;
      case "report_type":
        setReportType(value);
        break;
      default:
        console.warn(`unhandled param ${key}`);
        break;
    }
  });
}
/**
 * grabs url params from the current url path and pushes the values that are stored in the state to the url path.
 * @param {Object} history (history object from ReactRouter)
 * @param {Object} values (url query params in a dictionary format)
 * @param {Object: func} dispatch (reducer dispatch object)
 */
export function onMount(location, navigate, values, dispatch) {
  if (location.search) pullUrlParams(location, dispatch);
  else pushUrlParams(values, location, navigate);
  return () => console.log(`location has changed ${location.pathname}`);
}

/**
 * Goes through each value in the dispatch's state and grabs the temporary equivalent of that value from the tempState
 * Then calls the set function with it's corresponding tempVal, updating the state with the new value.
 * Replaces set with nothing because all functions in dispatch start with set and the state values are the same as the set functions minus the set plus the temp.
 * @param {Object} dispatch Holds functions that sets data in the state
 * @param {*} tempState Data in the current temporary state that will be pushed to the main state
 */
export function pushTempToState(dispatch, tempState) {
  Object.entries(dispatch).forEach(([key, func]) => {
    const tempKey = key.replace("set", "temp");
    if (tempKey in tempState) {
      const tempVal = tempState[tempKey];
      func(tempVal);
    }
  });
}

/**
 * This function converts values of a state to their corresponding temporary values.
 * TODO:
 *    need to figure out a cleaner way to do this without the need for a return statement
 *    maybe use Object.entries().reduce()
 * @param {Object} state True state of the page
 * @param {Object} tempState Current state of the page
 * @param {*} temp default value to override missing value.
 * @returns {Object} values
 */
export function getTempValues(state, tempState, temp) {
  const values = {};
  Object.keys(state).map((key) => {
    values[key] = temp
      ? tempState[`temp${key.charAt(0).toUpperCase() + key.slice(1)}`]
      : state[key];
    return null; // figure out how to remove this without linter exception
  });
  return values;
}
