import React, { createContext } from "react";

import PropTypes from "prop-types";

import { useReporting } from "../../reducers/Reporting";

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
    crid,
    reportType,
    setStartDate,
    setEndDate,
    setPreset,
    setProcessingMode,
    setCRID,
    setReportType,
  } = reducer;

  return (
    <DispatchContext.Provider
      value={{
        setStartDate,
        setEndDate,
        setPreset,
        setProcessingMode,
        setCRID,
        setReportType,
      }}
    >
      <StateContext.Provider
        value={{ startDate, endDate, preset, processingMode, crid, reportType }}
      >
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

ReportingContexts.propTypes = {
  children: PropTypes.element.isRequired,
};
