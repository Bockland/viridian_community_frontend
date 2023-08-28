import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { ViridianRoutes } from '../viridian/routes/ViridianRoutes';

export const AppRoutes = () => {

  const { status, errorMessage } = useSelector( state => state.auth);

  return (
    <Routes>
        {
          (status == "authenticated")
          ? <Route path="/*" element={<ViridianRoutes />}/>
          : <Route path="/auth/*" element={<AuthRoutes />}/>
        }

        <Route path='/*' element={ <Navigate to="/auth/login" />} />
    </Routes>
  )
}
