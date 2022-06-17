import React from "react";
import { render, screen } from "@bach/test-utils";
import userEvent from "@testing-library/user-event";

import FilterReset from "@bach/components/FilterReset";
import { act } from "react-dom/test-utils";

describe("Reset Filter", () => {
  const defaultProps = {
    onClick: jest.fn(),
  };

  test("Reset Filter Button", async () => {
    const { getByText, getByTestId } = render(<FilterReset onClick={defaultProps.onClick} />);

    expect(getByText(/RESET/i)).toBeInTheDocument();

    expect(getByTestId("reset-filter-button")).toBeTruthy();

    const user = userEvent.setup();

    await act(async () => {
      await user.click(screen.getByRole("button", { name: "RESET" }));
    });

    expect(defaultProps.onClick).toBeCalled();
  });
});
