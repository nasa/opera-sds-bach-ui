import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom"; // withRouter

import { withStyles } from "@material-ui/core/styles";

import TabMenu from "../../components/TabMenu";
import Observations from "./Observations";
import DataProcessing from "./DataProcessing";

import styles from "./style";

class Reporting extends React.Component {
  componentDidMount() {}

  render() {
    const { classes, match, opened } = this.props;

    // TODO: move this to a config file in the future
    const links = [
      // hidden for OPERA
      // { path: "observations", label: "Observations" },
      { path: "data-processing", label: "Data Processing" },
      { path: "latency", label: "Latency" },
      { path: "urgent-response", label: "Urgent Response" },
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
          {/* <Route path={`${match.path}/observations`} component={Observations} /> */}
          <Route
            path={`${match.path}/data-processing`}
            component={DataProcessing}
          />
        </div>
      </>
    );
  }
}

Reporting.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
  opened: PropTypes.isRequired,
};

export default withStyles(styles)(Reporting);
