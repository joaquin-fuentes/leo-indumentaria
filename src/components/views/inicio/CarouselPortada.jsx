
import {Carousel} from 'react-bootstrap';
import { useState } from "react";
import banner1 from "../../../assets/imagenes/banner1.png"
import banner2 from "../../../assets/imagenes/banner4.png"
import banner3 from "../../../assets/imagenes/banner5.png"


function CarouselPortada() {  const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel className='carouselInicio' activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className='carouselItem'>
          <img className='imgCarousel' src={banner1} alt='imagen portada '/>
        </Carousel.Item>
        <Carousel.Item className='carouselItem'>
          <img className='imgCarousel' src={banner2} alt=''/>
        </Carousel.Item>
        <Carousel.Item className='carouselItem'>
          <img className='imgCarousel' src={banner3} alt='' />
        </Carousel.Item>
      </Carousel>
    );
}

export default CarouselPortada;