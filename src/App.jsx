import { useState } from 'react'
import './App.css'
import Register from './Register';
import Login from './Login';

function App() {
  const [isRegistered,setisRegistered] = useState(false)

  return (
   <div>
    <h1>Notes Application</h1>
    {
      isRegistered ? (<Login setisRegistered={setisRegistered}/>) : (<Register setisRegistered={setisRegistered}/>)
    }
   </div>
  )
}



export default App
