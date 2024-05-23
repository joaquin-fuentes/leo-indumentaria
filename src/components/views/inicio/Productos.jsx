import { useState, useEffect } from "react";
import { Container, Button, InputGroup, Form, Row, Spinner, Card, Dropdown } from "react-bootstrap"
import { NavLink, Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa";
import { obtenerProductos } from '../../helpers/prendas';
import Swal from "sweetalert2"
import CardProducto from "./CardProducto";
import { FaCheck } from "react-icons/fa";

const Productos = () => {
    const [productos, setProductos] = useState([])
    const [nombrePrenda, setNombrePrenda] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("")
    const [estiloSeleccionado, setEstiloSeleccionado] = useState("")
    const [estadoSeleccionado, setEstadoSeleccionado] = useState("")
    const [sexoSeleccionado, setSexoSeleccionado] = useState("")
    const [descuentoSeleccionado, setDescuentoSeleccionado] = useState("")


    useEffect(() => {
        setIsLoading(true); // Establece isLoading en true al inicio de la carga
        obtenerProductos().then((respuesta) => {
            if (respuesta != null) {
                setProductos(respuesta)
                setIsLoading(false); // Cambia isLoading a false cuando los productos se cargan con éxito
            } else {
                Swal.fire("Error", "No se pudo obtener los datos de la API", "error")
                // navegacion("/error404")
            }
        })
    }, [])

    const productosFiltrados = productos.filter((producto) => {
        const nombrePrendaMatches =
            nombrePrenda === "" || producto.nombrePrenda.toLowerCase().includes(nombrePrenda.toLowerCase());
        const categoriaMatches = categoriaSeleccionada === "" || producto.categoria.toLowerCase() === categoriaSeleccionada.toLowerCase();
        const estiloMatches = estiloSeleccionado === "" || producto.estilo.toLowerCase() === estiloSeleccionado.toLowerCase();
        const estadoMatches = estadoSeleccionado === "" || producto.estado.toLowerCase() === estadoSeleccionado.toLowerCase();
        const sexoMatches = sexoSeleccionado === "" || producto.sexo.toLowerCase() === sexoSeleccionado.toLowerCase();
        const descuentoMatches = descuentoSeleccionado === "" ||
            (descuentoSeleccionado === "si" && producto.descuento > 0) ||
            (descuentoSeleccionado === "no" && (producto.descuento === 0 || !producto.descuento));

        return nombrePrendaMatches && categoriaMatches && estiloMatches && estadoMatches && sexoMatches && descuentoMatches;
    });

    const resetearFiltros = () => {
        setNombrePrenda("");
        setCategoriaSeleccionada("");
        setEstiloSeleccionado("");
        setEstadoSeleccionado("");
        setSexoSeleccionado("");
        setDescuentoSeleccionado("");
    };

    const estadoNuevo = () => {
        setEstadoSeleccionado("Nuevo");
    }
    const estadoUsado = () => {
        setEstadoSeleccionado("Usado");
    }
    const estadoTodos = () => {
        setEstadoSeleccionado("");
    }
    const categoriaAdulto = () => {
        console.log("selecciono Adulto")
        setCategoriaSeleccionada("Adulto");
    }
    const categoriaAccesorios = () => {
        console.log("selecciono Accesorios")
        setCategoriaSeleccionada("Accesorios");
    }
    const categoriaNiño = () => {
        console.log("selecciono Niño")
        setCategoriaSeleccionada("Niño");
    }
    const categoriaBebe = () => {
        console.log("selecciono Bebe")
        setCategoriaSeleccionada("Bebe");
    }
    const categoriaTodos = () => {
        console.log("selecciono Todos")
        setCategoriaSeleccionada("");
    }
    const estiloDeportiva = () => {
        setEstiloSeleccionado("Deportiva");
    }
    const estiloFormal = () => {
        setEstiloSeleccionado("Formal");
    }
    const estiloTodos = () => {
        setEstiloSeleccionado("");
    }
    const sexoHombre = () => {
        setSexoSeleccionado("Hombre");
    }
    const sexoMujer = () => {
        setSexoSeleccionado("Mujer");
    }
    const sexoUnisex = () => {
        setSexoSeleccionado("Unisex");
    }
    const sexoTodos = () => {
        setSexoSeleccionado("");
    }
    const conDescuento = () => {
        setDescuentoSeleccionado("si");
    }
    const sinDescuento = () => {
        setDescuentoSeleccionado("no");
    }
    const descuentoTodos = () => {
        setDescuentoSeleccionado("");
    }


    return (
        <div id="productos">
            <h2 data-aos="fade-up">Productos</h2>
            <hr data-aos="fade-up" />
            <div data-aos="fade-up" className="d-flex flex-wrap">
                <Dropdown className="mb-3 me-2">
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        Estado
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => estadoNuevo()} className="d-flex align-items-center">Nuevo {estadoSeleccionado === "Nuevo" ? <FaCheck className="ms-auto" />
                            : <></>}</Dropdown.Item>
                        <Dropdown.Item onClick={() => estadoUsado()} className="d-flex align-items-center">Usado {estadoSeleccionado === "Usado" ? <FaCheck className="ms-auto" />
                            : <></>}</Dropdown.Item>
                        <Dropdown.Item onClick={() => estadoTodos()} className="d-flex align-items-center">Todos {estadoSeleccionado === "" ? <FaCheck className="ms-auto" />
                            : <></>}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="mb-3 me-2">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Categoria
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => categoriaAdulto()} className="d-flex align-items-center">Adulto {categoriaSeleccionada === "Adulto" ? <FaCheck className="ms-auto" />
                            : <></>}</Dropdown.Item>
                        <Dropdown.Item onClick={() => categoriaNiño()} className="d-flex align-items-center">Niño {categoriaSeleccionada === "Niño" ? <FaCheck className="ms-auto" />
                            : <></>}</Dropdown.Item>
                        <Dropdown.Item onClick={() => categoriaBebe()} className="d-flex align-items-center">Bebe {categoriaSeleccionada === "Bebe" ? <FaCheck className="ms-auto" />
                            : <></>}</Dropdown.Item>
                        <Dropdown.Item onClick={() => categoriaAccesorios()} className="d-flex align-items-center">Accesorios {categoriaSeleccionada === "Accesorios" ? <FaCheck className="ms-auto" />
                            : <></>}</Dropdown.Item>
                        <Dropdown.Item onClick={() => categoriaTodos()} className="d-flex align-items-center">Todos {categoriaSeleccionada === "" ? <FaCheck className="ms-auto" />
                            : <></>}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="mb-3 me-2">
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Estilo
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => estiloDeportiva()} className="d-flex align-items-center">Deportivo {estiloSeleccionado === "Deportiva" ? <FaCheck className="ms-auto" />
                            : <></>}</Dropdown.Item>
                        <Dropdown.Item onClick={() => estiloFormal()} className="d-flex align-items-center">Formal {estiloSeleccionado === "Formal" ? <FaCheck className="ms-auto" />
                            : <></>}</Dropdown.Item>
                        <Dropdown.Item onClick={() => estiloTodos()} className="d-flex align-items-center">Todos {estiloSeleccionado === "" ? <FaCheck className="ms-auto" />
                            : <></>}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="mb-3 me-2">
                    <Dropdown.Toggle variant="danger" id="dropdown-basic">
                        Sexo
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => sexoHombre()} className="d-flex align-items-center">Hombre {sexoSeleccionado === "Hombre" ? <FaCheck className="ms-auto" />
                            : <></>}</Dropdown.Item>
                        <Dropdown.Item onClick={() => sexoMujer()} className="d-flex align-items-center">Mujer {sexoSeleccionado === "Mujer" ? <FaCheck className="ms-auto" />
                            : <></>}</Dropdown.Item>
                        <Dropdown.Item onClick={() => sexoUnisex()} className="d-flex align-items-center">Unisex {sexoSeleccionado === "Unisex" ? <FaCheck className="ms-auto" />
                            : <></>}</Dropdown.Item>
                        <Dropdown.Item onClick={() => sexoTodos()} className="d-flex align-items-center">Todos {sexoSeleccionado === "" ? <FaCheck className="ms-auto" />
                            : <></>}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="mb-3 me-2">
                    <Dropdown.Toggle variant="warning" id="dropdown-basic">
                        Descuentos
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => conDescuento()} className="d-flex align-items-center">Con Descuento {descuentoSeleccionado === "si" ? <FaCheck className="ms-auto" />
                            : <></>}</Dropdown.Item>
                        <Dropdown.Item onClick={() => sinDescuento()} className="d-flex align-items-center">Sin Descuento {descuentoSeleccionado === "no" ? <FaCheck className="ms-auto" />
                            : <></>}</Dropdown.Item>
                        <Dropdown.Item onClick={() => descuentoTodos()} className="d-flex align-items-center">Todos {descuentoSeleccionado === "" ? <FaCheck className="ms-auto" />
                            : <></>}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Button variant="info" onClick={resetearFiltros} className="mb-3">
                    Mostrar todos
                </Button>
            </div>
            <InputGroup data-aos="fade-up" className="mb-3">
                <InputGroup.Text id="basic-addon1"><FaSearch /></InputGroup.Text>
                <Form.Control
                    placeholder="Buscar"
                    value={nombrePrenda}
                    onChange={(e) => setNombrePrenda(e.target.value)}
                />
            </InputGroup>
            {isLoading ? (<div className="d-flex justify-content-center mt-4">
                <Spinner className="text-center" animation="border" variant="primary" />
            </div>) :
                (productosFiltrados.length === 0 ? <p className="m-0 p-2">No se encontraron productos con el filtro seleccionado</p>
                    :
                    <Row className="alineacionProductos">
                        {productosFiltrados.map((producto) => (
                            <CardProducto producto={producto} key={producto._id} />
                        ))}
                    </Row>
                )}

        </div>
    );
};

export default Productos;