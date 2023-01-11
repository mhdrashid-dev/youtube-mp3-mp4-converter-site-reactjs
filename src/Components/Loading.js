import React from 'react'

function Loading() {
  return (
    <div className='w-full h-[50vh] flex flex-col justify-center items-center'>
        <div class="mb-10">
            <div class="border-t-transparent border-solid animate-spin  rounded-full border-primary border-[3px] h-[30px] w-[30px] md:border-[5px] md:w-[50px] md:h-[50px] xl:w-[70px] xl:h-[70px]"></div>
        </div>
        <h1 className='text-white font-montserrat text-sm font-bold md:text-lg'>Converting....</h1>
        <h1 className='text-white font-montserrat text-[.6rem] md:text-sm mt-5'>This may take a few seconds, please don't close this page</h1>
    </div>
  )
}

export default Loading
