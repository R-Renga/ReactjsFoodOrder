import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import React, {lazy,Suspense,useContext, useState} from "react";
import Profile from "./components/Profile";
import ProfileFunction from "./components/ProfileFunction";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import Signup from "./components/Signup";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import Instamart from "./components/Instamart";
import UserContext from "./utils/UserContext";
import store from "./utils/store";
import { Provider } from "react-redux"
import Cart from "./components/Cart";


const AppLayout = () => {
  const [user, setUser] = useState({
    name: "raja",
    email:"raja@gmail.com"
})

  return (
    <Provider store={store}>
      <UserContext.Provider value={{
        user: user,
        setUser:setUser,
      }}>
      <Header />
      <Outlet />
      <Footer />
      </UserContext.Provider>
      
    </Provider>
  );
};


// const Instamart = lazy(() => import("./components/Instamart"))
const About = lazy(()=> import("./components/Aboutus"))

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "about", // parentPath/{path} => localhost:1244/about
        element:<Suspense fallback={<Shimmer/>}><About /></Suspense>
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "contact",
        element: <Contact />,
        children: [
          {
            path: "profile", // parentPath/{path} => localhost:1244/about/profile
            element: <Profile />,
          }
        ],
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurentMenu />,
      },
      {
        path: "instamart",
        element:<Instamart/>
      }, {
        path: "cart",
        element: <Cart/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

export default AppLayout;
