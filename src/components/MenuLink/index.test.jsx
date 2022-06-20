import React from "react";
import { renderWithRouter } from "@bach/test-utils";

import InfoIcon from "@mui/icons-material/Info";

import MenuLink from "@bach/components/MenuLink";

describe("Menu Link", () => {
  test("renders MenuLink component", () => {
    const route = "/data-summary/incoming";
    const { getByText } = renderWithRouter(<MenuLink label="Information" icon={<InfoIcon />} to={{screen: "workaround_for_pathname_error"}}/>, {route});

    expect(getByText("Information")).toBeInTheDocument();
  });
});
