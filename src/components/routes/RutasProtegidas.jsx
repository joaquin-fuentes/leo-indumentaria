import { Navigate } from "react-router-dom";

const RutasProtegidas = ({children}) => {
 
    const usuarioLogueado = JSON.parse(sessionStorage.getItem("usuarioLogueado")) || null
    console.log(usuarioLogueado)
    //preguntar si usuario NO esta logueado
    if(!usuarioLogueado){
        return <Navigate to={"/login"}></Navigate>
    } else{
        return children
    }

};

export default RutasProtegidas;