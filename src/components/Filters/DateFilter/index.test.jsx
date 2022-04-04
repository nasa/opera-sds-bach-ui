import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom";
// import userEvent from "@testing-library/user-event";
import moment from "moment";

import DateFilter from "@bach/components/Filters/DateFilter"

describe("Date Filter", () => {
  const defaultProps = {
    startValue: moment().format("YYYY-MM-DDTHH:mm"),
    endValue: moment().format("YYYY-MM-DDTHH:mm"),
    preset: "Today",
    setStartDate: jest.fn(),
    setEndDate: jest.fn(),
    setPreset: jest.fn(),
    label: "Date",
    presets: true,
  };

  const renderComponent = ({
    startValue,
    endValue,
    setStartValue,
    setEndValue,
    presetValue,
    setPresetValue,
    label,
    presets,
  }) =>
    render(
      <DateFilter
        startValue={startValue}
        setStartValue={setStartValue}
        endValue={endValue}
        setEndValue={setEndValue}
        label={label}
        presetValue={presetValue}
        setPresetValue={setPresetValue}
        presets={presets}
      />
    );

  test("Renders a Date Filter preset filter works", () => {
    const { getByTestId } = renderComponent({
      startValue: defaultProps.startValue,
      setStartValue: defaultProps.setStartDate,
      endValue: defaultProps.endValue,
      setEndValue: defaultProps.setEndDate,
      presetValue: defaultProps.preset,
      setPresetValue: defaultProps.setPreset,
      label: defaultProps.label,
      presets: defaultProps.presets,
    });

    expect(screen.getByText(/Date/i)).toBeInTheDocument();

    expect(screen.getByText(/Today/i)).toBeInTheDocument();

    expect(screen.getByText(/Today/i)).toBeInTheDocument();

    // const datetimeLabel = getByLabelText("datetime-local");
    const startDatetimeInput = getByTestId("start-datetime-test-input");

    fireEvent.change(startDatetimeInput, {
      target: { value: "2020-04-08T21:24" },
    });
    expect(defaultProps.setStartDate).toHaveBeenCalled();

    const endDatetimeInput = getByTestId("end-datetime-test-input");

    fireEvent.change(endDatetimeInput, {
      target: { value: "2020-04-08T21:24" },
    });
    expect(defaultProps.setEndDate).toHaveBeenCalled();
  });

  test("Test the select component", () => {
    const { getByRole } = renderComponent({
      startValue: defaultProps.startValue,
      setStartValue: defaultProps.setStartDate,
      endValue: defaultProps.endValue,
      setEndValue: defaultProps.setEndDate,
      presetValue: "Yesterday",
      setPresetValue: defaultProps.setPreset,
      label: defaultProps.label,
      presets: defaultProps.presets,
    });

    expect(screen.queryByText(/Today/i)).not.toBeInTheDocument();

    const input = getByRole("button");

    fireEvent.mouseDown(input);

    const listbox = within(getByRole("listbox"));
    fireEvent.click(listbox.getByText("Yesterday"));

    fireEvent.mouseUp(input);

    expect(screen.getByDisplayValue(/Yesterday/i)).toBeInTheDocument();
  });
});
