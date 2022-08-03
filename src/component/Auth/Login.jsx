import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.css"

const Login = () => {
   const [credentials, setCredentials] = useState({
       email: '',
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
             let response = await fetch('https://reservation-backend-api.herokuapp.com/login',{
                 method:'POST',
                 body: JSON.stringify(credentials),
                 headers:{
                    //  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDFlMDVkYTdmYmY2NWM0MzYxMmM4ZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTc5MjE2Mjl9.o-g3Ygc7RGMNy2hRKutClOHsi-CpgVDvMPjzRNVbgEo",
                     'Content-type': 'application/json'
                 }
                })
                 if(response.ok){

                const data = await response.json()

                console.log(data)

            //    localStorage.setItem("accessToken", data.token)

                   navigate("/")
                     setCredentials({
                         email: '',
                         password:''
                     })
                 }else {
                alert('Invalid Credentials')
            }
             
         } catch (error) {
             console.log(error)
         }
   }

  return (
    <div className='container'>
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                  <label for="fname" className='label'>Email</label><br />
                  <input type="text" id='email' className="name" value={credentials.email} name="email" placeholder='Enter your email' onChange={handleChange}/><br />
                  <label for="lname" className='label'>Password</label><br />
                  <input type="text" id='password' className="name"  value={credentials.password} name="password" placeholder='Enter your password' onChange={handleChange}/><br />
                  <button type='submit' className='button-submit'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login