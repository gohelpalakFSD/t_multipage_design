import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <header className='bg-black text-white py-4'>
        <div className='flex justify-between  px-11'>
            <div>
                <nav>
                    <ul className='flex items-center'>
                        <li className='px-3'>   
                            <Link to={"/"} className='font-bold italic text-xl'>Okcupid</Link>
                        </li>
                        <li  className='px-3'>
                            <Link to={"/carreer"}>Carreer</Link>
                        </li>
                        <li  className='px-3'>
                            <Link to={"/contact"}>Contact</Link>
                        </li>
                        <li  className='px-3'>
                            <Link to={"/blog"}>Blog</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <button className='border-2 px-3 mx-2'>LOGIN</button>
                <button className='border-2 px-3 mx-2 bg-white text-black'>JOIN NOW</button>
            </div>
        </div>
      </header>
    </>
  )
}

export default Navbar