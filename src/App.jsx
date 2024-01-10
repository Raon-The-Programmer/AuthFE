import { useState } from 'react'
import './App.css'
import Register from './Register';
import Login from './Login';
import Forgotpassword from './Forgotpassword';

function App() {
  const [isRegistered,setisRegistered] = useState(false)
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  return (
   <div>
    <h1>Notes Application</h1>
    {
      isRegistered ? (<Login setisRegistered={setisRegistered} showForgotPassword={showForgotPassword} setShowForgotPassword={setShowForgotPassword}/>) : (<Register setisRegistered={setisRegistered}/>)
    }
   </div>
  )
}



export default App
