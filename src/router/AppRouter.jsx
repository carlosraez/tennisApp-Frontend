import React, { useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import { AuthRoutes } from '../auth/authRoutes';
import { Players } from '../players/pages/players';
import { checkAuthToken  } from '../store/auth/thunk';

import { en } from '../i18n';
import { Navbar } from '../players/pages/components/navbar';

export const AppRouter = () => {
  
  const dispatch = useDispatch();
  const { status, errorMessage } =  useSelector (state => state.auth);
  
  useEffect(() => {
    dispatch(checkAuthToken());
  }, [])

  /**
   * @description - This function is used to render a spinner loading when the user is checking the token
   * @returns {jsx} 
   */
  const getSpinner = () => { 
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
         <span className="visually-hidden">{en.loaderMessage}</span>
        </div>
      </div>
    );
  }

  /**
   * @describe - render app routes depending on the status of the user
   * @returns {jsx}
   */
  const getRoutes = () => {
   return (
    <Routes>
      {
       status === 'authenticated' ? 
       
      <Route path="/*" element={<Players />} />
        : 
        <Route path="/auth/*" element={<AuthRoutes />} />
       }
      <Route path="/*" element={ <Navigate to="/auth/login" /> } />
  </Routes>
   )
  }

  return (
      status === 'checking' && errorMessage === undefined ?
      getSpinner() 
      : 
      getRoutes()
  );
};
