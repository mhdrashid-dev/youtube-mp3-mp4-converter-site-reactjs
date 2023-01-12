import React,{createContext,useState} from 'react'


export let Mp3Value=createContext();

function Mp3context(props) {

    let [mp3data,setMp3Data] =useState({thumbnail:null,title:null,qualityOne:null,qualityTwo:null,qualityThree:null});
    let [error,setError]=useState(false);
    let [isLoading,setisLoading]=useState(false);


  return (
    <Mp3Value.Provider value={[mp3data,setMp3Data,error,setError,isLoading,setisLoading]}>
        {props.children}
    </Mp3Value.Provider>
  )
}

export default Mp3context
