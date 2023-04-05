import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './components/authentication/Login'
import Dashboard from './components/Dashboard/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProtectedRoutes from './components/authentication/ProtectedRoutes'
import Register from './components/authentication/Register'
function App() {

  return (
    <Router>
      <Routes>
        <Route element ={<ProtectedRoutes/>}>
        <Route path = '/' element ={<Dashboard/>}/>
        </Route>
        <Route path = '/login' element ={<Login/>}/>
        <Route path = '/register' element ={<Register/>}/>
      </Routes>
    </Router>
  )
}
export default App
