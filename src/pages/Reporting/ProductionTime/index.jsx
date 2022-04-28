import React from "react";
import { withRouter } from "react-router"
import PageWrapper from "@bach/components/PageWrapper";
import FilterController from "@bach/components/FilterController";
import DateFilter from "@bach/components/Filters/DateFilter";
import FilterMenu from "@bach/components/FilterMenu";
import FilterTableGrid from "@bach/components/FilterTableGrid";
import { Link, Typography } from "@mui/material";

import {
  DispatchContext,
  StateContext,
} from "@bach/contexts/ReportingContexts";

function ProductionTime(props) {
  const [filtersHidden, setFiltersHidden] = React.useState(false);
  const toggleFilters = () => setFiltersHidden(!filtersHidden);

  const state = React.useContext(StateContext);

  const {
    startDate,
    endDate,
    preset,
  } = state;

  const [tempStartDate, setTempStartDate] = React.useState(startDate);
  const [tempEndDate, setTempEndDate] = React.useState(endDate);
  const [tempPreset, setTempPreset] = React.useState(preset);

  const search = async () => {
    
  }
  const reset = () => {}
  
  return (
    <PageWrapper>
      <FilterController hidden={filtersHidden} toggleFilters={toggleFilters} />
      <FilterTableGrid filtersHidden={filtersHidden}>
        <FilterMenu title="REPORT SETTINGS" search={search} reset={reset}>
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
        </FilterMenu>
        <>
          <Typography variant="h6">Report Data</Typography>
          <Typography variant="body1">Coming Spring 2022.</Typography>
          
        </>
      </FilterTableGrid>
    </PageWrapper>
  )
}

export default withRouter(ProductionTime);