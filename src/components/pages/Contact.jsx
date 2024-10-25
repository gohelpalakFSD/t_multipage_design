import React from 'react'
import { IoIosSearch } from "react-icons/io";

function Contact() {
  return (
    <>
      <div>
        <div className="container mx-auto">
          <div className='flex justify-between py-5'>
            <h1>OKCUPID</h1>
            <a href='#' className='text-blue-600'>Contact us</a>
          </div>
        </div>
      </div>
      {/* <div className="bg-[url(https://images.pexels.com/photos/15530126/pexels-photo-15530126/free-photo-of-bottle-of-red-wine-and-glasses-on-wooden-table-valentines-day-stll-life.jpeg)] h-screen bg-cover flex items-center justify-center"> */}
      <div className="bg-[url(https://images.pexels.com/photos/5722995/pexels-photo-5722995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] h-screen bg-cover flex items-center justify-center" style={{ height: "600px" }} >
        <div className='flex items-center justify-center relative'>
          {/* <div className='text-center max-w-3xl'>
       <h1 className='text-7xl text-white drop-shadow-lg mb-6' style={{ textShadow: "-2px 2px  pink",}}>YOU MIGHT WANT TO WORK HERE. </h1>
       <p className='font-medium text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus numquam magnam odit qui repudiandae rem, nostrum quia facere voluptates sit inventore amet iure perferendis, nemo deleniti quo natus quos neque.</p>
       <div>
       </div>
     </div> */}
          <input type="text" placeholder='Search' className='pe-80 ps-9 rounded-2xl py-1' />
          <IoIosSearch className='absolute left-3' />
        </div>
      </div>
      <div className="container mx-auto">
        <div>
          <div className='flex flex-wrap '>
            <div className='w-1/3'>
              <div className= ' text-blue-800 font-medium m-2 border text-center py-6 border-blue-900 rounded-sm'>
                <h1>Profile & Photo</h1>
              </div>
            </div>
            <div className='w-1/3'>
              <div className='text-blue-800 font-medium m-2 border text-center py-6 border-blue-900 rounded-sm'>
                <h1>Paid Feature And Power Ups</h1>
              </div>
            </div>
            <div className='w-1/3'>
              <div className='text-blue-800 font-medium  m-2 border text-center py-6 border-blue-900 rounded-sm'>
                Account Setting
              </div>
            </div>
            <div className='w-1/3'>
              <div className='text-blue-800 font-medium m-2 border text-center py-6 border-blue-900 rounded-sm'>
                Account Setting
              </div>
            </div>
            <div className='w-1/3'>
              <div className='text-blue-800 font-medium m-2 border text-center py-6 border-blue-900 rounded-sm'>
                Account Setting
              </div>
            </div>
            <div className='w-1/3'>
              <div className='text-blue-800 font-medium m-2 border text-center py-6 border-blue-900 rounded-sm'>
                Account Setting
              </div>
            </div>
            <div className='w-1/3'>
              <div className='text-blue-800 font-medium m-2 border text-center py-6 border-blue-900 rounded-sm'>
                Account Setting
              </div>
            </div>
            <div className='w-1/3'>
              <div className='text-blue-800 font-medium m-2 border  text-center py-6 border-blue-900 rounded-sm'>
                Account Setting
              </div>
            </div>
            <div className='w-1/3'>
              <div className=' text-blue-800 font-medium m-2 border text-center py-6 border-blue-900 rounded-sm'>
                Account Setting
              </div>
            </div>
            <div className='w-full'>
              <div className='text-blue-800 font-medium m-2 border text-center py-6 border-blue-900 rounded-sm'>
                <h1>Legal</h1>
                <p className='text-blue-800 font-medium text-base'>Our documentation related to terms  and  condition ,privacy cookies proffing arbition and safety tips</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact