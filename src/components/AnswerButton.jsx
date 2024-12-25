// src/components/AnswerButton.jsx
import React from 'react';
import answerStyles from '../data/answerStyles.js';

import buttonMouseout from '../assets/BUTTON_mouseout.png';
import buttonMouseover from '../assets/BUTTON_mouseover.png';
import buttonClickTrue from '../assets/BUTTON_click_TRUE.png';
import buttonClickFalse from '../assets/BUTTON_click_FALSE.png';

function AnswerButton({
  questionId,
  optionIndex,
  position,
  state,
  onClick,
  text,
  disabled,
}) {
  const { x, y } = position;

  let bg = buttonMouseout;
  if (state === 'correct') bg = buttonClickTrue;
  if (state === 'incorrect') bg = buttonClickFalse;

  const styleConfig =
    answerStyles[questionId] &&
    answerStyles[questionId][optionIndex]
      ? answerStyles[questionId][optionIndex]
      : { width: 616, height: 120, fontSize: 24 };

  const btnWidth = styleConfig.width;
  const btnHeight = styleConfig.height;
  const btnFontSize = styleConfig.fontSize;

  return (
    <button
      style={{
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        width: `${btnWidth}px`,
        height: `${btnHeight}px`,
        border: 'none',
        // Используем шорт-запись background со слэш-синтаксисом:
        background: `url(${bg}) no-repeat center center / cover`,

        cursor: disabled ? 'default' : 'pointer',
        fontSize: `${btnFontSize}px`,
        lineHeight: `${btnHeight}px`,
        color: '#fff', // <-- исправлено
        textAlign: 'center',
        fontFamily: 'TT Octosquares, sans-serif',
      }}
      onClick={onClick}
      onMouseOver={(e) => {
        if (!disabled && state === '') {
          e.currentTarget.style.background = `url(${buttonMouseover}) no-repeat center center / cover`;
        }
      }}
      onMouseOut={(e) => {
        if (!disabled && state === '') {
          e.currentTarget.style.background = `url(${buttonMouseout}) no-repeat center center / cover`;
        }
      }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default AnswerButton;

