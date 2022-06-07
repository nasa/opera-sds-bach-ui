import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Route, Navigate, useMatch } from "react-router-dom";

import TabMenu from "@bach/components/TabMenu";

import { PageTitleContext } from "@bach/contexts/PageTitleContext";
import Observations from "./Observations";

import useStyles from "./style";

export default function ProductAccountability(props) {
  const match = useMatch("production-time");
  const classes = useStyles();
  const { updatePageTitle } = useContext(PageTitleContext);
  updatePageTitle("Product Accountability");

  // TODO: move this to a config file in the future
  const links = [{ path: "observations", label: "Observations" }];

  return (
    <>
      <TabMenu links={links} match={match} />

      <div className={classes.subPage}>
        {/* this allows to move to the first tab when clicking the link in the sidebar */}
        <Route
          exact
          path="/"
          element={<Navigate to="downlink" />}
        />

        <Route path="observations" element={<Observations />} />

        {/* todo: may move this to config file and map over array */}
      </div>
    </>
  );
}

ProductAccountability.propTypes = {
};
