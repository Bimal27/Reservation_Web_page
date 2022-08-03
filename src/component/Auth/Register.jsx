import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./register.css"

const Register = () => {
   const [credentials, setCredentials] = useState({
       name:'',
       email: '',
       phone:'',
       city: '',
       country:'',
       password: ''
   })

   const navigate = useNavigate()

   const handleChange = (e) =>{
       setCredentials({
           ...credentials,
           [e.target.id]: e.target.value
       })
   }

   const handleSubmit = async(e) =>{
         e.preventDefault()

         try {
             let response = await fetch('https://reservation-backend-api.herokuapp.com/register',{
                 method:'POST',
                 body: JSON.stringify(credentials),
                 headers:{
                    //  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDFlMDVkYTdmYmY2NWM0MzYxMmM4ZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTc5MjE2Mjl9.o-g3Ygc7RGMNy2hRKutClOHsi-CpgVDvMPjzRNVbgEo",
                     'Content-type': 'application/json'
                 }
                })
                 if(response.ok){
                   navigate("/login")
                     setCredentials({
                            name:'',
                            email: '',
                            phone:'',
                            city: '',
                            country:'',
                            password: ''
                     })
                 }else {
                alert('Something missing')
            }
             
         } catch (error) {
             console.log(error)
         }
   }

  return (
    <div className='container'>
        <div className="register">
            <h1>Registration</h1>
            <form onSubmit={handleSubmit}>
                  <label for="fname" className='label'>Name *</label><br />
                  <input type="text" id='name' className="name" value={credentials.name} name="name" placeholder='Enter your name' onChange={handleChange}/><br />
                  <label for="fname" className='label'>Email *</label><br />
                  <input type="text" id='email' className="name" value={credentials.email} name="email" placeholder='Enter your email' onChange={handleChange}/><br />
                  <label for="fname" className='label'>Phone Number *</label><br />
                  <input type="text" id='phone' className="name" value={credentials.phone} name="phone" placeholder='Enter your phone number' onChange={handleChange}/><br />
                  <label for="fname" className='label'>City *</label><br />
                  <input type="text" id='city' className="name" value={credentials.city} name="city" placeholder='Enter your city name' onChange={handleChange}/><br />
                  <label for="fname" className='label'>Country *</label><br />
                  <input type="text" id='country' className="name" value={credentials.country} name="country" placeholder='Enter your country name' onChange={handleChange}/><br />
                  <label for="lname" className='label'>Password *</label><br />
                  <input type="text" id='password' className="name"  value={credentials.password} name="password" placeholder='Enter your password' onChange={handleChange}/><br />
                  <button type='submit' className='button-submit'>Register</button>
            </form>
        </div>
    </div>
  )
}

export default Register