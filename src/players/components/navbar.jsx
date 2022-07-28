import React from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports';

import tennisAppLogo from '../../assets/raquetsLogo.jpg';
import { en } from '../../i18n';
import { onLogout } from '../../store/auth/authSlice';



export const Navbar = () => {

  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  return (
  <div className="container-fluid">
    <nav className="navbar navbar-light bg-light">
        <p className="navbar-brand textUser" href="#">
       <img src={tennisAppLogo} width="50" height="40" className="d-inline-block align-top" alt=""/>
         Welcome: {user.name}
       </p>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search Player" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
    <button onClick={() =>dispatch(onLogout())} className="btn btn-outline-danger" type="submit">{en.logoutTextButton}</button>
   </nav>
   </div>
  )
}
