import React, { createContext } from "react";

import PropTypes from "prop-types";

import { useRetrievalTimeSummaryReportData } from "@bach/reducers/Reporting/RetrievalTime/RetrievalTimeSummary";

export const DispatchContext = createContext();
export const StateContext = createContext();

export default function RetrievalTimeSummaryReportContexts(props) {
  const { children } = props;
  const reducer = useRetrievalTimeSummaryReportData();
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

RetrievalTimeSummaryReportContexts.propTypes = {
  children: PropTypes.element.isRequired,
};
