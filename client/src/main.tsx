import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Cancel from "./pages/Cancel.tsx";
import Cart from "./pages/Cart.tsx";
import Category from "./pages/Category.tsx";
import Favorite from "./pages/Favorite.tsx";
import NotFound from "./pages/NotFound.tsx";
import Order from "./pages/Order.tsx";
import Product from "./pages/Product.tsx";
import Profile from "./pages/Profile.tsx";
import Success from "./pages/Success.tsx";
import Layout from "./ui/Layout.tsx";

const RouterLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/catgory/:id",
        element: <Category />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/cancel",
        element: <Cancel />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
