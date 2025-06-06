import React from 'react'
import { PiPaperPlaneTilt } from "react-icons/pi";

const Banner = () => {
  return (
    <div className='w-full h-[500px] bg-[url("/hero-bg.png")] bg-cover bg-center text-white flex items-center justify-center relative'>
        <div className='w-auto h-full absolute top-0 right-0 z-0'>
            <img src="/hero-img.png" alt="" className='w-auto h-full object-cover ' />
        </div>
        <div className='z-10 w-full h-full container mx-auto flex flex-col items-start justify-center gap-8'>
            <h1 className='w-1/2 text-[55px] font-bold text-[var(--black-color)]'>Don’t miss our daily amazing deals.</h1>
            <p className='text-[20px] font-medium text-[var(--second-grey-color)]'>Save up to 60% off on your first order</p>
            <div className='flex items-center gap-2  bg-white '>
                <span className='p-3 text-[var(--placeholder-color)]'><PiPaperPlaneTilt className='size-5'/></span>
                <input type="email" placeholder='Enter your email address' className='placeholder:text-[var(--placeholder-color)] outline-none text-[var(--black-color)] text-[14px] w-60 '  />
                <button className='bg-[var(--primary-color)] text-white px-5 py-3 cursor-pointer'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Banner