import React from 'react';
import './Footer.css'; // Asegúrate de importar el archivo CSS
import logo from "../../assets/logos/logoblanco.png"

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-column">
                    <img src={logo} alt="Logo de la Empresa" className="footer-logo" />
                </div>
                <div className="footer-column">
                    <h4>Contacto</h4>
                    <p>Email: <a href="mailto:joaquin.fuentes1327@gmail.com">joaquin.fuentes1327@gmail.com</a></p>
                    <p>Teléfono 1: <a href="tel:3815708067">3815708067</a></p>
                    <p>Teléfono 2: <a href="tel:3816097754">3816097754</a></p>
                    <div className="social-media">
                        <a href="https://www.instagram.com/ljindumentaria2024?igsh=NGJrODVzY2lkcW9s " target="_blank" rel="noopener noreferrer">Instagram: @ljindumentaria2024</a>
                    </div>
                </div>
                <div className="footer-column">
                    <h4>Navegación</h4>
                    <ul>
                        <li><a href="/#">Inicio</a></li>
                        <li><a href="/#productos">Productos</a></li>
                        {/* <li><a href="/faq">FAQ</a></li> */}
                        <li><a href="/#">Envíos y Devoluciones</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
