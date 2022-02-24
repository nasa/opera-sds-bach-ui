import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import useStyles from "./style";

export default function SummaryTable(props) {
  const { data, keyMap } = props;

  const classes = useStyles();

  // splitting the data evenly but so it goes left to right, then up to down in order.
  const rowData = Object.entries(data).map(([key, value]) => ({ key, value }));
  if (rowData.length % 2 !== 0) rowData.push({ key: "Empty", value: "Empty" });
  const leftData = rowData.slice(0, rowData.length / 2);
  const rightData = rowData.slice(-rowData.length / 2);

  // creating row nodes
  const generateRows = (row) =>
    row.map((entry) => (
      <tr id={entry.key} key={entry.key}>
        <td className={clsx(classes.column, classes.key)}>
          {keyMap[entry.key] || entry.key}
        </td>
        <td className={clsx(classes.column, classes.value)}>{entry.value}</td>
      </tr>
    ));

  return (
    <table className={classes.parentTable}>
      <tbody>
        <tr>
          <td>
            <table className={clsx(classes.table, classes.leftTable)}>
              <tbody>{generateRows(leftData)}</tbody>
            </table>
          </td>
          <td>
            <table className={clsx(classes.table, classes.rightTable)}>
              <tbody>{generateRows(rightData)}</tbody>
            </table>
          </td>
        </tr>
      </tbody>
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
