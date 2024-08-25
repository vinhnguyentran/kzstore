import React from 'react'
import './CarouselImage.scss'

const CarouselImage = (props) => {
  return (
    <div className='carousel-image' style={{backgroundImage: "url(" + props.urlImg + ")"}}>
      
    </div>
  )
}

export default CarouselImage
