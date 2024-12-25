// src/components/StartScreen.jsx
import React from 'react';
import quizData from '../data/quizData.js';
import Robot from './Robot.jsx';
import QUIZ_TITLE from '../assets/QUIZ_TTILE_page.png';
import ButtonStartIcon from '../assets/Button_result_screen.png';

function StartScreen({ onStart }) {
  const { startScreen } = quizData;
  return (
    <div
      style={{
        position: 'relative',
        width: '1920px',
        height: '1080px',
        background: `url(${QUIZ_TITLE}) no-repeat center center / cover`,
        overflow: 'hidden',
      }}
    >
      {/* Робот стоит на кадре 0 "idleLoop" */}
      <Robot reaction="paused" />

      <button
        onClick={onStart}
        style={{
          position: 'absolute',
          left: `${startScreen.buttonStart.position.x}px`,
          top: `${startScreen.buttonStart.position.y}px`,
          width: `${startScreen.buttonStart.size.width}px`,
          height: `${startScreen.buttonStart.size.height}px`,
          background: `url(${ButtonStartIcon}) no-repeat center center / cover`,
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'TT Octosquares, sans-serif',
          fontSize: '48px',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        НАЧАТЬ!
      </button>
    </div>
  );
}

export default StartScreen;
