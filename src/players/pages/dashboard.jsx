import React from 'react'

import registerImage from '../../assets/registerPlayer.jpg';
import { CardDashboard } from '../components/cardDashboard';

export const Dashboard = () => {

 

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <CardDashboard 
            linkHref={'/player-register'} 
            registerImage={registerImage}
            title={'Register Player'}
            description={'Register a new player'}
            textLink={'Register'}
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
