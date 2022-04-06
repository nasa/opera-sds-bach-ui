import React from "react";
import { render } from "@bach/test-utils";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import FilterSearch from "@bach/components/FilterSearch"

describe("Search Filter", () => {
  const defaultProps = {
    onClick: jest.fn(),
  };

  const renderComponent = ({ onClick }) =>
    render(<FilterSearch onClick={onClick} />);

  test("Renders a Search Filter Button and checks functionality", () => {
    const { getByText, getByTestId } = renderComponent({
      onClick: defaultProps.onClick,
    });

    expect(getByText(/SEARCH/i)).toBeInTheDocument();

    expect(getByTestId("search-filter-button")).toBeTruthy();

    const searchFilterButton = getByTestId("search-filter-button");

    userEvent.click(searchFilterButton);

    expect(defaultProps.onClick).toBeCalled();
  });
});
