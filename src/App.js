import React from "react";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Profile from "./pages/profile/profile";

import { createBrowserRouter, Outlet,Navigate, RouterProvider } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import Rightbar from "./components/rightBar/Rightbar";


const App = () => {

  const currentUser =true;

  const LayOut = () => {
    return (
      <div  >
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{width:"50%"}}><Outlet /></div>
          <Rightbar />
        </div>
      </div>
    );
  };

  const ProtectedRoute =({children}) => {
    if (!currentUser) {
      return <Navigate to="/login"/>
    }
    return children 
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><LayOut /></ProtectedRoute>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <>
      {/* <Login/> 
     <Register /> */}
      <RouterProvider router={router} />
    </>
  );
};
export default App;
