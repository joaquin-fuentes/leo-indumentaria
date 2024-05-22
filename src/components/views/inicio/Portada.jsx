import React from 'react';
import "./Inicio.css"
import CarouselPortada from "./CarouselPortada"

const Portada = () => {
    return (
        <div className='contenedorPortada'>
            <CarouselPortada data-aos="fade-up"></CarouselPortada>
        </div>
    );
};

export default Portada;