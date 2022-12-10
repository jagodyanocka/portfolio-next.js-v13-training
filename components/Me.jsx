import Link from 'next/link';
import React from 'react'
import { AiFillLinkedin, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';

function Me() {
  return (
    <div id='me' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div className='pt-20'>
                <h1 className='tracking-widest text-gray-600'>Hello, I'm <span className='text-[#3c8475]'>Jagoda!</span></h1>
                <h2 className='text-lg tracking-widest text-gray-600'>A Full-Stack Developer.</h2>
                <p className='py-4 max-w-[70%] m-auto'> I am a fresh full stack developer with backend majoring in <span className='font-bold'>Java</span>. I have graduated 13-weeks long coding bootcamp at <span className='font-bold'> School of applied technology </span> in Stockholm. Since then I am continously learing and improving my skills. </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-[#3c8475] p-2'>
                        <Link href='https://github.com/jagodyanocka'>
                        <AiOutlineGithub size={40} className='text-black cursor-pointer'/>
                        </Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-[#3c8475] p-2'>
                        <Link href='https://www.linkedin.com/in/jagoda-kosewska-b854021b7/?locale=en_US'>
                        <AiFillLinkedin size={40} className='text-black cursor-pointer'/>
                        </Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-[#3c8475] p-2'>
                        <Link href='/#contact'>
                        <AiOutlineMail size={40} className='text-black cursor-pointer'/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Me