import React from 'react';
import './App.css';
import { Login } from './components/Login';
import { LoginSuccess } from './components/LoginSuccess';
import Navbar from './components/Navbar';

import { AuthContext } from './context/AuthContext';
import { useContext } from "react";

function App() {
  const {token,setToken}= useContext(AuthContext);
  return (
    <div className="App">
      <Navbar/>
      {!token? <Login/> :null}  
      <LoginSuccess/>
    </div>
  );
}

export default App;
