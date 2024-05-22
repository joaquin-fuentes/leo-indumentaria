import React from 'react';
import { Container } from 'react-bootstrap';
import { FaCreditCard } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { FaRegSurprise } from "react-icons/fa";


const Seccion2 = () => {
    return (
        <div data-aos="fade-up" className='bg-dark my-3 p-1 contenedorSeccion'>
            <div data-aos="fade-up" className='d-flex justify-content-evenly align-items-center'>
                <div className='text-light d-flex contenedorArticleSeccion'>
                    <FaCreditCard className='text-warning me-2 fs-3' />
                    <span>
                        Medios de pago
                    </span>
                </div>
                <div className='text-warning fs-1 m-0 p-0'>/</div>
                <div className='text-light d-flex contenedorArticleSeccion'>
                    <MdDeliveryDining className='text-warning me-2 fs-3' />
                    <span>
                        Envios gratis
                    </span>
                </div>
                <div className='text-warning fs-1 m-0 p-0'>/</div>
                <div className='text-light d-flex contenedorArticleSeccion'>
                    <FaRegSurprise className='text-warning me-2 fs-3' />
                    <span>
                        Sorteos
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Seccion2;