import React, { createContext } from "react";

import PropTypes from "prop-types";

import { useProductionTimeSummaryReportData } from "@bach/reducers/Reporting/ProductionTime/ProductionTimeSummary";

export const DispatchContext = createContext();
export const StateContext = createContext();

export default function ProductionTimeSummaryReportContexts(props) {
  const { children } = props;
  const reducer = useProductionTimeSummaryReportData();
  const { data, setData } = reducer;

  return (
    <DispatchContext.Provider
      value={{
        setData,
      }}
    >
      <StateContext.Provider value={{ data }}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

ProductionTimeSummaryReportContexts.propTypes = {
  children: PropTypes.element.isRequired,
};
