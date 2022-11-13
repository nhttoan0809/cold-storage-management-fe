import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable({ headCells, rows }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headCells.map((cell, ind) => {
              return (
                <TableCell key={ind} align={cell.alignRight ? "right" : "inherit"}>
                  {cell.label}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row[(Object.keys(row))[0]]}
              // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {(Object.keys(row)).map((key, ind) => {
                if (ind === 0)
                  return (
                    <TableCell key={ind} component="th" scope="row">
                      {row[key]}
                    </TableCell>
                  );
                else {
                  return <TableCell key={ind} align="right">{row[key]}</TableCell>;
                }
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
