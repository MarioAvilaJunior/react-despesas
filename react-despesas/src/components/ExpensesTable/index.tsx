import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IExpense } from "../../api/api";

interface IExpensesTableProps {
  expenses: IExpense[];
}

const ExpensesTable = (props: IExpensesTableProps) => {
  const { expenses } = props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Expense</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Days</TableCell>
            <TableCell align="right">Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map((expense) => (
            <TableRow
              key={expense.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {expense.descricao}
              </TableCell>
              <TableCell align="right">{expense.categoria}</TableCell>
              <TableCell align="right">{expense.dia}</TableCell>
              <TableCell align="right">{expense.valor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { ExpensesTable };
