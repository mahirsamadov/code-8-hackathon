import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const RequireAuth = () => {
  
    const auth = true

    return (
    <>
   <Outlet></Outlet>
    </>
  )
}

export default RequireAuth
