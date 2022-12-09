import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../components/context/AuthContext'

const Privaterouter = () => {
  const{currentUser}=useContext(AuthContext)
  return (
    <div>
      {
        currentUser?.email ? <Outlet/> : <Navigate to="/login" />
      }
    </div>
  )
}

export default Privaterouter