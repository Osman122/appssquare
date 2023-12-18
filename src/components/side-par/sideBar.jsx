import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

export default function SideBar() {
    const [visible, setVisible] = useState(false);

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
            </Sidebar>
            <Button icon="pi pi-align-justify"  onClick={() => setVisible(true)}  />
        </div>
    )
}