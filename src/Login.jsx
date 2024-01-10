import React, { useState } from 'react'


const Login = ({setisRegistered}) => {
    const [login,setlogin] = useState({
        username:'',
        password:''    })
    const handleSubmit =async(e)=>{
        e.preventDefault();
        const loginBody = {
            username:login.username,
            password:login.password
        }
        const res = await fetch('http://localhost:3001/login',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(loginBody)
        })
        const data = await res.json()

        if(res.status===200){
            console.log(data)
            setlogin({
                username:'',
                password:''
            })
        }
        else{
            setlogin({
                username:'',
                password:''
            })
           
            console.log("Couldn't Login,Invald User:(")
        }
    }
  return (
    <div>
        <form action="submit" className='form' onSubmit={handleSubmit}>
            <input type="email" placeholder='Email..' required value={login.username} onChange={(e)=>setlogin({...login,username:e.target.value})} />
            <input type="text" placeholder='Password..' required value={login.password} onChange={(e)=>setlogin({...login,password:e.target.value})} />
            <button>Login</button>
        </form>
        <p>Not registered? <button onClick={()=>setisRegistered(false)}>Register</button></p>
    </div>
  )
}

export default Login