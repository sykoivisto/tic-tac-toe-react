import React, { useState } from 'react';

import styles from './Gameboard.module.scss';

import SampleGame from '../../SampleGame';

const Gameboard = () => {
  const [gameState, setGameState] = useState(SampleGame);

  return (
    <div className={styles.gameboard}>
      <div className={styles.row}>
        <div>{gameState[0][0]}</div>
        <div>{gameState[0][1]}</div>
        <div>{gameState[0][2]}</div>
      </div>
      <div className={styles.row}>
        <div>{gameState[1][0]}</div>
        <div>{gameState[1][1]}</div>
        <div>{gameState[1][2]}</div>
      </div>
      <div className={styles.row}>
        <div>{gameState[2][0]}</div>
        <div>{gameState[2][1]}</div>
        <div>{gameState[2][2]}</div>
      </div>
    </div>
  );
};

export default Gameboard;
