import React from "react";
import { BrowserRouter } from "react-router-dom";

import { render, fireEvent } from "@bach/test-utils";
import "@testing-library/jest-dom";

import Sidebar from "./index";

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(ui, { wrapper: BrowserRouter });
};

describe("Sidebar test", () => {
  const defaultProps = {
    opened: true,
    toggleSidebar: jest.fn(),
  };

  test("checking that sidebar has all the necessary links", () => {
    const { getByText, getByTestId } = renderWithRouter(<Sidebar opened={true} toggleSidebar={defaultProps.toggleSidebar} />);

    expect(getByText(/Data Summary/i)).toBeInTheDocument();
    // TODO chrisjrd: unhide when implementing
    // expect(getByText(/Product Accountability/i)).toBeInTheDocument();
    // hidden for OPERA
    // expect(getByText(/Process Monitoring/i)).toBeInTheDocument();
    expect(getByText(/Reporting/i)).toBeInTheDocument();
    // hidden for OPERA
    // expect(getByText(/Cluster Health/i)).toBeInTheDocument();
    expect(getByText(/Information/i)).toBeInTheDocument();
    expect(getByText(/Logout/i)).toBeInTheDocument();

    const closeMenu = getByTestId("open-close-menu");

    fireEvent.click(closeMenu);

    expect(defaultProps.toggleSidebar).toBeCalled();
  });
});
