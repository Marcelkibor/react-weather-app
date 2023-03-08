import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './authentication/Login'
import Dashboard from './components/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from './authentication/Register'
function App() {

  return (
    <Router>
      <Routes>
        <Route path = '/' element ={<Dashboard/>}/>
        <Route path = '/login' element ={<Login/>}/>
        <Route path = '/register' element ={<Register/>}/>
      </Routes>
    </Router>
  )
}
export default App
