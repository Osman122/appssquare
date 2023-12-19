import React, { useContext, useEffect, useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import TokenContext from '../../Context/tokenContext';

export default function SideBar() {
    const [visible, setVisible] = useState(false);
    const{token,setToken}=useContext(TokenContext);
    
    

    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)} className=" md:w-20rem lg:w-30rem">
            <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
            <button className='btn btn-danger' onClick={()=>{setToken("")}}>logout</button>
            </Sidebar>
            <Button icon="pi pi-align-justify"  onClick={() => setVisible(true)}  />
        </div>
    )
}