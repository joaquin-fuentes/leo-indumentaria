import { useState, useEffect } from "react";
import { Form, Modal, Button } from "react-bootstrap"
import { useForm } from "react-hook-form";
import { obtenerProducto } from "../../helpers/prendas";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";




const DetalleProducto = ({ producto, borrarProducto }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <>
            <Button onClick={handleShow} variant="primary" className=" m-1 d-flex justify-content-center align-items-center flex-column">
                <FaEye />
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Detalle Producto</Modal.Title>
                </Modal.Header>

                <Modal.Body className="">
                    <div className="row">
                        <p className="fw-bold col-xs-12  m-0 p-1 col-md-6">Prenda: <span className="fw-normal">{producto.nombrePrenda}</span></p>
                        <p className="fw-bold col-xs-12  m-0 p-1 col-md-6">Imagen: <img src={producto.imagen} alt="imagen de producto" className="w-75 h-50" /> </p>
                        <p className="fw-bold col-xs-12  m-0 p-1 col-md-6">Talle: <span className="textMensajeModal fw-normal">{producto.talle}</span></p>
                        <p className="fw-bold col-xs-12  m-0 p-1 col-md-6">Categoria: <span className="fw-normal">{producto.categoria}</span></p>
                        <p className="fw-bold col-xs-12  m-0 p-1 col-md-6">Descuento: <span className="fw-normal">{producto.descuento}</span></p>
                        <p className="fw-bold col-xs-12  m-0 p-1 col-md-6">Precio: <span className="fw-normal">{producto.precio}</span></p>
                        <p className="fw-bold col-xs-12  m-0 p-1 col-md-6">Estado: <span className="fw-normal">{producto.estado}</span></p>
                        <p className="fw-bold col-xs-12  m-0 p-1 col-md-6">Estilo: <span className="fw-normal">{producto.estilo}</span></p>
                        <p className="fw-bold col-xs-12  m-0 p-1 col-md-6">Destacado: <span className="fw-normal">{producto.destacado}</span></p>
                        <p className="fw-bold col-xs-12  m-0 p-1 col-md-6">Precio x mayor: <span className="fw-normal">{producto.precioxmayor}</span></p>
                        <p className="fw-bold col-xs-12  m-0 p-1 col-md-6">Color: <span className="fw-normal">{producto.color}</span></p>
                        <p className="fw-bold col-xs-12  m-0 p-1 col-md-6">Descripcion: <span className="fw-normal">{producto.descripcion}</span></p>
                        <p className="fw-bold col-xs-12  m-0 p-1 col-md-6">Oferta del día: <span className="fw-normal">{producto.otro}</span></p>
                    </div>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
                    <Button variant="danger" onClick={borrarProducto} ><FaTrashAlt />
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    );
};

export default DetalleProducto;