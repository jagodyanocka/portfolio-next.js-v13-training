import React from 'react'
import Image from 'next/image'

function Skills() {

  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='py-4 text-xl tracking-widest uppercase text-[#3c8475] font-bold'>Skills</p>
                <div className='shadow-xl rounded-xl'>
                    <div className='grid grid-cols-4 gap-3 justify-center items-center p-4'> 
                        <div className='m-auto'> 
                            <Image className='hover:scale-110 ease-in duration-300' src='/../public/Java.ico' width='100' height='100'/>
                        </div>
                        <div className='m-auto hover:scale-110 ease-in duration-300'> 
                            <Image src='/../public/Spring.png' width='100' height='100'/>
                        </div>
                        <div className='m-auto hover:scale-110 ease-in duration-300'> 
                            <Image src='/../public/SpringBoot.webp' width='100' height='100'/>
                        </div>
                        <div className='m-auto hover:scale-110 ease-in duration-300'> 
                            <Image src='/../public/Mongo.webp' width='100' height='100'/>
                        </div>
                        <div className='m-auto hover:scale-110 ease-in duration-300'> 
                            <Image src='/../public/Postgresql.webp' width='100' height='100'/>
                        </div>
                        <div className='m-auto hover:scale-110 ease-in duration-300'> 
                            <Image src='/../public/React.png' width='200' height='100'/>
                        </div>
                        <div className='m-auto hover:scale-110 ease-in duration-300'> 
                            <Image src='/../public/Javascript.webp' width='100' height='100'/>
                        </div>
                        <div className='m-auto hover:scale-110 ease-in duration-300'> 
                            <Image src='/../public/Next.png' width='100' height='100'/>
                        </div>
                        <div className='m-auto hover:scale-110 ease-in duration-300'> 
                            <Image src='/../public/HTML.png' width='100' height='100'/>
                        </div>
                        <div className='m-auto hover:scale-110 ease-in duration-300'> 
                            <Image src='/../public/CSS.png' width='100' height='100'/>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Skills