const URL_PRODUCTO = import.meta.env.VITE_API_PRODUCTO


export const obtenerProductos = async ()=>{
    try {
        const respuesta = await fetch(URL_PRODUCTO)
        const listaProductos = await respuesta.json()
        return listaProductos

    } catch (error) {
        console.log(error)
        return null
    }
}
export const obtenerProducto = async (id)=>{
    try {
        const respuesta = await fetch(`${URL_PRODUCTO}/${id}`)
        const productoEditar = await respuesta.json()
        return productoEditar

    } catch (error) {
        console.log(error)
        return null
    }
}

export const consultaBorrarProducto = async (id)=>{
    try {
        const respuesta = await fetch(`${URL_PRODUCTO}/${id}` , {
            method:"DELETE"
        });
        // const listaProductos = await respuesta.json()
        return respuesta

    } catch (error) {
        console.log(error)
        return null
    }
}

export const consultaCrearProducto = async (producto)=>{
    try {
        const respuesta = await fetch(URL_PRODUCTO, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(producto)
        });
        return respuesta

    } catch (error) {
        console.log(error)
        return null
    }
}

export const consultaEditarProducto = async (producto, id)=>{
    try {
        const respuesta = await fetch(URL_PRODUCTO+"/"+id, {
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(producto)
        });
        return respuesta

    } catch (error) {
        console.log(error)
        return null
    }
}