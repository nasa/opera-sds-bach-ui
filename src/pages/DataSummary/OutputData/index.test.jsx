import axios from "axios";
import React from "react";
import { act } from "react-dom/test-utils";
import sinon from "sinon";
import { renderWithRouter, screen } from "@bach/test-utils";
import userEvent from "@testing-library/user-event";
import OutputData from "@bach/pages/DataSummary/OutputData/index";

describe("OutputData", () => {
  let stub;

  beforeEach(() => {
    stub = sinon.stub(axios, "get");
  });

  afterEach(() => {
    stub.restore();
  });
  it("should render properly", () => {
    renderWithRouter(<OutputData />);
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
    renderWithRouter(<OutputData />);

    // ACT
    await act(async() => {
      await user.click(screen.getByRole("button", { name: "SEARCH" }));
    });

    // ASSERT
    expect(await screen.findByRole("cell", { name: "dummy_incoming_file_id"})).toBeInTheDocument();
    expect(await screen.findByRole("cell", { name: "123"})).toBeInTheDocument();
  });
});
