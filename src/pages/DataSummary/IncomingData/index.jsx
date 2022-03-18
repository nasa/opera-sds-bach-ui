import React from "react";
import { withRouter, useHistory } from "react-router-dom";

import moment from "moment";

import {
  DispatchContext,
  StateContext,
} from "@bach/contexts/DataSummaryContexts";

import {
  StateContext as DataStateContext,
  DispatchContext as DataDispatchContext,
} from "@bach/contexts/DataContexts/Incoming";

import {
  onMount,
  pushUrlParams,
  pushTempToState,
  getTempValues,
  makeAPIGet,
} from "@bach/api/DataUtils";

import PageWrapper from "@bach/components/PageWrapper";
import FilterTableGrid from "@bach/components/FilterTableGrid";

import FilterMenu from "@bach/components/FilterMenu";
import FilterController from "@bach/components/FilterController";
import Table from "@bach/components/Table";
import DateFilter from "@bach/components/Filters/DateFilter";
import StringFilter from "@bach/components/Filters/StringFilter";

function IncomingData() {
  const history = useHistory();

  const state = React.useContext(StateContext);
  const dispatch = React.useContext(DispatchContext);
  const dataState = React.useContext(DataStateContext);
  const dataDispatch = React.useContext(DataDispatchContext);

  const { startDate, endDate, preset, source } = state;

  const { data } = dataState;
  const { setData } = dataDispatch;

  const [tempStartDate, setTempStartDate] = React.useState(startDate);
  const [tempEndDate, setTempEndDate] = React.useState(endDate);
  const [tempPreset, setTempPreset] = React.useState(preset);
  const [tempSource, setTempSource] = React.useState(source);

  const [loading, setLoading] = React.useState(false);

  const [filtersHidden, setFiltersHidden] = React.useState(false);

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
      minWidth: 170,
    },
    {
      field: "count",
      headerName: "Files Ingested",
      flex: 0,
      minWidth: 170,
    },
  ];

  const toggleFilters = () => setFiltersHidden(!filtersHidden);

  async function getIncomingDataCount() {
    const paths = ["data", "list", "count"];
    const params = {
      start: `${tempStartDate}:00Z`,
      end: `${tempEndDate}:00Z`,
      category: "incoming",
    };
    let results = {};
    try {
      results = await makeAPIGet(paths, params);
    } catch (err) {
      console.error(err);
    }
    return results;
  }

  const search = async () => {
    // WORKAROUND: spinner is rendered below table rows.
    //  Clear table on subsequent search so users can see the spinner.
    setData([]);

    setLoading(true);
    pushTempToState(dispatch, tempState);

    pushUrlParams(getTempValues(state, tempState, true), history);
    const results = await getIncomingDataCount();
    setLoading(false);
    setData(results.data);
  };

  const reset = () => {
    setTempStartDate(moment().startOf("day").format("YYYY-MM-DDTHH:mm"));
    setTempEndDate(moment().endOf("day").format("YYYY-MM-DDTHH:mm"));
    setTempPreset("Today");
    setTempSource("");
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
            label="Source"
            value={tempSource}
            setValue={setTempSource}
          />
        </FilterMenu>
        <Table data={data} columns={columns} loading={loading} />
      </FilterTableGrid>
    </PageWrapper>
  );
}

export default withRouter(IncomingData);
