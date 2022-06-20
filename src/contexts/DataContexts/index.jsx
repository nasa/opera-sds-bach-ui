import React from "react";

import PropTypes from "prop-types";

import IncomingDataContexts from "@bach/contexts/DataContexts/Incoming";
import OutputDataContexts from "@bach/contexts/DataContexts/Output";
import AllDataContexts from "@bach/contexts/DataContexts/AllData";
import DownlinkDataContexts from "@bach/contexts/DataContexts/DownlinkData";
import ObservationsReportContexts from "@bach/contexts/DataContexts/ObservationsReport";
import TrackFrameDataContexts from "@bach/contexts/DataContexts/TrackFrameData";
import ObservationsDataContexts from "@bach/contexts/DataContexts/ObservationsData";
import DataProcessingContexts from "@bach/contexts/DataContexts/DataProcessing";
import ProductionTimeContexts from "@bach/contexts/DataContexts/ProductionTimeReport";
import RetrievalTimeContexts from "@bach/contexts/DataContexts/RetrievalTimeReport";

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
                  <ProductionTimeContexts>
                    <RetrievalTimeContexts>
                      <DataProcessingContexts>{children}</DataProcessingContexts>
                    </RetrievalTimeContexts>
                  </ProductionTimeContexts>
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
