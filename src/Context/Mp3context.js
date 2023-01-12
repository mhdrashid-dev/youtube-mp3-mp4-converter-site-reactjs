import React,{createContext,useState} from 'react'


export let Mp3Value=createContext();

function Mp3context(props) {

    let [mp3data,setMp3Data] =useState({thumbnail:'',title:'',qualityOne:'',qualityTwo:'',qualityThree:''});


  return (
    <Mp3Value.Provider value={[mp3data,setMp3Data]}>
        {props.children}
    </Mp3Value.Provider>
  )
}

export default Mp3context
