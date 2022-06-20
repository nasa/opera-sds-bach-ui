import React from "react";
import { render } from "@bach/test-utils";

import Profile from "@bach/components/Profile"

describe("Profile", () => {
  test("renders Profile component", () => {
    render(<Profile />);
  });
});
