import React from "react";

/**
 * Reduces an axios error to the pieces the error dialog needs.
 *
 * axios failures arrive in three shapes and only the first of them carries a
 * `response`:
 *
 *   1. the server answered with a non-2xx status  -> `err.response` is set
 *   2. the request went out but nothing came back -> only `err.request` is set
 *      (client timeout, network failure, CORS rejection, connection closed)
 *   3. the request was never sent at all          -> neither is set
 *
 * Cases 2 and 3 are exactly the ones a long-running report hits, and reading
 * `err.response.data` unconditionally threw a TypeError from inside the
 * caller's `catch` block -- so the dialog never opened and the user saw
 * nothing at all. A request that had failed was indistinguishable from one
 * still running.
 *
 * @param {Error} err an axios error
 * @returns {{title: string, detail: string, extra: ?string}}
 */
export function describeApiError(err) {
  const data = err && err.response ? err.response.data : undefined;

  // The API reports problems as an RFC 7807-style JSON body.
  if (data && typeof data === "object") {
    return {
      title: data.title || data.message || "Something went wrong",
      detail: data.detail || "Please try again.",
      extra: data.traceback || null,
    };
  }

  // A response, but not one we can read (HTML error page, empty body, ...).
  if (err && err.response) {
    const { status, statusText } = err.response;
    return {
      title: `Request failed (${status}${statusText ? ` ${statusText}` : ""})`,
      detail: "The server responded, but not with a report. Please try again.",
      extra: typeof data === "string" && data ? data : null,
    };
  }

  // Sent, but no response came back.
  if (err && err.request) {
    const timedOut = err.code === "ECONNABORTED" || err.code === "ETIMEDOUT";
    return {
      title: timedOut ? "Request timed out" : "Could not reach the API",
      detail: timedOut
        ? "The report did not complete within the client timeout. Try a narrower date range."
        : "No response was received. Check that the API is reachable, then try again.",
      extra: err.message || null,
    };
  }

  return {
    title: "Something went wrong",
    detail: "Please try again.",
    extra: err && err.message ? err.message : null,
  };
}

export function apiErrorHandler(setModalDialogState, err) {
  const { title, detail, extra } = describeApiError(err);

  setModalDialogState({
    open: true,
    title,
    contentText: (
      <>
        {detail}
        {extra ? (
          <>
            <br />
            {extra}
          </>
        ) : null}
      </>
    ),
  });
}
