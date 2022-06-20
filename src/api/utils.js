const IGNORE_QUERY_PARAMS = ["query"];
/**
 *
 * @param {Array} paths
 * @param {String} host
 * @returns url string.
 */
const buildAPIUrl = (paths, host) =>
  host + paths.map((path) => `/${path}`).join("");

const extractJobParams = (urlParams) => {
  const params = {};
  urlParams.forEach((value, key) => {
    const isParam = !IGNORE_QUERY_PARAMS.includes(key);
    if (isParam) params[key] = value;
  });
  return params;
};
/**
 * get's the last path in the location passed into the function
 * @param {*} location
 * @returns {String} urlTail
 */
const getPathTail = (location) => {
  const { pathname } = location;
  const splitPath = pathname.split("/");

  return splitPath[splitPath.length - 1];
};

export { buildAPIUrl, extractJobParams, getPathTail };
