import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../../assets/logos/logo1.png";
import whatsapp from "../../assets/iconos/iconoWP.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import "./Header.css"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Cambia el estado para abrir/cerrar el menú
    };

    const isHome = location.pathname === "/" || location.pathname === "/#inicio";

    return (
        <Navbar expand="lg" className={`header ${isScrolled ? 'scrolled' : ''} ${isHome ? 'homeBackground' : 'defaultBackground'}`}>
            <Container>
                <Navbar.Brand href="/#inicio" className='fw-bold p-1'>
                    <img src={logo} alt="Logo" className='logoMenu me-1' />
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className='narbarToggle '
                    onClick={toggleMenu} // Maneja el clic para abrir/cerrar el menú
                    style={{ border: "none" }} // Evita el borde negro
                >
                    {menuOpen ? <IoClose className='menuHamburguesaAbierto transitionMenu' /> : <GiHamburgerMenu className='menuHamburguesaCerrado transitionMenu' />}
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="contenedorEnlacesNav ms-auto">
                        <Nav.Link className="text-header text-right text-md-left" href="/#inicio">Inicio</Nav.Link>
                        <Nav.Link className="text-header" href="/#productos">Productos</Nav.Link>
                        <Nav.Link className="text-header" href="/#nosotros">Sobre Nosotros</Nav.Link>
                        <Nav.Link className="text-header" href="/#contacto">Contacto</Nav.Link>
                        <Nav.Link className="text-header" href="/#contacto"><img src={whatsapp} alt="icono de whatsapp" className='iconoHeader' /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
