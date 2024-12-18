import { createHashRouter, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";



const NotImplementedYet = () => <h1>Not implemented yet</h1>;

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />
  },
  {
    path: "*",
    element: <Navigate to="/not-found" replace />,
  }
]);
export default router;

