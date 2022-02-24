import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Profile from "./index";

describe("Profile", () => {
  test("renders Profile component", () => {
    render(<Profile />);
  });
});
