import React from "react";
import { withRouter, useHistory } from "react-router-dom";

import { Button, Tooltip } from "@material-ui/core";

import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import HelpIcon from "@material-ui/icons/Help";

import moment from "moment";

import {
  onMount,
  pushUrlParams,
  pushTempToState,
  getTempValues,
  makeAPIGet,
} from "@bach/api/DataUtils";

import {
  StateContext,
  DispatchContext,
} from "@bach/contexts/DataSummaryContexts";

import {
  StateContext as DataStateContext,
  DispatchContext as DataDispatchContext,
} from "@bach/contexts/DataContexts/AllData";

import PageWrapper from "@bach/components/PageWrapper";

import FilterMenu from "@bach/components/FilterMenu";
import FilterTableGrid from "@bach/components/FilterTableGrid";
import FilterController from "@bach/components/FilterController";
import Table from "@bach/components/Table";
import DateFilter from "@bach/components/Filters/DateFilter";
import StringFilter from "@bach/components/Filters/StringFilter";
import CheckboxFilter from "@bach/components/Filters/CheckboxFilter";

import useStyles from "./style";

function AllData() {
  const classes = useStyles();
  const history = useHistory();
  const [filtersHidden, setFiltersHidden] = React.useState(false);

  const state = React.useContext(StateContext);
  const dispatch = React.useContext(DispatchContext);
  const dataState = React.useContext(DataStateContext);
  const dataDispatch = React.useContext(DataDispatchContext);

  const { startDate, endDate, preset, productType } = state;

  const { data } = dataState;
  const { setData } = dataDispatch;

  const [tempStartDate, setTempStartDate] = React.useState(startDate);
  const [tempEndDate, setTempEndDate] = React.useState(endDate);
  const [tempPreset, setTempPreset] = React.useState(preset);
  const [tempProductType, setTempProductType] = React.useState(productType);

  const [transferSuccess, setTransferSuccess] = React.useState(false);
  const [transferFailed, setTransferFailed] = React.useState(false);
  const [transferProcessing, setTransferProcessing] = React.useState(false);
  const [transferUnknown, setTransferUnknown] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  const tempState = {
    tempStartDate,
    tempEndDate,
    tempPreset,
    tempProductType,
  };

  const tempDispatch = {
    setStartDate: setTempStartDate,
    setEndDate: setTempEndDate,
    setPreset: setTempPreset,
    setProductType: setTempProductType,
  };

  const [jsonData, setJsonData] = React.useState({});
  const [open, setOpen] = React.useState(false);

  const rowsPerPageOptions = [10, 20, 50];
  const defaultPageSize = rowsPerPageOptions[0];

  const getJsonData = async (id) => {
    const paths = ["data"];
    const params = {
      id,
    };
    let results = {};
    setLoading(true);
    try {
      results = await makeAPIGet(paths, params);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
    return results;
  };

  const toggleTransferSuccess = () => setTransferSuccess(!transferSuccess);
  const toggleTransferFailed = () => setTransferFailed(!transferFailed);
  const toggleTransferProcessing = () =>
    setTransferProcessing(!transferProcessing);
  const toggleTransferUnknown = () => setTransferUnknown(!transferUnknown);

  const makeLabel = (icon, text, hoverText, color) => (
    <div className={classes.iconLabel}>
      <Tooltip title={hoverText} aria-label={hoverText} style={{ color }}>
        {icon}
      </Tooltip>
      <span className={classes.spanLabel} style={{ color }}>
        {text}
      </span>
    </div>
  );

  const transferFormats = {
    cnm_r_success: {
      label: makeLabel(
        <CheckCircleOutlineIcon />,
        "Success",
        "Sent to DAAC",
        "#4CAF50"
      ),
      name: "success",
      value: transferSuccess,
      setValue: toggleTransferSuccess,
      color: "primary",
      labelColor: "#4CAF50",
    },
    cnm_s_success: {
      name: "processing",
      label: makeLabel(
        <HourglassEmptyIcon />,
        "Processing",
        "Sent to CNM",
        "#007DFF"
      ),
      value: transferProcessing,
      setValue: toggleTransferProcessing,
      color: "primary",
      labelColor: "#007DFF",
    },
    cnm_r_failure: {
      label: makeLabel(
        <ErrorOutlineOutlinedIcon />,
        "Failed",
        "Failed to send to DAAC",
        "#F44336"
      ),
      name: "failed",
      value: transferFailed,
      setValue: toggleTransferFailed,
      color: "primary",
      labelColor: "#F44336",
    },
    cnm_s_failure: {
      label: makeLabel(
        <ErrorOutlineOutlinedIcon />,
        "Failed",
        "Failed to send to CNM",
        "#F44336"
      ),
      name: "failed",
      value: transferFailed,
      setValue: toggleTransferFailed,
      color: "primary",
      labelColor: "#F44336",
    },
    unknown: {
      name: "unknown",
      label: makeLabel(<HelpIcon />, "Unknown", "N/A", "rgba(0, 0, 0, 0.54)"),
      value: transferUnknown,
      setValue: toggleTransferUnknown,
      color: "primary",
      labelColor: "#EEEEEE",
    },
  };

  const transferOptions = [
    transferFormats.cnm_r_success,
    transferFormats.cnm_r_failure,
    transferFormats.cnm_s_success,
    transferFormats.unknown,
  ];

  const columns = [
    {
      field: "dataset_type",
      headerName: "Product Type",
      flex: 0,
      minWidth: 170,
    },
    {
      field: "FileName",
      headerName: "File Name",
      flex: 0,
      minWidth: 400,
      valueGetter: (params) => `${params.row.metadata.FileName || ""}`,
      renderCell: (params) => {
        const { value } = params;
        const handleJsonData = async () => {
          const results = await getJsonData(value);
          setJsonData(results.data[0]);
          setOpen(true);
        };

        handleJsonData.bind(value, "value");

        return (
          <Tooltip title={value}>
            <Button
              color="primary"
              onClick={handleJsonData}
              style={{ justifyContent: "right", textTransform: "none" }}
            >
              {value}
            </Button>
          </Tooltip>
        );
      },
    },
    {
      field: "product_recieved_time",
      headerName: "Recieved Date/Time",
      flex: 0,
      minWidth: 220,
      valueGetter: (params) =>
        `${params.row.metadata.ProductReceivedTime || ""}`,
    },
    {
      field: "transfer_status",
      headerName: "Transfer Status",
      flex: 0,
      minWidth: 200,
      renderCell: (params) => {
        const { value } = params;
        if (Object.keys(transferFormats).includes(value)) {
          return transferFormats[value].label;
        }
        return "Unknown";
      },
    },
  ];

  const toggleFilters = () => setFiltersHidden(!filtersHidden);

  async function getAllDataCount() {
    const paths = ["data"];
    if (tempProductType) {
      paths.push(tempProductType);
    }
    const params = {
      start: `${tempStartDate}:00Z`,
      end: `${tempEndDate}:00Z`,
    };
    let results = {};
    try {
      results = await makeAPIGet(paths, params);
    } catch (err) {
      console.error(err);
    }
    return results;
  }

  const filterData = (dataToFilter) => {
    const transferFilters = [];
    let noFilter = true;
    if (transferSuccess) {
      transferFilters.push("cnm_s_success");
      transferFilters.push("cnm_r_success");
      noFilter = false;
    }
    if (transferFailed) {
      transferFilters.push("cnm_s_failure");
      transferFilters.push("cnm_r_failure");
      noFilter = false;
    }

    if (transferUnknown) {
      transferFilters.push("unknown");
      noFilter = false;
    }

    if (noFilter) {
      return dataToFilter;
    }

    const filteredData = dataToFilter.filter((entry) =>
      transferFilters.includes(entry.transfer_status)
    );

    return filteredData;
  };

  const search = async () => {
    setLoading(true);
    pushTempToState(dispatch, tempState);

    pushUrlParams(getTempValues(state, tempState, true), history);
    const results = await getAllDataCount();
    setLoading(false);
    const filteredResults = filterData(results.data);
    setData(filteredResults);
  };

  const reset = () => {
    setTempStartDate(moment().startOf("day").format("YYYY-MM-DDTHH:mm"));
    setTempEndDate(moment().endOf("day").format("YYYY-MM-DDTHH:mm"));
    setTempPreset("Today");
    setTempProductType("");
  };

  React.useEffect(() => {
    onMount(history, getTempValues(state, null, false), tempDispatch);
  }, [history.location.pathname]);

  return (
    <PageWrapper>
      <FilterController hidden={filtersHidden} toggleFilters={toggleFilters} />
      <FilterTableGrid filtersHidden={filtersHidden}>
        <FilterMenu title="FILTERS" search={search} reset={reset}>
          <DateFilter
            label="Date"
            startValue={tempStartDate}
            setStartValue={setTempStartDate}
            endValue={tempEndDate}
            setEndValue={setTempEndDate}
            presetValue={tempPreset}
            setPresetValue={setTempPreset}
            presets
          />
          <StringFilter
            label="Product Type"
            value={tempProductType}
            setValue={setTempProductType}
          />
          <CheckboxFilter label="Transfer Status" options={transferOptions} />
        </FilterMenu>
        <Table
          data={data}
          columns={columns}
          jsonData={jsonData}
          open={open}
          setOpen={setOpen}
          loading={loading}
          rowsPerPageOptions={rowsPerPageOptions}
          initialPageSize={defaultPageSize}
        />
      </FilterTableGrid>
    </PageWrapper>
  );
}

export default withRouter(AllData);
