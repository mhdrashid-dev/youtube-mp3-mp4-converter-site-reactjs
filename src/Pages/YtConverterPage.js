import React from 'react'
import Header from '../Components/Header'
import Mp3converter from '../Components/Mp3converter'

function YtConverterPage() {
  return (
    <section className='w-full min-h-[100vh] bg-secondary'>
      <div className='container mx-auto'>
        <Header></Header>
        <Mp3converter></Mp3converter>
      </div>
    </section>
  )
}

export default YtConverterPage
