import React from "react";
import { withRouter, useHistory } from "react-router-dom";

import { Button, Tooltip } from "@material-ui/core";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import WarningIcon from "@material-ui/icons/Warning";
import HelpIcon from "@material-ui/icons/Help";
import moment from "moment";

import PageWrapper from "../../../components/PageWrapper";
import FilterTableGrid from "../../../components/FilterTableGrid";

import {
  DispatchContext,
  StateContext,
} from "../../../contexts/ProductAccountabilityContexts";

import useStyles from "./style";
import CompleteIcon from "../../../images/complete.svg";
import PartialIcon from "../../../images/partial.svg";
import NoneIcon from "../../../images/none.svg";

import {
  StateContext as DataStateContext,
  DispatchContext as DataDispatchContext,
} from "../../../contexts/DataContexts/DownlinkData";

import {
  onMount,
  pushUrlParams,
  pushTempToState,
  getTempValues,
  makeAPIGet,
} from "../../../api/DataUtils";

import FilterMenu from "../../../components/FilterMenu";
import FilterController from "../../../components/FilterController";
import Table from "../../../components/Table";
import DateFilter from "../../../components/Filters/DateFilter";
import StringFilter from "../../../components/Filters/StringFilter";
import CheckboxFilter from "../../../components/Filters/CheckboxFilter";

import makeLabel from "../../../components/Filters/Labeler";

