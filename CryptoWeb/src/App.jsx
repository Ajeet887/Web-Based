import Transactions from "./pages/Dashboard/components/Transactions.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Support from "./pages/Support/Support.jsx";
import TransactionPage from "./pages/Transaction/TransactionPage.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
    },
    {
      path: "/transactions",
      element: <TransactionPage/>,
    },
    {
      path: "/support",
      element: <Support/>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
