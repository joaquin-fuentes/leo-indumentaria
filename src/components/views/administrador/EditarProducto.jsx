import { useState, useEffect } from "react";
import { Form, Modal, Button, Container } from "react-bootstrap"
import { useForm } from "react-hook-form";
import { consultaEditarProducto, obtenerProductos, obtenerProducto } from "../../helpers/prendas";
import Swal from "sweetalert2";
import { CiEdit } from "react-icons/ci";


const EditarProducto = ({ producto, setProductos }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
    } = useForm();

    const onSubmit = (productoEditado) => {
        consultaEditarProducto(productoEditado, producto._id).then((respuesta) => {
            if (respuesta && respuesta.status === 200) {
                Swal.fire("producto actualizado",
                    `El producto: ${productoEditado.nombrePrenda} fue actualizado correctamente`,
                    "success")
                handleClose()
                //actualizar el estado
                obtenerProductos().then((respuesta) => {
                    setProductos(respuesta);
                })
            } else {
                Swal.fire("Ocurrio un error",
                    `El producto: ${productoEditado.nombrePrenda} NO fue actualizado. Intente esta operacion luego`,
                    "error")
            }

        })
    }


    useEffect(() => {
        obtenerProducto(producto._id).then((respuesta) => {
            setValue("nombrePrenda", respuesta.nombrePrenda)
            setValue("imagen", respuesta.imagen)
            setValue("talle", respuesta.talle)
            setValue("categoria", respuesta.categoria)
            setValue("descuento", respuesta.descuento)
            setValue("precio", respuesta.precio)
            setValue("estado", respuesta.estado)
            setValue("estilo", respuesta.estilo)
            setValue("destacado", respuesta.destacado)
            setValue("precioxmayor", respuesta.precioxmayor)
            setValue("color", respuesta.color)
            setValue("descripcion", respuesta.descripcion)
            setValue("otro", respuesta.otro)
            setValue("otro2", respuesta.otro2)
        })

    }, [])
    return (
        <>
            <Button onClick={handleShow} variant="warning" className=" m-1 d-flex justify-content-center align-items-center flex-column">
                <CiEdit />
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Producto</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Prenda*</Form.Label>
                            <Form.Control type="text" placeholder="Ej: Remera" maxLength={80} {
                                ...register('nombrePrenda', {
                                    required: 'El campo es obligatorio',
                                    minLength: {
                                        value: 2,
                                        message: "Este campo debe tener como minimo 2 caracteres"
                                    },
                                    maxLength: {
                                        value: 80,
                                        message: "Este campo debe tener como maximo 80 caracteres"
                                    }
                                })
                            } />
                            <Form.Text className="text-danger">
                                {errors.nombrePrenda?.message}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Precio*</Form.Label>
                            <Form.Control type="number" placeholder="Ej:50" maxLength={6} min={0} max={500000} {
                                ...register('precio', {
                                    required: 'El campo es obligatorio',
                                    pattern: {
                                        value: /^(?:[1-9]\d{0,4}|500000)$/,
                                        message: "Debe ingresar un numero entre 1 y 500000"
                                    }
                                })
                            } />
                            <Form.Text className="text-danger">
                                {errors.precio?.message}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Precio x Mayor</Form.Label>
                            <Form.Control type="number" placeholder="Ej:50" maxLength={6} min={0} max={500000} {
                                ...register('precioxmayor', {
                                    // required: 'El campo es obligatorio',
                                    pattern: {
                                        value: /^(?:[1-9]\d{0,4}|500000)$/,
                                        message: "Debe ingresar un numero entre 1 y 500000"
                                    }
                                })
                            } />
                            <Form.Text className="text-danger">
                                {errors.precioxmayor?.message}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Descuento</Form.Label>
                            <Form.Control type="number" placeholder="Ej:50" maxLength={6} min={0} max={500000} {
                                ...register('descuento', {
                                    // required: 'El campo es obligatorio',
                                    pattern: {
                                        value: /^(?:[0-9]\d{0,4}|500000)$/,
                                        message: "Debe ingresar un numero entre 0 y 500000"
                                    }
                                })
                            } />
                            <Form.Text className="text-danger">
                                {errors.descuento?.message}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Imagen URL*</Form.Label>
                            <Form.Control type="text" placeholder="Ej: https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1" maxLength={500} {
                                ...register('imagen', {
                                    required: 'El campo es obligatorio',
                                    minLength: {
                                        value: 5,
                                        message: "Este campo debe tener como minimo 5 caracteres"
                                    },
                                    maxLength: {
                                        value: 500,
                                        message: "Este campo debe tener como maximo 500 caracteres"
                                    }
                                })
                            } />
                            <Form.Text className="text-danger">
                                {errors.imagen?.message}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Categoria</Form.Label>
                            <Form.Select aria-label="Default select example" {
                                ...register('categoria', {
                                    // required: 'Debe seleccionar una categoria',
                                })}>
                                <option value="">Seleccione una opcion</option>
                                <option value="Adulto">Adulto</option>
                                <option value="Niño">Niño</option>
                                <option value="Bebé">Bebé</option>
                                <option value="Accesorios">Accesorios</option>
                                <option value="Todos">Todos</option>
                            </Form.Select>
                            <Form.Text className="text-danger">
                                {errors.categoria?.message}

                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Destacado</Form.Label>
                            <Form.Select aria-label="Default select example" {
                                ...register('destacado', {
                                    // required: 'Debe seleccionar una destacado',
                                })}>
                                <option value="">Seleccione una opcion</option>
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </Form.Select>
                            <Form.Text className="text-danger">
                                {errors.destacado?.message}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Estado*</Form.Label>
                            <Form.Select aria-label="Default select example" {
                                ...register('estado', {
                                    required: 'Debe seleccionar un estado',
                                })}>
                                <option value="">Seleccione una opcion</option>
                                <option value="Nuevo">Nuevo</option>
                                <option value="Usado">Usado</option>
                            </Form.Select>
                            <Form.Text className="text-danger">
                                {errors.estado?.message}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Estilo</Form.Label>
                            <Form.Select aria-label="Default select example" {
                                ...register('estilo', {
                                    // required: 'Debe seleccionar un estilo',
                                })}>
                                <option value="">Seleccione una opcion</option>
                                <option value="Deportiva">Deportiva</option>
                                <option value="Formal">Formal</option>
                                <option value="Otro">Otro</option>
                            </Form.Select>
                            <Form.Text className="text-danger">
                                {errors.estilo?.message}
                            </Form.Text>
                        </Form.Group>
                        {/* <Form.Group className="mb-3">
                            <Form.Label>Tipo</Form.Label>
                            <Form.Select aria-label="Default select example" {
                                ...register('tipo', {
                                    // required: 'Debe seleccionar un tipo',
                                })}>
                                <option value="">Seleccione una opcion</option>
                                <option value="Deportiva">Deportiva</option>
                                <option value="Formal">Formal</option>
                            </Form.Select>
                            <Form.Text className="text-danger">
                                {errors.tipo?.message}
                            </Form.Text>
                        </Form.Group> */}
                        <Form.Group className="mb-3">
                            <Form.Label>Sexo</Form.Label>
                            <Form.Select aria-label="Default select example" {
                                ...register('sexo', {
                                    // required: 'Debe seleccionar un sexo',
                                })}>
                                <option value="">Seleccione una opcion</option>
                                <option value="Hombre">Hombre</option>
                                <option value="Mujer">Mujer</option>
                                <option value="Unisex">Unisex</option>
                            </Form.Select>
                            <Form.Text className="text-danger">
                                {errors.sexo?.message}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Color</Form.Label>
                            <Form.Control type="color" placeholder="Elija un color" className="w-25" maxLength={30} {
                                ...register('color', {
                                    // required: 'El campo es obligatorio',
                                })
                            } />
                            <Form.Text className="text-danger">
                                {errors.color?.message}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Talle*</Form.Label>
                            <Form.Control type="text" placeholder="Ej: L" maxLength={10} {
                                ...register('talle', {
                                    required: 'El campo es obligatorio',
                                    minLength: {
                                        value: 1,
                                        message: "Este campo debe tener como minimo 1 caracter"
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: "Este campo debe tener como maximo 10 caracteres"
                                    }
                                })
                            } />
                            <Form.Text className="text-danger">
                                {errors.talle?.message}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Ingrese una descripcion del producto"
                                style={{ height: '100px' }}
                                maxLength={500} {
                                ...register('descripcion', {
                                    // required: 'El campo es obligatorio',
                                    minLength: {
                                        value: 5,
                                        message: "Este campo debe tener como minimo 5 caracteres"
                                    },
                                    maxLength: {
                                        value: 500,
                                        message: "Este campo debe tener como maximo 500 caracteres"
                                    },
                                })
                                } />
                            <Form.Text className="text-danger">
                                {errors.descripcion?.message}
                            </Form.Text>

                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Otro</Form.Label>
                            <Form.Select aria-label="Default select example" {
                                ...register('otro', {
                                    // required: 'Debe seleccionar un estilo',
                                })}>
                                <option value="">Seleccione una opcion</option>
                                <option value="ofertadeldia">Oferta del día</option>
                            </Form.Select>
                            <Form.Text className="text-danger">
                                {errors.otro?.message}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Otro 2</Form.Label>
                            <Form.Control type="text" placeholder="Ej: Remera"  {
                                ...register('otro2', {
                                    // required: 'El campo es obligatorio',

                                })
                            } />
                            <Form.Text className="text-danger">
                                {errors.otro2?.message}
                            </Form.Text>
                        </Form.Group>
                        <Modal.Footer>
                            <div className="d-flex justify-content-center">
                                <Button type="submit" className="mx-2">Guardar</Button>
                                <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
                            </div>
                        </Modal.Footer>

                    </Form>
                </Modal.Body>


            </Modal>
        </>

    );
};

export default EditarProducto;

