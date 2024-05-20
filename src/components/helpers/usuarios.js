const URL_USUARIO = import.meta.env.VITE_API_USUARIO



export const login = async (usuario)=>{
    
    console.log(usuario)
    try {
        const respuesta = await fetch(URL_USUARIO);
        const listaUsuarios = await respuesta.json();
        console.log(listaUsuarios)
        //buscar si algun usuario coincide con el que recibi por parametros
        const usuarioBuscado = listaUsuarios.find((itemUsuario)=>itemUsuario.nombreUsuario === usuario.nombreUsuario);
        if(usuarioBuscado){
            console.log("usuario encontrado")
            //verificar el password
            if(usuarioBuscado.password === usuario.password){
                console.log("encontramos al usuario")
                return usuarioBuscado
            } else {
                console.log("password incorrecto")
                return null
            }
        } else {
            console.log("nombre usuario incorrecto")
            return null
        }
    } catch (error) {
        console.log(error)
        return null
    }
}
