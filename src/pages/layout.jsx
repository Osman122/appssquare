import React from 'react';
import { Route, Routes, Switch } from 'react-router-dom';
import SideBar from '../components/side-par/sideBar';
import Home from './home/home';
import About from './about/about';
import Loginform from './login/login';
import HomePageTemplate from './homeTemplate/homeTemplate';
import Notfound from './notFound';



const Layout = () => {
  
  return (
    
    <div>
    
      <div>
        
        <Routes>
          <Route path="/login" element={<Loginform/>} />
          <Route path='' element={<HomePageTemplate/>}>

            <Route path="/"  element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="*" element={<Notfound/>}/>
           </Route>
         
         
          
          
          </Routes>
      </div>
    </div>
  );
};

export default Layout;