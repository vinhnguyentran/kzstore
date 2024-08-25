import React from 'react'
import { Carousel } from 'react-bootstrap'
import CarouselImage from '../../Component/CarouselImage'
import carouse from '../../dataDM/carouse'
const HomePage = (props) => {
    return (
        <div className='home-page'>
            <Carousel>
                {carouse.map((cs, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <CarouselImage text="title" urlImg={cs.urlImg} />
                            <Carousel.Caption>
                                <h3>title demo</h3>
                                <p>desc demo</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
                {/* <Carousel.Item>
                    <CarouselImage text="Second slide" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <CarouselImage text="Third slide" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
        </div>
    )
}

export default HomePage;
