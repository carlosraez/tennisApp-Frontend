import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { useParams } from 'react-router-dom';

import tennisAppLogo from '../assets/raquetsLogo.jpg';
import { en } from '../i18n';
import { onLogout } from '../store/auth/';
import { searchPlayers } from '../store/player';
import { getPlayers } from '../store/player/thunk';

export const Navbar = () => {

  const [isPlayers, setIsPlayers] = useState(false)

  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

   const page = useParams();

  useEffect(() => {  
    Object.values(page).forEach(item => item.includes('player') ? setIsPlayers(true) : setIsPlayers(false))
  }, [page])

  const handleLogout = () => { 
    localStorage.clear();
    dispatch(onLogout());
  }

  const handleInputChange = (e) => { 
    const search = e.target.value;
    search === '' ? dispatch(getPlayers()) : dispatch(searchPlayers(search));
  }

  return (
  <div className="container-fluid">
    <nav className="navbar navbar-light bg-light">
        <p className="navbar-brand textUser" href="#">
       <img src={tennisAppLogo} width="50" height="40" className="d-inline-block align-top" alt=""/>
        {en.welcome}: {user.name}
       </p>
    <form className="d-flex" role="search">
     {isPlayers && <input onChange={handleInputChange} className="form-control me-2" type="search" placeholder="Search Player" aria-label="Search" /> } 
    </form>
    <button onClick={handleLogout} className="btn btn-outline-danger" type="submit">{en.logoutTextButton}</button>
   </nav>
   </div>
  )
}