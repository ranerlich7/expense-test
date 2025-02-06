import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth";
import ExpenseTracker from "./pages/expense-tracker";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/expense" element={<ExpenseTracker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
