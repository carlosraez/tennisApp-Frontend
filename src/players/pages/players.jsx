import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';

import styles from './players.module.scss';
import { InputsForm } from '../../components/inputsForm';
import { ListPlayers } from '../../components/listPlayers';
import { Spinner } from '../../components/spinner';
import { en } from '../../i18n';
import { addPlayer, deletePlayerList, updatePlayer } from '../../store/player';

export const Players = () => {
  const [formValid, setFormValid] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [playerToUpdate, setPlayerToUpdate] = useState('')
  const [formValues, setFormValues] = useState({
    name:'',
    tennisShot:'',
    location:'',
    birthday:'',
    level:'',
    });
  const [focused, setfocused] = useState({input: '', status: false})

  const {players , isLoadingPlayers}   = useSelector(state => state.player);
  const dispatch = useDispatch();
  const inputRef = useRef();
  

  const {name, tennisShot, location, birthday, level } = formValues;

  useEffect(() => {
    formValidations()
  }, [formValues]);
   
  const inputsFormPlayer = [
    {
      label: en.inputLabelUserName,
      type: 'text',
      placeholder: en.playerName,
      ariaLabel: 'userName',
      name: 'name',
      value: name,
      errorMessage: en.errorInputName,
      pattern: '^[A-z]{3,16}/*$',
      required: true,
    },
    {
      label: en.bestTennisShot,
      ariaLabel: 'userTennisShot',
      name: 'tennisShot',
      value: tennisShot,
      options: [ en.driveShot, en.serveShot, en.reverse,],
      errorMessage: en.errorTennisShotInput,
      isSelect: true,
      required: true,
    },
    {
      label: en.locationPlayer,
      type: 'text',
      placeholder: en.inputPlaceHolderLocation,
      ariaLabel: 'locationPlayer',
      name: 'location',
      value: location,
      errorMessage: en.errorLocationInput,
      pattern: '^[A-z]{3,16}/*$',
      required: true,
    },
    {
      label: en.birthday,
      type: 'date',
      ariaLabel: 'BirthDayPlayer',
      name: 'birthday',
      value: birthday,
      errorMessage: en.errorBirthDayInput,
      pattern: '/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/',
      required: true,
    },
    {
      label: en.selectLevel,
      isSelect: true,
      ariaLabel: 'level',
      name: 'level',
      value: level,
      errorMessage: en.errorSelectInput,
      options:  [ en.begginer,en.intermediate ,en.advanced, en.tournament ],
      required: true,
    }
  ]

  const hanldeFormPlayer = (e) => {
    e.preventDefault();
    if (formValid) {
      if (isUpdate) { 
        dispatch(updatePlayer(formValues, playerToUpdate));
        setIsUpdate(false);
        setPlayerToUpdate('');
       } 
       if (!isUpdate) { dispatch(addPlayer(formValues));}
       reStartValues()
    }
  }

  /**
   * @description - Validates the form and set the state of the form
   * @returns {void}
   */
  const formValidations = () => { 
    const form = inputRef.current
    const inputsInvalid = form.querySelectorAll('input:invalid');
    inputsInvalid.length === 0 ? setFormValid(true) : setFormValid(false);
  }

  /**
   * 
   * @param {object} e event to prevent default  
   */
  const handleInputChange = (e) => {
     const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
  }

   /**
   * @description - This function is used put the focus on the input when the page is loaded and load errors messages
   * @returns {void}
   */
    const handleFocus = (e) => { 
      const inputName = e.target.name;
      setfocused({input:inputName ,status:true})
   }

   /**
    * @description - this function re-start the values off the form
    * @returns {void}
    */
   const reStartValues = () => { 
    setFormValues({
      name:'',
      tennisShot:'',
      location:'',
      birthday:'',
      level:'',
    });
    setfocused({input: '', status: false}) 
   }

   /**
   * Button save form player
   * @returns {JSX.Element}
   */
  const getSavePlayerButton = () => {
    return (
      <button type="submit" className="btn btn-primary mt-3">
        {en.titleSavePlayer}
      </button>
    );
  };

  /**
   * @description - This function is used to show all the form inputs to register a new player
   * @returns {JSX.Element}
   */
  const getFormRegisterPlayer = () => { 
     return (
       <InputsForm 
         tennisShot={formValues.tennisShot}
         isUpdate={isUpdate}
         inputsForm={inputsFormPlayer}  
         handleInputChange={handleInputChange}
         handleFocus={handleFocus}
         focused={focused}
        />
     )
  } 

  /**
   * @describe - This function is used to delete a player from the list
   * @param {any} e event to prevent default
   */
  const handleDeletePlayer = (e) => {
    const id = e.target.id;
    const tennisPlayerDelete = players[id] 
    dispatch(deletePlayerList(tennisPlayerDelete));
    reStartValues()
  }

  /**
   * @description - This funcion is por update a player
   * @param {any} e event to prevent default 
   */
  const handleUpdatePlayer = (e) => {
    setIsUpdate(true);
    const id = e.target.id;
    const tennisPlayerUpdate = players[id] 
    setPlayerToUpdate(tennisPlayerUpdate._id)
    setFormValues({
      name: tennisPlayerUpdate.name,
      tennisShot: tennisPlayerUpdate.tennisShot,
      location: tennisPlayerUpdate.location,
      birthday: tennisPlayerUpdate.birthday,
      level: tennisPlayerUpdate.level,
    })
  }

  
  
  /**
   * @describe - Table list off tenis in data base
   * @returns {JSX.Element}
   */
  const getListPlayers = () => {
      return (
        <table className="table responsive">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">{en.namePlayerTable}</th>
            <th scope="col">{en.birthdayTable}</th>
            <th scope="col">{en.bestTennisShotTable}</th>
            <th scope="col">{en.locationPlayerTable}</th>
            <th scope="col">{en.levelPlayerTable}</th>
            <th scope="col">{en.ButtonUpdateTable}</th>
            <th scope="col">{en.ButtonDeleteTable}</th>
          </tr>
        </thead>
         <tbody>
            {players.map((player, index) => {
              return (
                <ListPlayers
                key={player._id} 
                index={index}
                player={player}
                handleDelete={handleDeletePlayer}
                handleUpdate={handleUpdatePlayer}
                />
              )
            })}
         </tbody>
      </table>
      )
  }
  
  return (
      <div className="container">
        <div className="row">
          <Link color="inherit" to="/dashboard">{en.backToDashboard}</Link>
          <h1>{en.titleRegisterPlayer}</h1>
          <div className="col-xs-100 col-md-6">
            <form ref={inputRef} onSubmit={hanldeFormPlayer}>
              {getFormRegisterPlayer()}
              {getSavePlayerButton()}
            </form>
          </div>
          <div className={`col-xs-100 col-md-6 ${isLoadingPlayers ?  styles.isLoadingSpinner : '' }`}>
              {isLoadingPlayers ? <Spinner /> : getListPlayers() }
          </div>
        </div>
     </div>
  )
};
