import React from 'react';

import styles from './GameWinLine.module.scss'

const GameWinLine = (winningLine) => {

  return(
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line className={styles.line} x1="0" y1="0" x2="100" y2="0" stroke="#000" stroke-width="4.0px"></line>
    </svg>
  )
}

export default GameWinLine;