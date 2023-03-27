import React from 'react'

const WorkItems = ({ item }) => {
  return (
    <div className='work__card' key={item.id}>
      <img src={item.image} alt='' className='work__img' />
      <h3 className='work__title'>{item.title}</h3>
      <div className='work__btn'>
        {item.category === 'backend'
          ? ''
          : <a href={item.demo} className='work__button'>
            Demo <i className='bx bx-right-arrow-alt work__button-icon' />
            {/* eslint-disable-next-line react/jsx-closing-tag-location */}
          </a>}

        <a href={item.github} className='work__button'>
          GitHub <i className='bx bx-right-arrow-alt work__button-icon' />
        </a>
      </div>
    </div>
  )
}

export default WorkItems
