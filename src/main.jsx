import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import MasterPage from "../src/Pages/masterPage";
import ProductList from "./Pages/ProductList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Banner from "./Componets/Banner";
import ProductView from "./Pages/ProductView";
import UserRegister from "./Pages/UserRegister";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MasterPage />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Banner />
            <ProductList />
          </>
        ),
      },
      {
        path: "/Products/:id",
        element: (
          <>
            <ProductView />
          </>
        ),
      },
      {
        path: "/UserRegistration",
        element: (
          <>
            <UserRegister />
          </>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
