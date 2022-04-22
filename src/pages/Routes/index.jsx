import React, { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from "react-router-dom";

import clsx from "clsx";
import {
  Button,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

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

export default function Root() {
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
          <Routes>
            {/* this allows to move to the first tab when clicking the link in the sidebar */}
            <Route
              exact
              path="/"
              element={<Navigate to="data-summary" />}
            />
            <Route
              path="data-summary/*"
              element={<DataSummary />}
              opened={sidebarOpen}
            />
            <Route
              path="reporting/*"
              element={<Reporting opened={sidebarOpen} />}
            />
            <Route
              path="product-accountability/*"
              element={<ProductAccountability />}
              opened={sidebarOpen}
            />
            <Route element={<NotFound />} />
          </Routes>
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
