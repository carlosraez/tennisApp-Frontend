import React from 'react';
import PropTypes from 'prop-types';
import { en } from '../i18n';

export const ListPlayers = ({ player, index, handleDelete, handleUpdate }) => {
    const { name, tennisShot, location, level, birthday, } = player;

/**
* Button delete player off table
* @returns {JSX.Element}
*/
const getDeletePlayerButton = (index) => {
    
    return (
        <button onClick={handleDelete} id={index} className="btn btn-danger btn-sm">
        {en.titleDeletePlayer}
        </button>
    );
 };


/**
* Button update player off table
* @returns {JSX.Element}
*/
 const getUpdatePlayerButton = () => {
    return (
        <button onClick={handleUpdate} id={index} className="btn btn-warning btn-sm">
        {en.titleUpdatePlayer}
        </button>
    );
 }

  return (
    <tr key={name}>
        <th scope="row">{index + 1}</th>
        <td>{name}</td>
        <td>{birthday}</td>
        <td>{tennisShot}</td>
        <td>{location}</td>
        <td>{level}</td>
        <td>{getUpdatePlayerButton(index)}</td>
        <td>{getDeletePlayerButton(index)}</td>
    </tr>
  )
}

ListPlayers.propTypes = {
    player: PropTypes.object,
    index: PropTypes.number,
    handleDelete: PropTypes.func,
    handleUpdate : PropTypes.func,
  };



