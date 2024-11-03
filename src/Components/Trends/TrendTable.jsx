import * as React from 'react';
import { tableCellClasses } from '@mui/material/TableCell';

import { Table, TableBody, TableCell, TableContainer, TableHead ,TableRow } from '@mui/material';
import Token from './Token';
import Numbers from './Numbers';

export default function TrendTable({trends}) {
  return (
    <TableContainer>
      <Table aria-label="simple table" sx={{
            [`& .${tableCellClasses.root}`]: {
            borderBottom: "none"
            }
        }} >
        <TableHead>
          <TableRow>
            <TableCell align="left">{trends.column1}</TableCell>
            <TableCell align="right">{trends.column2}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trends.tokens.map((trend) => (
            <TableRow
              key={trend.symbol}
              sx={{ border: 0 }}
            >
              <TableCell component="th" scope="row">
                <Token trend={trend} />
              </TableCell>
              <TableCell align="right">
                <Numbers trend={trend} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
