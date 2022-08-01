import React from 'react';
import { en } from '../i18n';

export const ListPlayers = ({ player, index }) => {
    const { name, tennisShot, location, level, deletePlayer } = player;

/**
* Button delete player off table
* @returns {JSX.Element}
*/
const getDeletePlayerButton = () => {
    return (
        <button className="btn btn-danger btn-sm">
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
        <button className="btn btn-warning btn-sm">
        {en.titleUpdatePlayer}
        </button>
    );
 }

  return (
    <tr key={name}>
        <th scope="row">{index + 1}</th>
                <td>{name}</td>
                <td>{tennisShot}</td>
                <td>{location}</td>
                <td>{level}</td>
                <td>{getUpdatePlayerButton()}</td>
                <td>{getDeletePlayerButton()}</td>
    </tr>
  )
}




