import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import NotFound from "@bach/pages/NotFound"

describe("Not Found", () => {
  test("renders NotFound component/page", () => {
    const { getByText } = render(
      <div>
        <NotFound />
      </div>
    );
    expect(getByText(/Not Found/i)).toBeInTheDocument();
  });
});
