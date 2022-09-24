import React, { useState } from 'react'

export default function Register1() {
   const [name,setName]=useState('');
   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');
   const [cpassword,setcPassword]=useState('');
  return (
    <div>

    <div className="row justify-content-center mt-5">
    <div className="col-md-5 mt-5 text-left">
       <h2 className="text-center m-2" style={{fontSize:"35px"}}>Register Form </h2>
        <input type="text" placeholder='name' className='form-control' value={name} onChange={()=>setName(e.target.value)}/>
        <input type="text" placeholder='email' className='form-control' value={email} onChange={()=>setEmail(e.target.value)}/>
        <input type="text" placeholder='password' className='form-control' value={password} onChange={()=>setPassword(e.target.value)}/>
        <input type="text" placeholder='conform password' className='form-control' value={cpassword} onChange={()=>setcPassword(e.target.value)}/>
      </div>
      </div>
    </div>
  )
}
