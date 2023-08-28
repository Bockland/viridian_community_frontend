import Swal from "sweetalert2";
import { requestBackend } from "../../backend/requestBackend";
import { errorProcess, selectTeam, setTeams } from "./teamsSlice";

export const obtenerTeams= (query) => {
    return async (dispatch) => {
        const response = await requestBackend(query, 'POST', '/team/find');
        
        const { statusCode, message, body } = response;

        if(statusCode == 200) dispatch(setTeams({teams: body, errorMessage: null}))
        else dispatch(setTeams({teams: null, errorMessage: message}))

        return response;

    }
}

export const actualizarTeam = (team) => {
    return async (dispatch) => {

        if (team == null) {
            Swal.fire(
                'Error de Actualización',
                'Error al actualizar equipo',
                'error'
            );
            return;
        } 

        if (team.name == null || team.name == "" || team.name == undefined)  {
            Swal.fire(
                'Error de Actualización',
                'Error al actualizar equipo',
                'error'
            );
            return;
        }

        const query = {
            name: team.originalName
        }

        const request = {
            query, 
            update: {
                name: team.name                
            }            
        }

        const response = await requestBackend(request, 'POST', '/team/update');        
        const { statusCode, message, body } = response;

        if(statusCode != 200) dispatch(errorProcess({errorMessage: message}))
        else { 

            Swal.fire(
                'Actualización',
                'El equipo se ha actualizado correctamente',
                'success'
            );

            dispatch(obtenerTeams({})); 
        }

    }
}

export const crearTeam = (team) => {
    return async (dispatch) => {
        
        if (team == null) {
            Swal.fire(
                'Error de Creación',
                'Error al equipo equipo',
                'error'
            );
            return;
        } 

        if (team.name == null || team.name == "" || team.name == undefined)  {
            Swal.fire(
                'Error de Creación',
                'Error al crear equipo',
                'error'
            );
            return;
        }

        const request = {            
            equipo: {
                name: team.name
            }            
        }

        const response = await requestBackend(request, 'POST', '/team/create');        
        const { statusCode, message } = response;

        if(statusCode != 200) dispatch(errorProcess({errorMessage: message}));
        else {

            Swal.fire(
                'Creación',
                'El equipo se ha creado correctamente',
                'success'
            );

            dispatch(obtenerTeams({}));
        }
    }
}

export const eliminarTeam = (team) => {
    return async (dispatch) => {
        
        const request = {
            query: {
                name: team.name
            }
        } 

        Swal.fire({
            title: '¿Estas seguro de eliminar el equipo?',
            text: "De confirmar se eliminara el equipo " + team.name,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar'
          }).then(async (result) => {
            if (result.isConfirmed) {

                const response = await requestBackend(request, 'POST', '/team/delete');        
                const { statusCode, message } = response;

                if(statusCode != 200) {
                    dispatch(errorProcess({errorMessage: message}));
                }
                else {

                    Swal.fire(
                        'Eliminado',
                        'El equipo se ha eliminado correctamente',
                        'success'
                    );

                    dispatch(selectTeam({team: null}));    
                    dispatch(obtenerTeams({}));
                }
            }
        });

        
    }
}

export const seleccionarTeam = (teamOriginal) => {
    return async (dispatch) => {

        const team = {
            name: teamOriginal.name,
            originalName: teamOriginal.name
        }

        dispatch(selectTeam({team}));
    }
}