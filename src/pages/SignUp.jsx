import React, { useState } from 'react'
import './SignUp.css'
import credentialsHandler from '../helpers/credentialHandler'
import { signUp } from '../services/authNetwork'
import { setToken } from '../helpers/tokenSettings'

const SignUp = () => {

    const [credentials, setCredentials] = useState({})

   const register = async ()=> {
   const token = await signUp(credentials)
   setToken(token)
   }

   console.log(credentials)

  return (
    <div className='sign-up'>
      <input onChange={credentialsHandler(setCredentials)} type="text" name="finCode" placeholder='Fin kod'/>
      <input onChange={credentialsHandler(setCredentials)} type="number" name="serialNumber" placeholder='Seria Nömrəsi'/>
      <input onChange={credentialsHandler(setCredentials)} type="number" name="phoneNumber" placeholder='Mobil Nömrə' id="" />
      <input onChange={credentialsHandler(setCredentials)} type="password" name="password" placeholder='Şifrə' id="" />
      <button onClick={register}>Sign up</button>
    </div>
  )
}

export default SignUp
