import React from 'react';

import styles from './GameWinLine.module.scss'

const GameWinLine = ({winningLine}) => {

  const calcWinnningLine = (winningLine) => {
    let x1, x2, y1, y2;
    if (winningLine[0] === 0 && winningLine[1] === 2) {
      x1 = 10;
      y1 = 16.5;
      x2 = 90;
      y2 = 16.5;
    }
    if (winningLine[0] === 3 && winningLine[1] === 5) {
      x1 = 10;
      y1 = 50;
      x2 = 90;
      y2 = 50;
    }
    if (winningLine[0] === 6 && winningLine[1] === 8) {
      x1 = 10;
      y1 = 83.5;
      x2 = 90;
      y2 = 83.5;
    }
    if (winningLine[0] === 0 && winningLine[1] === 6) {
      x1 = 16.5;
      y1 = 10;
      x2 = 16.5;
      y2 = 90;
    }
    if (winningLine[0] === 1 && winningLine[1] === 7) {
      x1 = 50;
      y1 = 10;
      x2 = 50;
      y2 = 90;
    }
    if (winningLine[0] === 2 && winningLine[1] === 8) {
      x1 = 83.5;
      y1 = 10;
      x2 = 83.5;
      y2 = 90;
    }
    if (winningLine[0] === 0 && winningLine[1] === 8) {
      x1 = 10;
      y1 = 10;
      x2 = 90;
      y2 = 90;
    }
    if (winningLine[0] === 2 && winningLine[1] === 6) {
      x1 = 90;
      y1 = 10;
      x2 = 10;
      y2 = 90;
    }
    return {x1, y1, x2, y2}
  }

  let position = calcWinnningLine(winningLine);
  
  return(
    <div className={styles.container}>
      <svg className={styles.svg} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line className={styles.line} x1={position.x1} y1={position.y1} x2={position.x2} y2={position.y2} stroke="#000" strokeWidth="2.0px" strokeLinecap="round"></line>
      </svg>
    </div>
  )
}

export default GameWinLine;