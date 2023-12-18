import './App.css';
import LoginForm from './pages/login/login';
import Home from './pages/home/home';
import Layout from './pages/layout';
import TokenContext from './Context/tokenContext';
import { useState } from 'react';

function App() {
  const[token,setToken]=useState("")

  return (
  <>
  <TokenContext.Provider value={{token,setToken}}>
 <Layout/>
 
 </TokenContext.Provider>
  
  </>
 
  );
}

export default App;
