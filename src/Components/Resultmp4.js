import React,{useEffect,useContext} from 'react';
import { Mp4Value } from '../Context/Mp4context';
import { useNavigate } from 'react-router-dom';


function Resultmp4() {    

    let [mp4]=useContext(Mp4Value)
    let navigate=useNavigate();

    useEffect(()=>{
        if(mp4.thumbnail===null){
            navigate('/')
        }
    },[])

  return (
    <div className='w-full min-h-[80vh] flex justify-center items-center'>
        <div className="content">
            <div className="music-info  flex flex-col justify-center items-center w-full max-h-[200px] mx-auto text-center">
                <img className='object-cover w-full rounded-md' src={mp4.thumbnail} alt="" />
                <h1 className='text-primary font-montserrat font-bold my-6' >{mp4.title}</h1>
            </div>
            <div className="download-sec flex flex-col justify-center items-center">
                <div className="heading mt-8 mb-4">
                    <h1 className='font-montserrat font-bold text-white text-sm py-1 border-b'>mp3 Downlaod Links</h1>
                </div>
                <div className="download-links mt-4">
                    <table>
                        <tbody>
                            <tr className=''>
                                <td className='px-5 py-3 text-white text-sm'>144p</td>
                                <td className='px-5'><a className='bg-primary text-black px-2 border border-white rounded-lg cursor-pointer' href={mp4.qualityOne}>Download now</a></td>
                            </tr>
                            <tr className=''>
                                <td className='px-5 py-3 text-white text-sm'>360p</td>
                                <td className='px-5'><a className='bg-primary text-black px-2 border border-white rounded-lg cursor-pointer' href={mp4.qualityTwo}>Download now</a></td>
                            </tr>
                            <tr className=''>
                                <td className='px-5 py-3 text-white text-sm'>720p</td>
                                <td className='px-5'><a className='bg-primary text-black px-2 border border-white rounded-lg cursor-pointer' href={mp4.qualityThree}>Download now</a></td>
                            </tr>                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>      
    </div>
  )
}

export default Resultmp4
