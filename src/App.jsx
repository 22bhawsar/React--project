import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './Component/Home/Home'
import Login from './Component/Home/Login/Login'
import SignUp from './Component/Home/SignUp/SignUp'
import { useEffect, useState } from 'react'
import { auth } from './Firebase';

function App() {
  const [userName,setUserName] =useState("");

 useEffect(()=>{
   auth.onAuthStateChanged((user)=>{
    if(user){
      setUserName(user.displayName)
    }
    else setUserName("");
   })

 },[]);
  return (
    <>
      <div>
          <Router>
            <Routes>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<SignUp/>}/>
              <Route path='/' element={<Home name={userName}/>}/>

            </Routes>
          </Router>

      


        </div>
    </>
  )
}

export default App; 
