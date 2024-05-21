import { Container, Form, Button } from 'react-bootstrap';
import { login } from "../../helpers/usuarios"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Swal from "sweetalert2"
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import "./Admin.css"


const Login = ({ setUsuarioLogueado }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const navegacion = useNavigate();

    const onSubmit = (data) => {
        if (data.nombreUsuario === "admin") {
            data.rol = "administrador"
        } else {
            data.rol = "mozo"
        }
        console.log(data)
        login(data).then((respuesta) => {
            if (respuesta) {
                sessionStorage.setItem("usuarioLogueado", JSON.stringify(respuesta));
                setUsuarioLogueado(respuesta);
                Swal.fire("Bienvenido", "Ha ingresado correctamente", "success");
                navegacion("/administrador");
            } else {
                Swal.fire("Error", "Email o contraseña incorrecto", "error");
            }
        })
    };

    return (
        <div className='fondoLogin'>
            <Container>
                <Form onSubmit={handleSubmit(onSubmit)}
                    data-aos="fade-up"
                    className='text-light d-flex justify-content-center flex-column align-items-center'>
                    <h3>Iniciar sesion</h3>
                    <hr className="m-0 text-light my-4" />
                    <Form.Group className="mb-3 w-50 formLogin" controlId="formBasicEmail">
                        <Form.Label className='d-flex align-items-center'>
                            <FaUser />
                            <p className='m-0 ms-1'>Usuario:</p>
                        </Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su nombre de usuario" maxLength={40}
                            {...register("nombreUsuario", {
                                required: "El Usuario es obligatorio",
                                minLength: {
                                    value: 4,
                                    message: "El usuario debe contener por lo menos 4 caracteres"
                                },
                                maxLength: {
                                    value: 30,
                                    message: "El usuario debe contener como maximo 30 caracteres"
                                },
                                pattern: {
                                    vaue: /^.{4,30}$/,
                                    message: "El nombre de usuario debe contener entre 4 y 30 caracteres."
                                }
                            })} />
                        <Form.Text className="text-danger">
                            {errors.nombreUsuario?.message}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 w-50 formLogin" controlId="formBasicPassword">
                        <Form.Label className='d-flex align-items-center'>
                            <RiLockPasswordFill />
                            <p className='m-0 ms-1'>Contraseña:</p>
                        </Form.Label>
                        <Form.Control type="password" placeholder="Ingrese aquí su contraseña" maxLength={20}
                            {...register("password", {
                                required: "La contraseña es obligatoria",
                                minLength: {
                                    value: 6,
                                    message: "El password contener por lo menos 6 caracteres"
                                },
                                maxLength: {
                                    value: 20,
                                    message: "El password debe contener como maximo 20 caracteres"
                                },
                                pattern: {
                                    value: /^.{6,20}$/,
                                    message: "El password debe tener entre 6 y 20 caracteres"
                                }
                            })} />
                        <Form.Text className="text-danger">
                            {errors.password?.message}
                        </Form.Text>
                    </Form.Group>
                    <Button variant="danger" type="submit" className='w-50 formLogin mt-4'>
                        Ingresar
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Login;