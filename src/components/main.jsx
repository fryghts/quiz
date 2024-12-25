// src/components/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '../styles/App.css';

function calculateScaleFactor() {
  const baseWidth = 1920;
  const baseHeight = 1080;

  const scaleX = window.innerWidth / baseWidth;
  const scaleY = window.innerHeight / baseHeight;

  // Если хотим только уменьшать, а не увеличивать:
  // берем scaleFactor = min(1, scaleX, scaleY)
  const scaleFactor = Math.min(1, scaleX, scaleY);

  document.documentElement.style.setProperty('--scale-factor', scaleFactor);
}

window.addEventListener('resize', calculateScaleFactor);
calculateScaleFactor();

ReactDOM.createRoot(document.getElementById('root')).render(
//  <React.StrictMode>
    <App />
//  </React.StrictMode>
);
