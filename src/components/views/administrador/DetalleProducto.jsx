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

                <Modal.Body>
                    <p className="fw-bold">Prenda: <span className="fw-normal">{producto.nombrePrenda}</span></p>
                    <p className="fw-bold">Imagen: <span className="fw-normal">{producto.imagen}</span></p>
                    <p className="fw-bold">Talle: <span className="textMensajeModal fw-normal">{producto.talle}</span></p>
                    <p className="fw-bold">Categoria: <span className="fw-normal">{producto.categoria}</span></p>
                    <p className="fw-bold">Descuento: <span className="fw-normal">{producto.descuento}</span></p>
                    <p className="fw-bold">Precio: <span className="fw-normal">{producto.precio}</span></p>
                    <p className="fw-bold">Estado: <span className="fw-normal">{producto.estado}</span></p>
                    <p className="fw-bold">Estilo: <span className="fw-normal">{producto.estilo}</span></p>
                    <p className="fw-bold">Destacado: <span className="fw-normal">{producto.destacado}</span></p>
                    <p className="fw-bold">Precio x mayor: <span className="fw-normal">{producto.precioxmayor}</span></p>
                    <p className="fw-bold">Color: <span className="fw-normal">{producto.color}</span></p>
                    <p className="fw-bold">Descripcion: <span className="fw-normal">{producto.descripcion}</span></p>

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