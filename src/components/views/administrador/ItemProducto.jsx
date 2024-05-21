import { Button } from "react-bootstrap"
import Swal from "sweetalert2"
import { useState } from "react"
import { consultaBorrarProducto, obtenerProductos } from "../../helpers/prendas"
import { FaTrashAlt } from "react-icons/fa";
import DetalleProducto from "./DetalleProducto"
import EditarProducto from "./EditarProducto";

const ItemProducto = ({ producto, setProductos }) => {

    const usuarioDelSessionStorage = JSON.parse(sessionStorage.getItem("usuarioLogueado")) || {}
    const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioDelSessionStorage)

    const borrarProducto = () => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "Seguro que deseas eliminar el producto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                if (usuarioLogueado.rol != "administrador") {
                    Swal.fire(
                        'Error!',
                        `Su usuario no tiene permisos para crear, borrar, o editar productos.`,
                        'warning'
                    )
                } else {
                    // aqui tengo que hacer la peticion DELETE 
                    consultaBorrarProducto(producto._id).then((respuesta) => {
                        if (respuesta.status === 200) {
                            Swal.fire(
                                'Eliminado!',
                                `El producto fue eliminado`,
                                'success'
                            )
                            //actualizar el state producto del componente administrador
                            obtenerProductos().then((respuesta) => { setProductos(respuesta) })

                        } else {
                            Swal.fire("Se produjo un error", "Error, intentelo mas tarde ", "error")
                        }
                    })
                }
            }
        })
    }
    return (
        <tr >
            {/* <td className="col-id"></td> */}
            <td className="text-center">{producto.nombrePrenda}</td>
            <td className="text-center"><img src={producto.imagen} alt="imagen de producto" className="imgPrendaTabla" /></td>
            <td className="text-center">
                {producto.talle}
            </td>
            <td className="text-center">{producto.categoria}</td>
            <td className="text-center">{producto.descuento}</td>
            <td className="text-center">{producto.precio + producto.descuento}</td>
            <td className="d-flex justify-content-center">
                <EditarProducto producto={producto} setProductos={setProductos}></EditarProducto>
                <DetalleProducto producto={producto} borrarProducto={borrarProducto}></DetalleProducto>
                <Button variant="danger" onClick={borrarProducto} className=" m-1 d-flex justify-content-center align-items-center flex-column"><FaTrashAlt />
                </Button>
               
            </td>
        </tr>
    );
};

export default ItemProducto;