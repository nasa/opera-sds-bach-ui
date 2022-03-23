import React from "react";

import PropTypes from "prop-types";

import { ModalDialogContextProvider } from "@bach/contexts/ModelDialogContext";
import DataSummaryContexts from "./DataSummaryContexts";
import ReportingContexts from "./ReportingContexts";
import ProductAccountabilityContexts from "./ProductAccountabilityContexts";
import DataContexts from "./DataContexts";
import { PageTitleContextProvider } from "@bach/contexts/PageTitleContext";

export const MyContext = React.createContext();

export default function Contexts(props) {
  const { children } = props;

  return (
    <ModalDialogContextProvider>
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
    </ModalDialogContextProvider>
  );
}

Contexts.propTypes = {
  children: PropTypes.element.isRequired,
};
