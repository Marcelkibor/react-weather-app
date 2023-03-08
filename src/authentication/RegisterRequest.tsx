const RegisterRequest = async(username:string,password:string) => {
  let response = {
error: '',
};
if (username.trim().length !== 0 && password.trim().length !== 0) {
const requestBody = {username:username,password:password}
try {
fetch("auth/register",{
    headers:{
        "Content-Type":"application/json",   
    },
    method:"POST",
    body: JSON.stringify(requestBody)
    }).then((Response)=>Promise.all([Response.json(),Response.headers])).then(([requestBody,headers])=>{
    window.location.href = "/login"
})}
catch (e) {
    console.log(e)
    response.error = 'Network error';
}
    } 
else {
    response.error = 'Please fill in the form';
    }
return response.error
  }
  
  export default RegisterRequest