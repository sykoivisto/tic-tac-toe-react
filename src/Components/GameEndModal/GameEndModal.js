import React from 'react';

import styles from './GameEndModal.module.scss'

const GameEndModal = ({winner, onClickHandler}) => {

      // modal should dispay the cross or circle depending on winner and say "winner"
    // if the game is a draw it will say "its a draw" with both the cross and circle
    // when clicking on the modal it calls resetGameboard();


  switch (winner) {
    case 1:
      return(
        <div className={styles.modal} onClick={onClickHandler}>
          <div>
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line className={styles.line} x1="4.70711" y1="4.29289" x2="96.7071" y2="96.2929" stroke="#000" strokeWidth="4.0px"></line>
              <line className={styles.line} x1="3.29289" y1="96.2929" x2="95.2929" y2="4.29289" stroke="#000" strokeWidth="4.0px"></line>
          </svg>
          </div>
          <p>Winner</p>
        </div>
      );
    case 2:
      return(
        <div className={styles.modal} onClick={onClickHandler}>
          <div>
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g className={styles.circle} >
                  <circle cx="50" cy="50" r="43" fill="#fff" stroke="#000" strokeWidth="4.0px"></circle>
              </g>
          </svg>
          </div>
          <p>Winner</p>
        </div>
      );
    default:
      return(
        <div className={styles.modal} onClick={onClickHandler}>
          <div>
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line className={styles.line} x1="4.70711" y1="4.29289" x2="96.7071" y2="96.2929" stroke="#000" strokeWidth="4.0px"></line>
              <line className={styles.line} x1="3.29289" y1="96.2929" x2="95.2929" y2="4.29289" stroke="#000" strokeWidth="4.0px"></line>
          </svg>
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g className={styles.circle} >
                  <circle cx="50" cy="50" r="43" fill="#fff" stroke="#000" strokeWidth="4.0px"></circle>
              </g>
          </svg>
          </div>
          <p>It's a Draw</p>
        </div>
      );
  }


  
}

export default GameEndModal;