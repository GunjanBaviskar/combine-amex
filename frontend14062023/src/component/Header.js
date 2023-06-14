import React, { useState } from 'react'
import bk from '../images/bk.png'
import { Link } from 'react-router-dom'
import { FaRegUserCircle } from "react-icons/fa"
import { BsCartFill } from "react-icons/bs"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const handleShowMenu =()=>{
    setShowMenu(preve => !preve)
  }
  return (
    <header className='fixed shadow-md w-full h-16 px-2 p-3 md:px-4 z-50 bg-white '   >
      {/*Desktop*/}
      <div className='flex item-center h-full justify-between  '>
        <Link to={""}>
          <div className='h-12'>
            <img src={bk} className='h=full' />
          </div>

        </Link>

        <div className="flex item-center gap-4 md:gap-7" >
          <nav className="flex item-center gap-4 md:7 text-base md:text-lg"  >
            <Link to={""}>Home</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>

          </nav>

          <div className=" cart text-2xl text-slate-600 relative">
            <BsCartFill />
            <div className='absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center '> 0</div>
          </div>

          <div className="text-2xl text-slate-600" onClick={handleShowMenu}>
            <div className='text-2xl cursor-pointer '>
              <FaRegUserCircle />
            </div>
            {
              showMenu && <div className='absolute right-2 bg-white py-1 px-1 shadow drop-shadow-md flex flex-col'>
                <Link to={"Login"} className='whitespace-nowrap cursor-pointer'>Login</Link>
                <Link to={"NewBooks"} className='whitespace-nowrap cursor-pointer'>NewBooks</Link>
              </div>


            }
          </div>
        </div>


      </div>
      {/*Mobile*/}
    </header>
  )
}

export default Header