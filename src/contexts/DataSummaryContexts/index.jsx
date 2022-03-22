import React, { createContext } from "react";

import PropTypes from "prop-types";

import { useDataSummary } from "@bach/reducers/DataSummary";

export const DispatchContext = createContext();
export const StateContext = createContext();

export default function DataSummaryContexts(props) {
  const { children } = props;
  const reducer = useDataSummary();
  const {
    startDate,
    endDate,
    preset,
    productType,
    source,
    data,
    setStartDate,
    setEndDate,
    setPreset,
    setProductType,
    setSource,
    setData,
  } = reducer;

  return (
    <DispatchContext.Provider
      value={{
        setStartDate,
        setEndDate,
        setPreset,
        setProductType,
        setSource,
        setData,
      }}
    >
      <StateContext.Provider
        value={{
          startDate,
          endDate,
          preset,
          productType,
          source,
          data,
        }}
      >
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

DataSummaryContexts.propTypes = {
  children: PropTypes.element.isRequired,
};
