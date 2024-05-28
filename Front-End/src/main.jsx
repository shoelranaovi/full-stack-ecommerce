import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./Page/Home";
import Login from "./Page/Login ";
import Forgetpassword from "./Page/Forgetpassword";
import SignUp from "./Page/SignUp";
import { Provider } from "react-redux";
import { store } from "./store/store";
import AdminPannel from "./Page/Admin-pannel";
const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "forgetpassword",
        element: <Forgetpassword />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "admin-pannel",
        element: <AdminPannel />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
  </React.StrictMode>
);
