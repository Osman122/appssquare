import { Outlet } from "react-router-dom";
import SideBar from "../../components/side-par/sideBar";
import { useContext, useEffect } from "react";
import TokenContext from '../../Context/tokenContext';
import { useNavigate } from 'react-router-dom';

const HomePageTemplate= () => {
    const navigate =useNavigate()

    const{token,setToken}=useContext(TokenContext)
    useEffect(()=>{if (token ==="") {
        navigate("/login")

      }},[token])
    return (
        <div className="">
            <SideBar/>
            <Outlet />
        </div>
    
      

    )
  }
  
  export default HomePageTemplate ;