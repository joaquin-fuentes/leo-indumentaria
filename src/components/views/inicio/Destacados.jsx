import { useState, useEffect } from "react";
import { Container, Button, InputGroup, Form, Row, Spinner, Card } from "react-bootstrap"
import { NavLink, Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa";
import { obtenerProductos } from '../../helpers/prendas';
import Swal from "sweetalert2"
import CardDestacado from "./CardDestacado";

import Slider from "react-slick"

const Destacados = () => {
    const [productos, setProductos] = useState([])
    const [destacado, setDestacado] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setSlidesToShow(3);
            } else {
                setSlidesToShow(5);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Para ajustar inicialmente al tamaño de la ventana

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        setIsLoading(true); // Establece isLoading en true al inicio de la carga
        obtenerProductos().then((respuesta) => {
            if (respuesta != null) {
                setProductos(respuesta)
                setIsLoading(false); // Cambia isLoading a false cuando los productos se cargan con éxito
            } else {
                Swal.fire("Error", "No se pudo obtener los datos de la API", "error")
                // navegacion("/error404")
            }
        })
    }, [])

    const productosFiltrados = productos.filter((producto) => {
        const destacadoMatches =
            producto.destacado === "Si";
        return destacadoMatches;
    });
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
    };


    return (
        <div id="productos" className="my-5">
            <h2 data-aos="fade-up">Productos Destacados</h2>
            <hr data-aos="fade-up" />
            {isLoading ? (<div className="d-flex justify-content-center mt-4">
                <Spinner className="text-center" animation="border" variant="primary" />
            </div>) :
                (productosFiltrados.length === 0 ? <p>No se encontraron productos destacados</p>
                    :
                    <Row className="alineacionProductos">
                        <Slider {...settings}>
                            {productosFiltrados.map((producto) => (
                                <CardDestacado producto={producto} key={producto._id} />
                            ))}
                        </Slider>
                    </Row>
                )}

        </div>
    );
};

export default Destacados;