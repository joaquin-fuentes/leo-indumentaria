import { Card, Col, Button } from "react-bootstrap"
import { NavLink, Link } from "react-router-dom"
import whatsapp from "../../../assets/iconos/iconoWP.svg"
import { BiSolidOffer } from "react-icons/bi";



const CardProducto = ({ producto }) => {

    return (
        <Col xs={6} md={4} lg={2}>
            <Card data-aos="fade-up" className='cardContenedor'>
                <div className="contenedorImagen">
                    <img src={producto.imagen} alt="imagen del producto" className="cardImagen" />
                    {producto.otro === "ofertadeldia" ? <span className="ofertaDelDia">Oferta del día</span> : <></>}
                    {producto.descuento > 0 ? <span className="ofertaImg"> {producto.descuento}%OFF</span> : <></>}
                </div>
                <div className="contenedorInfo">
                    <p className="cardNombre">{producto.nombrePrenda}</p>
                    <p className="cardNombre mt-0">Talle: {producto.talle}</p>
                    <p className="cardPrecio">${producto.otro === "ofertadeldia" ? producto.precio * (1 - (20 / 100)) : producto.precio * (1 - (producto.descuento / 100))}</p>
                    <div className="contenedorBotones">
                        <NavLink end to={`/detalle/${producto._id}`} className="btnCard">Ver detalle</NavLink>
                        <Link target="_blank" to={`https://api.whatsapp.com/send?phone=3816097754&text=¡Hola! te queria consultar sobre ${producto.nombrePrenda}`}><img src={whatsapp} alt="icono de whatsapp" className="ms-2 iconoCard" /></Link>
                    </div>

                </div>
            </Card>
        </Col>
    );
};

export default CardProducto;
