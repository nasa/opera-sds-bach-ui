import React from "react";
import { fireEvent, render, screen } from "@bach/test-utils";

import RadioFilter from "@bach/components/Filters/RadioFilter";

describe("Select Filter", () => {
  const defaultProps = {
    label: "Radio",
    value: "",
    setValue: jest.fn(),
    options: [
      { label: "option1", name: "option1", value: "1", },
      { label: "option2", name: "option2", value: "2", },
    ],
  };

  test("Renders a Radio Filter preset filter works", () => {
    render(
      <RadioFilter
        value={defaultProps.value}
        setValue={defaultProps.setValue}
        label={defaultProps.label}
        options={defaultProps.options}
      />
    );

    const option1 = screen.getByText(/option1/i);
    const option2 = screen.getByText(/option2/i);

    fireEvent.click(option1);

    expect(defaultProps.setValue).toBeCalled();

    fireEvent.click(option2);

    expect(defaultProps.setValue).toBeCalledTimes(2);
  });
});
