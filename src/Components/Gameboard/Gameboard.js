import React, { useEffect, useState } from 'react';

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

  const onHandleGameOver = (gameOverState) => {
    //stuff to do here:
    //add score to the winning player
    //display the winning line with an animation
    //clear the game board
    //reset the player turn to 1
  }

  const checkForGameOver = () => { //returns an object {bool: game is over, int: winning player, obj: {string: row/col, int: row/col#}}
    if (gameState[0][0] === gameState[0][1] && gameState[0][0] === gameState[0][2] && gameState[0][0] !== 0) {
      return ({
        gameOver: true,
        winner: gameState[0][0],
        winningLine: {line: 'row', num: 0}
      })
    } else if (gameState[1][0] === gameState[1][1] && gameState[1][0] === gameState[1][2] && gameState[1][0] !== 0) {
      return ({
        gameOver: true,
        winner: gameState[1][0],
        winningLine: {line: 'row', num: 1}
      })
    } else if (gameState[2][0] === gameState[2][1] && gameState[2][0] === gameState[2][2] && gameState[2][0] !== 0) {
      return ({
        gameOver: true,
        winner: gameState[2][0],
        winningLine: {line: 'row', num: 2}
      })
    } else if (gameState[0][0] === gameState[1][0] && gameState[0][0] === gameState[2][0] && gameState[0][0] !== 0) {
      return ({
        gameOver: true,
        winner: gameState[0][0],
        winningLine: {line: 'col', num: 0}
      })
    } else if (gameState[0][1] === gameState[1][1] && gameState[0][1] === gameState[2][1] && gameState[0][1] !== 0) {
      return ({
        gameOver: true,
        winner: gameState[0][1],
        winningLine: {line: 'col', num: 1}
      })
    } else if (gameState[0][2] === gameState[1][2] && gameState[0][2] === gameState[2][2] && gameState[0][2] !== 0) {
      return ({
        gameOver: true,
        winner: gameState[0][2],
        winningLine: {line: 'col', num: 2}
      })
    } else if (gameState[0][0] === gameState[1][1] && gameState[0][0] === gameState[2][2] && gameState[0][0] !== 0) {
      return ({
        gameOver: true,
        winner: gameState[0][0],
        winningLine: {line: 'diag', num: 0}
      })
    } else if (gameState[0][2] === gameState[1][1] && gameState[0][2] === gameState[2][0] && gameState[0][2] !== 0) {
      return ({
        gameOver: true,
        winner: gameState[0][2],
        winningLine: {line: 'diag', num: 1}
      })
    }

    if (!gameState[0].includes(0) && !gameState[1].includes(0) && !gameState[2].includes(0)) return ({ // a tie - no more moves left.
      gameOver: true,
      winner: 3
    });

    return ({
      gameOver: false
    })
  }

  useEffect (() => {
    const gameOverState = checkForGameOver();

    if (gameOverState.gameOver === true) onHandleGameOver(gameOverState);

  }, [gameState])

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
