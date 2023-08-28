import { createSlice } from "@reduxjs/toolkit";

const initialState = {    
    players: null,
    player: null,
    errorMessage: null
};

export const playerSlice = createSlice({
    name: 'players',
    initialState: initialState,
    reducers: {

        getPlayers: ( state, { payload } ) => {
            state.load = false;           
            state.players = payload?.players;               
            state.errorMessage = payload?.errorMessage;    
        },

        selectPlayer: (state, { payload }) => {
            state.player = payload?.player;  
        },

        errorProcess : (state, { payload }) => {
            state.errorMessage = payload?.errorMessage; 
        }

    }
});

export const { getPlayers, selectPlayer, errorProcess } = playerSlice.actions;