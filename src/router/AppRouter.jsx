import React, { useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import { AuthRoutes } from '../auth/authRoutes';
import { PlayersRoutes } from '../players/playersRoutes';
import { checkAuthToken  } from '../store/auth/thunk';

import { en } from '../i18n';
import { Spinner } from '../components/spinner';


export const AppRouter = () => {
  
  const dispatch = useDispatch();
  const { status, errorMessage } =  useSelector (state => state.auth);
  
  useEffect(() => {
    dispatch(checkAuthToken());
  }, [])

  /**
   * @describe - render app routes depending on the status of the user
   * @returns {jsx}
   */
  const getRoutes = () => {
   return (
    <Routes>
      {
       status === 'authenticated' ? 
       
        <Route path="/*" element={<PlayersRoutes />} />
        : 
        <Route path="/auth/*" element={<AuthRoutes />} />
       }
      <Route path="/*" element={ <Navigate to="/auth/login" /> } />
  </Routes>
   )
  }

  return (
      status === 'checking' && errorMessage === undefined ?
      <Spinner />
      : 
      getRoutes()
  );
};
