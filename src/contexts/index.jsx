import React from "react";

import PropTypes from "prop-types";

import DataSummaryContexts from "./DataSummaryContexts";
import ReportingContexts from "./ReportingContexts";
import ProductAccountabilityContexts from "./ProductAccountabilityContexts";
import DataContexts from "./DataContexts";
import { PageTitleContextProvider } from "@bach/contexts/PageTitleContext";

export const MyContext = React.createContext();

export default function Contexts(props) {
  const { children } = props;

  return (
    <PageTitleContextProvider>
      <DataContexts>
        <DataSummaryContexts>
          <ReportingContexts>
            <ProductAccountabilityContexts>
              {children}
            </ProductAccountabilityContexts>
          </ReportingContexts>
        </DataSummaryContexts>
      </DataContexts>
    </PageTitleContextProvider>
  );
}

Contexts.propTypes = {
  children: PropTypes.element.isRequired,
};
