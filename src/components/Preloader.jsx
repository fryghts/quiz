// src/components/Preloader.jsx
import React, { useState, useEffect } from 'react';
import quizData from '../data/quizData.js';

// Импортируем ВСЕ нужные файлы
import globalBackground from '../assets/global_background.png';

import robotIdleLoop from '../assets/Robot_Idle_loop.webm';
import robotIdleToTrue from '../assets/Robot_Idle_to_True.webm';
import robotIdleToFalse from '../assets/Robot_Idle_to_False.webm';
import robotTrueToIdle from '../assets/Robot_True_to_Idle.webm';
import robotFalseToIdle from '../assets/Robot_False_to_Idle.webm';

import quizTitle from '../assets/QUIZ_TTILE_page.png';
import buttonMouseout from '../assets/BUTTON_mouseout.png';
import buttonMouseover from '../assets/BUTTON_mouseover.png';
import buttonClickTrue from '../assets/BUTTON_click_TRUE.png';
import buttonClickFalse from '../assets/BUTTON_click_FALSE.png';
import buttonResultScreen from '../assets/Button_result_screen.png';
import background from '../assets/background.png';
import videoPlaceholder from '../assets/Video_placeholder.png';
import buttonCloseVideo from '../assets/Button_close_video.png';
import resultScreenFrame from '../assets/Result_screen_frame.png';

// Предположим, что файлы инфографики: info1.webm, info2.webm, ... info15.webm
import info1Video from '../assets/video/info1.webm';
import info2Video from '../assets/video/info2.webm';
import info3Video from '../assets/video/info3.webm';
import info4Video from '../assets/video/info4.webm';
import info5Video from '../assets/video/info5.webm';
import info6Video from '../assets/video/info6.webm';
import info7Video from '../assets/video/info7.webm';
import info8Video from '../assets/video/info8.webm';
import info9Video from '../assets/video/info9.webm';
import info10Video from '../assets/video/info10.webm';
import info11Video from '../assets/video/info11.webm';
import info12Video from '../assets/video/info12.webm';
import info13Video from '../assets/video/info13.webm';
import info14Video from '../assets/video/info14.webm';
import info15Video from '../assets/video/info15.webm';
// ... добавьте остальные

function Preloader({ onComplete }) {
  const [loadedCount, setLoadedCount] = useState(0);

  // 1. картинки
  const images = [
    // Глобальный фон - загружаем первым
    globalBackground,

    quizTitle,
    buttonMouseout,
    buttonMouseover,
    buttonClickTrue,
    buttonClickFalse,
    buttonResultScreen,
    background,
    videoPlaceholder,
    buttonCloseVideo,
    resultScreenFrame,
  ];

  // 2. Видео робота
  const robotVideos = [
    robotIdleLoop,
    robotIdleToTrue,
    robotIdleToFalse,
    robotTrueToIdle,
    robotFalseToIdle,
  ];

  // 3. Видео инфографики
  const infographicVideos = [
    info1Video,
    info2Video,
    info3Video,
    info4Video,
    info5Video,
	info6Video,
    info7Video,
    info8Video,
    info9Video,
    info10Video,
	info11Video,
    info12Video,
    info13Video,
    info14Video,
    info15Video,
  ];

  let totalAssets =
    images.length + robotVideos.length + infographicVideos.length;

  useEffect(() => {
    preloadAssets();
  }, []);

  const handleAssetLoaded = () => {
    setLoadedCount((prev) => prev + 1);
  };

  function preloadImage(src) {
    const img = new Image();
    img.src = src;
    img.onload = handleAssetLoaded;
    img.onerror = handleAssetLoaded;
  }

  function preloadVideo(src) {
    const video = document.createElement('video');
    video.preload = 'auto';
    video.src = src;
    video.oncanplaythrough = handleAssetLoaded;
    video.onerror = handleAssetLoaded;
  }

  function preloadAssets() {
    // 1. Все картинки
    images.forEach((imgPath) => {
      preloadImage(imgPath);
    });

    // 2. Видео робота
    robotVideos.forEach((vidPath) => {
      preloadVideo(vidPath);
    });

    // 3. Инфографика
    infographicVideos.forEach((vidPath) => {
      preloadVideo(vidPath);
    });
  }

  useEffect(() => {
    if (loadedCount >= totalAssets) {
      onComplete();
    }
  }, [loadedCount, totalAssets, onComplete]);

  const percent = totalAssets
    ? Math.round((loadedCount / totalAssets) * 100)
    : 100;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        color: '#fff',
        fontFamily: 'TT Octosquares, sans-serif',
      }}
    >
      <h1>Загрузка... {percent}%</h1>
    </div>
  );
}

export default Preloader;
