import React, { createContext } from "react";

import PropTypes from "prop-types";

import { useOutgoingDaacData } from "@bach/reducers/Reporting/DataProcessing/OutgoingDaac";

export const DispatchContext = createContext();
export const StateContext = createContext();

export default function OutgoingDaacContexts(props) {
  const { children } = props;
  const reducer = useOutgoingDaacData();
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

OutgoingDaacContexts.propTypes = {
  children: PropTypes.element.isRequired,
};
