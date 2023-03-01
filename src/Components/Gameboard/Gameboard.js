import React, { useEffect, useState } from 'react';

import styles from './Gameboard.module.scss';

import Gridsquare from '../Gridsquare/Gridsquare';
import GameEndModal from '../GameEndModal/GameEndModal';
import GameWinLine from '../GameWinLine/GameWinLine';

const Gameboard = () => {
  const [gameState, setGameState] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]);
  const [playerTurn, setPlayerTurn] = useState(1);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [gameEndWinner, setGameEndWinner] = useState(0);
  const [displayGameEndModal, setDisplayGameEndModal] = useState(false);
  const [winningLine, setWinningLine] = useState([0,2]); // two vals representing the first and second point of the line. 0-8 represent each grid square.
  const [showWinningLine, setShowWinningLine] = useState(false);

  const checkForGameOver = (gameState) => { //returns an object {gameOver (bool), winner (int), {line (string), num (int)}}
    if (gameState[0][0] === gameState[0][1] && gameState[0][0] === gameState[0][2] && gameState[0][0] !== 0) {
      return ({
        gameOver: true,
        winner: gameState[0][0],
        winningLine: [0,2]
      })
    } else if (gameState[1][0] === gameState[1][1] && gameState[1][0] === gameState[1][2] && gameState[1][0] !== 0) {
      return ({
        gameOver: true,
        winner: gameState[1][0],
        winningLine: [3,5]
      })
    } else if (gameState[2][0] === gameState[2][1] && gameState[2][0] === gameState[2][2] && gameState[2][0] !== 0) {
      return ({
        gameOver: true,
        winner: gameState[2][0],
        winningLine: [6,8]
      })
    } else if (gameState[0][0] === gameState[1][0] && gameState[0][0] === gameState[2][0] && gameState[0][0] !== 0) {
      return ({
        gameOver: true,
        winner: gameState[0][0],
        winningLine: [0,6]
      })
    } else if (gameState[0][1] === gameState[1][1] && gameState[0][1] === gameState[2][1] && gameState[0][1] !== 0) {
      return ({
        gameOver: true,
        winner: gameState[0][1],
        winningLine: [1,7]
      })
    } else if (gameState[0][2] === gameState[1][2] && gameState[0][2] === gameState[2][2] && gameState[0][2] !== 0) {
      return ({
        gameOver: true,
        winner: gameState[0][2],
        winningLine: [2,8]
      })
    } else if (gameState[0][0] === gameState[1][1] && gameState[0][0] === gameState[2][2] && gameState[0][0] !== 0) {
      return ({
        gameOver: true,
        winner: gameState[0][0],
        winningLine: [0,8]
      })
    } else if (gameState[0][2] === gameState[1][1] && gameState[0][2] === gameState[2][0] && gameState[0][2] !== 0) {
      return ({
        gameOver: true,
        winner: gameState[0][2],
        winningLine: [2,6]
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

  // records the click and changes the player turn
  const onHandlePlayerClick = (square) => { // square is an array of row val and then column val e.g. [0,0] for the top left square in the grid
    // update the game board
    const newGameState = gameState.slice() //copy the array
    newGameState[square[0]][square[1]] = playerTurn //manipulations
    setGameState(newGameState) //set the new state
    // change the player turn
    playerTurn === 1 ? setPlayerTurn(2) : setPlayerTurn(1);
  }

  // handler that hides the end game modal and winning line and calls to reset the game.
  const onClickHideGameEndModal = () => {
    resetGameboard();
    setShowWinningLine(false);
    setDisplayGameEndModal(false);
  }

  // util function for delays
  const delay = (ms) => new Promise(res => setTimeout(res, ms));

  // displays the modal after 2 secs
  const onDisplayGameEndModal = async (winner) => {
    setGameEndWinner(winner);

    await delay(2000);
    // the modal should set a modal state to true, which renders the modal in the dom.
    setDisplayGameEndModal(true);
  }

  // resets the game and player turn to default
  const resetGameboard = () => {
    setGameState([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ])
    setPlayerTurn(1);
  }

  useEffect (() => {
    
    const gameOverState = checkForGameOver(gameState);

    if (gameOverState.gameOver === true) {
      switch (gameOverState.winner) {
        case 1:
          setPlayer1Score(oldScore => oldScore + 1);
          setWinningLine(gameOverState.winningLine);
          setShowWinningLine(true);
          break;
        case 2:
          setPlayer2Score(oldScore => oldScore + 1);
          setWinningLine(gameOverState.winningLine);
          setShowWinningLine(true);
          break;
        default:
          break;
        }
        onDisplayGameEndModal(gameOverState.winner)
      }
  }, [gameState])

  return (
    <div>
      {
        displayGameEndModal ? 
          <div className={styles.gameEndModal} >
            <GameEndModal winner={gameEndWinner} onClickHandler={onClickHideGameEndModal}></GameEndModal>
          </div> : null
      }
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
      <div className={`${styles.gameboard} ${ displayGameEndModal ? styles.fadeOut : null}`}>
      { showWinningLine ? 
          <div className={styles.gameEndLine}>
            <GameWinLine winningLine={winningLine}></GameWinLine>
          </div> : null }
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
