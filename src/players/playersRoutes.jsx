import { Navigate, Route, Routes } from 'react-router-dom';
import { Dashboard, Players } from './pages';
import { Navbar } from './components/navbar';


/**
* @description - This function is used to render the login page routes
* @returns {void}
*/
export const PlayersRoutes = () => {
  return (
  <>
    <Navbar/>
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="players" element={<Players />} />
      <Route path="player-register" element={<Players />} />
      <Route path="/*" element={<Navigate to="/dashboard" />} />
    </Routes>
  </>
  );
};