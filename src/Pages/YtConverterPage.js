import React,{useEffect} from 'react'
import About from '../Components/About'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Mp3converter from '../Components/Mp3converter'
import Mp4converter from '../Components/Mp4converter'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Resultmp3 from '../Components/Resultmp3'
import Resultmp4 from '../Components/Resultmp4'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Loading from '../Components/Loading'


function YtConverterPage() {   

    useEffect(()=>{
        AOS.init();
    },[])


  return (
    <section className='w-full min-h-[100vh] bg-secondary'>
      <div className='container mx-auto'>
        <Router>
            <Header></Header>
            <Routes>                
                <Route exact path='/' element={<Mp3converter></Mp3converter>}></Route>                               
                <Route path='/mp4' element={<Mp4converter></Mp4converter>}></Route>  
                <Route path='/resultmp3' element={<Resultmp3></Resultmp3>}></Route>  
                <Route path='/resultmp4' element={<Resultmp4></Resultmp4>}></Route>           
                <Route path='/loading' element={<Loading></Loading>}></Route>                                 
            </Routes>
            <About></About>
            <Footer></Footer>
        </Router>
      </div>
    </section>
  )
}

export default YtConverterPage
