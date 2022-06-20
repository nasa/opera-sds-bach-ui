import React from "react";

import PropTypes from "prop-types";

import ProductionTimeSummaryReportContexts from "@bach/contexts/DataContexts/ProductionTimeReport/ProductionTimeSummaryReport";
import ProductionTimeDetailedReportContexts from "@bach/contexts/DataContexts/ProductionTimeReport/ProductionTimeDetailedReport";

export default function ProductionTimeContexts(props) {
  const { children } = props;

  return (
    <ProductionTimeDetailedReportContexts>
      <ProductionTimeSummaryReportContexts>{children}</ProductionTimeSummaryReportContexts>
    </ProductionTimeDetailedReportContexts>
  );
}

ProductionTimeContexts.propTypes = {
  children: PropTypes.element.isRequired,
};
