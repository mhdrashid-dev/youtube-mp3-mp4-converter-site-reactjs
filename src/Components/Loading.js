import React,{useContext} from 'react'
import { DataValue } from '../Context/Context';

function Loading() {  


  let {setisLoading}=useContext(DataValue);  
  

  let GoHome=()=>{
    setisLoading(false);
  }

  return (
    <div className='w-full h-[50vh] flex flex-col justify-center items-center'>
        <div className="mb-10">
            <div className="border-t-transparent border-solid animate-spin  rounded-full border-primary border-[3px] h-[30px] w-[30px] md:border-[5px] md:w-[50px] md:h-[50px] xl:w-[70px] xl:h-[70px]"></div>
        </div>
        <h1 className='text-white font-montserrat text-sm font-bold md:text-lg'>Converting....</h1>
        <h1 className='text-white font-montserrat text-[.6rem] md:text-sm mt-5'>This may take a few seconds, please don't close this page</h1>
        <button className='bg-primary text-black px-4 rounded-lg mt-10 font-montserrat font-bold' onClick={GoHome}>back...</button>
    </div>
  )
}

export default Loading
