import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
// import userEvent from "@testing-library/user-event";

import RadioFilter from "@bach/components/Filters/RadioFilter"

describe("Select Filter", () => {
  const defaultProps = {
    label: "Radio",
    value: "",
    setFunc: jest.fn(),
    options: [
      {
        label: "option1",
        value: "1",
        name: "option1",
      },
      {
        label: "option2",
        value: "2",
        name: "option2",
      },
    ],
  };

  const renderComponent = ({ value, setValue, label, options }) =>
    render(
      <RadioFilter
        value={value}
        setValue={setValue}
        label={label}
        options={options}
      />
    );

  test("Renders a Radio Filter preset filter works", () => {
    const { getByText } = renderComponent({
      value: defaultProps.value,
      setValue: defaultProps.setFunc,
      label: defaultProps.label,
      options: defaultProps.options,
    });

    expect(getByText(/Radio/i)).toBeInTheDocument();

    expect(getByText(/option1/i)).toBeInTheDocument();
    expect(getByText(/option2/i)).toBeInTheDocument();

    // const select = getByTestId("radio-test-id");
    const option1 = getByText(/option1/i);
    const option2 = getByText(/option2/i);

    fireEvent.click(option1);

    expect(defaultProps.setFunc).toBeCalled();

    fireEvent.click(option2);

    expect(defaultProps.setFunc).toBeCalledTimes(2);
  });
});
