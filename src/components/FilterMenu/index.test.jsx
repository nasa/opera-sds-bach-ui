import React from "react";
import { render, screen } from "@bach/test-utils";
import userEvent from "@testing-library/user-event";

import FilterMenu from "@bach/components/FilterMenu"
import { act } from "react-dom/test-utils";

describe("Filter Menu", () => {
  const defaultProps = {
    title: "HELLO WORLD",
    search: jest.fn(),
    reset: jest.fn(),
  };

  const renderComponent = ({ title, search, reset }) =>
    render(<FilterMenu title={title} search={search} reset={reset} />);

  test("Renders the filter Menu component", async () => {
    const { getByText } = renderComponent({
      title: defaultProps.title,
      search: defaultProps.search,
      reset: defaultProps.reset,
    });

    expect(getByText(/HELLO WORLD/i)).toBeInTheDocument();

    const user = userEvent.setup();

    await act(async () => {
      await user.click(screen.getByRole("button", { name: "SEARCH" }));
    });
    expect(defaultProps.search).toHaveBeenCalled();

    await act(async () => {
      await user.click(screen.getByRole("button", { name: "RESET" }));
    });
    expect(defaultProps.reset).toHaveBeenCalled();
  });
});
