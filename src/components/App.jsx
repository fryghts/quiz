// src/components/App.jsx
import React, { useState } from 'react';
import Preloader from './Preloader.jsx';
import StartScreen from './StartScreen.jsx';
import Quiz from './Quiz.jsx';
import Result from './Result.jsx';

function App() {
  const [isPreloaded, setIsPreloaded] = useState(false);
  const [screen, setScreen] = useState('start'); 
  const [score, setScore] = useState(0);

  const handlePreloadComplete = () => {
    setIsPreloaded(true);
  };

  const handleStart = () => {
    setScreen('quiz');
  };

  const handleQuizEnd = (finalScore) => {
    setScore(finalScore);
    setScreen('result');
  };

  const handleRetry = () => {
    setScore(0);
    setScreen('quiz');
  };

  if (!isPreloaded) {
    return <Preloader onComplete={handlePreloadComplete} />;
  }

  return (
    <div className="app-container">
      {screen === 'start' && <StartScreen onStart={handleStart} />}
      {screen === 'quiz' && <Quiz onQuizEnd={handleQuizEnd} />}
      {screen === 'result' && <Result score={score} onRetry={handleRetry} />}
    </div>
  );
}

export default App;

