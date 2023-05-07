import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const RequireAuth = () => {
  
    const auth = false

    return (
    <>
   {
    auth ? <Outlet></Outlet> : <Navigate to="/signup" replace></Navigate>
   }
    </>
  )
}

export default RequireAuth
