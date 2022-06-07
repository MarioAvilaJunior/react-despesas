import { getCurrentData } from "./functions/dateFunctions";
import { Routes, Route, Navigate } from "react-router-dom";
import ExpensesScreen from "./pages/ExpensesScreen";

const App = () => {
  //const yearAndMonth = getCurrentData();

  return (
    <Routes>
      <Route path={`despesas/:yearAndMonth`} element={<ExpensesScreen />} />
      <Route path="/" element={<Navigate to="despesas/2020-06" replace />} />
    </Routes>
  );
};

export default App;
