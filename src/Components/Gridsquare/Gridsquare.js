import React from 'react';

import styles from './Gridsquare.module.scss'

const Gridsquare = ({value, square, onHandlePlayerClick}) => {

  switch (value) {
    case 0:
      return (
        <div className={`${styles.empty} ${styles.gridsquare}`} onClick={() => onHandlePlayerClick(square)}></div>
        // add a click listener here that points to the function that handles the players turn
      )
    case  1:
      return (
        <div className={styles.gridsquare}>x</div>
      )
    case 2:
      return (
        <div className={styles.gridsquare}>o</div>
      )
    default:
      return (
        <div className={`${styles.empty} ${styles.gridsquare}`} onClick={onHandlePlayerClick(square)}></div>
      )
  }
}

export default Gridsquare;