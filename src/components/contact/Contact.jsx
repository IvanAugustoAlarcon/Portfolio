import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section className='contact section' id='contact'>
      <h2 className='section__title'>Get in touch</h2>
      <span className='section__subtitle'>Contact Me</span>

      <div className='contact__container container grid'>
        <div className='contact__content'>
          <h3 className='contact__title'>Talk to me</h3>

          <div className='contact__info'>
            <div className='contact__card'>
              <i className='bx bx-mail-send contact__card-icon' />

              <h3 className='contact__card-title'>Email</h3>
              <span className='contact__card-data'>augusto.iah@gmail.com</span>

              <a href='mailto:augusto.iah@gmail.com' className='contact__button'>
                Write me
                <i className='bx bx-right-arrow-alt contact__button-icon' />
              </a>
            </div>

            <div className='contact__card'>
              <i className='bx bxl-whatsapp contact__card-icon' />

              <h3 className='contact__card-title'>Whatsapp</h3>
              <span className='contact__card-data'>33-2493-5471</span>

              <a href='https://api.whatsapp.com/send?phone=+523324935471&text=Hello, Ivan!' className='contact__button'>
                Write me
                <i className='bx bx-right-arrow-alt contact__button-icon' />
              </a>
            </div>

            <div className='contact__card'>
              <i className='bx bxl-linkedin contact__card-icon' />

              <h3 className='contact__card-title'>Linkedin</h3>
              <span className='contact__card-data'>ivan augusto alarcon herrera</span>

              <a href='https://www.linkedin.com/in/ivan-augusto-alarcon-herrera-b5b76b122/' className='contact__button'>
                Write me
                <i className='bx bx-right-arrow-alt contact__button-icon' />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact
