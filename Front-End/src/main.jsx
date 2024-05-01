import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import App from "./App";
import Home from './Page/Home';
import Login from './Page/Login ';
import Forgetpassword from './Page/Forgetpassword';
import SignUp from './Page/SignUp';

const route = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children : [
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
      ] }
   
  ]);






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
     <RouterProvider  router={route} />
  </React.StrictMode>,
)
