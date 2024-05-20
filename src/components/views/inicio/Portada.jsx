import React from 'react';
import "./Inicio.css"
import { Container} from "react-bootstrap"
import CarouselPortada from "./CarouselPortada"

const Portada = () => {
    return (
        <Container fluid className='contenedorPortada'>
            <div className='contenedorImagenPortada'>
                <CarouselPortada></CarouselPortada>
            </div>
        </Container>
    );
};

export default Portada;