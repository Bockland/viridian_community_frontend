import { Routes, Route, Navigate } from "react-router-dom"
import { HomePage, UsersPage, RolesPage, TeamsPage, PlayerPage } from "../pages"

export const ViridianRoutes = () => {
  return (
    <Routes>
        <Route path="/home" element={ <HomePage />} />
        <Route path="/users" element={ <UsersPage />} />
        <Route path="/players" element={ <PlayerPage />} /> 
        <Route path="/roles" element={ <RolesPage />} />   
        <Route path="/teams" element={ <TeamsPage />} />        
        <Route path="*" element={ <Navigate to="/home" /> } />
    </Routes>
  )
}
