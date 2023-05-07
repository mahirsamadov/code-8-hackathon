import React from 'react'
import './SignUp.css'

const SignUp = () => {
  return (
    <div className='sign-up'>
      <input type="text" name="fincode" placeholder='Fin kod'/>
      <input type="number" name="serialNumber" placeholder='Seria Nömrəsi'/>
      <input type="number" name="phoneNumber" placeholder='Mobil Nömrə' id="" />
      <input type="password" name="password" placeholder='Şifrə' id="" />
      <button>Sign up</button>
    </div>
  )
}

export default SignUp
