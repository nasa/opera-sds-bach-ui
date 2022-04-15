import axios from "axios";
import React from "react";
import { renderWithRouter, screen } from "@bach/test-utils";
import IncomingData from "@bach/pages/DataSummary/IncomingData/index";
import userEvent from "@testing-library/user-event";

import { act } from "react-dom/test-utils";

jest.mock("axios");

describe("IncomingData", () => {
  it("should render properly", () => {
    renderWithRouter(<IncomingData />);
  });

  it("should display data", async () => {
    // ARRANGE
    axios.get.mockResolvedValueOnce({data: [{
        "id": "dummy_incoming_file_id",
        "count": 123
      }]});

    const user = userEvent.setup();
    renderWithRouter(<IncomingData />);

    // ACT
    await act(async() => {
      await user.click(screen.getByRole("button", { name: "SEARCH" }));
    });

    // ASSERT
    expect(axios.get).toHaveBeenCalled();
    expect(await screen.findByRole("cell", { name: "dummy_incoming_file_id"})).toBeInTheDocument();
    expect(await screen.findByRole("cell", { name: "123"})).toBeInTheDocument();
  });
});