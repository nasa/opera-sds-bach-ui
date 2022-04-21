import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useRouteMatch } from "react-router";
import { Redirect, Route } from "react-router-dom"; // withRouter

import TabMenu from "@bach/components/TabMenu";
import IncomingData from "@bach/pages/DataSummary/IncomingData";
import OutputData from "@bach/pages/DataSummary/OutputData";
import AllData from "@bach/pages/DataSummary/AllData";

import { PageTitleContext } from "@bach/contexts/PageTitleContext";

import useStyles from "./style";

export default function DataSummary(props) {
  const match = useRouteMatch();
  const classes = useStyles();
  const { updatePageTitle } = useContext(PageTitleContext);
  updatePageTitle("Data Summary");

  // TODO: move this to a config file in the future
  const links = [
    { path: "incoming", label: "Incoming Data" },
    { path: "output", label: "Output Data" },
    { path: "all", label: "All Data" },
  ];

  return (
    <>
      <TabMenu links={links} match={match} />

      <div className={classes.subPage}>
        {/* this allows to move to the first tab when clicking the link in the sidebar */}
        <Route
          exact
          path={`${match.path}`}
          render={() => <Redirect to={`${match.path}/incoming`} />}
        />

        {/* todo: may move this to config file and map over array */}
        <Route path={`${match.path}/incoming`} children={<IncomingData />}>
        </Route>
        <Route path={`${match.path}/output`} children={<OutputData />}>
        </Route>
        <Route path={`${match.path}/all`} children={<AllData />}>
        </Route>
      </div>
    </>
  );
}

DataSummary.propTypes = {
};
