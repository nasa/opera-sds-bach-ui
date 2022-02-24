import React from "react";

import PropTypes from "prop-types";

import IncomingDataContexts from "./Incoming";
import OutputDataContexts from "./Output";
import AllDataContexts from "./AllData";
import ObservationsReportContexts from "./ObservationsReport";
import DataProcessingContexts from "./DataProcessing";
import DownlinkDataContexts from "./DownlinkData";
import ObservationsDataContexts from "./ObservationsData";
import TrackFrameDataContexts from "./TrackFrameData";

export default function DataContexts(props) {
  const { children } = props;

  return (
    <IncomingDataContexts>
      <OutputDataContexts>
        <AllDataContexts>
          <DownlinkDataContexts>
            <ObservationsDataContexts>
              <TrackFrameDataContexts>
                <ObservationsReportContexts>
                  <DataProcessingContexts>{children}</DataProcessingContexts>
                </ObservationsReportContexts>
              </TrackFrameDataContexts>
            </ObservationsDataContexts>
          </DownlinkDataContexts>
        </AllDataContexts>
      </OutputDataContexts>
    </IncomingDataContexts>
  );
}

DataContexts.propTypes = {
  children: PropTypes.element.isRequired,
};
