import React from "react";
import { render } from "@bach/test-utils";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { getUrlParams, pushUrlParams } from "@bach/api/DataUtils";

describe("DataUtils test", () => {
  it("should parse query params", () => {
    // ARRANGE
    const history = createMemoryHistory();
    render(<Router history={history} />);
    history.push("/dummyPath?param1&param2=value2");

    // ACT
    const params = getUrlParams(history);

    // ASSERT
    expect(params).toEqual({
      param1: undefined,
      param2: "value2",
    });
  });

  it("should push query params", () => {
    // ARRANGE
    const history = createMemoryHistory();
    render(<Router history={history} />);

    // ACT
    pushUrlParams(
      {
        param1: undefined,
        param2: "value2",
        startDate: true, // needs to be truthy
      },
      location,
      navigate
    );

    // ASSERT
    expect(history.location.search).toEqual("?start_date=true");
  });
});
