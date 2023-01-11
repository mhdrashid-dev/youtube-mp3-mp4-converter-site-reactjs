import React from 'react'

function Header() {
  return (
    <section className='header w-full h-[10vh] '>
        <div className='w-full h-full flex justify-between items-center p-5 container mx-auto'>
            <div className="logo font-montserrat">
                <h1 className='text-white font-bold text-xl md:text-2xl xl:text-3xl'>YT.<span className='text-primary'>com</span> </h1>
            </div>
            <div className="navbar">
                <button className='text-primary text-xl block lg:hidden'><i class="fa-solid fa-caret-down"></i></button>
                <ul className='navlink-pc hidden lg:flex justify-center items-center font-montserrat'>
                    <li className='text-white lg:text-sm mx-10 hover:text-primary'><a href="">YouTube to mp3</a></li>
                    <li className='text-white lg:text-sm mx-10 hover:text-primary'><a href="">YouTube to mp4</a></li>
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
