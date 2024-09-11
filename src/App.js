import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createHashRouter,
} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/contacUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { Provider } from "react-redux";
import StoreApp from "./utils/StoreApp";
import Cart from "./components/Cart";

const AppLayout = () => {
  return (
    <Provider store={StoreApp}>
      <React.Fragment>
        <Header />
        <Outlet />
        <Footer />
      </React.Fragment>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId", //: - used for dynamic routing (resId is a param which differentiates the restaurants)
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
