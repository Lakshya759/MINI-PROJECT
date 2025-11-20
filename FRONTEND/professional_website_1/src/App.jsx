import React from 'react'
import { Routes, Route } from "react-router-dom";
import Hero from './components/Hero.jsx'
import Login from './components/Login.jsx'
import Signup from "./components/Signup.jsx"
import Home from './Home.jsx'
import AskQuestion from './mainPageComponents/AskQuestion.jsx'
import SingleQuestion from './mainPageComponents/SingleQuestion.jsx'
import User from './mainPageComponents/User.jsx';
import Sidebar from "./mainPageComponents/Sidebar.jsx"
const App = () => {
  return (
    
    <Routes>
      <Route path="/" element={<Hero/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/question/:id" element={<SingleQuestion />} />
      <Route path="/askQuestion" element={<AskQuestion />} /> 
      <Route path="/user" element={<User />} /> 
      <Route path="/tags" element={<Sidebar />} /> 


    </Routes>
    
)}

export default App