import React from "react";
import { render } from "@bach/test-utils";

import { Typography } from "@mui/material";

import BasicModal from ".";

describe("Filter Menu", () => {
  const defaultProps = {
    title: "Default Modal",
    content: <Typography variant="body1">This is a basic modal</Typography>,
    open: true,
    setOpen: jest.fn(),
  };

  const renderComponent = ({ title, content, open, setOpen }) =>
    render(
      <BasicModal
        title={title}
        content={content}
        open={open}
        setOpen={setOpen}
      />
    );
  test("Renders the filter Menu component", () => {
    const { getByText } = renderComponent({
      title: defaultProps.title,
      content: defaultProps.content,
      open: defaultProps.open,
      setOpen: defaultProps.setOpen,
    });

    expect(getByText(/Default Modal/i)).toBeInTheDocument();
    expect(getByText(/This is/i)).toBeInTheDocument();
    expect(getByText(/basic modal/i)).toBeInTheDocument();
    expect(getByText(/close/i)).toBeInTheDocument();
  });
});
