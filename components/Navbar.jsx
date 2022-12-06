import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineMenu , AiOutlineCloseCircle , AiOutlineGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai'


function Navbar() {
  const [nav , setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav); 
  }

  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
      <div className='flex justify-between itmes-center w-full h-full px-2 2xl:px-16'>
      <Image src='/../public/aurora.jpg' alt='/' width='1500' height='50'/>
      </div>
      <div>
        <ul className='hidden md:flex justify-end mr-3'>
          <Link href='/'>
            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
          </Link>
          <Link href='/'>
            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
          </Link>
          <Link href='/'>
            <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
          </Link>
          <Link href='/'>
            <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
          </Link>
          <Link href='/'>
            <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
          </Link>
        </ul>
        <div onClick={handleNav} className='md:hidden ml-2'>
          <AiOutlineMenu size={30}/>
        </div>
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70' : " "}>
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500' : 
                              'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div onClick={handleNav} className='flex justify-end rounded-full cursor-pointer p-3'>
              <AiOutlineCloseCircle size={30}/>
            </div>
          </div>
          <div className='border-b-2 border-[#cde1e1] mt-3 cursor-pointer'>
            <p>Check this out: </p>
          </div>
        <div className='py-4 flex-col '>
          <ul className='uppercase'>
            <Link href='/'>
              <li className='py-4 text-sm'>Home</li>
            </Link>
            <Link href='/'>
              <li className='py-4 text-sm'>About</li>
            </Link>
            <Link href='/'>
              <li className='py-4 text-sm'>Skills</li>
            </Link>
            <Link href='/'>
              <li className='py-4 text-sm'>Projects</li>
            </Link>
            <Link href='/'>
              <li className='py-4 text-sm'>Contact</li>
            </Link>
          </ul>
          <div className='pt-40'>
            <p className='uppercase trackin-widest text-black p-3'>Let's connect </p>
          <div className='flex items-center space-x-5 my-4 w-full'>
            <div>
              <AiOutlineGithub size={40} className='text-black cursor-pointer'/>
            </div>
            <div>
              <AiFillLinkedin size={40} className='text-black cursor-pointer'/>
            </div>
            <div>
              <AiOutlineMail size={40} className='text-black cursor-pointer'/>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar