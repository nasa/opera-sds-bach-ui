import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "@testing-library/jest-dom";

import FilterMenu from "./index";

describe("Filter Menu", () => {
  const defaultProps = {
    title: "HELLO WORLD",
    search: jest.fn(),
    reset: jest.fn(),
  };

  const renderComponent = ({ title, search, reset }) =>
    render(<FilterMenu title={title} search={search} reset={reset} />);
  test("Renders the filter Menu component", () => {
    // const toggleFilter = jest.fn();
    const { getByText } = renderComponent({
      title: defaultProps.title,
      search: defaultProps.search,
      reset: defaultProps.reset,
    });

    expect(getByText(/HELLO WORLD/i)).toBeInTheDocument();
    const searchBtn = getByText(/search/i);
    userEvent.click(searchBtn);
    expect(defaultProps.search).toHaveBeenCalled();
    const resetBtn = getByText(/reset/i);
    userEvent.click(resetBtn);
    expect(defaultProps.reset).toHaveBeenCalled();
  });
});
