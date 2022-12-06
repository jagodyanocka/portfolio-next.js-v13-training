import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-2'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
          <div className='col-span-2'>
            <p className='py-4 text-xl tracking-widest text-[#3c8475] font-bold'>ABOUT</p>
            <h2 className='py-4'>Who I am </h2>
            <p className='py-2 text-gray-600'>I am a full stack developer. Section under development.</p>
            <p className='py-2 text-gray-600'>I have graduated intense coding bootcamp at School Of Applied Technology in Stockholm</p>
            <p className='py-2 text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident repudiandae quasi reiciendis magnam fuga sequi, eaque asperiores, quae recusandae modi adipisci soluta cumque. Illum reiciendis modi odio labore accusamus corporis!
                Porro, dolorem ea vitae enim, saepe aut voluptates, quo nostrum fugit placeat possimus. Consectetur quod deserunt illo voluptates ipsum itaque nihil eum.
            </p>
            <p className='py-2 text-gray-600 underline cursor-pointer'>Check out my latest projects</p>
          </div>
          <div>
            <Image src='/../public/IMG-1998.jpg' width='250' height='400'/>
          </div>
        </div>
    </div>
  )
}

export default About