import { Container, Row, Form, Button, Nav, Table, Spinner, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { obtenerProductos } from "../../helpers/prendas";
import Swal from "sweetalert2"
import { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa"
import ItemProducto from "./ItemProducto";
import CrearProducto from "./CrearProducto";


const Administrador = () => {
    const [productos, setProductos] = useState([])
    const [nombrePrenda, setNombrePrenda] = useState("");
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("")
    const [isLoading, setIsLoading] = useState(true);


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
        <div>
            <div className="fondoAdmin">
                <Container className="pb-4">
                    <h2
                        data-aos="fade-up"
                        className="text-center text-light tituloPagina mb-4"
                    >
                        Panel de administrador
                    </h2>
                    <hr data-aos="fade-up" className="m-0 text-light mb-4" />
                    <CrearProducto setProductos={setProductos}></CrearProducto>
                    <hr />
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
                    <Table
                        data-aos="fade-up"
                        striped
                        bordered
                        hover
                        responsive
                        size="sm"
                        variant="dark"
                        className="m-0"
                    >
                        <thead>
                            <tr>
                                {/* <th>#</th> */}
                                <th className="text-center">Prenda</th>
                                <th className="text-center">Imagen</th>
                                <th className="text-center">Talle</th>
                                <th className="text-center">Categoria</th>
                                <th className="text-center">Descuento</th>
                                <th className="text-center">Precio</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading ? (<div className="d-flex justify-content-center mt-4">
                                <Spinner className="text-center" animation="border" variant="primary" />
                            </div>) :
                                (productosFiltrados.length === 0 ? <p>No se encontraron productos con la categoria Seleccionada</p>

                                    :
                                    productos.map((producto) => (
                                        <ItemProducto
                                            producto={producto}
                                            setProductos={setProductos}
                                            key={producto._id}
                                        />
                                    ))
                                )}
                        </tbody>
                    </Table>
                </Container>
            </div>
        </div>
    );
};

export default Administrador;
