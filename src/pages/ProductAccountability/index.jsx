import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom"; // withRouter

import TabMenu from "@bach/components/TabMenu";

import { PageTitleContext } from "@bach/contexts/PageTitleContext";
import Downlink from "./Downlink";
import Observations from "./Observations";
import TrackFrames from "./TrackFrames";

import useStyles from "./style";

export default function ProductAccountability(props) {
  const { match } = props;
  const classes = useStyles();
  const { updatePageTitle } = useContext(PageTitleContext);
  updatePageTitle("Product Accountability");

  // TODO: move this to a config file in the future
  const links = [
    { path: "downlink", label: "Downlink" },
    { path: "observations", label: "Observations" },
    { path: "track-frames", label: "Track Frames" },
  ];

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

        <Route path={`${match.path}/downlink`} component={Downlink} />
        <Route path={`${match.path}/observations`} component={Observations} />
        <Route path={`${match.path}/track-frames`} component={TrackFrames} />

        {/* todo: may move this to config file and map over array */}
      </div>
    </>
  );
}

ProductAccountability.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};
