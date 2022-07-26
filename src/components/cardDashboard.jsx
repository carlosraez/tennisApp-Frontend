import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const CardDashboard = ({registerImage, title, description, textLink, linkHref}) => {
  return (
    <div className="card">
       <img src={registerImage} className="card-img-top" alt="register-image" />
         <div className="card-body">
         <h5 className="card-title">{title}</h5>
         <p className="card-text">{description}</p>
      <Link to={linkHref} className="btn btn-primary">{textLink}</Link>
     </div>
    </div>
  )
}

CardDashboard.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string.isRequired,
    linkHref: PropTypes.string.isRequired,
    registerImage: PropTypes.string.isRequired,
    textLink: PropTypes.string.isRequired
  };