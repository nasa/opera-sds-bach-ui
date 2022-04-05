import React from "react";

import PropTypes from "prop-types";

import IncomingSdpContexts from "./IncomingSdp";
import IncomingAncillaryContexts from "./IncomingAncillary";
import GeneratedSdsContexts from "./GeneratedSds";
import OutgoingDaacContexts from "./OutgoingDaac";

export default function DataProcessingContexts(props) {
  const { children } = props;

  return (
    <IncomingSdpContexts>
      <IncomingAncillaryContexts>
        <OutgoingDaacContexts>
          <GeneratedSdsContexts>{children}</GeneratedSdsContexts>
        </OutgoingDaacContexts>
      </IncomingAncillaryContexts>
    </IncomingSdpContexts>
  );
}

DataProcessingContexts.propTypes = {
  children: PropTypes.element.isRequired,
};
