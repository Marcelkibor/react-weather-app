import React from 'react'
import { Button } from 'react-bootstrap'
import Header from './Header'
import Locations from './Locations'

const Dashboard = () => {
  const authenticated = localStorage.getItem("token")
  if(!authenticated){window.location.href = "/login"}
  return (
    <div>
      <Header/>
      <Locations/>
    </div>
  )
}

export default Dashboard