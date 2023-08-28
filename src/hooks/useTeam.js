import { useDispatch, useSelector } from 'react-redux';
import { actualizarTeam, crearTeam, eliminarTeam, obtenerTeams } from '../store/teams/thunks';

export const useTeam = () => {
    const { data, team, errorMessage } = useSelector( state => state.teams);
    const dispatch = useDispatch();

    const obtener = async (query) => {
        dispatch(obtenerTeams(query));        
    }

    const actualizar = async (team) => {
        dispatch(actualizarTeam(team));        
    }

    const crear = async (team) => {
        dispatch(crearTeam(team));        
    }

    const eliminar = async (team) => {
        dispatch(eliminarTeam(team));        
    }

    return {        
        data,
        team,
        errorMessage,
        obtener,
        actualizar,
        crear,
        eliminar
    }
}
