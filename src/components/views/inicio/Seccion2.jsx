import React from 'react';
import { MdDeliveryDining } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";

const Seccion2 = () => {
    return (
        <div>
            <section className="container my-3">
                <div className="row p-2 d-flex justify-content-center d-lg-flex justify-content-lg-around  d-md-flex justify-content-md-between">
                    <article data-aos="fade-up" className=" cardSeccion">
                        <MdDeliveryDining className='iconoSeccion text-success' />
                        <p className='textSeccion'>Envios Gratis</p>
                    </article>
                    <article data-aos="fade-up" className=" cardSeccion ">
                        <FaCreditCard className='iconoSeccion p-1 text-primary' />
                        <p className='textSeccion'>Medios de Pago</p>
                    </article>
                    <article data-aos="fade-up" className=" cardSeccion ">
                        <BiSolidOffer className='iconoSeccion text-danger' />
                        <p className='textSeccion'>Descuentos</p>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default Seccion2;