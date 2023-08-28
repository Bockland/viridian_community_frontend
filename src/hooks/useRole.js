import { useDispatch, useSelector } from 'react-redux';
import { actualizarRol, crearRol, eliminarRol, obtenerRoles } from '../store/roles/thunks';

export const useRole = () => {

    const { roles, rol, errorMessage } = useSelector( state => state.roles);
    const dispatch = useDispatch();

    const obtener = async (query) => {
        dispatch(obtenerRoles(query));        
    }

    const actualizar = async (rol) => {
        dispatch(actualizarRol(rol));        
    }

    const crear = async (rol) => {
        dispatch(crearRol(rol));        
    }

    const eliminar = async (rol) => {
        dispatch(eliminarRol(rol));        
    }

    return {        
        roles,
        rol,
        errorMessage,
        obtener,
        actualizar,
        crear,
        eliminar
    }
}
