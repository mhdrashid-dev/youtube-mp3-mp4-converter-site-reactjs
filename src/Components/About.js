import React from 'react'

function About() {
  return (
    <div className='w-full min-h-[40vh] p-5 mt-20 xl:px-20 xl:mt-28'>      
        <div className="heading">
            <h1 className='text-white font-montserrat text-center font-bold md:text-2xl'>About</h1>
        </div>  
        <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
            <div className="card w-3/4 mx-auto min-h-[35vh] md:min-h-[20vh] lg:min-h-[45vh] xl:min-h-[30vh] flex flex-col justify-center  bg-black  rounded-md p-5 2xl:px-14 my-4">
                <h1 className='text-primary fnt-bold font-montserrat xl:text-xl font-bold'>Free and <br /> Unlimited</h1>
                <p className='text-white text-xs xl:text-sm xl:w-full mt-5 w-3/4 '>Convert and download as much as you like thousands of video/audio files for free.</p>
            </div>
            <div className="card w-3/4 mx-auto min-h-[35vh] md:min-h-[20vh] lg:min-h-[45vh] xl:min-h-[30vh] flex flex-col justify-center  bg-black  rounded-md p-5 2xl:px-14 my-4">
                <h1 className='text-primary fnt-bold font-montserrat xl:text-xl font-bold'>No need to register <br /> an account</h1>
                <p className='text-white text-xs xl:text-sm xl:w-full mt-5 w-3/4 '>Download quickly with no account registration and no need to install software and extensions</p>
            </div>
            <div className="card w-3/4 mx-auto min-h-[35vh] md:min-h-[20vh] lg:min-h-[45vh] xl:min-h-[30vh] flex flex-col justify-center  bg-black  rounded-md p-5 2xl:px-14 my-4">
                <h1 className='text-primary fnt-bold font-montserrat xl:text-xl font-bold'>100% safe</h1>
                <p className='text-white text-xs xl:text-sm xl:w-full mt-5 w-3/4 '>Does not collect and does not ask for any personal information. The downloaded file is safe and does not contain viruses.</p>
            </div>
            <div className="card w-3/4 mx-auto min-h-[35vh] md:min-h-[20vh] lg:min-h-[45vh] xl:min-h-[30vh] flex flex-col justify-center  bg-black  rounded-md p-5 2xl:px-14 my-4">
                <h1 className='text-primary fnt-bold font-montserrat xl:text-xl font-bold'>Fast and flexible</h1>
                <p className='text-white text-xs xl:text-sm xl:w-full mt-5 w-3/4 '>Super fast download and conversion speed. Flexible options of quality levels for downloadable video and audio files.</p>
            </div>
            <div className="card w-3/4 mx-auto min-h-[35vh] md:min-h-[20vh] lg:min-h-[45vh] xl:min-h-[30vh] flex flex-col justify-center  bg-black  rounded-md p-5 2xl:px-14 my-4">
                <h1 className='text-primary fnt-bold font-montserrat xl:text-xl font-bold'>Supports all <br /> browsers and <br /> devices</h1>
                <p className='text-white text-xs xl:text-sm xl:w-full mt-5 w-3/4 '>The website supports downloading on all browsers, such as Google Chrome, Firefox, Safari, Android Browser, Opera, UC Browser...and on all devices, including PC, Android, iPhone</p>
            </div>
            <div className="card w-3/4 mx-auto min-h-[35vh] md:min-h-[20vh] lg:min-h-[45vh] xl:min-h-[30vh] flex flex-col justify-center  bg-black   rounded-md p-5 2xl:px-14 my-4">
                <h1 className='text-primary fnt-bold font-montserrat xl:text-xl font-bold'>Support high <br /> quality download</h1>
                <p className='text-white text-xs xl:text-sm xl:w-full mt-5 w-3/4 '>Keep the quality of the downloaded file as the original video. Support HD download quality for video and 320kbps for MP3.</p>
            </div>
        </div>
      
    </div>
  )
}

export default About
