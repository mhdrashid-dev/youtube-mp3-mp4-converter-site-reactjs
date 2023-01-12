import React,{createContext,useState} from 'react'


export let Mp4Value=createContext();

function Mp4context(props) {

    let [mp4Data,setMp4Data]=useState({thumbnail:'',title:'',qualityOne:'',qualityTwo:'',qualityThree:'',qualityFour:''})
  return (
    <Mp4Value.Provider value={[mp4Data,setMp4Data]}>
        {props.children}
    </Mp4Value.Provider>
  )
}

export default Mp4context