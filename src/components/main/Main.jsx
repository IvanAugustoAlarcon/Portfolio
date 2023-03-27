import React from 'react'
import Data from './Data'
import './main.css'
import Social from './Social'
import ScrollDown from './ScrollDown'

const Main = () => {
  return (
    <section className='home section' id='home'>
      <div className='home__container container grid'>
        <div className='home__content grid'>
          <Social />
          <div className='home__img' />
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  )
}

export default Main
