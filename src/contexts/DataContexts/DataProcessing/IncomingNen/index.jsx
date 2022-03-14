import React, { createContext } from "react";

import PropTypes from "prop-types";

import { useIncomingNenData } from "@bach/reducers/Reporting/DataProcessing/IncomingNen";

export const DispatchContext = createContext();
export const StateContext = createContext();

export default function IncomingNenContexts(props) {
  const { children } = props;
  const reducer = useIncomingNenData();
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

IncomingNenContexts.propTypes = {
  children: PropTypes.element.isRequired,
};
