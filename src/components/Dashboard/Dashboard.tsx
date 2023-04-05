import {useEffect, useState} from 'react'
import { Button } from 'react-bootstrap'
import Header from '../Header'
import Locations from '../Locations/DisplayLocations'

const Dashboard = () => {

  const authenticated = localStorage.getItem("token")
  if(!authenticated){window.location.href = "/login"}
  return (
    <div>
      <Header/>
      <div className='searchLocation'>
    <input placeholder='Search Location'/>
    <Button>Search</Button>
      </div>
    <Locations/>
    </div>
  )
}
export default Dashboard
