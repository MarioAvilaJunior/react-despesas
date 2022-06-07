import { useEffect, useState } from "react";
import { getAllExpenses, IExpense } from "../api/api";
import { getCurrentData } from "../functions/dateFunctions";
import Box from "@mui/material/Box";
import { ExpensesTable, SelectVariants } from "../components";
import { useParams, useNavigate } from "react-router-dom";

const YEARS = ["2020", "2021"];

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
  const params = useParams<{ yearAndMonth: string }>();
  const { yearAndMonth } = params as { yearAndMonth: string };
  const navigate = useNavigate();

  const [year, month] = yearAndMonth.split("-");
  const yearIndex = YEARS.findIndex((element) => {
    return element === year;
  }).toString();

  useEffect(() => {
    Promise.all([getAllExpenses(yearAndMonth, "day")]).then(([expenses]) => {
      setExpenses(expenses);
    });
  }, [yearAndMonth]);

  const totalCost = expenses
    .reduce((total, expense) => {
      return (total += expense.valor);
    }, 0)
    .toFixed(2);

  const navigateToURL = (URL: string) => {
    console.log(URL);
    navigate(URL);
  };

  return (
    <Box>
      <Box display="flex">
        <SelectVariants
          selectLabel="Year"
          elementsList={YEARS}
          defaultValue={yearIndex}
          yearAndMonth={yearAndMonth}
          navigateToURL={navigateToURL}
        />
        <SelectVariants
          selectLabel="Month"
          elementsList={MONTHS}
          defaultValue={(parseInt(month) - 1).toString()}
          yearAndMonth={yearAndMonth}
          navigateToURL={navigateToURL}
        />
        <Box flex="1" />
        <span style={{ fontFamily: "Roboto" }}>
          Despesa total: <strong>R$ ${totalCost}</strong>
        </span>
      </Box>
      <ExpensesTable expenses={expenses} />
    </Box>
  );
};

export default ExpensesScreen;
