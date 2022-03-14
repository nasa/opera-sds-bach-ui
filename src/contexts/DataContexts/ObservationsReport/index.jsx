import React, { createContext } from "react";

import PropTypes from "prop-types";

import { useObservationData } from "@bach/reducers/Reporting/Observations";

export const DispatchContext = createContext();
export const StateContext = createContext();

export default function ObservationsReportContexts(props) {
  const { children } = props;
  const reducer = useObservationData();
  const { data, summary, setData, setSummary } = reducer;

  return (
    <DispatchContext.Provider
      value={{
        setData,
        setSummary,
      }}
    >
      <StateContext.Provider value={{ data, summary }}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

ObservationsReportContexts.propTypes = {
  children: PropTypes.element.isRequired,
};
