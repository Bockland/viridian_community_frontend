import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'not-authenticated', //not-authenticated, authenticated, checking 
    username: null,
    password: null,
    displayName: null,      
    errorMessage: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: JSON.parse(localStorage.getItem('user')) || initialState,
    reducers: {
        login: ( state, { payload } ) => {
            state.status = 'authenticated';          
            state.username = payload.username;
            state.password = payload.password;
            state.displayName = payload.displayName;            
            state.errorMessage = null;            
        },
        logout: ( state, { payload } ) => {
            state.status = 'not-authenticated'; 
            state.username = null;
            state.password = null;
            state.displayName =  null;
            state.errorMessage = payload?.error; 
        },
        checkingCredentials: ( state ) => {
            state.status = 'checking';
            state.errorMessage = null;
        },
    }
});

export const { login, logout, checkingCredentials } = authSlice.actions;