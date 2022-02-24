import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom"; // withRouter

import { withStyles } from "@material-ui/core/styles";

import TabMenu from "../../components/TabMenu";
import IncomingData from "./IncomingData";
import OutputData from "./OutputData";
import AllData from "./AllData";

import styles from "./style";

class DataSummary extends React.Component {
  componentDidMount() {}

  render() {
    const { classes, match } = this.props;

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
          <Route path={`${match.path}/incoming`} component={IncomingData} />
          <Route path={`${match.path}/output`} component={OutputData} />
          <Route path={`${match.path}/all`} component={AllData} />
        </div>
      </>
    );
  }
}

DataSummary.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(DataSummary);
