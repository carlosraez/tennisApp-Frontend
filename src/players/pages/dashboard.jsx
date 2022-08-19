import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import registerImage from '../../assets/registerPlayer.jpg';
import { CardDashboard } from '../../components/cardDashboard';
import { getPlayers } from '../../store/player/thunk';

export const Dashboard = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlayers());
  }, [])
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <CardDashboard 
            linkHref={'/player-register'} 
            registerImage={registerImage}
            title={'Register Player'}
            description={'Register a new player'}
            textLink={'Go'}
            />
        </div>
        <div className="col-md-6">
           <CardDashboard 
           linkHref={'/players'}
           registerImage={registerImage}
           title={'Register Player'}
            description={'Register a new player'}
            textLink={'Register'}
           />
        </div>
      </div>
    </div>
  )
}
