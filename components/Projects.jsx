import React from 'react'
import Image from 'next/image'



function Projects() {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='py-4 uppercase text-xl tracking-widest text-[#3c8475] font-bold'>My Projects</p>
            <div className='grid md:grid-cols-2 gap-8'>
                <div className='relative flex itmes-center justify-center h-auto w-auto shadow-xl shadow-gray-500 rounded-xl p-4 group hover:bg-gradient-to-r from-[#3c8475] to-[#c2dad9]'>
                    <Image className='border-l-2 border-r-2 border-b-2 group-hover:opacity-5' src='/../public/Portfolio.png' width='500' height='400'/>
                    <div className='hidden group-hover:block absolute top-[40%] left-[50%] translate-x-[-50%]'>
                        <h2 className='text-2xl font-bold tracking-widest text-white text-center'>Portfolio</h2>
                        <h3 className='font-bold text-white text-center'>React, Next.js</h3>
                    </div>
                </div>
                <div className='relative flex itmes-center justify-center h-auto w-auto shadow-xl shadow-gray-500 rounded-xl p-4 group hover:bg-gradient-to-r from-[#3c8475] to-[#c2dad9]'>
                    <Image className='border-l-2 border-r-2 border-b-2 group-hover:opacity-5' src='/../public/Portfolio.png' width='500' height='400'/>
                </div>
                <div className='relative flex itmes-center justify-center h-auto w-auto shadow-xl shadow-gray-500 rounded-xl p-4 group hover:bg-gradient-to-r from-[#3c8475] to-[#c2dad9]'>
                    <Image className='border-l-2 border-r-2 border-b-2 group-hover:opacity-5' src='/../public/Portfolio.png' width='500' height='400'/>
                </div>
                <div className='relative flex itmes-center justify-center h-auto w-auto shadow-xl shadow-gray-500 rounded-xl p-4 group hover:bg-gradient-to-r from-[#3c8475] to-[#c2dad9]'>
                    <Image className='border-l-2 border-r-2 border-b-2 group-hover:opacity-5' src='/../public/Portfolio.png' width='500' height='400'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects