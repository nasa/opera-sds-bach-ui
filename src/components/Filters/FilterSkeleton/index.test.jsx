import React from "react";
import { render } from "@bach/test-utils";

import FilterSkeleton from "@bach/components/Filters/FilterSkeleton"

describe("Date Filter", () => {
  const defaultProps = {
    skeletonLabel: "Filters",
  };

  test("Renders a Date Filter preset filter works", () => {
    const { getByText } = render(
      <FilterSkeleton label={defaultProps.skeletonLabel}>
        <h4 key="hello">Hello World</h4>
      </FilterSkeleton>
    );

    expect(getByText(/Filters/i)).toBeInTheDocument();
  });
});
