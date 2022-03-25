import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom"; // withRouter

import TabMenu from "@bach/components/TabMenu";
import { PageTitleContext } from "@bach/contexts/PageTitleContext";
// hidden for OPERA
// import Observations from "./Observations";
import DataProcessing from "./DataProcessing";

import useStyles from "./style";

export default function Reporting(props) {
  const { match, opened } = props;
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
        {/* this allows to move to the first tab when clicking the link in the sidebar */}
        <Route
          exact
          path={`${match.path}`}
          render={() => <Redirect to={`${match.path}/data-processing`} />}
        />

        {/* todo: may move this to config file and map over array */}
        {/* hidden for OPERA */}
        {/* <Route path={`${match.path}/observations`} component={Observations} /> */}
        <Route
          path={`${match.path}/data-processing`}
          component={DataProcessing}
        />
      </div>
    </>
  );
}

Reporting.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
  opened: PropTypes.bool.isRequired,
};
