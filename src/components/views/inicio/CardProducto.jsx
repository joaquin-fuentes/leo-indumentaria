import { Card, Col, Button } from "react-bootstrap"
import { NavLink, Link } from "react-router-dom"
import whatsapp from "../../../assets/iconos/iconoWP.svg"



const CardProducto = ({ producto }) => {

    return (
        <Col xs={6} md={4} lg={2}>
            <Card data-aos="fade-up" className='cardContenedor'>
                <div className="contenedorImagen">
                    <img src={producto.imagen} alt="imagen del producto" className="cardImagen" />
                </div>
                <div className="contenedorInfo">
                    <p className="cardNombre">{producto.nombrePrenda}</p>
                    <p className="cardNombre mt-0">Talle: {producto.talle}</p>
                    <p className="cardPrecio">${producto.precio}</p>
                    <div className="contenedorBotones">
                        <NavLink end to={`/detalle/${producto._id}`}  className="btnCard">Ver detalle</NavLink>
                        <Link  target="_blank"  to={`https://api.whatsapp.com/send?phone=3816097754&text=¡Hola! te queria consultar sobre ${producto.nombrePrenda}`}><img src={whatsapp} alt="icono de whatsapp" className="iconoCard" /></Link>
                    </div>

                </div>
            </Card>
        </Col>
    );
};

export default CardProducto;
// <Card.Img className='cardImagen' variant="top" src={producto.imagen} />
// <Card.Body className="cardContenedorInfo">
//     <Card.Title className='cardNombre'>{producto.nombrePrenda}</Card.Title>
//     <Card.Text className='cardPrecio'>
//         $ {producto.precio}
//     </Card.Text>
//     <div className='cardBotones'>
//         <Button className='btnCard' variant="primary">Detalle</Button>
//         <NavLink> <img src={whatsapp} alt="icono whatsapp" /></NavLink>
//     </div>
// </Card.Body>