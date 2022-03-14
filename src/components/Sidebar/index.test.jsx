import React from "react";
import { BrowserRouter } from "react-router-dom";

import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Sidebar from "./index";

describe("Sidebar test", () => {
  const defaultProps = {
    opened: true,
    toggleSidebar: jest.fn(),
  };

  const renderComponent = ({ opened, toggleSidebar }) =>
    render(<Sidebar opened={opened} toggleSidebar={toggleSidebar} />, {
      wrapper: BrowserRouter,
    });

  test("checking that sidebar has all the necessary links", () => {
    const { getByText, getByTestId } = renderComponent({
      opened: defaultProps.opened,
      toggleSidebar: defaultProps.toggleSidebar,
    });

    expect(getByText(/Data Summary/i)).toBeInTheDocument();
    expect(getByText(/Product Accountability/i)).toBeInTheDocument();
    // expect(getByText(/Process Monitoring/i)).toBeInTheDocument();
    expect(getByText(/Reporting/i)).toBeInTheDocument();
    // expect(getByText(/Cluster Health/i)).toBeInTheDocument();
    expect(getByText(/Information/i)).toBeInTheDocument();
    expect(getByText(/Logout/i)).toBeInTheDocument();

    const closeMenu = getByTestId("open-close-menu");

    fireEvent.click(closeMenu);

    expect(defaultProps.toggleSidebar).toBeCalled();
  });
});
