import { getCurrentData } from "./functions/dateFunctions"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExpensesScreen from "./pages/ExpensesScreen";

const App = () => {
  const yearAndMonth = getCurrentData()

  return (        
  <ExpensesScreen />
  )
}

export default App
