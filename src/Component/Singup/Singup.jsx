import React from 'react'
import "./Singup.css"
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
function Singup() {
  return (
    <div id='singup'
      onSubmit={(e)=>{
      alert("SignUp Successfully...👍🏻")}}
      >
        <form action=''>
      <span id='singuptitle'>Sign Up Page</span>
        <div className='list'>
      <label htmlFor='name'>UserName</label>
      <input type='text' id='name' required/>
      </div>
      <div className='list'>
      <label htmlFor='Email'>Email</label>
      <input type='text' id='email' required/>
      </div>
      <div className='list'>
      <label htmlFor='pass1'>Password</label>
      <input type='password' id='pass1' required/>
      </div>
      <div className='list'>
      <label htmlFor='conpass1'>Confirm Password</label>
      <input type='password' id='conpass1' required/>
      </div>
      <button id='singupbtn'>Sign Up <MdOutlinePersonAddAlt1 /></button>
      </form>
    </div>
  )
}

export default Singup
