import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../components/user/LoginPage";
import RegistrationSelection from "../pages/RegistrationSelection";
import UserRegistrationPage from "../pages/User/UserRegistrationPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    errorElement: <ErrorPage />,
  },
  {
    path: "Login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "Register",
    element: <RegistrationSelection />,
    errorElement: <ErrorPage />,
  },
  {
    path: "Register/user",
    element: <UserRegistrationPage></UserRegistrationPage>,
    errorElement: <ErrorPage />,
  },
]);
