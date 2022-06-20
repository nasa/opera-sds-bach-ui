import React from "react";
import { render } from "@bach/test-utils";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { getUrlParams, pushUrlParams } from "@bach/api/DataUtils";

describe("DataUtils test", () => {
  it("should parse query params", () => {
    // ARRANGE
    const history = createMemoryHistory();
    history.push("/dummyPath?param1&param2=value2");

    // ACT
    const params = getUrlParams(history.location);

    // ASSERT
    expect(params).toEqual({
      param1: undefined,
      param2: "value2",
    });
  });

  it("should push query params", () => {
    // ARRANGE
    const history = createMemoryHistory();

    // ACT
    pushUrlParams(
      {
        param1: undefined,
        param2: "value2",
        startDate: true, // needs to be truthy
      },
      history.location,
      (path) => history.push(path)
    );

    // ASSERT
    expect(history.location.search).toEqual("?start_date=true");
  });
});
