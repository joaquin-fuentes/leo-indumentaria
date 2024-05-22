import { Card, Col, Button } from "react-bootstrap"
import { NavLink, Link } from "react-router-dom"
import whatsapp from "../../../assets/iconos/iconoWP.svg"



const CardDestacado = ({ producto }) => {

    return (
        <div data-aos="fade-up" className="img-galeria">
            <Card data-aos="fade-up" className='cardContenedor'>
                <div className="contenedorImagen">
                    <img src={producto.imagen} alt="imagen del producto" className="cardImagen" />
                </div>
                <div className="contenedorInfo p-1">
                    <p className="cardNombre">{producto.nombrePrenda}</p>
                    <p className="cardPrecio">${producto.precio}</p>
                    <div className="contenedorBotones">
                        <NavLink end to={`/detalle/${producto._id}`} className="btnCard">Ver detalle</NavLink>
                    </div>

                </div>
            </Card>
        </div>
    );
};

export default CardDestacado;
