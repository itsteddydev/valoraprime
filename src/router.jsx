import { createHashRouter, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import CalculatorForm from "./adapters/ui/calculator/CalculatorForm";
import NotFound from "./pages/NotFound";



const NotImplementedYet = () => <h1>Not implemented yet</h1>;

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/calculateprice",
        element: <CalculatorForm />,
      },
    ]
  },
  {
    path: "not-found",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <Navigate to="/not-found" replace />,
  },
]);
export default router;

