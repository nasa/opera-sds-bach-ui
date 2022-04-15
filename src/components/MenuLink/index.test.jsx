import React from "react";
import { render } from "@bach/test-utils";

import InfoIcon from "@mui/icons-material/Info";

import MenuLink from "@bach/components/MenuLink"

describe("Menu Link", () => {
  const renderComponent = ({ label, icon, opened }) =>
    render(<MenuLink label={label} icon={icon} opened={opened} />);

  test("renders MenuLink component", () => {
    const label = "Information";

    const { getByText } = renderComponent({
      label,
      icon: <InfoIcon />,
    });

    expect(getByText("Information")).toBeInTheDocument();
  });
});
