import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { Mp3Value } from '../Context/Mp3context';

function Warning() {

    let navigate=useNavigate();
    let value=useContext(Mp3Value);  
    let setisLoading=value[5];
    let setError=value[3]

    let BackHome=()=>{
        setError(false);
        setisLoading(false);
        navigate('/');
    }

  return (
    <div data-aos="flip-left" data-aos-duration="1000" className='w-full min-h-[30vh]  flex flex-col justify-center items-center'>
        <div className="content w-1/2 mx-auto border border-white rounded-lg h-[30vh] flex flex-col justify-center items-center">
            <h1 className='text-red-600 my-3'>Inavlid url !</h1>   
            <button className='px-5 py-1 my-3 rounded-lg bg-primary text-black' onClick={BackHome}>Home</button>  
        </div>
    </div>
  )
}

export default Warning
