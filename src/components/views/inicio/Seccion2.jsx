import React from 'react';
import { MdDeliveryDining } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";

const Seccion2 = () => {
    return (
        <div>
            <section className="container mt-4">
                <div
                    className="row p-4 d-flex justify-content-center d-lg-flex justify-content-lg-around  d-md-flex justify-content-md-between">
                    <article data-aos="fade-up" className=" cardSeccion col-11 col-md-5 col-lg-3   card text-center  mx-1 shadow p-3 mb-5  rounded ">
                        <aside className="card-body">
                            <MdDeliveryDining className='iconoSeccion text-success' />
                            <h4>Envios Gratis</h4>
                            <p>Hace tu pedido por wp y te lo llevamos a tu domicilio</p>
                        </aside>
                    </article>
                    <article data-aos="fade-up" className=" cardSeccion col-11 col-md-5 col-lg-3 mx-3 card text-center  mx-1 shadow p-3 mb-5  rounded">
                        <aside className="card-body">
                            <FaCreditCard className='iconoSeccion p-1 text-primary' />
                            <h4>Medios de Pago</h4>
                            <p className="m-0 p-0">Efectivo</p>
                            <p className="m-0 p-0">Transferencia</p>
                            <p className="m-0 p-0">Tarjeta de débito</p>
                            <p className="m-0 p-0">Tarjeta de crédito</p>
                        </aside>
                    </article>
                    <article data-aos="fade-up" className=" cardSeccion col-11 col-md-5 col-lg-3  card text-center mx-1  shadow p-3 mb-5  rounded ">
                        <aside className="card-body">
                            <BiSolidOffer className='iconoSeccion text-danger' />
                            <h4>Descuentos</h4>
                            <p>Con la compra de 3 o mas productos contas con descuentos</p>
                        </aside>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default Seccion2;