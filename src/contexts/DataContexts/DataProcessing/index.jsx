import React from "react";

import PropTypes from "prop-types";

import IncomingNenContexts from "./IncomingNen";
import IncomingGdsContexts from "./IncomingGds";
import GeneratedSdsContexts from "./GeneratedSds";
import OutgoingDaacContexts from "./OutgoingDaac";

export default function DataProcessingContexts(props) {
  const { children } = props;

  return (
    <IncomingNenContexts>
      <IncomingGdsContexts>
        <OutgoingDaacContexts>
          <GeneratedSdsContexts>{children}</GeneratedSdsContexts>
        </OutgoingDaacContexts>
      </IncomingGdsContexts>
    </IncomingNenContexts>
  );
}

DataProcessingContexts.propTypes = {
  children: PropTypes.element.isRequired,
};
