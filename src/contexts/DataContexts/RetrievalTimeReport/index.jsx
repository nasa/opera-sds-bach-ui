import React from "react";

import PropTypes from "prop-types";

import RetrievalTimeSummaryReportContexts from "@bach/contexts/DataContexts/RetrievalTimeReport/RetrievalTimeSummaryReport";
import RetrievalTimeDetailedReportContexts from "@bach/contexts/DataContexts/RetrievalTimeReport/RetrievalTimeDetailedReport";

export default function RetrievalTimeContexts(props) {
  const { children } = props;

  return (
    <RetrievalTimeDetailedReportContexts>
      <RetrievalTimeSummaryReportContexts>{children}</RetrievalTimeSummaryReportContexts>
    </RetrievalTimeDetailedReportContexts>
  );
}

RetrievalTimeContexts.propTypes = {
  children: PropTypes.element.isRequired,
};
