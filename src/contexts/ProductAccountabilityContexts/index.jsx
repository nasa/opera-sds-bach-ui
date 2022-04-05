import React, { createContext } from "react";

import PropTypes from "prop-types";

import { useProductAccountability } from "@bach/reducers/ProductAccountability";

export const DispatchContext = createContext();
export const StateContext = createContext();

export default function ProductAccountabilityContexts(props) {
  const { children } = props;
  const reducer = useProductAccountability();
  const {
    workflowStartDate,
    workflowEndDate,
    workflowPreset,
    observationStartDate,
    observationEndDate,
    observationPreset,
    lastModifiedStartDate,
    lastModifiedEndDate,
    lastModifiedPreset,
    observationID,
    datatakeID,
    l0bRrsdID,
    ldfFilename,
    vcid,
    showLatestVersion,
    cycleReferenceID,
    cycleSecondaryID,
    trackID,
    frameID,
    data,
    setWorkflowStartDate,
    setWorkflowEndDate,
    setWorkflowPreset,
    setLastModifiedStartDate,
    setLastModifiedEndDate,
    setLastModifiedPreset,
    setObservationStartDate,
    setObservationEndDate,
    setObservationPreset,
    setObservationId,
    setDatatakeId,
    setL0bRrsdId,
    setLdfFilename,
    setVCID,
    setShowLatestVersion,
    setCycleReferenceID,
    setCycleSecondaryID,
    setTrackID,
    setFrameID,
    setData,
  } = reducer;

  return (
    <DispatchContext.Provider
      value={{
        setWorkflowStartDate,
        setWorkflowEndDate,
        setWorkflowPreset,
        setLastModifiedStartDate,
        setLastModifiedEndDate,
        setLastModifiedPreset,
        setObservationStartDate,
        setObservationEndDate,
        setObservationPreset,
        setObservationId,
        setDatatakeId,
        setL0bRrsdId,
        setLdfFilename,
        setVCID,
        setShowLatestVersion,
        setCycleReferenceID,
        setCycleSecondaryID,
        setTrackID,
        setFrameID,
        setData,
      }}
    >
      <StateContext.Provider
        value={{
          workflowStartDate,
          workflowEndDate,
          workflowPreset,
          observationStartDate,
          observationEndDate,
          observationPreset,
          lastModifiedStartDate,
          lastModifiedEndDate,
          lastModifiedPreset,
          observationID,
          datatakeID,
          l0bRrsdID,
          ldfFilename,
          vcid,
          showLatestVersion,
          cycleReferenceID,
          cycleSecondaryID,
          trackID,
          frameID,
          data,
        }}
      >
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

ProductAccountabilityContexts.propTypes = {
  children: PropTypes.element.isRequired,
};
