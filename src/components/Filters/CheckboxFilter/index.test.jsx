import React from "react";

import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import CheckboxFilter from "./index";

describe("CheckboxFilter", () => {
  const defaultProps = {
    label: "Test",
    options: [
      {
        label: "option1",
        color: "primary",
        value: false,
        name: "option1",
        setValue: jest.fn(),
        labelColor: "primary",
      },
      {
        label: "option2",
        color: "primary",
        value: false,
        name: "option2",
        setValue: jest.fn(),
        labelColor: "primary",
      },
    ],
  };

  const renderComponent = ({ label, options }) =>
    render(<CheckboxFilter label={label} options={options} />);
  test("Renders a checkbox filter to test", () => {
    const { getByText } = renderComponent({
      label: defaultProps.label,
      options: defaultProps.options,
    });

    expect(getByText(/Test/i)).toBeInTheDocument();

    expect(getByText(/option1/i)).toBeInTheDocument();
    expect(getByText(/option2/i)).toBeInTheDocument();

    const option1 = getByText(/option1/i);

    fireEvent.click(option1);

    expect(defaultProps.options[0].setValue).toHaveBeenCalled();
    const option2 = getByText(/option2/i);

    fireEvent.click(option2);

    expect(defaultProps.options[1].setValue).toHaveBeenCalled();
  });

  test("Renders a checkbox filter to test but one of the checkboxes is checked", () => {
    defaultProps.options[0].value = true;

    const { getByText } = renderComponent({
      label: defaultProps.label,
      options: defaultProps.options,
    });

    expect(getByText(/Test/i)).toBeInTheDocument();

    expect(getByText(/option1/i)).toBeInTheDocument();
    expect(getByText(/option2/i)).toBeInTheDocument();

    const option1 = getByText(/option1/i);

    fireEvent.click(option1);

    expect(defaultProps.options[0].setValue).toHaveBeenCalled();
    const option2 = getByText(/option2/i);

    fireEvent.click(option2);

    expect(defaultProps.options[1].setValue).toHaveBeenCalled();
  });
});
