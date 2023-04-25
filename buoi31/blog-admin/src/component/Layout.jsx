import React from 'react'
import Sizebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <Sizebar />
        <div className="wrapper-container">
            <Header />
            <Outlet />
        </div>
    </div>
  )
}

export default Layout