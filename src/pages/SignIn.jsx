import React, { useState } from 'react'
import './SignIn.css'
import credentialsHandler from '../helpers/credentialHandler'
import { signIn } from '../services/authNetwork'



const SignIn = () => {

    const [credentials, setCredentials] = useState({}) 

    const login = ()=>{
        signIn(credentials)
    }

  return (
    <div className='sign-in'>
      <input onChange={credentialsHandler(setCredentials)} type="tel" name="phoneNumber" id="" />
      <input onChange={credentialsHandler(setCredentials)} type="password" name="password" id="" />
      <button onClick={login}>Daxil Ol</button>
    </div>
  )
}

export default SignIn
