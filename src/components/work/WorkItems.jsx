import React from 'react'

const WorkItems = ({ item }) => {
  const handleDemo = () => {
    window.location.href = item.demo
  }

  const handleBackend = () => {}

  return (
    <div className='work__card' key={item.id}>
      <img src={item.image} alt='' className={item.category === 'backend' ? 'work__img' : 'work__img pointer'} onClick={() => { item.category === 'backend' ? handleBackend() : handleDemo() }} />
      <h3 className='work__title'>{item.title}</h3>
      <div className='work__btn'>
        <a href={item.github} className='work__button'>
          <i className='bx bxl-github' /> GitHub <i className='bx bx-right-arrow-alt work__button-icon' />
        </a>
      </div>
    </div>
  )
}

export default WorkItems
