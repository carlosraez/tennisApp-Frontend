import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages';
import { RegisterPage } from './pages/registerPage';


/**
* @description - This function is used to render the login page routes
* @returns {void}
*/
export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
