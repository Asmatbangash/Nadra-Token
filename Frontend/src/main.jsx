import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  About,
  Token,
  Contact,
  Login,
  SignUp,
  UserProfile,
  Setting,
} from "./Pages/Index.js";
import ContextProvider from "./Context/NadraTokenContext.jsx";
import Dashbaord from "./Pages/Dashbaord/Dashbaord.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/tokens", element: <Token /> },
      { path: "/contact-us", element: <Contact /> },
      { path: "/dashboard", element: <Dashbaord /> },
      { path: "/your-profile", element: <UserProfile /> },
      { path: "/setting", element: <Setting /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/sign-up", element: <SignUp /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>
);
