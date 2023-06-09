import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <h1 className='footer__title'>Alarcon</h1>

        <ul className='footer__list'>
          <li>
            <a href='#about' className='footer__link'>About</a>
          </li>

          <li>
            <a href='#portfolio' className='footer__link'>Projects</a>
          </li>
        </ul>

        <div className='footer__social'>
          <a href='https://github.com/IvanAugustoAlarcon' className='footer__social-link' target='_blanck'>
            <i className='bx bxl-github' />
          </a>

          <a href='https://www.linkedin.com/in/ivan-augusto-alarcon-herrera-b5b76b122/' className='footer__social-link' target='_blanck'>
            <i className='bx bxl-linkedin' />
          </a>
        </div>
        <span className='footer__copy'>&#169; All rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer
