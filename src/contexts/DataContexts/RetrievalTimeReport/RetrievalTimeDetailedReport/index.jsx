import React, { createContext } from "react";

import PropTypes from "prop-types";

import { useRetrievalTimeDetailedReportData } from "@bach/reducers/Reporting/RetrievalTime/RetrievalTimeDetailed";

export const DispatchContext = createContext();
export const StateContext = createContext();

export default function RetrievalTimeDetailedReportContexts(props) {
  const { children } = props;
  const reducer = useRetrievalTimeDetailedReportData();
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

RetrievalTimeDetailedReportContexts.propTypes = {
  children: PropTypes.element.isRequired,
};
