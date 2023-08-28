import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerTeams } from '../store/teams/thunks';
import { crearJugador, obtenerJugadores, actualizarPlayer } from '../store/players/thunks';

export const usePlayer = () => {

    const { players, player, errorMessage } = useSelector( state => state.players);
    const { teams } = useSelector( state => state.teams);
    const dispatch = useDispatch();

    const equiposLitado = useMemo(() => {
        return teams
    }, [teams]);
    
    useEffect(() => {
        dispatch(obtenerTeams({}));
    }, [])

    const obtener = async (query) => {
        dispatch(obtenerJugadores(query));        
    }

    const crear = async (player) => {
        dispatch(crearJugador(player));        
    }

    const actualizar = async (player) => {
        dispatch(actualizarPlayer(player));        
    }

    return {        
        players,
        player,
        errorMessage,
        equiposLitado,
        obtener,
        crear,
        actualizar  
    }
}
