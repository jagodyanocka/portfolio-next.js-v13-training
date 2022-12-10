import React from 'react'
import { AiFillLinkedin, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';

function Footer() {
  return (
    <div className='absolute w-full h-20 bg-stone-100 shadow-2xl shadow-black'>
        <div className='flex items-center justify-around w-full h-full 2xl:px-16'>
            <div className='grid grid-cols-3 gap-10'>
                 <div className='rounded-full shadow-lg shadow-[#3c8475] p-2 m-auto'>
                        <AiOutlineGithub size={20} className='text-black cursor-pointer'/>
                </div>
                <div className='rounded-full shadow-lg shadow-[#3c8475] p-2 m-auto'>
                        <AiFillLinkedin size={20} className='text-black cursor-pointer'/>
                </div>
                <div className='rounded-full shadow-lg shadow-[#3c8475] p-2 m-auto'>
                        <AiOutlineMail size={20} className='text-black cursor-pointer'/>
                </div>
                </div>
            </div>
    </div>
  )
}

export default Footer