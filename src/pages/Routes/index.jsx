import React, { useContext, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import clsx from "clsx";
import {
  Button,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";

import HeaderBar from "@bach/components/HeaderBar";
import Sidebar from "@bach/components/Sidebar";

import { SIDEBAR_OPENED_LS, MISSION_TITLE } from "@bach/constants";
import { BASEPATH } from "@bach/config"; // will be used when ready for production
import {
  ModalDialogContext,
  initialState as modalDialogInitialState,
} from "@bach/contexts/ModelDialogContext";
import DataSummary from "../DataSummary";
import Reporting from "../Reporting";
import ProductAccountability from "../ProductAccountability";
import NotFound from "../NotFound";

import useStyles from "./style";

const lsSideBar = localStorage.getItem(SIDEBAR_OPENED_LS) === "true";

export default function Routes() {
  const classes = useStyles();

  const {
    state: modalDialogState,
    setState: setModalDialogState,
  } = useContext(ModalDialogContext);

  const [sidebarOpen, toggleSidebar] = useState(lsSideBar || false);

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Router basename={BASEPATH}>
        <HeaderBar missionTitle={MISSION_TITLE} opened={sidebarOpen} />
        <Sidebar opened={sidebarOpen} toggleSidebar={toggleSidebar} />

        <main
          className={clsx(classes.content, {
            [classes.drawerOpen]: sidebarOpen,
            [classes.drawerClose]: !sidebarOpen,
          })}
        >
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/data-summary" />}
            />
            <Route
              path="/data-summary"
              component={DataSummary}
              opened={sidebarOpen}
            />
            <Route
              path="/reporting"
              // eslint-disable-next-line react/jsx-props-no-spreading
              render={(props) => <Reporting {...props} opened={sidebarOpen} />}
            />
            <Route
              path="/product-accountability"
              component={ProductAccountability}
              opened={sidebarOpen}
            />
            <Route component={NotFound} />
          </Switch>
          <Dialog open={modalDialogState.open}>
            <DialogTitle>{modalDialogState.title}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                {modalDialogState.contentText}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setModalDialogState({...modalDialogInitialState})}>Dismiss</Button>
            </DialogActions>
          </Dialog>
        </main>
      </Router>
    </div>
  );
}
