import { useState } from 'react'
import './qualification.css'

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <section className='qualification section'>
      <h2 className='section__title'>Qualification</h2>
      <span className='section__subtitle'>My personal journey</span>

      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          <div
            className={
            toggleState === 1
              ? 'qualification__button qualification__active button--flex'
              : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(1)}
          >
            <i className='uil uil-briefcase-alt qualification__icon' />
            Experience
          </div>

          <div
            className={
            toggleState === 2
              ? 'qualification__button qualification__active button--flex'
              : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(2)}
          >
            <i className='uil uil-graduation-cap qualification__icon' />
            Education
          </div>
        </div>

        <div className='qualification__sections'>

          <div className={
            toggleState === 1
              ? 'qualification__content qualification__content-active'
              : 'qualification__content'
            }
          >
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>System Validation Engineer</h3>
                <span className='qualification__subtitle'>
                  Intel - Mexico
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt' />2021 - Present
                </div>
              </div>

              <div>
                <span className='qualification__rounder' />
                <span className='qualification__line' />
              </div>
            </div>

            <div className='qualification__data'>
              <div />

              <div>
                <span className='qualification__rounder' />
                <span className='qualification__line' />
              </div>

              <div>
                <h3 className='qualification__title'>Software Engineer</h3>
                <span className='qualification__subtitle'>
                  Softtek - Mexico
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt' />2021 - 2021
                </div>
              </div>
            </div>

            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Software Developer</h3>
                <span className='qualification__subtitle'>
                  Robert Bosch - Mexico
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt' />2018 - 2021
                </div>
              </div>

              <div>
                <span className='qualification__rounder' />
                <span className='qualification__line' />
              </div>
            </div>
          </div>

          <div
            className={
            toggleState === 2
              ? 'qualification__content qualification__content-active'
              : 'qualification__content'
            }
          >
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Web Design</h3>
                <span className='qualification__subtitle'>
                  Mexico
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt' />2022 - Present
                </div>
              </div>

              <div>
                <span className='qualification__rounder' />
                <span className='qualification__line' />
              </div>
            </div>

            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Web Development</h3>
                <span className='qualification__subtitle'>
                  Mexico - DEVF
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt' />2021 - 2022
                </div>
              </div>

              <div>
                <span className='qualification__rounder' />
                <span className='qualification__line' />
              </div>
            </div>

            <div className='qualification__data'>
              <div />

              <div>
                <span className='qualification__rounder' />
                <span className='qualification__line' />
              </div>

              <div>
                <h3 className='qualification__title'>Electronics Engineering</h3>
                <span className='qualification__subtitle'>
                  Mexico - Instituto Tecnologico de Durango
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt' />2010 - 2015
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Qualification
