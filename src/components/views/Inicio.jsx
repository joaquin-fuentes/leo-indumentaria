import React from 'react';
import Portada from './inicio/Portada';
import Seccion2 from './inicio/Seccion2';
import Productos from './inicio/Productos';
const Inicio = () => {
    return (
        <main className='fondoInicio'>
            <Portada></Portada>
            <Seccion2></Seccion2>
            <Productos></Productos>
        </main>
    );
};

export default Inicio;