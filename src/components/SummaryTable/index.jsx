import React from "react";
import PropTypes from "prop-types";

import useStyles from "./style";

export default function SummaryTable(props) {
  const { data, keyMap } = props;

  const classes = useStyles();

  // splitting the data evenly but so it goes left to right, then up to down in order.
  let rowData = Object.entries(data).map(([key, value]) => ({ key, value }));
  rowData = rowData.filter((value) => value.key !== "crid");
  if (rowData.length % 2 !== 0) rowData.push({ key: "Empty", value: "Empty" });

  // creating row nodes
  const generateRows = (row) =>
    row.map((entry) => (
      <tr id={entry.key} key={entry.key}>
        <td className={classes.key}>{keyMap[entry.key] || entry.key}</td>
        <td className={classes.value}>{entry.value}</td>
      </tr>
    ));

  return (
    <table>
      <tbody>{generateRows(rowData)}</tbody>
    </table>
  );
}

SummaryTable.propTypes = {
  data: PropTypes.objectOf(PropTypes.string),
  keyMap: PropTypes.objectOf(PropTypes.string),
};

SummaryTable.defaultProps = {
  data: {},
  keyMap: {},
};
