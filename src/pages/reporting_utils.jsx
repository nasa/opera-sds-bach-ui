import React from "react";

export function apiErrorHandler(setModalDialogState, err) {
  setModalDialogState({
    open: true,
    title:
      err.response.data.title ||
      err.response.data.message ||
      "Something went wrong",
    contentText: (
      <>
        {err.response.data.detail || "Please try again."}
        <br />
        {err.response.data.traceback ||
          err.response.data.detail ||
          err.response.data.message}
      </>
    ),
  });
}
