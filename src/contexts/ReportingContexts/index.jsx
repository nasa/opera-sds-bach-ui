import React, { createContext } from "react";

import PropTypes from "prop-types";

import { useReporting } from "@bach/reducers/Reporting";

export const DispatchContext = createContext();
export const StateContext = createContext();

export default function ReportingContexts(props) {
  const { children } = props;
  const reducer = useReporting();
  const {
    startDate,
    endDate,
    preset,
    processingMode,
    reportType,
    reportOptions,
    setStartDate,
    setEndDate,
    setPreset,
    setProcessingMode,
    setReportType,
    setReportOptions,
  } = reducer;

  return (
    <DispatchContext.Provider
      value={{
        setStartDate,
        setEndDate,
        setPreset,
        setProcessingMode,
        setReportType,
        setReportOptions,
      }}
    >
      <StateContext.Provider
        value={{ startDate, endDate, preset, processingMode, reportType, reportOptions }}
      >
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

ReportingContexts.propTypes = {
  children: PropTypes.element.isRequired,
};
