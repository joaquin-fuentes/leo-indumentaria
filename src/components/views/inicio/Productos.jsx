import React from 'react';
import { Container, Button, InputGroup, Form, Row, Col, Card } from "react-bootstrap"
import { NavLink, Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa";
import whatsapp from "../../../assets/iconos/iconoWP.svg"


const Productos = () => {
    return (
        <Container>
            <h2>Productos</h2>
            <hr />
            <Button className='mb-3 me-3' variant='outline-success'>Todos</Button>
            <Button className='mb-3 me-3' variant='outline-danger'>Mujer</Button>
            <Button className='mb-3 me-3' variant='outline-primary'>Hombre</Button>
            <Button className='mb-3 me-3' variant='outline-warning'>Niños</Button>
            <Button className='mb-3 me-3' variant='outline-info'>Accesorios</Button>
            <InputGroup className="mb-3">
                <InputGroup.Text><FaSearch /></InputGroup.Text>
                <Form.Control
                    placeholder="Buscar"
                />
            </InputGroup>
            <Row className='py-4'>
                <Col xs={6} md={4} lg={3}>
                    <Card className='cardContenedor'>
                        <Card.Img className='cardImagen' variant="top" src="https://res.cloudinary.com/dep95zom7/image/upload/v1715693129/LeoIndumentaria/Camisa_de_dibujos_animados___Vector_Premium_k0bivz.jpg" />
                        <Card.Body>
                            <Card.Title className='cardNombre'>Nombre</Card.Title>
                            <Card.Text className='cardPrecio'>
                                $ Precio
                            </Card.Text>
                            <div className='cardBotones'>
                                <Button variant="primary">Ver Detalle</Button>
                                <NavLink> <img src={whatsapp} alt="icono whatsapp" /></NavLink>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="fade-in" xs={6} md={4} lg={3}>
                    <Card className='cardContenedor'>
                        <Card.Img className='cardImagen' variant="top" src="https://res.cloudinary.com/dep95zom7/image/upload/v1715693129/LeoIndumentaria/Camisa_de_dibujos_animados___Vector_Premium_k0bivz.jpg" />
                        <Card.Body>
                            <Card.Title className='cardNombre'>Nombre</Card.Title>
                            <Card.Text className='cardPrecio'>
                                $ Precio
                            </Card.Text>
                            <div className='cardBotones'>
                                <Button variant="primary">Ver Detalle</Button>
                                <NavLink> <img src={whatsapp} alt="icono whatsapp" /></NavLink>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="fade-in" xs={6} md={4} lg={3}>
                    <Card className='cardContenedor'>
                        <Card.Img className='cardImagen' variant="top" src="https://res.cloudinary.com/dep95zom7/image/upload/v1715693129/LeoIndumentaria/Camisa_de_dibujos_animados___Vector_Premium_k0bivz.jpg" />
                        <Card.Body>
                            <Card.Title className='cardNombre'>Nombre</Card.Title>
                            <Card.Text className='cardPrecio'>
                                $ Precio
                            </Card.Text>
                            <div className='cardBotones'>
                                <Button variant="primary">Ver Detalle</Button>
                                <NavLink> <img src={whatsapp} alt="icono whatsapp" /></NavLink>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="fade-in" xs={6} md={4} lg={3}>
                    <Card className='cardContenedor'>
                        <Card.Img className='cardImagen' variant="top" src="https://res.cloudinary.com/dep95zom7/image/upload/v1715693129/LeoIndumentaria/Camisa_de_dibujos_animados___Vector_Premium_k0bivz.jpg" />
                        <Card.Body>
                            <Card.Title className='cardNombre'>Nombre</Card.Title>
                            <Card.Text className='cardPrecio'>
                                $ Precio
                            </Card.Text>
                            <div className='cardBotones'>
                                <Button variant="primary">Ver Detalle</Button>
                                <NavLink> <img src={whatsapp} alt="icono whatsapp" /></NavLink>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="fade-in" xs={6} md={4} lg={3}>
                    <Card className='cardContenedor'>
                        <Card.Img className='cardImagen' variant="top" src="https://res.cloudinary.com/dep95zom7/image/upload/v1715693129/LeoIndumentaria/Camisa_de_dibujos_animados___Vector_Premium_k0bivz.jpg" />
                        <Card.Body>
                            <Card.Title className='cardNombre'>Nombre</Card.Title>
                            <Card.Text className='cardPrecio'>
                                $ Precio
                            </Card.Text>
                            <div className='cardBotones'>
                                <Button variant="primary">Ver Detalle</Button>
                                <NavLink> <img src={whatsapp} alt="icono whatsapp" /></NavLink>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="fade-in" xs={6} md={4} lg={3}>
                    <Card className='cardContenedor'>
                        <Card.Img className='cardImagen' variant="top" src="https://res.cloudinary.com/dep95zom7/image/upload/v1715693129/LeoIndumentaria/Camisa_de_dibujos_animados___Vector_Premium_k0bivz.jpg" />
                        <Card.Body>
                            <Card.Title className='cardNombre'>Nombre</Card.Title>
                            <Card.Text className='cardPrecio'>
                                $ Precio
                            </Card.Text>
                            <div className='cardBotones'>
                                <Button variant="primary">Ver Detalle</Button>
                                <NavLink> <img src={whatsapp} alt="icono whatsapp" /></NavLink>

                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
};

export default Productos;