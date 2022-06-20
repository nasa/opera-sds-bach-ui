import React from "react";
import { render, screen } from "@bach/test-utils";
import userEvent from "@testing-library/user-event";

import StringFilter from "@bach/components/Filters/StringFilter"
import { act } from "react-dom/test-utils";

describe("String Filter", () => {
  const defaultProps = {
    value: "",
    setValue: jest.fn(),
    label: "String",
  };

  test("Renders a Select Filter preset filter works", async () => {
    render(<StringFilter value={defaultProps.value} setValue={defaultProps.setValue} label={defaultProps.label} />);

    expect(screen.getByText(/String/i)).toBeInTheDocument();

    expect(screen.getByTestId("string-filter-field")).toBeTruthy();

    const user = userEvent.setup();

    await act(async () => {
      await user.type(screen.getByRole("textbox"), "look_at_me_type");
    });

    expect(defaultProps.setValue).toBeCalled();
  });
});
