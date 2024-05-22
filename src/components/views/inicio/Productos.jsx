import { useState, useEffect } from "react";
import { Container, Button, InputGroup, Form, Row, Spinner, Card } from "react-bootstrap"
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

    const categoriaHombre = () => {
        console.log("selecciono Hombre")
        setCategoriaSeleccionada("Hombre");
    }
    const categoriaMujer = () => {
        console.log("selecciono Mujer")
        setCategoriaSeleccionada("Mujer");
    }
    const categoriaNiños = () => {
        console.log("selecciono Niños")
        setCategoriaSeleccionada("Niños");
    }
    const categoriaAccesorios = () => {
        console.log("selecciono Accesorios")
        setCategoriaSeleccionada("Accesorios");
    }
    const categoriaTodos = () => {
        console.log("selecciono Todos")
        setCategoriaSeleccionada("");
    }

    return (
        <div id="productos">
            <h2 data-aos="fade-up">Productos</h2>
            <hr data-aos="fade-up" />
            <Button variant={categoriaSeleccionada === "Hombre" ? "primary" : "outline-primary"}
                className="mb-3 me-3" onClick={() => categoriaHombre()}>Hombre</Button>
            <Button variant={categoriaSeleccionada === "Mujer" ? "danger" : "outline-danger"}
                className="mb-3 me-3" onClick={() => categoriaMujer()}>Mujer</Button>
            <Button variant={categoriaSeleccionada === "Niños" ? "info" : "outline-info"}
                className="mb-3 me-3" onClick={() => categoriaNiños()}>Niños</Button>
            <Button variant={categoriaSeleccionada === "Accesorios" ? "warning" : "outline-warning"}
                className="mb-3 me-3" onClick={() => categoriaAccesorios()}>Accesorios</Button>
            <Button variant={categoriaSeleccionada === "" ? "success" : "outline-success"}
                className="mb-3 me-3" onClick={() => categoriaTodos()}>Todos</Button>
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