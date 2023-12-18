import React, { useEffect, useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
  MDBValidation,
  MDBValidationItem,
}
from 'mdb-react-ui-kit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TokenContext from '../../Context/tokenContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function Loginform() {

  const navigate =useNavigate()
  
  const{token,setToken}=useContext(TokenContext)
  const showToastMessage = () => {
    toast.success("Successfully loged in ", {
      position: toast.POSITION.TOP_CENTER,
      
    })};
  
  const showFailToastMessage = () => {
      toast.error("try again ", {
        position: toast.POSITION.TOP_CENTER,
        
      })};  
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
    
  });
  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const authenticate = () => {
        
    const axios = require('axios');
    
    let data = formValue
  
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://clinic-api.appssquare.com/api/admin/login',
     
      data : data
      
    };
   
    
    axios.request(config)
    .then((response) => {
      setToken(response.data.token)
      showToastMessage()
      
    })
    .catch((error) => {
      console.log(error);
      showFailToastMessage()
    });
    
    
  };
  useEffect(()=>{if (token !=="") {
    navigate("/")
    
  }},[token])

  return (
    <MDBContainer fluid>
      <ToastContainer autoClose={1500}/>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>
              <MDBValidation>
                
                <MDBValidationItem feedback="enter a valid email" invalid>
                <MDBInput wrapperClass='mb-4 w-100' label='Email address'  type='email' size="lg" 
                 required
                  id='validationCustom01'
                  value={formValue.email}
                  onChange={onChange}
                  name='email'/>
                  
                </MDBValidationItem>
              
               <MDBValidationItem feedback="enter valid password" invalid>
               <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"  required
               value={formValue.password}
               name='password'
               onChange={onChange}/>

               </MDBValidationItem>
               </MDBValidation>

               

              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

              <MDBBtn size='lg' onClick={authenticate}>
                Login
              </MDBBtn>

              <hr className="my-4" />

              <MDBBtn className="mb-2 w-100" size="lg" style={{backgroundColor: '#dd4b39'}}>
                <MDBIcon fab icon="google" className="mx-2"/>
                Sign in with google
              </MDBBtn>

              <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
                <MDBIcon fab icon="facebook-f" className="mx-2"/>
                Sign in with facebook
              </MDBBtn>
             

            </MDBCardBody>

          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Loginform;