function Downlink() {
  const classes = useStyles();
  const history = useHistory();

  const state = React.useContext(StateContext);
  const dispatch = React.useContext(DispatchContext);
  const dataState = React.useContext(DataStateContext);
  const dataDispatch = React.useContext(DataDispatchContext);

  const {
    workflowStartDate,
    workflowEndDate,
    workflowPreset,
    lastModifiedStartDate,
    lastModifiedEndDate,
    lastModifiedPreset,
    observationID,
    ldfFilename,
    vcid,
  } = state;

  const { data } = dataState;
  const { setData } = dataDispatch;

  const [tempWorkflowStartDate, setTempWorkflowStartDate] = React.useState(
    workflowStartDate
  );
  const [tempWorkflowEndDate, setTempWorkflowEndDate] = React.useState(
    workflowEndDate
  );
  const [tempWorkflowPreset, setTempWorkflowPreset] = React.useState(
    workflowPreset
  );
  const [
    tempLastModifiedStartDate,
    setTempLastModifiedStartDate,
  ] = React.useState(lastModifiedStartDate);
  const [tempLastModifiedEndDate, setTempLastModifiedEndDate] = React.useState(
    lastModifiedEndDate
  );
  const [tempLastModifiedPreset, setTempLastModifiedPreset] = React.useState(
    lastModifiedPreset
  );
  const [tempObservationID, setTempObservationID] = React.useState(
    observationID
  );
  const [tempLdfFilename, setTempLdfFilename] = React.useState(ldfFilename);
  const [tempVCID, setTempVCID] = React.useState(vcid);

  const [tempFinished, setTempFinished] = React.useState(false);
  const [tempWarning, setTempWarning] = React.useState(false);
  const [tempProcessing, setTempProcessing] = React.useState(false);
  const [tempFailed, setTempFailed] = React.useState(false);

  const [tempComplete, setTemplComplete] = React.useState(false);
  const [tempPartial, setTempPartial] = React.useState(false);
  const [tempNone, setTempNone] = React.useState(false);
  const [tempUnknown, setTempUnknown] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  const [filtersHidden, setFiltersHidden] = React.useState(false);

  const tempState = {
    tempWorkflowStartDate,
    tempWorkflowEndDate,
    tempWorkflowPreset,
    tempLastModifiedStartDate,
    tempLastModifiedEndDate,
    tempLastModifiedPreset,
    tempObservationID,
    tempLdfFilename,
    tempVCID,
  };

  const tempDispatch = {
    setWorkflowStartDate: setTempWorkflowStartDate,
    setWorkflowEndDate: setTempWorkflowEndDate,
    setWorkflowPreset: setTempWorkflowPreset,
    setLastModifiedStartDate: setTempLastModifiedStartDate,
    setLastModifiedEndDate: setTempLastModifiedEndDate,
    setLastModifiedPreset: setTempLastModifiedPreset,
    setObservationID: setTempObservationID,
    setLdfFilename: setTempLdfFilename,
    setVCID: setTempVCID,
  };

  const toggleFinished = () => setTempFinished(!tempFinished);
  const toggleWarning = () => setTempWarning(!tempWarning);
  const toggleProcessing = () => setTempProcessing(!tempProcessing);
  const toggleFailed = () => setTempFailed(!tempFailed);

  const toggleComplete = () => setTemplComplete(!tempComplete);
  const togglePartial = () => setTempPartial(!tempPartial);
  const toggleNone = () => setTempNone(!tempNone);
  const toggleUnknown = () => setTempUnknown(!tempUnknown);

  const columns = [
    {
      field: "id",
      headerName: "LDF",
      width: 300,
      renderCell: (params) => {
        const { value } = params;
        return (
          <Tooltip title={value}>
            <Button color="primary" style={{ justifyContent: "right" }}>
              {value}
            </Button>
          </Tooltip>
        );
      },
    },
    { field: "vcid", headerName: "VCID", width: 100 },
    {
      field: "created_at",
      headerName: "Workflow Start Time",
      width: 190,
      valueFormatter: (params) => {
        const formattedDate = moment(params.value).format(
          "YYYY/MM/DD h:mm:ss a"
        );
        return formattedDate;
      },
    },
    {
      field: "end_time",
      headerName: "Workflow End Time",
      width: 190,
      valueFormatter: (params) => {
        if (params.value !== "N/A") {
          const formattedDate = moment(params.value).format(
            "YYYY/MM/DD h:mm:ss a"
          );
          return formattedDate;
        }
        return params.value;
      },
    },
    {
      field: "duration",
      headerName: "Duration (Min.)",
      width: 200,
      valueFormatter: (params) => {
        const valueFormatted = Number(params.value).toFixed(3).toLocaleString();
        return valueFormatted;
      },
    },
    {
      field: "last_modified",
      headerName: "Workflow Last Modified",
      width: 300,
      valueFormatter: (params) => {
        const formattedDate = moment(params.value).format(
          "YYYY/MM/DD h:mm:ss a"
        );
        return formattedDate;
      },
    },
    {
      field: "L0A_L_RRST_PP_id",
      headerName: "L0A",
      width: 300,
      renderCell: (params) => {
        const { value } = params;
        return (
          <Tooltip title={value}>
            <Button color="primary" style={{ justifyContent: "right" }}>
              {value}
            </Button>
          </Tooltip>
        );
      },
    },
    {
      field: "L0A_L_RRST_id",
      headerName: "L0A_TE",
      width: 300,
      renderCell: (params) => {
        const { value } = params;
        return (
          <Tooltip title={value}>
            <Button color="primary" style={{ justifyContent: "right" }}>
              {value}
            </Button>
          </Tooltip>
        );
      },
    },
  ];

  const workflowStatusFormats = {
    workflowFinished: {
      label: makeLabel(
        <CheckCircleOutlineIcon />,
        "Finished",
        "finished workflow",
        "#4CAF50",
        classes
      ),
      name: "finished",
      value: tempFinished,
      setValue: toggleFinished,
      color: "primary",
      labelColor: "#4CAF50",
    },
    workflowProcessing: {
      name: "processing",
      label: makeLabel(
        <HourglassEmptyIcon />,
        "Processing",
        "Sent to CNM",
        "#007DFF",
        classes
      ),
      value: tempProcessing,
      setValue: toggleProcessing,
      color: "primary",
      labelColor: "#007DFF",
    },
    workflowFailed: {
      label: makeLabel(
        <ErrorOutlineOutlinedIcon />,
        "Failed",
        "Failed to send to DAAC",
        "#F44336",
        classes
      ),
      name: "failed",
      value: tempFailed,
      setValue: toggleFailed,
      color: "primary",
      labelColor: "#F44336",
    },
    workflowWarning: {
      label: makeLabel(
        <WarningIcon />,
        "Warning",
        "Warning encountered during processing",
        "#FF9800",
        classes
      ),
      name: "warning",
      value: tempWarning,
      setValue: toggleWarning,
      color: "primary",
      labelColor: "#FF9800",
    },
  };

  const workflowStatusOptions = [
    workflowStatusFormats.workflowFinished,
    workflowStatusFormats.workflowProcessing,
    workflowStatusFormats.workflowWarning,
    workflowStatusFormats.workflowFailed,
  ];

  const productCoverageFormats = {
    coverageComplete: {
      label: makeLabel(
        <img alt="complete" src={CompleteIcon} />,
        "Complete",
        "Partial Coverage",
        "rgba(0, 0, 0, 0.54)",
        classes
      ),
      name: "complete",
      value: tempComplete,
      setValue: toggleComplete,
      color: "primary",
      labelColor: "rgba(0, 0, 0, 0.54)",
    },
    coveragePartial: {
      name: "partial",
      label: makeLabel(
        <img alt="complete" src={PartialIcon} />,
        "Partial",
        "Partial Coverage",
        "rgba(0, 0, 0, 0.54)",
        classes
      ),
      value: tempPartial,
      setValue: togglePartial,
      color: "primary",
      labelColor: "rgba(0, 0, 0, 0.54)",
    },
    coverageNone: {
      label: makeLabel(
        <img alt="complete" src={NoneIcon} />,
        "None",
        "No Coverage",
        "rgba(0, 0, 0, 0.54)",
        classes
      ),
      name: "failed",
      value: tempNone,
      setValue: toggleNone,
      color: "primary",
      labelColor: "rgba(0, 0, 0, 0.54)",
    },
    coverageUnknown: {
      label: makeLabel(
        <HelpIcon />,
        "Unknown",
        "Coverage Unknown",
        "rgba(0, 0, 0, 0.54)",
        classes
      ),
      name: "unknown",
      value: tempUnknown,
      setValue: toggleUnknown,
      color: "primary",
      labelColor: "rgba(0, 0, 0, 0.54)",
    },
  };

  const productCoverageOptions = [
    productCoverageFormats.coverageComplete,
    productCoverageFormats.coveragePartial,
    productCoverageFormats.coverageNone,
    productCoverageFormats.coverageUnknown,
  ];

  async function getDownlinkAccountabilityData() {
    const paths = ["downlink"];
    const params = {
      workflow_start: `${tempWorkflowStartDate}:00Z`,
      workflow_end: `${tempWorkflowEndDate}:00Z`,
      start: `${tempLastModifiedStartDate}:00Z`,
      end: `${tempLastModifiedEndDate}:00Z`,
    };
    if (tempObservationID !== "") {
      params.observation_id = tempObservationID;
    }
    if (tempLdfFilename !== "") {
      params.ldf_filename = tempLdfFilename;
    }
    if (tempVCID !== "") {
      params.vcid = tempVCID;
    }
    let results = {};
    try {
      results = await makeAPIGet(paths, params);
    } catch (err) {
      console.error(err);
    }
    return results;
  }

  const toggleFilters = () => setFiltersHidden(!filtersHidden);

  const search = async () => {
    setLoading(true);
    pushTempToState(dispatch, tempState);

    pushUrlParams(getTempValues(state, tempState, true), history);

    const response = await getDownlinkAccountabilityData();
    setLoading(false);
    setData(response.data);
  };

  const reset = () => {
    setTempWorkflowStartDate(
      moment().startOf("day").format("YYYY-MM-DDTHH:mm")
    );
    setTempWorkflowEndDate(moment().endOf("day").format("YYYY-MM-DDTHH:mm"));
    setTempWorkflowPreset("Today");
    setTempLastModifiedStartDate(
      moment().startOf("day").format("YYYY-MM-DDTHH:mm")
    );
    setTempLastModifiedEndDate(
      moment().endOf("day").format("YYYY-MM-DDTHH:mm")
    );
    setTempLastModifiedPreset("Today");
    setTempObservationID("");
    setTempLdfFilename("");
    setTempVCID("");
  };

  React.useEffect(() => {
    onMount(history, getTempValues(state, null, false), tempDispatch);
  }, [history.location.pathname]);

  return (
    <PageWrapper>
      <FilterController hidden={filtersHidden} toggleFilters={toggleFilters} />
      <FilterTableGrid filtersHidden={filtersHidden}>
        <FilterMenu title="FILTERS" search={search} reset={reset}>
          <CheckboxFilter
            label="Product Workflow Status"
            options={workflowStatusOptions}
          />
          <CheckboxFilter
            label="Product Coverage"
            options={productCoverageOptions}
          />
          <DateFilter
            label="Product Workflow Date"
            startValue={tempWorkflowStartDate}
            setStartValue={setTempWorkflowStartDate}
            endValue={tempWorkflowEndDate}
            setEndValue={setTempWorkflowEndDate}
            presetValue={tempWorkflowPreset}
            setPresetValue={setTempWorkflowPreset}
            presets
          />
          <DateFilter
            label="Last Modified Date"
            startValue={tempLastModifiedStartDate}
            setStartValue={setTempLastModifiedStartDate}
            endValue={tempLastModifiedEndDate}
            setEndValue={setTempLastModifiedEndDate}
            presetValue={tempLastModifiedPreset}
            setPresetValue={setTempLastModifiedPreset}
            presets
          />
          <StringFilter
            label="Observation ID (OBS_ID)"
            value={tempObservationID}
            setValue={setTempObservationID}
          />
          <StringFilter
            label="LDF Filename"
            value={tempLdfFilename}
            setValue={setTempLdfFilename}
          />
          <StringFilter
            label="Virtual Channel ID (VCID)"
            value={tempVCID}
            setValue={setTempVCID}
          />
        </FilterMenu>
        <Table data={data} columns={columns} loading={loading} />
      </FilterTableGrid>
    </PageWrapper>
  );
}

export default withRouter(Downlink);
