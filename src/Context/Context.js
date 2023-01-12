import React,{useState,createContext} from 'react'

export let DataValue=createContext();

function Context(props) {

    let [mp3data,setMp3Data] =useState({thumbnail:null,title:null,qualityOne:null,qualityTwo:null,qualityThree:null});
    let [mp4Data,setMp4Data]=useState({thumbnail:null,title:null,qualityOne:null,qualityTwo:null,qualityThree:null});    
    let [error,setError]=useState(false);
    let [isLoading,setisLoading]=useState(false);

    return (
        <DataValue.Provider value={{mp3data,setMp3Data,mp4Data,setMp4Data,error,setError,isLoading,setisLoading}}>
            {props.children}
        </DataValue.Provider>
    )
}

export default Context
