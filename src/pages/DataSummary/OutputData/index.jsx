import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import moment from "moment";

import {
  onMount,
  pushUrlParams,
  pushTempToState,
  getTempValues,
  makeAPIGet,
} from "@bach/api/DataUtils";

import {
  DispatchContext,
  StateContext,
} from "@bach/contexts/DataSummaryContexts";

import {
  StateContext as DataStateContext,
  DispatchContext as DataDispatchContext,
} from "@bach/contexts/DataContexts/Output";

import { ModalDialogContext } from "@bach/contexts/ModelDialogContext";

import PageWrapper from "@bach/components/PageWrapper";
import FilterTableGrid from "@bach/components/FilterTableGrid";

import FilterMenu from "@bach/components/FilterMenu";
import FilterController from "@bach/components/FilterController";
import Table from "@bach/components/Table";
import DateFilter from "@bach/components/Filters/DateFilter";
import StringFilter from "@bach/components/Filters/StringFilter";

function OutputData() {
  const location = useLocation();
  const navigate = useNavigate();

  const [filtersHidden, setFiltersHidden] = React.useState(false);

  const state = React.useContext(StateContext);
  const dispatch = React.useContext(DispatchContext);
  const dataState = React.useContext(DataStateContext);
  const dataDispatch = React.useContext(DataDispatchContext);
  const modalDialogState = React.useContext(ModalDialogContext);

  const { startDate, endDate, preset, source } = state;

  const { data } = dataState;
  const { setData } = dataDispatch;

  const { setState: setModalDialogState } = modalDialogState;

  const [tempStartDate, setTempStartDate] = React.useState(startDate);
  const [tempEndDate, setTempEndDate] = React.useState(endDate);
  const [tempPreset, setTempPreset] = React.useState(preset);
  const [tempSource, setTempSource] = React.useState(source);

  const [loading, setLoading] = React.useState(false);

  const tempState = {
    tempStartDate,
    tempEndDate,
    tempPreset,
    tempSource,
  };

  const tempDispatch = {
    setStartDate: setTempStartDate,
    setEndDate: setTempEndDate,
    setPreset: setTempPreset,
    setSource: setTempSource,
  };

  const columns = [
    {
      field: "id",
      headerName: "Product Type",
      flex: 0,
      width: 170,
    },
    {
      field: "count",
      headerName: "Products Generated",
      flex: 0,
      width: 200,
    },
  ];

  const toggleFilters = () => setFiltersHidden(!filtersHidden);

  const getOutputDataCount = async () => {
    const paths = ["data", "list", "count"];
    const params = {
      start: `${tempStartDate}Z`,
      end: `${tempEndDate}Z`,
      category: "outgoing",
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
  };

  const search = async () => {
    // WORKAROUND: spinner is rendered below table rows.
    //  Clear table on subsequent search so users can see the spinner.
    setData([]);

    setLoading(true);
    pushTempToState(dispatch, tempState);

    pushUrlParams(getTempValues(state, tempState, true), location, navigate);
    const results = await getOutputDataCount();
    setLoading(false);
    setData(results.data);
  };

  const reset = () => {
    setTempStartDate(moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"));
    setTempEndDate(moment().endOf("day").format("YYYY-MM-DDTHH:mm:ss"));
    setTempPreset("Today");
    setTempSource("");
  };

  React.useEffect(() => {
    // grans url params if they are passed into url manually, otherwise grabs the current state.
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
          {/* TODO chrisjrd: hidden for this release */}
          {/* <StringFilter
            label="Source"
            value={tempSource}
            setValue={setTempSource}
          /> */}
        </FilterMenu>
        <Table data={data} columns={columns} loading={loading} />
      </FilterTableGrid>
    </PageWrapper>
  );
}

export default OutputData;
