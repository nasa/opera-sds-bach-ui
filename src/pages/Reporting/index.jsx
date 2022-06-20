import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Navigate, Route, Routes, useMatch } from "react-router-dom";

import TabMenu from "@bach/components/TabMenu";
import { PageTitleContext } from "@bach/contexts/PageTitleContext";
// hidden for OPERA
// import Observations from "./Observations";
import DataProcessing from "./DataProcessing";
import ProductionTime from "./ProductionTime";
import RetrievalTime from "./RetrievalTime";

import useStyles from "./style";

export default function Reporting(props) {
  const match = useMatch("reporting");
  const { opened } = props;
  const classes = useStyles();
  const { updatePageTitle } = useContext(PageTitleContext);
  updatePageTitle("Reporting");

// TODO: move this to a config file in the future
  const links = [
    // hidden for OPERA
    // { path: "observations", label: "Observations" },
    { path: "data-processing", label: "Data Processing" },
    { path: "production-time", label: "Production Time" },
    { path: "retrieval-time", label: "Retrieval Time" },
    // hidden for OPERA
    // { path: "urgent-response", label: "Urgent Response" },
  ];

  return (
    <>
      <TabMenu links={links} match={match} opened={opened} />
      <div className={classes.subPage}>
        <Routes>
          {/* this allows to move to the first tab when clicking the link in the sidebar */}
          <Route path="/" element={<Navigate to="data-processing" />} exact />

          {/* todo: may move this to config file and map over array */}
          {/* hidden for OPERA */}
          {/* <Route path="observations" element={<Observations />} /> */}
          <Route path="data-processing/*" element={<DataProcessing />} />
          <Route path="production-time/*" element={<ProductionTime />} />
          <Route path="retrieval-time/*" element={<RetrievalTime />} />
        </Routes>
      </div>
    </>
  );
}

Reporting.propTypes = {
  opened: PropTypes.bool.isRequired,
};
