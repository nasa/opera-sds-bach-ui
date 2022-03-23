import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ModalDialogContext = createContext();

export const initialState = {
  open: false,
  title: "",
  contentText: "",
};

export const ModalDialogContextProvider = (props) => {
  const { children } = props;
  const [state, setState] = useState(initialState);

  return (
    <ModalDialogContext.Provider value={{ state, setState }}>
      {children}
    </ModalDialogContext.Provider>
  );
};

ModalDialogContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
