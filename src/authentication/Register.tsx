import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
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
      console.log(`Error ${error}`)
    }
    }
  return (
    <div style={{position:'absolute',top:'50%',left:'50%',transform: 'translate(-50%, -50%)'}}>
          <h5>Register</h5>
<Form>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Username</Form.Label>
<Form.Control onChange={onChange} type="username" placeholder="Enter email" name='username' value={username}/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control onChange={onChange} type="text" placeholder="Password" name='password' value={password} />
</Form.Group>
<Button variant="primary" onClick={handleRegister}>
Register
</Button><span>Or <a style = {{textDecoration:'none'}}href='/login'>Login</a></span>
</Form>
    </div>
  )
}

export default Register