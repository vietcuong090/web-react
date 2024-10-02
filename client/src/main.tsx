import React, { Profiler } from 'react'
import  ReactDOM  from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Layout from './ui/Layout.tsx'
import {Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Product from './pages/Product.tsx'
import Category from './pages/Category.tsx'
import Profile from './pages/Profile.tsx'
import Cart from './pages/Cart.tsx'
import Favorite from './pages/Favorite.tsx'
import Order from './pages/Order.tsx'
import Success from './pages/Success.tsx'
import Cancel from './pages/Cancel.tsx'
import NotFound from './pages/NotFound.tsx'

const RouterLayout = ()=>{
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
};

const router = createBrowserRouter([{
  path:"/",
  element: <RouterLayout />,
  children: [
    {
      path: "/",
      element: <App />
    },
    {
      path: "/product",
      element: <Product />
    },
    {
      path: "/product/:id",
      element: <Product />
    },
    {
      path: "/category",
      element: <Category />
    },
    {
      path: "/catgory/:id",
      element: <Category />
    },
    {
      path: "/profile",
      element: <Profile />
    },
    {
      path: "/profile/:id",
      element: <Profile />
    },
    {
      path: "/cart",
      element: <Cart />
    },
    {
      path: "/favorite",
      element: <Favorite />
    },
    {
      path: "/order",
      element: <Order />
    },
    {
      path: "/success",
      element: <Success />
    },
    {
      path: "/cancel",
      element: <Cancel />
    },
    {
      path: "*",
      element: <NotFound />
    },
  ]

}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
