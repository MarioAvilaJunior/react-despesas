import { getCurrentData } from "./functions/dateFunctions";
import { Routes, Route } from "react-router-dom";
import ExpensesScreen from "./pages/ExpensesScreen";

const App = () => {
  //const yearAndMonth = getCurrentData();

  return (
    <Routes>
      <Route
        path={`despesas/:yearAndMonth`}
        element={<ExpensesScreen />}
      ></Route>
    </Routes>
  );
};

export default App;
