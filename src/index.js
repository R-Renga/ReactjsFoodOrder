import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/Aboutus";
import Contact from "./components/Contact";
import React, { Children } from "react";
import Profile from "./components/Profile";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import Signup from "./components/Signup";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "about", // parentPath/{path} => localhost:1244/about
        element: <About />,
        children: [
          {
            path: "profile", // parentPath/{path} => localhost:1244/about/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "restaurant/:resId",
        element: <RestaurentMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

export default AppLayout;
