exports.DEFAULT_HOST = "http://localhost:8875";
exports.SUFFIX = "";
exports.BASEPATH = "/";

// Client-side timeout, in milliseconds, for requests to bach-api.
// Reports are generated synchronously and can legitimately take minutes, so
// this is deliberately generous; it exists to bound a hung request, not to
// police a slow one. Set to 0 to disable the timeout entirely.
exports.API_TIMEOUT_MS = 900000; // 15 minutes
