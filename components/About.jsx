import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-2'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-3'>
          <div className='col-span-2'>
            <p className='py-4 text-xl tracking-widest text-[#3c8475] font-bold'>ABOUT</p>
            <h2 className='text-gray-500 text-xxl py-4'>Who I am</h2>
            <p className='py-4 max-w-[90%] m-auto text-center text-gray-600 '>I am a full stack developer. Section under development.</p>
            <p className='py-4 max-w-[90%] m-auto text-center text-gray-600'>I have graduated intense coding bootcamp at School Of Applied Technology in Stockholm</p>
            <p className='py-4 max-w-[90%] m-auto text-center text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident repudiandae quasi reiciendis magnam fuga sequi, eaque asperiores, quae recusandae modi adipisci soluta cumque. Illum reiciendis modi odio labore accusamus corporis!
                Porro, dolorem ea vitae enim, saepe aut voluptates, quo nostrum fugit placeat possimus. Consectetur quod deserunt illo voluptates ipsum itaque nihil eum.
            </p>
            <p className='py-4 text-lg text-center font-bold max-w-[90%] m-auto text-gray-600 underline cursor-pointer hover:text-[#3c8475]'>Check out my latest projects</p>
          </div>
          <div className='flex'>
            <Image className='p-1 border-2 border-[#84a19b] m-auto shadow-lg shadow-slate-800 hover:scale-105 duration-300' src='/../public/IMG-1998.jpg' width='260' height='260'/>
          </div>
        </div>
    </div>
  )
}

export default About