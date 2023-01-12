import React,{useState,useContext} from 'react'
import Loading from './Loading'
import axios from 'axios'
import { Mp4Value } from '../Context/Mp4context'
import { Mp3Value } from '../Context/Mp3context'
import { useNavigate } from 'react-router-dom'
import Warning from './Warning'

function Mp4converter() {

  let [mp4Data,setMp4Data]=useContext(Mp4Value);  
  let mp3=useContext(Mp3Value);
  let error=mp3[2];
  let setError=mp3[3];
  let isLoading=mp3[4];
  let setisLoading=mp3[5];
  let [link,setLink]=useState(null);
  let navigate = useNavigate('');  


  let CreateLink=(e)=>{    
    let value=e.target.value;
    let sliceLink=value.slice(17,value.length);
    setLink(sliceLink);
  } 

  let GetDataMp3=()=>{       
    setisLoading(true);    
    const options = {
      method: 'GET',
      url: 'https://youtube-video-download-info.p.rapidapi.com/dl',
      params: {id: `${link}`},
      headers: {
        'X-RapidAPI-Key': '61af6d2bacmsh0709d336cd20e87p1623e1jsnd9b67238f198',
        'X-RapidAPI-Host': 'youtube-video-download-info.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {      
      console.log(response.data);
      let title=response.data.cleantitle;
      setMp4Data({
        thumbnail:response.data.thumb,
        title:title.slice(0,10),
        qualityOne:response.data.link[17],
        qualityTwo:response.data.link[18],
        qualityThree:response.data.link[22]         
      })      
    }).then(function(response){      
      navigate('/resultmp4');      
    }).catch(function (error) {
      console.error(error); 
      setError(true);     
    });
  }


  return (
      <>
      {!isLoading ? 
      <div data-aos="flip-right" data-aos-duration="1000" className='w-full min-h-[30vh]'>
        <div className="heading text-center my-5 py-5 font-montserrat">
            <h1 className='text-primary text-lg md:text-2xl font-bold my-2 '>Mp4 <span className='text-white text-sm md:text-lg'> converter</span></h1>
            <p className='text-white text-[.5rem] md:text-xs my-2'>Convert and download Youtube videos in MP4 format for free.</p>
        </div>
        <div className="link-sec my-5 flex flex-col justify-center items-center p-5 w-full">
            <div className="input-sec w-full md:w-2/3 lg:w-2/4 rounded-lg px-3 py-1 md:py-2 md:px-5 lg:py-1 xl:py-2  bg-white flex justify-between items-center">
                <input type="text" className='w-3/4 text-sm md:text-lg lg:text-base xl:text-lg bg-transparent focus:outline-none' placeholder='https://youtu.be/5hFd6zGkxLE' onBlur={(e)=>{CreateLink(e)}}/>
                <button className='text-black duration-300 active:scale-150'><i className="fa-solid fa-magnifying-glass md:text-xl" onClick={GetDataMp3}></i></button>
            </div>
            <p className='text-[.5rem] text-white mt-5 md:text-xs md:mt-8'>By using our service you accept our Terms of Service</p>
        </div>      
      </div>  
      :
      <>
      {!error ? <Loading></Loading> : <Warning></Warning>}
      </>
    
    }
      </>
  )
}

export default Mp4converter
