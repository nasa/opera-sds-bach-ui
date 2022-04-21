import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom"; // withRouter

import TabMenu from "@bach/components/TabMenu";

import { PageTitleContext } from "@bach/contexts/PageTitleContext";
import Observations from "./Observations";

import useStyles from "./style";
import { useRouteMatch } from "react-router";

export default function ProductAccountability(props) {
  const match = useRouteMatch();
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
          path={`${match.path}`}
          render={() => <Redirect to={`${match.path}/downlink`} />}
        />

        <Route path={`${match.path}/observations`} children={<Observations />} />

        {/* todo: may move this to config file and map over array */}
      </div>
    </>
  );
}

ProductAccountability.propTypes = {
};
