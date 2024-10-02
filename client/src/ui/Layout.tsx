import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import { Toaster } from "react-hot-toast"

const Layout = ({children}:{ children: React.ReactNode}) => {
  return( <>
  <Header />
  {children}
  <Footer />
  <Toaster />
  </>
  )
}

export default Layout