import { describeApiError } from "@bach/pages/reporting_utils";

describe("describeApiError", () => {
  test("uses the API's problem body when there is one", () => {
    const { title, detail, extra } = describeApiError({
      response: {
        status: 500,
        data: {
          title: "Cannot generate ProductionTimeSummaryReport",
          detail: "Please try again.",
          traceback: "Traceback (most recent call last): ...",
        },
      },
    });

    expect(title).toBe("Cannot generate ProductionTimeSummaryReport");
    expect(detail).toBe("Please try again.");
    expect(extra).toBe("Traceback (most recent call last): ...");
  });

  test("falls back to the status line when the body is not JSON", () => {
    const { title, extra } = describeApiError({
      response: { status: 502, statusText: "Bad Gateway", data: "<html>...</html>" },
    });

    expect(title).toBe("Request failed (502 Bad Gateway)");
    expect(extra).toBe("<html>...</html>");
  });

  // Regression: this shape previously threw a TypeError inside the caller's
  // catch block, so no dialog was shown at all.
  test("reports a timeout when the request went out but nothing came back", () => {
    const { title, detail } = describeApiError({
      request: {},
      code: "ECONNABORTED",
      message: "timeout of 900000ms exceeded",
    });

    expect(title).toBe("Request timed out");
    expect(detail).toMatch(/narrower date range/);
  });

  test("reports an unreachable API for a network failure", () => {
    const { title } = describeApiError({ request: {}, message: "Network Error" });

    expect(title).toBe("Could not reach the API");
  });

  test("does not throw when handed an error with no response and no request", () => {
    expect(() => describeApiError(new Error("boom"))).not.toThrow();
    expect(describeApiError(new Error("boom")).extra).toBe("boom");
  });

  test("does not throw when handed undefined", () => {
    expect(() => describeApiError(undefined)).not.toThrow();
  });
});
