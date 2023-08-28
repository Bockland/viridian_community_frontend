import Swal from "sweetalert2";
import { requestBackend } from "../../backend/requestBackend";
import { errorProcess, getPlayers, selectPlayer } from "./playerSlice";

export const obtenerJugadores = (query) => {
    return async (dispatch) => {
        const response = await requestBackend(query, 'POST', '/player/find');
        
        const { statusCode, message, body } = response;

        if(statusCode == 200) dispatch(getPlayers({players: body, errorMessage: null}))
        else dispatch(getPlayers({players: null, errorMessage: message}))

    }
}

export const crearJugador = (player) => {
    return async (dispatch) => {
        
        const request = {            
            jugador: {
                name: player.name,                
                team: player.team,
                idunite: player.idunite,
                country: player.country
            }            
        }

        console.log(request)

        const response = await requestBackend(request, 'POST', '/player/create');        
        const { statusCode, message } = response;

        if(statusCode != 200) dispatch(errorProcess({errorMessage: message}));
        else {

            Swal.fire(
                'Creación',
                'El usuario se ha creado correctamente',
                'success'
            );

            dispatch(obtenerJugadores({}));
        }
    }
}

export const actualizarPlayer = (player) => {
    return async (dispatch) => {

        const query = {
            name: player.name
        }

        const request = {
            query, 
            update: {
                name: player.name,                
                team: player.team,
                idunite: player.idunite,
                country: player.country
            }            
        }

        const response = await requestBackend(request, 'POST', '/player/update');        
        const { statusCode, message, body } = response;

        if(statusCode != 200) dispatch(errorProcess({errorMessage: message}))
        else { 

            Swal.fire(
                'Actualización',
                'El jugador se ha actualizado correctamente',
                'success'
            );

            dispatch(obtenerJugadores({})); 
        }

    }
}

export const eliminarJugador = (player) => {
    return async (dispatch) => {
        
        const request = {
            query: {
                name: player.name
            }
        } 

        Swal.fire({
            title: '¿Estas seguro de eliminar el Jugador?',
            text: "De confirmar se eliminara el Jugador " + player.name,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar'
          }).then(async (result) => {
            if (result.isConfirmed) {

                const response = await requestBackend(request, 'POST', '/player/delete');        
                const { statusCode, message } = response;

                if(statusCode != 200) {
                    dispatch(errorProcess({errorMessage: message}));
                }
                else {

                    Swal.fire(
                        'Eliminado',
                        'El Jugador se ha eliminado correctamente',
                        'success'
                    );

                    dispatch(obtenerJugadores({}));
                }
            }
        });
    }
}

export const seleccionarPlayer = (player) => {
    return async (dispatch) => {
        dispatch(selectPlayer({player}));
    }
}