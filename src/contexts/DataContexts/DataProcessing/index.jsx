import React from "react";

import PropTypes from "prop-types";

import IncomingSdpContexts from "./IncomingSdp";
import IncomingGdsContexts from "./IncomingGds";
import GeneratedSdsContexts from "./GeneratedSds";
import OutgoingDaacContexts from "./OutgoingDaac";

export default function DataProcessingContexts(props) {
  const { children } = props;

  return (
    <IncomingSdpContexts>
      <IncomingGdsContexts>
        <OutgoingDaacContexts>
          <GeneratedSdsContexts>{children}</GeneratedSdsContexts>
        </OutgoingDaacContexts>
      </IncomingGdsContexts>
    </IncomingSdpContexts>
  );
}

DataProcessingContexts.propTypes = {
  children: PropTypes.element.isRequired,
};
