import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    load: false,
    data: null,
    user: null,
    errorMessage: null
};

export const usuariosSlice = createSlice({
    name: 'usuarios',
    initialState: initialState,
    reducers: {

        getRecordsData: ( state, { payload } ) => {
            state.load = false;           
            state.data = payload?.data;               
            state.errorMessage = payload?.errorMessage;    
        },

        selectUser: (state, { payload }) => {
            state.user = payload?.user;  
        },

        loadProcess : (state) => {
            state.load = true;
        },

        errorProcess : (state, { payload }) => {
            state.errorMessage = payload?.errorMessage; 
        }

    }
});

export const { getRecordsData, selectUser, loadProcess, errorProcess } = usuariosSlice.actions;