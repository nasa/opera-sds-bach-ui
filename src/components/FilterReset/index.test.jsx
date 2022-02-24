import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import FilterReset from "./index";

describe("Reset Filter", () => {
  const defaultProps = {
    onClick: jest.fn(),
  };

  const renderComponent = ({ onClick }) =>
    render(<FilterReset onClick={onClick} />);

  test("Renders a Select Filter preset filter works", () => {
    const { getByText, getByTestId } = renderComponent({
      onClick: defaultProps.onClick,
    });

    expect(getByText(/RESET/i)).toBeInTheDocument();

    expect(getByTestId("reset-filter-button")).toBeTruthy();

    const resetFilterButton = getByTestId("reset-filter-button");

    userEvent.click(resetFilterButton);

    expect(defaultProps.onClick).toBeCalled();
  });
});
