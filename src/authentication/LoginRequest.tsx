const LoginRequest = async(username:string,password:string) => {
let response = {
error: '',
};
if (username.trim().length !== 0 && password.trim().length !== 0) {
const requestBody = {username:username,password:password}
try {
fetch("auth/login",{
headers:{
    "Content-Type":"application/json",   
},
method:"POST",
body: JSON.stringify(requestBody)
}).then((response)=>(response.json())).then(data=>{
if(data.error){
    console.log("Error:",data.error)
}else{
    const token = localStorage.setItem("token",data.token)
    location.href = "/"
}
})
}
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

export default LoginRequest