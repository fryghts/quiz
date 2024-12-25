// src/components/AnswerInfo.jsx
import React, { useEffect, useState } from 'react';
import quizData from '../data/quizData.js';

import frameIcon from '../assets/Video_placeholder.png';
import closeIcon from '../assets/Button_close_video.png';

function AnswerInfo({
  infoType,
  infoContent,
  infoText,
  infoTextConfig,
  onClose,
  isClosing,
}) {
  const [visible, setVisible] = useState(false);

  const { answerInfo } = quizData;
  const frame = answerInfo.frame;

  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });
  }, []);

  const transformValue = isClosing
    ? 'translate3d(0,1100px,0)'
    : visible
    ? 'translate3d(0,0,0)'
    : 'translate3d(0,-1100px,0)';

  function getMediaSource() {
    if (infoType === 'video') {
      return new URL(`../assets/video/${infoContent}`, import.meta.url).href;
    }
    return new URL(`../assets/${infoContent}`, import.meta.url).href;
  }
  const mediaSrc = getMediaSource();

  return (
    <div
      className="answer-info"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '1920px',
        height: '1080px',
        overflow: 'hidden',
        zIndex: 1000,
        transform: transformValue,
        transition: 'transform 0.3s ease',
        willChange: 'transform',
      }}
    >
      {/* Рамка инфографики */}
      <div
        style={{
          position: 'absolute',
          left: `${frame.position.left}px`,
          top: `${frame.position.top}px`,
          width: `${frame.size.width}px`,
          height: `${frame.size.height}px`,
          // Короткая запись background:
          background: `url(${frameIcon}) no-repeat center center / cover`,
          zIndex: 1,
        }}
      />

      {infoType === 'image' ? (
        <img
          src={mediaSrc}
          alt="Инфографика"
          style={{
            position: 'absolute',
            left: '244px',
            top: '30px',
            width: '1426px',
            height: '802px',
            objectFit: 'cover',
            zIndex: 2,
          }}
        />
      ) : (
        <video
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            left: '244px',
            top: '30px',
            width: '1426px',
            height: '802px',
            objectFit: 'cover',
            zIndex: 2,
            background: '#000',
            fontFamily: 'TT Octosquares, sans-serif',
          }}
        >
          <source src={mediaSrc} type="video/webm" />
          Ваш браузер не поддерживает видео.
        </video>
      )}

      {/* Текст инфографики */}
      <div
        style={{
          position: 'absolute',
          left: `${infoTextConfig.position.left}px`,
          top: `${infoTextConfig.position.top}px`,
          width: `${infoTextConfig.size.width}px`,
          height: `${infoTextConfig.size.height}px`,
          fontSize: `${infoTextConfig.fontSize}px`,
          lineHeight: infoTextConfig.lineHeight,
          color: '#fff',
          overflow: 'hidden',
          textAlign: 'center',
          zIndex: 3,
          fontFamily: 'TT Octosquares, sans-serif',
        }}
      >
        {infoText}
      </div>

      {/* Кнопка закрытия */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          left: '853px',
          top: '985px',
          width: '214px',
          height: '52px',
          background: `url(${closeIcon}) no-repeat center center / cover`,
          border: 'none',
          cursor: 'pointer',
          zIndex: 4,
          fontFamily: 'TT Octosquares, sans-serif',
          fontSize: '36px',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        ЗАКРЫТЬ
      </button>
    </div>
  );
}

export default AnswerInfo;
