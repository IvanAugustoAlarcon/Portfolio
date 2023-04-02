import React from 'react'
import './skills.css'

const Backend = () => {
  return (
    <div className='skills__content'>
      <h3 className='skills__title'>Backend Developer</h3>

      <div className='skills__box'>

        <div className='skills__group'>
          <div className='skills_data'>
            <i className='bx bx-badge-check' />

            <div>
              <h3 className='skills__name'>Postgres</h3>
            </div>
          </div>

          <div className='skills_data'>
            <i className='bx bx-badge-check' />

            <div>
              <h3 className='skills__name'>MongoDB</h3>
            </div>
          </div>

          <div className='skills_data'>
            <i className='bx bx-badge-check' />

            <div>
              <h3 className='skills__name'>SQL</h3>
            </div>
          </div>

        </div>

        <div className='skills__group'>

          <div className='skills_data'>
            <i className='bx bx-badge-check' />

            <div>
              <h3 className='skills__name'>Node Js</h3>
            </div>
          </div>

          <div className='skills_data'>
            <i className='bx bx-badge-check' />

            <div>
              <h3 className='skills__name'>Python</h3>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Backend
