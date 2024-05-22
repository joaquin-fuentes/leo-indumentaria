import React from 'react';
import { Container } from 'react-bootstrap';
import { FaCreditCard } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { FaRegSurprise } from "react-icons/fa";


const Seccion2 = () => {
    return (
        <div data-aos="fade-up" className='bg-dark my-3 p-1'>
            <div className='d-flex justify-content-evenly align-items-center'>
                <div className='text-light d-flex'>
                    <FaCreditCard className='text-warning me-2 fs-3'/>
                    Medios de pago
                </div>
                <div className='text-warning fs-1 m-0 p-0'>/</div>
                <div className='text-light d-flex'>
                    <MdDeliveryDining className='text-warning me-2 fs-3'/>
                    Envios gratis
                </div>
                <div className='text-warning fs-1 m-0 p-0'>/</div>
                <div className='text-light d-flex'>
                    <FaRegSurprise className='text-warning me-2 fs-3'/>
                    Sorteos
                </div>
            </div>
        </div>
    );
};

export default Seccion2;