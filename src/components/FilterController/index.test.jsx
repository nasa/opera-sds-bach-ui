import React from "react";
import { fireEvent, render } from "@bach/test-utils";

import FilterController from "@bach/components/FilterController";

describe("Filter Controller", () => {
  const defaultProps = {
    hidden: false,
    toggleFilter: jest.fn(),
  };

  const renderComponent = ({ hidden, toggleFilters }) =>
    render(<FilterController hidden={hidden} toggleFilters={toggleFilters} />);
  test("Renders the filter controller button", () => {
    // const toggleFilter = jest.fn();
    const { getByText } = renderComponent({
      hidden: defaultProps.hidden,
      toggleFilters: defaultProps.toggleFilter,
    });

    expect(getByText(/HIDE FILTERS/i)).toBeInTheDocument();

    fireEvent.click(getByText(/HIDE FILTERS/i));

    expect(defaultProps.toggleFilter).toHaveBeenCalled();
  });

  test("Renders the filter controller button", () => {
    // const toggleFilter = jest.fn();
    const { getByText } = renderComponent({
      hidden: true,
      toggleFilters: defaultProps.toggleFilter,
    });

    expect(getByText(/SHOW FILTERS/i)).toBeInTheDocument();

    fireEvent.click(getByText(/SHOW FILTERS/i));

    expect(defaultProps.toggleFilter).toHaveBeenCalled();
  });
});
