import React from 'react'
import Header from '../Components/Header'
import Mp3converter from '../Components/Mp3converter'
import Mp4converter from '../Components/Mp4converter'

function YtConverterPage() {
  return (
    <section className='w-full min-h-[100vh] bg-secondary'>
      <div className='container mx-auto'>
        <Header></Header>
        {/* <Mp3converter></Mp3converter> */}
        <Mp4converter></Mp4converter>
      </div>
    </section>
  )
}

export default YtConverterPage
