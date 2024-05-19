import { Card, Col, Button } from "react-bootstrap"
import { NavLink, Link } from "react-router-dom"
import whatsapp from "../../../assets/iconos/iconoWP.svg"



const CardProducto = ({ producto }) => {

    return (
        <Col xs={6} md={4} lg={3}>
            <Card data-aos="fade-up" className='cardContenedor'>
                <Card.Img className='cardImagen' variant="top" src="https://res.cloudinary.com/dep95zom7/image/upload/v1715693129/LeoIndumentaria/Camisa_de_dibujos_animados___Vector_Premium_k0bivz.jpg" />
                <Card.Body>
                    <Card.Title className='cardNombre'>Nombre</Card.Title>
                    <Card.Text className='cardPrecio'>
                        $ Precio
                    </Card.Text>
                    <div className='cardBotones'>
                        <Button className='btnCard' variant="primary">Detalle</Button>
                        <NavLink> <img src={whatsapp} alt="icono whatsapp" /></NavLink>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardProducto;