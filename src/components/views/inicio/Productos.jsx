import { useState, useEffect } from "react";
import { Container, Button, InputGroup, Form, Row, Spinner, Card, Dropdown } from "react-bootstrap"
import { NavLink, Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa";
import { obtenerProductos } from '../../helpers/prendas';
import Swal from "sweetalert2"
import CardProducto from "./CardProducto";

const Productos = () => {
    const [productos, setProductos] = useState([])
    const [nombrePrenda, setNombrePrenda] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("")


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

        return nombrePrendaMatches && categoriaMatches;
    });

    const categoriaAdulto = () => {
        console.log("selecciono Adulto")
        setCategoriaSeleccionada("Adulto");
    }
    const categoriaJuvenil = () => {
        console.log("selecciono Juvenil")
        setCategoriaSeleccionada("Juvenil");
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

    return (
        <div id="productos">
            <h2 data-aos="fade-up">Productos</h2>
            <hr data-aos="fade-up" />
            <Dropdown className="mb-3">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Categoria
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item variant={categoriaSeleccionada === "Adulto" ? "primary" : "outline-primary"} onClick={() => categoriaAdulto()}>Adulto</Dropdown.Item>
                    <Dropdown.Item onClick={() => categoriaJuvenil()}>Juvenil</Dropdown.Item>
                    <Dropdown.Item onClick={() => categoriaNiño()}>Niño</Dropdown.Item>
                    <Dropdown.Item onClick={() => categoriaBebe()}>Bebé</Dropdown.Item>
                    <Dropdown.Item onClick={() => categoriaTodos()}>Todos</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <InputGroup className="mb-3">
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
                (productosFiltrados.length === 0 ? <p>No se encontraron productos con la categoria Seleccionada</p>
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