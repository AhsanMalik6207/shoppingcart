import React, { useState } from 'react'

export default function Register1() {
   const [name,setName]=useState('');
   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');
   const [cpassword,setcPassword]=useState('');

   function register(e){
     if(password != password){
      alert("password not match")
     }else{
      const user ={
        name,
        email,
        password
      }
      console.log(user)
     }
   }
  return (
    <div>

    <div className="row justify-content-center mt-5">
    <div className="col-md-5 mt-5 text-left">
       <h2 className="text-center m-2" style={{fontSize:"35px"}}>Register Form </h2>
        <input type="text" placeholder='name' className='form-control' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="text" placeholder='email' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder='password' className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <input type="text" placeholder='conform password' className='form-control' value={cpassword} onChange={(e)=>setcPassword(e.target.value)}/>
        <button className='btn mt-3' onClick={register}>Register</button>
      </div>
      </div>
    </div>
  )
}
