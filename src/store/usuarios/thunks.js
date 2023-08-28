import Swal from "sweetalert2";
import { requestBackend } from "../../backend/requestBackend";
import { getRecordsData, errorProcess, loadProcess, selectUser } from "./usuariosSlice";

export const obtenerUsuarios = (query) => {
    return async (dispatch) => {
        const response = await requestBackend(query, 'POST', '/user/find');
        
        const { statusCode, message, body } = response;

        if(statusCode == 200) dispatch(getRecordsData({data: body, errorMessage: null}))
        else dispatch(getRecordsData({data: null, errorMessage: message}))

    }
}

export const actualizarUsuario = (user) => {
    return async (dispatch) => {

        const query = {
            name: user.name
        }

        const request = {
            query, 
            update: {
                name: user.name,
                password: user.password,
                enable: user.enable,
                team: user.team,
                rol: user.rol
            }            
        }

        const response = await requestBackend(request, 'POST', '/user/update');        
        const { statusCode, message, body } = response;

        dispatch(loadProcess());

        if(statusCode != 200) dispatch(errorProcess({errorMessage: message}))
        else { 

            Swal.fire(
                'Actualización',
                'El usuario se ha actualizado correctamente',
                'success'
            );

            dispatch(obtenerUsuarios({})); 
        }

    }
}

export const crearUsuario = (user) => {
    return async (dispatch) => {
        
        const request = {            
            usuario: {
                name: user.name,
                password: user.password,
                enable: user.enable,
                team: user.team,
                rol: user.rol
            }            
        }

        const response = await requestBackend(request, 'POST', '/user/create');        
        const { statusCode, message } = response;

        console.log(response)

        dispatch(loadProcess());

        if(statusCode != 200) dispatch(errorProcess({errorMessage: message}));
        else {

            Swal.fire(
                'Creación',
                'El usuario se ha creado correctamente',
                'success'
            );

            dispatch(obtenerUsuarios({}));
        }
    }
}

export const eliminarUsuario = (user) => {
    return async (dispatch) => {
        
        const request = {
            query: {
                name: user.name
            }
        } 

        Swal.fire({
            title: '¿Estas seguro de eliminar el usuario?',
            text: "De confirmar se eliminara el usuario " + user.name,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar'
          }).then(async (result) => {
            if (result.isConfirmed) {

                const response = await requestBackend(request, 'POST', '/user/delete');        
                const { statusCode, message } = response;

                dispatch(loadProcess());

                if(statusCode != 200) {
                    dispatch(errorProcess({errorMessage: message}));
                }
                else {

                    Swal.fire(
                        'Eliminado',
                        'El usuario se ha eliminado correctamente',
                        'success'
                    );

                    dispatch(obtenerUsuarios({}));
                }

                
            }
        });

        
    }
}

export const seleccionarUsuario = (user) => {
    return async (dispatch) => {
        dispatch(selectUser({user}));
    }
}