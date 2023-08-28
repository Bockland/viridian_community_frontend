import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { usuariosSlice } from "./usuarios/usuariosSlice";
import { rolesSlice } from "./roles/rolesSlice";
import { teamsSlice } from "./teams/teamsSlice";
import { playerSlice } from "./players/playerSlice";


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        usuarios: usuariosSlice.reducer ,
        roles: rolesSlice.reducer,
        teams: teamsSlice.reducer ,
        players: playerSlice.reducer      
    },
});