import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import LoginRequest from './LoginRequest';
import '../../App.css'


const Login = () => {
  const [formData,setFormData] = useState({
    username:'',
    password:''
  })
  const {username,password} = formData;
  const onChange = (e: { target: { name: any; value: any; };
  })=>{setFormData({...formData, [e.target.name]:e.target.value})}

  const handleLogin = async() =>{
  const error = await LoginRequest(username,password)
  if(error){
    alert(error)
  }}
  return (
 <Container style = {{display:'flex'}}>
<div className='loginSide'></div>
<div className='loginDiv'>
<Form >
  <h5>Login</h5><br></br>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={onChange} type="username" autoSave='true' autoComplete='true' placeholder="Username" name='username' value={username}/>
      </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Control onChange={onChange} type="password" autoSave='true'placeholder="Password" name='password' value={password} />
  </Form.Group>
    <Button variant="success" onClick={handleLogin}>Login
      </Button>&nbsp;&nbsp;<span>Or &nbsp;&nbsp; <a style = {{textDecoration:'none'}}href='/register'>Register</a></span>
    </Form>
</div>
  </Container> 
)
}
export default Login
