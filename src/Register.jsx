import React, { useState } from 'react'


const Register = ({setisRegistered}) => {
    const [registrationdata,setregistrationdata] = useState({
        username:'',
        name:'',
        password:''
      })
      const handleSubmit = async(e)=>{
        e.preventDefault();
        const regBody={
          username:registrationdata.username,
          name:registrationdata.name,
          password:registrationdata.password
        }
        
        const res = await fetch('http://localhost:3001/users',{
          method:'POST',
          headers:{
          'Content-Type':'application/json'},
          body:JSON.stringify(regBody)
        })
        const data = await res.json()
        if(res.status===200){
          console.log("User Created!")
          setregistrationdata({
            username:'',
            name:'',
            password:''
          })
          setisRegistered(true)
          console.log(data)
      
        }else{
          console.log("Error while creating user:(")
          console.log(data)
        }}
  return (
    <div> <div>
    <form action="submit" onSubmit={handleSubmit} className='form'>
      <input type="email" placeholder='Email..' required  value={registrationdata.username} onChange={(e)=>setregistrationdata({...registrationdata,username:e.target.value})}/>
      <input type="text" placeholder='Full Name..' required value={registrationdata.name} onChange={(e)=>setregistrationdata({...registrationdata,name:e.target.value})}/>
      <input type="text" placeholder='Password..' required value={registrationdata.password} onChange={(e)=>setregistrationdata({...registrationdata,password:e.target.value})}/>
      <button>Register</button>
    </form>
    <p>Already Registered? <button onClick={()=>setisRegistered(true)}>Login</button></p>
  </div></div>
  )
}

export default Register