import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/authRoutes';
import { Players } from '../players/pages/players';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/*" element={<Players />} />
    </Routes>
  );
};
