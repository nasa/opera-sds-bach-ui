import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const PageTitleContext = createContext();

export const PageTitleContextProvider = (props) => {
  const { children } = props;
  const [pageTitle, setPageTitle] = useState(null);

  const updatePageTitle = (newPageTitle) => {
    useEffect(() => {
      setPageTitle(newPageTitle);
    });
  };

  return (
    <PageTitleContext.Provider
      value={{ pageTitle, setPageTitle, updatePageTitle }}
    >
      {children}
    </PageTitleContext.Provider>
  );
};

PageTitleContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
