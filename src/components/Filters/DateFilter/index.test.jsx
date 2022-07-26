import React from "react";
import { fireEvent, render, screen, within } from "@bach/test-utils";
import moment from "moment";

import DateFilter from "@bach/components/Filters/DateFilter";

describe("Date Filter", () => {
  const defaultProps = {
    startValue: moment().format("YYYY-MM-DDTHH:mm:ss"),
    endValue: moment().format("YYYY-MM-DDTHH:mm:ss"),
    preset: "Today",
    setStartDate: jest.fn(),
    setEndDate: jest.fn(),
    setPreset: jest.fn(),
    label: "Date",
    presets: true,
  };

  test("Renders a Date Filter preset filter works", () => {
    render(
      <DateFilter
        startValue={defaultProps.startValue}
        setStartValue={defaultProps.setStartDate}
        endValue={defaultProps.endValue}
        setEndValue={defaultProps.setEndDate}
        label={defaultProps.label}
        presetValue={defaultProps.preset}
        setPresetValue={defaultProps.setPreset}
        presets={defaultProps.presets}
      />
    );

    expect(screen.getByText(/Date/i)).toBeInTheDocument();
    expect(screen.getByText(/Today/i)).toBeInTheDocument();

    const startDatetimeInput = screen.getByTestId("start-datetime-test-input");

    fireEvent.change(startDatetimeInput, {
      target: { value: "2020-04-08T21:24" },
    });
    expect(defaultProps.setStartDate).toHaveBeenCalled();

    const endDatetimeInput = screen.getByTestId("end-datetime-test-input");

    fireEvent.change(endDatetimeInput, {
      target: { value: "2020-04-08T21:24" },
    });
    expect(defaultProps.setEndDate).toHaveBeenCalled();
  });

  test("Test the select component", () => {
    render(
      <DateFilter
        startValue={defaultProps.startValue}
        setStartValue={defaultProps.setStartDate}
        endValue={defaultProps.endValue}
        setEndValue={defaultProps.setEndDate}
        label={defaultProps.label}
        presetValue="Yesterday"
        setPresetValue={defaultProps.setPreset}
        presets={defaultProps.presets}
      />
    );

    expect(screen.queryByText(/Today/i)).not.toBeInTheDocument();

    const input = screen.getByRole("button");

    fireEvent.mouseDown(input);

    const listbox = within(screen.getByRole("listbox"));
    fireEvent.click(listbox.getByText("Yesterday"));

    fireEvent.mouseUp(input);

    expect(screen.getByDisplayValue(/Yesterday/i)).toBeInTheDocument();
  });
});
