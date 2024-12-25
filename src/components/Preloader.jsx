// src/components/Preloader.jsx
import React, { useState, useEffect } from 'react';

// Импорт всех анимаций робота
import robotIdleLoop from '../assets/Robot_Idle_loop.webm';
import robotIdleToTrue from '../assets/Robot_Idle_to_True.webm';
import robotIdleToFalse from '../assets/Robot_Idle_to_False.webm';
import robotTrueToIdle from '../assets/Robot_True_to_Idle.webm';
import robotFalseToIdle from '../assets/Robot_False_to_Idle.webm';

// Пример остального (фон, картинки...). Добавьте при необходимости.
import background from '../assets/background.png';
import globalBackground from '../assets/global_background.png';

function Preloader({ onComplete }) {
  const [loadedCount, setLoadedCount] = useState(0);

  // 1) Картинки
  const images = [
    globalBackground,
    background,
    // ... прочие PNG/JPG
  ];

  // 2) Видео робота
  const robotVideos = [
    robotIdleLoop,
    robotIdleToTrue,
    robotIdleToFalse,
    robotTrueToIdle,
    robotFalseToIdle,
  ];

  // 3) (Если есть другие инфографические видео)
  const infographicVideos = [
    // info1.webm, info2.webm...
  ];

  const totalAssets = images.length + robotVideos.length + infographicVideos.length;

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
    images.forEach(preloadImage);
    robotVideos.forEach(preloadVideo);
    infographicVideos.forEach(preloadVideo);
  }

  useEffect(() => {
    if (loadedCount >= totalAssets) {
      onComplete();
    }
  }, [loadedCount, totalAssets, onComplete]);

  const percent = totalAssets ? Math.round((loadedCount / totalAssets) * 100) : 100;

  return (
    <div style={{
      width: '100vw', height: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#fff',
      background: `url(${globalBackground}) no-repeat center center / cover`,
    }}>
      <h1>Загрузка... {percent}%</h1>
    </div>
  );
}

export default Preloader;
