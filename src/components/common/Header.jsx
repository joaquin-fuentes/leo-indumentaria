import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../../assets/logos/logolj.png";
import whatsapp from "../../assets/iconos/iconoWP.svg";
import instagram from "../../assets/iconos/iconoInstagram.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { IoShirt } from "react-icons/io5";
import { IoIosHome } from "react-icons/io";

import "./Header.css"

const Header = ({ usuarioLogueado, setUsuarioLogueado }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();


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

    const logout = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¿Deseas cerrar sesión?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí'
        }).then((result) => {
            if (result.isConfirmed) {
                // Navegar a la ruta principal y borrar session storage
                navigate("/");
                sessionStorage.removeItem("usuarioLogueado");
                setUsuarioLogueado({});
                Swal.fire(
                    '¡Listo!',
                    'Sesión cerrada',
                    'success'
                );
            }
        });
    };

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
                        <Nav.Link className="text-header text-right text-md-left" href="/#inicio"><IoIosHome className='mb-1' />
                            Inicio</Nav.Link>
                        <Nav.Link className="text-header" href="/#productos"><IoShirt className='mb-1' />
                            Productos</Nav.Link>
                        {/* <Nav.Link className="text-header" href="/#nosotros">Sobre Nosotros</Nav.Link>
                        <Nav.Link className="text-header" href="/#contacto">Contacto</Nav.Link> */}
                        {
                            usuarioLogueado.rol === "administrador" ?
                                <>
                                    <Nav.Link className="text-header" href="/administrador">Administrador</Nav.Link>
                                    <Nav.Link className="text-header" onClick={logout} >Cerrar Sesion</Nav.Link>
                                </>
                                :
                                <></>
                        }
                        <div className='d-flex'>
                            <Nav.Link target="_blank" href={`https://api.whatsapp.com/send?phone=3816097754&text=¡Hola! te queria haer una consulta sobre tu tienda de indumentaria`} className="p-0 m-2" ><img src={whatsapp} alt="icono de whatsapp" className='iconoHeader' /></Nav.Link>
                            <Nav.Link target="_blank" href={`https://www.instagram.com/ljindumentaria2024?igsh=NGJrODVzY2lkcW9s`} className="p-0 m-2" ><img src={instagram} alt="icono de isntagram" className='iconoHeader' /></Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
