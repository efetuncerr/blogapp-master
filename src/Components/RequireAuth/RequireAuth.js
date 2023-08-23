import React from 'react'
import { useAuth } from '../../context/authContext'
import { Navigate } from 'react-router-dom'

const RequireAuth = ({children}) => {

    const auth = useAuth()

    if(!auth.currentUser){

        return  <Navigate to ="/login"/>
    }
  return (
   children
  )
}

export default RequireAuth