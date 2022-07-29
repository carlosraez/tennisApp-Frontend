import React from 'react';
import { en } from '../../i18n';

export const Players = () => {
  return (
      <div className="container">
        <div className="row">
          <h1>{en.titleRegisterPlayer}</h1>
          <div className="col-xs-100 col-md-6">
            <form>
              <div className="form-group">
                <label htmlFor="name">{en.name}</label>
                <input type="text" className="form-control" id="name" placeholder="Enter name" />
              </div>
              <div className="form-group">
                <label htmlFor="name">{en.name}</label>
                <input type="text" className="form-control" id="name" placeholder="Enter name" />
              </div>
              <div className="form-group">
                <label htmlFor="name">{en.name}</label>
                <input type="text" className="form-control" id="name" placeholder="Enter name" />
              </div>
              <div className="form-group">
                <label htmlFor="name">{en.name}</label>
                <input type="text" className="form-control" id="name" placeholder="Enter name" />
              </div>
              <div className="form-group">
                <label htmlFor="name">{en.name}</label>
                <input type="text" className="form-control" id="name" placeholder="Enter name" />
              </div>
              <div className="form-group">
                <label htmlFor="name">{en.name}</label>
                <input type="text" className="form-control" id="name" placeholder="Enter name" />
              </div>
            </form>
          </div>
        </div>
     </div>
  )
};
