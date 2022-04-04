import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
// import userEvent from "@testing-library/user-event";

import SelectFilter from "@bach/components/Filters/SelectFilter"

describe("Select Filter", () => {
  const defaultProps = {
    label: "Select",
    value: "",
    setFunc: jest.fn(),
    options: [
      {
        label: "option1",
        value: "1",
      },
      {
        label: "option2",
        value: "2",
      },
    ],
  };

  const renderComponent = ({ value, setValue, label, options }) =>
    render(
      <SelectFilter
        value={value}
        setValue={setValue}
        label={label}
        options={options}
      />
    );

  test("Renders a Select Filter preset filter works", () => {
    const { getByText, getByTestId } = renderComponent({
      value: defaultProps.value,
      setValue: defaultProps.setFunc,
      label: defaultProps.label,
      options: defaultProps.options,
    });

    expect(getByText(/Select/i)).toBeInTheDocument();

    expect(getByText(/option1/i)).toBeInTheDocument();

    const select = getByTestId("select-test-id");

    fireEvent.change(select, { target: { value: "2" } });

    expect(defaultProps.setFunc).toBeCalled();
  });
});
