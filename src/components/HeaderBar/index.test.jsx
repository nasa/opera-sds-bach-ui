import React from "react";
import { BrowserRouter } from "react-router-dom";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { MISSION_TITLE } from "@bach/constants";

import HeaderBar, { LocationDisplay } from "./index";

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(ui, { wrapper: BrowserRouter });
};

describe("Location Display test and Header Bar", () => {
  test("checking that location is correct when going to the route", () => {
    const route = "/data-summary/incoming";
    renderWithRouter(<LocationDisplay />, { route });

    expect(screen.getByTestId("location-display")).toHaveTextContent(route);
  });

  const renderComponent = ({ missionTitle, opened }) =>
    render(<HeaderBar missionTitle={missionTitle} opened={opened} />, {
      wrapper: BrowserRouter,
    });

  test("renders HeaderBar component", () => {
    const opened = true;

    const { getByText } = renderComponent({
      opened,
      missionTitle: MISSION_TITLE,
    });

    expect(getByText(MISSION_TITLE)).toBeInTheDocument();
  });
});
