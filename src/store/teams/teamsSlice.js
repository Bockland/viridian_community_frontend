import { createSlice } from "@reduxjs/toolkit";

const initialState = {    
    teams: null,
    team: null,
    load: false,
    errorMessage: null
};

export const teamsSlice = createSlice({
    name: 'teams',
    initialState: initialState,
    reducers: {
        setTeams: ( state, { payload } ) => {                     
            state.teams = payload?.teams;               
            state.errorMessage = payload?.errorMessage;    
        },

        selectTeam: (state, { payload }) => {
            state.team = payload?.team;  
        },

        errorProcess : (state, { payload }) => {
            state.errorMessage = payload?.errorMessage; 
        }
    }
});

export const { setTeams, selectTeam, errorProcess } = teamsSlice.actions;