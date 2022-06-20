import React from "react";
import { fireEvent, render, screen } from "@bach/test-utils";

import CheckboxFilter from "@bach/components/Filters/CheckboxFilter";

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
    
  test("Renders a checkbox filter to test", () => {
    render(<CheckboxFilter label={defaultProps.label} options={defaultProps.options} />);

    expect(screen.getByText(/Test/i)).toBeInTheDocument();

    const option1 = screen.getByText(/option1/i);

    fireEvent.click(option1);

    expect(defaultProps.options[0].setValue).toHaveBeenCalled();
    const option2 = screen.getByText(/option2/i);

    fireEvent.click(option2);

    expect(defaultProps.options[1].setValue).toHaveBeenCalled();
  });

  test("Renders a checkbox filter to test but one of the checkboxes is checked", () => {
    defaultProps.options[0].value = true;
    render(<CheckboxFilter label={defaultProps.label} options={defaultProps.options} />);

    expect(screen.getByText(/Test/i)).toBeInTheDocument();

    const option1 = screen.getByText(/option1/i);

    fireEvent.click(option1);

    expect(defaultProps.options[0].setValue).toHaveBeenCalled();
    const option2 = screen.getByText(/option2/i);

    fireEvent.click(option2);

    expect(defaultProps.options[1].setValue).toHaveBeenCalled();
  });
});
