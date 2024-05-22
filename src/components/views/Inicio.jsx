import React from 'react';
import { Container } from 'react-bootstrap';
import Portada from './inicio/Portada';
import Seccion2 from './inicio/Seccion2';
import Productos from './inicio/Productos';
const Inicio = () => {
    return (
        <main className='fondoInicio'>
            <Container>
                <Portada></Portada>
                <Seccion2></Seccion2>
                <Productos></Productos>
            </Container>
        </main>
    );
};

export default Inicio;