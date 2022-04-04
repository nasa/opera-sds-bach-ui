import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import StringFilter from "@bach/components/Filters/StringFilter"

describe("String Filter", () => {
  const defaultProps = {
    value: "",
    setValue: jest.fn(),
    label: "String",
  };

  const renderComponent = ({ value, setValue, label }) =>
    render(<StringFilter value={value} setValue={setValue} label={label} />);

  test("Renders a Select Filter preset filter works", () => {
    const { getByText, getByTestId } = renderComponent({
      value: defaultProps.value,
      setValue: defaultProps.setValue,
      label: defaultProps.label,
    });

    expect(getByText(/String/i)).toBeInTheDocument();

    expect(getByTestId("string-filter-field")).toBeTruthy();

    const stringInput = getByTestId("string-filter-field");

    userEvent.type(stringInput, "Hello");

    expect(defaultProps.setValue).toBeCalled();
  });
});
