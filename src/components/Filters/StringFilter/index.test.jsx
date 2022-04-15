import React from "react";
import { render, screen } from "@bach/test-utils";
import userEvent from "@testing-library/user-event";

import StringFilter from "@bach/components/Filters/StringFilter"

describe("String Filter", () => {
  const defaultProps = {
    value: "",
    setValue: jest.fn(),
    label: "String",
  };
  
  test("Renders a Select Filter preset filter works", () => {
    render(<StringFilter value={defaultProps.value} setValue={defaultProps.setValue} label={defaultProps.label} />);

    expect(screen.getByText(/String/i)).toBeInTheDocument();

    expect(screen.getByTestId("string-filter-field")).toBeTruthy();

    const stringInput = screen.getByTestId("string-filter-field");

    userEvent.type(stringInput, "Hello");

    expect(defaultProps.setValue).toBeCalled();
  });
});
