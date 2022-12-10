import React from 'react'

function Contact() {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 q-full'>
            <p className='uppercase text-xl tracking-widest text-[#3c8475] font-bold'>Contact </p>
            <h2 className='text-xxl text-gray-500 py-4'>Send me a message</h2>
            <div className='grid grid-cols-5 gap-8'>
                <div className='col-span-3 col-start-2 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col' >
                                <label className='uppercase text-sm py-2 text-[#0b4b3e] font-bold'>Name</label>
                                <input className='uppercase border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                </div>
                                <div className='flex flex-col' >
                                <label className='uppercase text-sm py-2 text-[#0b4b3e] font-bold'>E-Mail</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" />
                                </div>
                            </div>
                            <div className='flex flex-col py-2' >
                                <label className='uppercase text-sm py-2 text-[#0b4b3e] font-bold'>Subject</label>
                                <input className='uppercase border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                            </div>
                            <div className='flex flex-col py-2' >
                                <label className='uppercase text-sm py-2 text-[#0b4b3e] font-bold'>Message</label>
                                <textarea className='border-2 rounded-lg p-3 flex border-gray-300 overflow-y-scroll' type="text" rows="5"/>
                            </div>
                            <button className='w-full p-4 mt-4 text-gray-100 rounded-lg'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Contact