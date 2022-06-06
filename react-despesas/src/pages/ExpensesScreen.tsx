import { useEffect, useState } from "react";
import { getAllExpenses, IExpense } from "../api/api";
import { getCurrentData } from "../functions/dateFunctions";
import Box from "@mui/material/Box";
import { ExpensesTable, SelectVariants } from "../components";

const YEARS = ["2020", "2021", "2022", "2023"];

const MONTHS = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const ExpensesScreen = () => {
  const [expenses, setExpenses] = useState<IExpense[]>([]);
  const [date, setDate] = useState<string>("2021-01");

  useEffect(() => {
    Promise.all([getAllExpenses(date, "day")]).then(([expenses]) => {
      setExpenses(expenses);
    });
  }, [date]);

  const totalCost = expenses
    .reduce((total, expense) => {
      return (total += expense.valor);
    }, 0)
    .toFixed(2);

  return (
    <Box>
      <Box display="flex" align-items="center" justify-content="center">
        <SelectVariants selectLabel="Year" elementsList={YEARS} />
        <SelectVariants selectLabel="Month" elementsList={MONTHS} />
      </Box>
      <Box align-items="right" justify-content="right">
        <span style={{ fontFamily: "Roboto" }}>
          Despesa total: <strong>R$ ${totalCost}</strong>
        </span>
      </Box>
      <ExpensesTable expenses={expenses} />
    </Box>
  );
};

export default ExpensesScreen;