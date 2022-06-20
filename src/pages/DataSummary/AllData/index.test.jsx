import axios from "axios";
import React from "react";
import { act } from "react-dom/test-utils";
import sinon from "sinon";
import { renderWithRouter, screen } from "@bach/test-utils";
import userEvent from "@testing-library/user-event";
import AllData from "@bach/pages/DataSummary/AllData/index";

describe("AllData", () => {
  let stub;

  beforeEach(() => {
    stub = sinon.stub(axios, "get");
  });

  afterEach(() => {
    stub.restore();
  });

  it("should render properly", () => {
    renderWithRouter(<AllData />);
  });

  it("should display data", async () => {
    // ARRANGE
    stub.returns({
      data: [
        {
          id: "dummy_id",
          dataset_type: "dummy_dataset_type",
          transfer_status: "cnm_r_success",
          metadata: {
            FileName: "dummy_all_data_filename",
            ProductReceivedTime: "1970-12-13 14:00+00:00",
          },
        },
      ],
    });
    const user = userEvent.setup();
    renderWithRouter(<AllData />);

    // ACT
    await act(async() => {
      await user.click(screen.getByRole("button", { name: "SEARCH" }));
    });

    // ASSERT
    // expect(axios.get).toHaveBeenCalled();
    expect(await screen.findByRole("cell", { name: "dummy_dataset_type"})).toBeInTheDocument();
    expect(await screen.findByRole("cell", { name: "dummy_all_data_filename"})).toBeInTheDocument();
    expect(await screen.findByRole("cell", { name: "1970-12-13 14:00+00:00"})).toBeInTheDocument();
  });
});
