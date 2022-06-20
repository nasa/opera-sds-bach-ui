import axios from "axios";
import React from "react";
import { act } from "react-dom/test-utils";
import sinon from "sinon";
import { renderWithRouter, screen } from "@bach/test-utils";
import userEvent from "@testing-library/user-event";
import IncomingData from "@bach/pages/DataSummary/IncomingData/index";

describe("IncomingData", () => {
  let stub;

  beforeEach(() => {
    stub = sinon.stub(axios, "get");
  });

  afterEach(() => {
    stub.restore();
  });

  it("should render properly", () => {
    renderWithRouter(<IncomingData />);
  });

  it("should display data", async () => {
    // ARRANGE
    stub.returns({
      data: [
        {
          id: "dummy_incoming_file_id",
          count: 123,
        },
      ],
    });
    const user = userEvent.setup();
    renderWithRouter(<IncomingData />);

    // ACT
    await act(async () => {
      await user.click(screen.getByRole("button", { name: "SEARCH" }));
    });

    // ASSERT
    expect(
      await screen.findByRole("cell", { name: "dummy_incoming_file_id" })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("cell", { name: "123" })
    ).toBeInTheDocument();
  });
});
