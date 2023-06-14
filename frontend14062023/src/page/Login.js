import React, { useState } from 'react'
import signupanimation from '../images/signupanimation.gif'
import {BiHide, BiShow} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const[showPassword,setShowPassword] = useState(false)
  const[data,setData] = useState({
    email:"",
    password:"",
    
  });
  const navigate = useNavigate()
  console.log(data)
  const handleShowPassword =() =>{
    setShowPassword(preve => !preve)
  }
   
  const handleOnChange =(e)=>{
    const{name,value} =e.target
    setData((preve)=>{
      return{
        ...preve,
        [name] : value
      }
    })
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
      const {email,password} = data
      if(email&&password){
          alert("Welcome to your books world")
          navigate("/")
      }
      else {
        alert("please enter require field")
      }
     

  }
 



  return (
    <div className='p-3 md:p-4'>
       
    <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4'>
   
     <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow'>
    
        
        <img src={signupanimation} className='h=full' />
     </div>

     <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>

     <label htmlFor='email'>E-mail</label>
            <input 
            type={'email'} 
            id='email' 
            name='email' 
            value={data.email}
            onChange={handleOnChange}
            className='mt-1 mb-2 w-full bg-slate-200 px-1 py-1 rounded border-none outline-none focus-within:outline-blue-300'
            />  
     
        <label htmlFor='password'>Password</label>
        <div className='flex px-1 py-1 bg-slate-300 rounded mt-1 mb-2 w-full bg-slate-200 px-1 py-1 rounded border-none outline-none focus-within:outline-blue-300'>
            <input 
            type={showPassword?"text":'password'} 
            id='password' 
            name='password'
            value={data.password}
            onChange={handleOnChange} 
            className=' w-full bg-slate-200 border-none outline-none'/>
            <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}>{showPassword ?<BiShow/>:<BiHide/>}</span>
        </div>
       
        <button className='  w-full max-w-[120px] m-auto bg-red-700 hover:bg-green-700 cursor-pointer text-white text-xl font-bold tect-center p-1 rounded-full mt-4'>Login</button>
     </form>

     <p> Don't have account? <Link to={"/Signup"} className="text-red-500 underline">Signup</Link></p>
       

    </div>
</div>
  )
}

export default Login