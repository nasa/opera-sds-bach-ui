import React from "react";
import { render, screen, fireEvent } from "@bach/test-utils";
import '@testing-library/jest-dom'

// import userEvent from "@testing-library/user-event";

import SelectFilter from "@bach/components/Filters/SelectFilter"

describe("Select Filter", () => {
  const defaultProps = {
    label: "Select",
    value: "",
    setFunc: jest.fn(),
    options: [
      { label: "option1", value: "1", },
      { label: "option2", value: "2", },
    ],
  };

  test("Renders a Select Filter preset filter works", () => {
    render(
      <SelectFilter
        value={defaultProps.value}
        setValue={defaultProps.setFunc}
        label={defaultProps.label}
        options={defaultProps.options}
      />
    );

    expect(screen.getByTestId("select-test-id")).toBeInTheDocument();

    const select = screen.getByTestId("select-test-id");

    fireEvent.change(select, { target: { value: "2" } });

    expect(select).toHaveDisplayValue("option1");
    expect(defaultProps.setFunc).toBeCalled();
  });
});
