import React,{useState} from 'react'

function Mp3converter() {
  return (
    <div data-aos="flip-left" data-aos-duration="1000" className='w-full min-h-[30vh]'>
        <div className="heading text-center my-5 py-5 font-montserrat">
            <h1 className='text-primary text-lg md:text-2xl font-bold my-2 '>Mp3 <span className='text-white text-sm md:text-lg'> converter</span></h1>
            <p className='text-white text-[.5rem] md:text-xs my-2'>Convert and download Youtube videos in MP3 format for free.</p>
        </div>
        <div className="link-sec my-5 flex flex-col justify-center items-center p-5 w-full">
            <div className="input-sec w-full md:w-2/3 lg:w-2/4 rounded-lg px-3 py-1 md:py-2 md:px-5 lg:py-1 xl:py-2  bg-white flex justify-between items-center">
                <input type="text" className='w-3/4 text-sm md:text-lg lg:text-base xl:text-lg bg-transparent focus:outline-none' placeholder='https://youtu.be/5hFd6zGkxLE'/>
                <button className='text-black duration-300 active:scale-150'><i className="fa-solid fa-magnifying-glass md:text-xl"></i></button>
            </div>
            <p className='text-[.5rem] text-white mt-5 md:text-xs md:mt-8 '>By using our service you accept our Terms of Service</p>
        </div>      
    </div>
  )
}

export default Mp3converter
