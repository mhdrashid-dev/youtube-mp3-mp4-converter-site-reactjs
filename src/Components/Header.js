import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function Header() {

    let [activeLink,setActiveLink]=useState('YouTube to mp3')

    console.log(activeLink);

  return (
    <section className='header w-full h-[10vh] mb-16'>
        <div className='w-full h-full flex justify-between items-center p-5 '>
            <div className="logo font-montserrat">
                <h1 className='text-white font-bold text-xl md:text-2xl xl:text-3xl'>YT.<span className='text-primary'>com</span> </h1>
            </div>
            <div className="navbar">
                <button className='text-primary text-xl block lg:hidden'><i className="fa-solid fa-caret-down"></i></button>
                <ul className='navlink-pc hidden lg:flex justify-center items-center font-montserrat'>
                    <li className={`text-white lg:text-sm mx-10  pb-3 ${activeLink ==='YouTube to mp3' ? 'border-b border-primary' : 'border-secondary'}`}><Link className='hover:text-primary' onClick={(e)=>{setActiveLink(e.target.innerHTML)}} to="/">YouTube to mp3</Link></li>
                    <li className={`text-white lg:text-sm mx-10  pb-3 ${activeLink ==='YouTube to mp4' ? 'border-b border-primary' : 'border-secondary'}`}><Link className='hover:text-primary' onClick={(e)=>{setActiveLink(e.target.innerHTML)}} to="/mp4">YouTube to mp4</Link></li>
                </ul>                
            </div>
        </div>
        <div className="bg-black hidden lg:hidden mobile-navbar fixed top-0 left-0 w-2/3 h-screen">
            <ul className='navlink flex flex-col justify-start items-center w-full h-screen mt-10 font-montserrat'>
                <li className='text-white text-xs my-5 hover:text-primary'><a href="">YouTube to mp3</a></li>
                <li className='text-white text-xs my-5 hover:text-primary'><a href="">YouTube to mp4</a></li>
            </ul>
        </div>
    </section>
  )
}

export default Header
