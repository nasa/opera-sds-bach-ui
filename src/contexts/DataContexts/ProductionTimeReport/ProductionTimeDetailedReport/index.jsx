import React, { createContext } from "react";

import PropTypes from "prop-types";

import { useProductionTimeDetailedReportData } from "@bach/reducers/Reporting/ProductionTime/ProductionTimeDetailed";

export const DispatchContext = createContext();
export const StateContext = createContext();

export default function ProductionTimeDetailedReportContexts(props) {
  const { children } = props;
  const reducer = useProductionTimeDetailedReportData();
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

ProductionTimeDetailedReportContexts.propTypes = {
  children: PropTypes.element.isRequired,
};
