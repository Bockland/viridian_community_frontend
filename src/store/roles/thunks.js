import Swal from "sweetalert2";
import { requestBackend } from "../../backend/requestBackend";
import { errorProcess, selectRol, setRoles } from "./rolesSlice";

export const obtenerRoles = (query) => {
    return async (dispatch) => {
        const response = await requestBackend(query, 'POST', '/role/find');
        
        const { statusCode, message, body } = response;

        if(statusCode == 200) dispatch(setRoles({roles: body, errorMessage: null}))
        else dispatch(setRoles({roles: null, errorMessage: message}))

    }
}

export const actualizarRol= (rol) => {
    return async (dispatch) => {

        if (rol == null) {
            Swal.fire(
                'Error de Actualización',
                'Error al actualizar rol',
                'error'
            );
            return;
        } 

        if (rol.name == null || rol.name == "" || rol.name == undefined)  {
            Swal.fire(
                'Error de Actualización',
                'Error al actualizar rol',
                'error'
            );
            return;
        }

        const query = {
            name: rol.originalName
        }

        const request = {
            query, 
            update: {
                name: rol.name                
            }            
        }

        const response = await requestBackend(request, 'POST', '/role/update');        
        const { statusCode, message, body } = response;

        if(statusCode != 200) dispatch(errorProcess({errorMessage: message}))
        else { 

            Swal.fire(
                'Actualización',
                'El equipo se ha actualizado correctamente',
                'success'
            );

            dispatch(obtenerRoles({})); 
        }

    }
}

export const crearRol = (rol) => {
    return async (dispatch) => {
        
        if (rol == null) {
            Swal.fire(
                'Error de Creación',
                'Error al crear rol',
                'error'
            );
            return;
        } 

        if (rol.name == null || rol.name == "" || rol.name == undefined)  {
            Swal.fire(
                'Error de Creación',
                'Error al crear rol',
                'error'
            );
            return;
        }

        const request = {            
            rol: {
                name: rol.name
            }            
        }

        const response = await requestBackend(request, 'POST', '/role/create');        
        const { statusCode, message } = response;

        console.log(response)

        if(statusCode != 200) dispatch(errorProcess({errorMessage: message}));
        else {

            Swal.fire(
                'Creación',
                'El rol se ha creado correctamente',
                'success'
            );

            dispatch(obtenerRoles({}));
        }
    }
}

export const eliminarRol = (rol) => {
    return async (dispatch) => {
        
        const request = {
            query: {
                name: rol.name
            }
        } 

        Swal.fire({
            title: '¿Estas seguro de eliminar el rol?',
            text: "De confirmar se eliminara el rol " + rol.name,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar'
          }).then(async (result) => {
            if (result.isConfirmed) {

                const response = await requestBackend(request, 'POST', '/role/delete');        
                const { statusCode, message } = response;

                if(statusCode != 200) {
                    dispatch(errorProcess({errorMessage: message}));
                }
                else {

                    Swal.fire(
                        'Eliminado',
                        'El rol se ha eliminado correctamente',
                        'success'
                    );

                    dispatch(selectRol({rol: null}));    
                    dispatch(obtenerRoles({}));
                }
            }
        });

        
    }
}

export const seleccionarRol = (rolOriginal) => {
    return async (dispatch) => {

        const rol = {
            name: rolOriginal.name,
            originalName: rolOriginal.name
        }

        dispatch(selectRol({rol}));
    }
}