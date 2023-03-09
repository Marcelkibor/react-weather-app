import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import {BoxArrowRight} from 'react-bootstrap-icons'
const Header = () => {
const user = localStorage.getItem("user")
const handleLogout = ()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    window.location.href = "/login"
  }
  return (
    <div>
<Navbar bg="primary" variant="dark">
<Container>
<Navbar.Brand href="#home">Weather Forecast</Navbar.Brand>
<Nav>
<Navbar.Text style={{color:'white'}}>
Logged in as: <b>{user&&user}</b>
</Navbar.Text>
<Nav.Link style={{color:'white'}} onClick={handleLogout}><BoxArrowRight size={20} color = "white"/>Log out</Nav.Link>
</Nav>
</Container>
</Navbar>
    </div>
  )
}

export default Header