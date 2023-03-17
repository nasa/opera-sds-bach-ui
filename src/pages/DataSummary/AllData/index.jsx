import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Button, Tooltip, useTheme } from "@mui/material";

import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import HelpIcon from "@mui/icons-material/Help";

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

import { ModalDialogContext } from "@bach/contexts/ModelDialogContext";

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
  const location = useLocation();
  const navigate = useNavigate();

  const classes = useStyles();
  const theme = useTheme();

  const [filtersHidden, setFiltersHidden] = React.useState(false);

  const state = React.useContext(StateContext);
  const dispatch = React.useContext(DispatchContext);
  const dataState = React.useContext(DataStateContext);
  const dataDispatch = React.useContext(DataDispatchContext);
  const modalDialogState = React.useContext(ModalDialogContext);

  const { startDate, endDate, preset, productType } = state;

  const { data, sensor, tileId } = dataState;
  const { setData, setSensor, setTileId } = dataDispatch;

  const { setState: setModalDialogState } = modalDialogState;

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
      setModalDialogState({
        open: true,
        title: "Something went wrong",
        contentText: "Please try again.",
      });
    }
    setLoading(false);
    return results;
  };

  const toggleTransferSuccess = (event) => setTransferSuccess(event.target.checked);
  const toggleTransferFailed = (event) => setTransferFailed(event.target.checked);
  const toggleTransferProcessing = (event) => setTransferProcessing(event.target.checked);
  const toggleTransferUnknown = (event) => setTransferUnknown(event.target.checked);

  const makeLabel = (icon, text, hoverText, color) => (
    <div className={classes.iconLabel}>
      {
        (!icon) ? <></> :
          <Tooltip title={hoverText} aria-label={hoverText} style={{ color }}>
            {icon}
          </Tooltip>
      }
      <span className={classes.spanLabel} style={{ color }}>
        {text}
      </span>
    </div>
  );

  const transferFormats = {
    cnm_r_success: {
      label: makeLabel(
        <CheckCircleOutlineIcon />,
        "Published",
        "Published",
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
        "Notified",
        "Notified",
        theme.palette.primary.main
      ),
      value: transferProcessing,
      setValue: toggleTransferProcessing,
      color: "primary",
      labelColor: theme.palette.primary.main,
    },
    cnm_r_failure: {
      label: makeLabel(
        <ErrorOutlineOutlinedIcon />,
        "Failed to publish",
        "Failed to publish",
        "#F44336"
      ),
      name: "failed_publish",
      value: transferFailed,
      setValue: toggleTransferFailed,
      color: "primary",
      labelColor: "#F44336",
    },
    cnm_s_failure: {
      label: makeLabel(
        <ErrorOutlineOutlinedIcon />,
        "Failed to notify",
        "Failed to notify",
        "#F44336"
      ),
      name: "failed_notify",
      value: transferFailed,
      setValue: toggleTransferFailed,
      color: "primary",
      labelColor: "#F44336",
    },
    unknown: {
      name: "unknown",
      label: makeLabel(<HelpIcon />, "Unknown", "Unknown", "rgba(0, 0, 0, 0.54)"),
      value: transferUnknown,
      setValue: toggleTransferUnknown,
      color: "primary",
      labelColor: "#EEEEEE",
    },
    not_applicable: {
      label: makeLabel(<></>, "N/A", "N/A", "rgba(0, 0, 0, 0.54)"),
      color: "primary",
      labelColor: "#EEEEEE",
    },
  };

  const transferOptions = [
    transferFormats.cnm_r_success,
    transferFormats.cnm_s_success,
    transferFormats.cnm_r_failure,
    transferFormats.cnm_s_failure,
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
      headerName: "Product Name",
      flex: 0,
      minWidth: 700,
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
              variant="text"
              color="primary"
              onClick={handleJsonData}
              style={{
                textTransform: "none",
                textDecoration: "underline",
                color: theme.palette.primary.dark,
              }}
            >
              {value}
            </Button>
          </Tooltip>
        );
      },
    },
    {
      field: "product_received_time",
      headerName: "Received Date/Time",
      flex: 0,
      minWidth: 220,
      valueGetter: (params) =>
        `${params.row.metadata.ProductReceivedTime || ""}`,
      renderCell: (params) => {
        const { value } = params;
        return moment.utc(value).format();
      },
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
      start: `${tempStartDate}Z`,
      end: `${tempEndDate}Z`,
      ...(tileId && { "metadata.tile_id": tileId }),
      ...(sensor && { "metadata.sensor": sensor }),
    };

    let results = {};
    try {
      results = await makeAPIGet(paths, params);
    } catch (err) {
      console.error(err);
      setModalDialogState({
        open: true,
        title: "Something went wrong",
        contentText: "Please try again.",
      });
    }
    return results;
  }

  const filterData = (data) => {
    const transferFilters = [];
    if (transferSuccess) {
      transferFilters.push("cnm_r_success");
    }
    if (transferProcessing) {
      transferFilters.push("cnm_s_success");
    }
    if (transferFailed) {
      transferFilters.push("cnm_s_failure");
      transferFilters.push("cnm_r_failure");
    }
    if (transferUnknown) {
      transferFilters.push("unknown");
    }

    if (transferFilters.length === 0) {
      return data;
    }

    const filteredData = data.filter((entry) => transferFilters.includes(entry.transfer_status));

    return filteredData;
  };

  const search = async () => {
    // WORKAROUND: spinner is rendered below table rows.
    //  Clear table on subsequent search so users can see the spinner.
    setData([]);

    setLoading(true);
    pushTempToState(dispatch, tempState);

    pushUrlParams(getTempValues(state, tempState, true), location, navigate);
    const results = await getAllDataCount();
    setLoading(false);
    const filteredResults = filterData(results.data);
    setData(filteredResults);
  };

  const reset = () => {
    setTempStartDate(moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"));
    setTempEndDate(moment().endOf("day").format("YYYY-MM-DDTHH:mm:ss"));
    setTempPreset("Today");
    setTempProductType("");

    setTileId("");
    setSensor("");
  };

  React.useEffect(() => {
    onMount(location, navigate, getTempValues(state, null, false), tempDispatch);
  }, [location.pathname]);

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
          <StringFilter
            label="Sensor"
            value={sensor}
            setValue={setSensor}
          />
          <StringFilter
            label="Tile ID"
            value={tileId}
            setValue={setTileId}
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
        />
      </FilterTableGrid>
    </PageWrapper>
  );
}

export default AllData;
