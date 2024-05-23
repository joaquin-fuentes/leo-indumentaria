import { Container, Row, Col, Breadcrumb, Button } from "react-bootstrap"
import { useEffect, useState } from "react";
import { obtenerProducto } from "../../helpers/prendas";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa"


import Swal from 'sweetalert2';

const DetalleProducto = () => {

    const { id } = useParams()

    const [producto, setProducto] = useState([])
    const [productoWp, setProductoWp] = useState("")

    useEffect(() => {
        obtenerProducto(id).then((respuesta) => {
            if (respuesta != null) {
                setProducto(respuesta)
                setProductoWp(`${respuesta.nombrePrenda}. CÓDIGO: ${respuesta.id}`)
            } else {
                Swal.fire("Error", "No se pudo obtener los datos de la API", "error")
                // navegacion("/error404")
            }
        })
    }, [])

    return (
        <div className="fondoDetalleProducto">
            <Container className='contenedorDetalle'>
                <h2 data-aos="fade-up">Detalle del producto</h2>
                <hr data-aos="fade-up" />
                <Row className="p-4">
                    <Col data-aos="fade-up" xs={12} lg={6} className="text-center " >
                        <div className="contenedorImgDetalle">
                            <img src={producto.imagen} alt="imagen del producto" className="imgDetalleProducto" />
                            {producto.otro === "ofertadeldia" ? <span className="ofertaDelDia">Oferta del día</span> : <></>}
                            {producto.descuento > 0 ? <span className="ofertaImg"> {producto.descuento}%OFF</span> : <></>}
                        </div>
                    </Col>
                    <Col data-aos="fade-up" xs={12} lg={6} >
                        <article className="p-2 py-md-0">
                            <h3>{producto.nombrePrenda}</h3>
                            <hr />
                            <p className="fw-bold ">Categoria: <span className="fw-normal">{producto.categoria}</span></p>
                            <p className="fw-bold ">Talle: <span className="fw-normal">{producto.talle}</span></p>
                            <p className="fw-bold ">Estado: <span className="fw-normal">{producto.estado}</span></p>
                            {producto.descripcion === "" ? <></> : <p className="fw-bold ">Descripcion: <span className="fw-normal">{producto.descripcion}</span></p>}
                            <p className="fw-bold">Color: <span className="fw-normal p-1" style={{ backgroundColor: producto.color }}>{producto.color}</span></p>
                            <p className="fw-bold">Precio: $<span className="fw-normal">{producto.otro === "ofertadeldia" ? producto.precio * (1 - (20 / 100)) : producto.precio * (1 - (producto.descuento / 100))}</span></p>
                            <Link className="btn btn-success"
                                target="_blank"
                                to={`https://api.whatsapp.com/send?phone=3816097754&text=¡Hola! quisiera hacer una consulta sobre ${producto.nombrePrenda}`}>
                                Ir al Whatsapp <FaWhatsapp className="icono-whatsap" />
                            </Link>
                            <Link className="btn btn-primary mx-3"
                                to="/">
                                Volver
                            </Link>
                        </article>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DetalleProducto;