import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import RegisterRequest from './RegisterRequest';

const Register = () => {

const [formData,setFormData] = useState({
    username:'',
    password:''
})
const {username,password} = formData;
const onChange = (e: { target: { name: any; value: any; };
})=>{setFormData({...formData, [e.target.name]:e.target.value})}
    
const handleRegister = async(e: { preventDefault: () => void; })=>{
  e.preventDefault()  
  const error = await RegisterRequest(username,password)
    if(error){
      alert(error)
    }
    }
  return (
<Container style = {{display:'flex'}} >
  <div className='loginSide'></div>
  <div className='loginDiv'>
  <Form>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Username</Form.Label>
<Form.Control onChange={onChange} type="username" placeholder="Enter username" name='username' value={username}/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control onChange={onChange} type="text" placeholder="Enter password" name='password' value={password} />
</Form.Group>
<Button variant="primary" onClick={handleRegister}>
Register
</Button>&nbsp;&nbsp;<span>Or <a style = {{textDecoration:'none'}}href='/login'>Login</a></span>
</Form>
  </div>
</Container>
  )
}

export default Register