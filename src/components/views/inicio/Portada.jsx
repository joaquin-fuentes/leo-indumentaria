import React from 'react';
import "./Inicio.css"
import { Container} from "react-bootstrap"
import CarouselPortada from "./CarouselPortada"

const Portada = () => {
    return (
        <div  className='contenedorPortada'>
            <div className='contenedorImagenPortada'>
                <CarouselPortada data-aos="fade-up"></CarouselPortada>
            </div>
        </div>
    );
};

export default Portada;