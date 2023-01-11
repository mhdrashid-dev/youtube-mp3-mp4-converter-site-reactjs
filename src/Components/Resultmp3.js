import React from 'react'

function Resultmp3() {
  return (
    <div className='w-full min-h-[80vh] flex justify-center items-center'>
        <div className="content">
            <div className="music-info  flex flex-col justify-center items-center w-full h-[200px] mx-auto text-center">
                <img className='object-cover w-full rounded-md' src="https://i4.ytimg.com/vi/kk8z6t0uPeM/mqdefault.jpg" alt="" />
                <h1 className='text-primary font-montserrat font-bold my-6' >En Kanavil (The Love Story)</h1>
            </div>
            <div className="download-sec flex flex-col justify-center items-center">
                <div className="heading mt-8 mb-4">
                    <h1 className='font-montserrat font-bold text-white text-sm py-1 border-b'>mp3 Downlaod Links</h1>
                </div>
                <div className="download-links mt-4">
                    <table>
                        <tr className=''>
                            <td className='px-5 py-3 text-white text-sm'>128kbps</td>
                            <td className='px-5'><a className='bg-primary text-black px-2 border border-white rounded-lg cursor-pointer' href="">Download now</a></td>
                        </tr>
                        <tr className=''>
                            <td className='px-5 py-3 text-white text-sm'>256kbps</td>
                            <td className='px-5'><a className='bg-primary text-black px-2 border border-white rounded-lg cursor-pointer' href="">Download now</a></td>
                        </tr>
                        <tr className=''>
                            <td className='px-5 py-3 text-white text-sm'>320kbps</td>
                            <td className='px-5'><a className='bg-primary text-black px-2 border border-white rounded-lg cursor-pointer' href="">Download now</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>      
    </div>
  )
}

export default Resultmp3
