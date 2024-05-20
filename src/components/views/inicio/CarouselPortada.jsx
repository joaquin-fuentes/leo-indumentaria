
import {Carousel} from 'react-bootstrap';
import { useState } from "react";

function CarouselPortada() {  const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel className='carouselInicio' activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className='carouselItem'>
          <img className='imgCarousel' src="https://res.cloudinary.com/dep95zom7/image/upload/v1715687523/LeoIndumentaria/banner_tienda_abstracto_morado_y_verde_lfgeni.png" alt='imagen portada '/>
        </Carousel.Item>
        <Carousel.Item className='carouselItem'>
          <img className='imgCarousel' src="https://res.cloudinary.com/dep95zom7/image/upload/v1715687513/LeoIndumentaria/Banner_horizontal_promci%C3%B3n_2x1_restaurant_comida_saludable_org%C3%A1nico_verde_szmita.png" alt=''/>
        </Carousel.Item>
        <Carousel.Item className='carouselItem'>
          <img className='imgCarousel' src="https://res.cloudinary.com/dep95zom7/image/upload/v1715688365/LeoIndumentaria/Banner_Horizontal_en_Crema_Naranja_Verde_estilo_Org%C3%A1nico_Delicado_1_eekj47.png" alt='' />
        </Carousel.Item>
      </Carousel>
    );
}

export default CarouselPortada;