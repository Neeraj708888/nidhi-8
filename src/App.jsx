import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import LoginBtn from "./components/portallogin/LoginBtn";
// import AdminLogin from "./components/portallogin/AdminLogin";
import Login from "./components/portallogin/Login";
import Register from "./components/userlogin/Register";
import Signup from "./components/userlogin/Signup";
import PrivateRoutes from "./components/privateroute/PrivateRoutes";
import Dashboard from "./components/dashboard/Dashboard";
import Mainsetting from "./components/settingss/Mainsetting";

function AppLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LoginBtn />,
      },
      {
        path: "/login",
        element: <PrivateRoutes />,
      },
      {
        path: "/*",
        element: <PrivateRoutes />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "settings/editprofile",
            element: <Mainsetting />
          },
          {
            path: "dashboard/register",
            element: <Signup />,
          },
        ],
      },
      {
        path: "/forgetpassword",
        element: <Login />,
      },
      {
        path: "/otpvarification",
        element: <Register />,
      },
      
    ],
  },
]);
export default appRouter;
