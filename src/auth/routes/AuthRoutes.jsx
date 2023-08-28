import { useSelector } from "react-redux"
import { Routes, Route, Navigate } from "react-router-dom"
import { LoginPage } from "../pages"

export const AuthRoutes = () => {

  const { errorMessage } = useSelector(state => state.auth);

  return (
    <Routes>        
        <Route path="login" element={ <LoginPage /> } />
        <Route path="*" element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}
