import { createSlice } from "@reduxjs/toolkit";

const initialState = {    
    roles: null,
    rol: null,
    load: false,
    errorMessage: null
};

export const rolesSlice = createSlice({
    name: 'roles',
    initialState: initialState,
    reducers: {
        setRoles: ( state, { payload } ) => {                     
            state.roles = payload?.roles;               
            state.errorMessage = payload?.errorMessage;    
        },

        selectRol: (state, { payload }) => {
            state.rol = payload?.rol;  
        },

        errorProcess : (state, { payload }) => {
            state.errorMessage = payload?.errorMessage; 
        }
    }
});

export const { setRoles, selectRol, errorProcess } = rolesSlice.actions;