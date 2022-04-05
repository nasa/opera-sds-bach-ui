import React, { createContext } from "react";

import PropTypes from "prop-types";

import { useGeneratedSdsData } from "@bach/reducers/Reporting/DataProcessing/GeneratedSds";

export const DispatchContext = createContext();
export const StateContext = createContext();

export default function GeneratedSdsContexts(props) {
  const { children } = props;
  const reducer = useGeneratedSdsData();
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

GeneratedSdsContexts.propTypes = {
  children: PropTypes.element.isRequired,
};
