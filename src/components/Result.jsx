// src/components/Result.jsx
import React from 'react';
import quizData from '../data/quizData.js';
import Robot from './Robot.jsx';
import resultFrameImg from '../assets/Result_screen_frame.png';
import ButtonRetryImg from '../assets/Button_result_screen.png';

function Result({ score, onRetry }) {
  const { resultScreen, questions } = quizData;
  const totalQuestions = questions.length;

  return (
    <div
      className="result-container"
      style={{
        position: 'relative',
        width: '1920px',
        height: '1080px',
        overflow: 'hidden',
        margin: '0 auto',
      }}
    >
      <Robot reaction="idle" />

      {/* Рамка результата */}
      <div
        style={{
          position: 'absolute',
          left: `${resultScreen.frame.position.x}px`,
          top: `${resultScreen.frame.position.y}px`,
          width: `${resultScreen.frame.size.width}px`,
          height: `${resultScreen.frame.size.height}px`,
          background: `url(${resultFrameImg}) no-repeat center center / cover`,
          zIndex: 1,
        }}
      />

      {/* "ВАШ РЕЗУЛЬТАТ" */}
      <div
        style={{
          position: 'absolute',
          left: '515px',
          top: '242px',
          width: '500px',
          height: '200px',
          fontSize: '46px',
          color: '#fff',
          textAlign: 'left',
          zIndex: 2,
          fontFamily: 'TT Octosquares, sans-serif',
        }}
      >
        ВАШ РЕЗУЛЬТАТ
      </div>

      {/* "X/Y" */}
      <div
        style={{
          position: 'absolute',
          left: '480px',
          top: '312px',
          width: '300px',
          height: '200px',
          fontSize: '184px',
          color: '#fff',
          textAlign: 'center',
          zIndex: 2,
          fontFamily: 'TT Octosquares, sans-serif',
        }}
      >
        {score}/{totalQuestions}
      </div>


      {/* Кнопка "ЕЩЁ РАЗ!" */}
      <button
        onClick={onRetry}
        style={{
          position: 'absolute',
          left: `${resultScreen.buttonRetry.position.x}px`,
          top: `${resultScreen.buttonRetry.position.y}px`,
          width: `${resultScreen.buttonRetry.size.width}px`,
          height: `${resultScreen.buttonRetry.size.height}px`,
          background: `url(${ButtonRetryImg}) no-repeat center center / cover`,
          border: 'none',
          cursor: 'pointer',
          zIndex: 3,
          color: '#fff',
          fontFamily: 'TT Octosquares, sans-serif',
          fontSize: '48px',
          textAlign: 'center',
        }}
      >
        ЕЩЁ РАЗ!
      </button>
    </div>
  );
}

export default Result;
