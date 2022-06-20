import React from "react";
import { render, screen } from "@bach/test-utils";
import userEvent from "@testing-library/user-event";

import FilterSearch from "@bach/components/FilterSearch";
import { act } from "react-dom/test-utils";

describe("Search Filter", () => {
  const defaultProps = {
    onClick: jest.fn(),
  };

  test("Search Filter Button", async () => {
    const { getByText, getByTestId } = render(<FilterSearch onClick={defaultProps.onClick} />);

    expect(getByText(/SEARCH/i)).toBeInTheDocument();

    expect(getByTestId("search-filter-button")).toBeTruthy();

    const user = userEvent.setup();

    await act(async () => {
      await user.click(screen.getByRole("button", { name: "SEARCH" }));
    });

    expect(defaultProps.onClick).toBeCalled();
  });
});
