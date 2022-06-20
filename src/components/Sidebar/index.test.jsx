import React from "react";
import { fireEvent, renderWithRouter, screen } from "@bach/test-utils";

import Sidebar from "@bach/components/Sidebar";

describe("Sidebar test", () => {
  const defaultProps = {
    opened: true,
    toggleSidebar: jest.fn(),
  };

  test("checking that sidebar has all the necessary links", () => {
    renderWithRouter(<Sidebar opened={true} toggleSidebar={defaultProps.toggleSidebar} />);

    expect(screen.getByText(/Data Summary/i)).toBeInTheDocument();
    // TODO chrisjrd: unhide when implementing
    // expect(screen.getByText(/Product Accountability/i)).toBeInTheDocument();
    // hidden for OPERA
    // expect(screen.getByText(/Process Monitoring/i)).toBeInTheDocument();
    expect(screen.getByText(/Reporting/i)).toBeInTheDocument();
    // hidden for OPERA
    // expect(screen.getByText(/Cluster Health/i)).toBeInTheDocument();
    // expect(screen.getByText(/Information/i)).toBeInTheDocument();
    // expect(screen.getByText(/Logout/i)).toBeInTheDocument();

    const closeMenu = screen.getByTestId("open-close-menu");

    fireEvent.click(closeMenu);

    expect(defaultProps.toggleSidebar).toBeCalled();
  });
});
