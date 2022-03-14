import React from "react";
import { withRouter, useHistory } from "react-router-dom";

import moment from "moment";

import {
  DispatchContext,
  StateContext,
} from "../../../contexts/DataSummaryContexts";

import {
  StateContext as DataStateContext,
  DispatchContext as DataDispatchContext,
} from "../../../contexts/DataContexts/Incoming";

import {
  onMount,
  pushUrlParams,
  pushTempToState,
  getTempValues,
  makeAPIGet,
} from "../../../api/DataUtils";

import PageWrapper from "../../../components/PageWrapper";
import FilterTableGrid from "../../../components/FilterTableGrid";

import FilterMenu from "../../../components/FilterMenu";
import FilterController from "../../../components/FilterController";
import Table from "../../../components/Table";
import DateFilter from "../../../components/Filters/DateFilter";
import StringFilter from "../../../components/Filters/StringFilter";

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
    const paths = ["ancillary", "list", "count"];
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

  const search = async () => {
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
