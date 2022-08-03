import React from 'react'
import { en } from '../i18n';

export const Spinner = () => {
  return (
    <div className="spinner-border" role="status">
    <span className="visually-hidden">{en.loaderMessage}</span>
    </div>
  )
}
