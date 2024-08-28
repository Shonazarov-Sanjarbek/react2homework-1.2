import { useStateValue } from '@/context'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function Auth() {
    let [{token}] = useStateValue()
  return token ?
    <Outlet/>
    :
    <Navigate replace to={"/login"}/>
}

export default Auth
