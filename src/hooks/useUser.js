import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actualizarUsuario, crearUsuario, eliminarUsuario, obtenerUsuarios } from '../store/usuarios/thunks';
import { selectUser } from '../store/usuarios/usuariosSlice';
import { obtenerTeams } from '../store/teams/thunks';
import { obtenerRoles } from '../store/roles/thunks';


export const useUser = () => {

    const { data, user, load, errorMessage } = useSelector( state => state.usuarios);
    const { teams } = useSelector( state => state.teams);
    const { roles } = useSelector( state => state.roles);

    const dispatch = useDispatch();

    const equiposLitado = useMemo(() => {
        return teams
    }, [teams]);

    const rolesLitado = useMemo(() => {
        return roles
    }, [roles]);

    useEffect(() => {
        dispatch(obtenerTeams({}));
        dispatch(obtenerRoles({}));
    }, [])

    const obtener = async (query) => {
        dispatch(obtenerUsuarios(query));        
    }

    const seleccionar = async (user) => {
        dispatch(selectUser({user}));
    }

    const actualizar = async (user) => {
        dispatch(actualizarUsuario(user));        
    }

    const crear = async (user) => {
        dispatch(crearUsuario(user));        
    }

    const eliminar = async (user) => {
        dispatch(eliminarUsuario(user));        
    }

    return {        
        data,
        user,
        load, 
        errorMessage,
        equiposLitado,
        rolesLitado,
        obtener,
        seleccionar,
        actualizar,
        crear,
        eliminar        
    }
}
