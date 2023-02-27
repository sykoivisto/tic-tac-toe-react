import React, { useState } from 'react';

import styles from './Gameboard.module.scss';

import SampleGame from '../../SampleGame';
import Gridsquare from '../Gridsquare/Gridsquare';

const Gameboard = () => {
  const [gameState, setGameState] = useState(SampleGame);
  const [playerTurn, setPlayerTurn] = useState(1);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  const onHandlePlayerClick = (square) => { // square is an array of row val and then column val e.g. [0,0] for the top left square in the grid
    // update the game board
    const newGameState = gameState.slice() //copy the array
    newGameState[square[0]][square[1]] = playerTurn //manipulations
    setGameState(newGameState) //set the new state
    // change the player turn
    playerTurn === 1 ? setPlayerTurn(2) : setPlayerTurn(1);
  }

  // when gameState updates, we want to check to see if the game is over
  // game should be over when a player wins or there are no turns left i.e. a tie

  return (
    <div>
      <div className={styles.scoreboard}>
        <div className={`${styles.player1} ${playerTurn === 1 ? styles.active : null}`}>
          Player 1
          <div className={styles.score}>
            {player1Score}
          </div>
        </div>
        <div className={`${styles.player2} ${playerTurn === 2 ? styles.active : null}`}>
          Player 2
          <div className={styles.score}>
            {player2Score}
          </div>
        </div>
      </div>
      <div className={styles.gameboard}>
        <div className={styles.row}>
          <Gridsquare value={gameState[0][0]} square={[0,0]} onHandlePlayerClick={onHandlePlayerClick}></Gridsquare>
          <Gridsquare value={gameState[0][1]} square={[0,1]} onHandlePlayerClick={onHandlePlayerClick}></Gridsquare>
          <Gridsquare value={gameState[0][2]} square={[0,2]} onHandlePlayerClick={onHandlePlayerClick}></Gridsquare>
        </div>
        <div className={styles.row}>
          <Gridsquare value={gameState[1][0]} square={[1,0]} onHandlePlayerClick={onHandlePlayerClick}></Gridsquare>
          <Gridsquare value={gameState[1][1]} square={[1,1]} onHandlePlayerClick={onHandlePlayerClick}></Gridsquare>
          <Gridsquare value={gameState[1][2]} square={[1,2]} onHandlePlayerClick={onHandlePlayerClick}></Gridsquare>
        </div>
        <div className={styles.row}>
          <Gridsquare value={gameState[2][0]} square={[2,0]} onHandlePlayerClick={onHandlePlayerClick}></Gridsquare>
          <Gridsquare value={gameState[2][1]} square={[2,1]} onHandlePlayerClick={onHandlePlayerClick}></Gridsquare>
          <Gridsquare value={gameState[2][2]} square={[2,2]} onHandlePlayerClick={onHandlePlayerClick}></Gridsquare>
        </div>
      </div>
    </div>
  );
};

export default Gameboard;
