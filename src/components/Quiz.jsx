// src/components/Quiz.jsx
import React, { useState, useEffect } from 'react';
import quizData from '../data/quizData.js';
import Robot from './Robot.jsx';
import AnswerInfo from './AnswerInfo.jsx';
import AnswerButton from './AnswerButton.jsx';

import questionFrameImg from '../assets/question_frame.png';
import scoreFrameImg from '../assets/SCORE_frame.png';

function Quiz({ onQuizEnd }) {
  const { questions, questionFrame, scoreFrame } = quizData;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswerInfo, setShowAnswerInfo] = useState(false);
  const [isClosingInfo, setIsClosingInfo] = useState(false);
  const [score, setScore] = useState(0);
  const [robotReaction, setRobotReaction] = useState('idle');
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const qFrame = questionFrame.frame;
  const sFrame = scoreFrame.frame;
  const sText = scoreFrame.text;

  const qLabelPos = currentQuestion.questionLabelPos;
  const qTextConfig = currentQuestion.questionText;

  useEffect(() => {
    if (currentQuestionIndex === 0) {
      setRobotReaction('idle');
    }
  }, [currentQuestionIndex]);

  const handleAnswerClick = (index) => {
    if (selectedOptionIndex !== null) return;
    const isCorrect = index === currentQuestion.correctAnswerIndex;
    setSelectedOptionIndex(index);
    setIsAnswerCorrect(isCorrect);
    if (isCorrect) setScore((prev) => prev + 1);

    setRobotReaction(isCorrect ? 'correct' : 'incorrect');

    setTimeout(() => {
      setShowAnswerInfo(true);
    }, 2000);
  };

  const handleCloseInfographic = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    setIsClosingInfo(true);
    setTimeout(() => {
      setShowAnswerInfo(false);
      setIsClosingInfo(false);

      setRobotReaction(isAnswerCorrect ? 'toIdleFromCorrect' : 'toIdleFromIncorrect');

      setTimeout(() => {
        setRobotReaction('idle');
        if (currentQuestionIndex + 1 < questions.length) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          if (onQuizEnd) onQuizEnd(score);
        }
        setSelectedOptionIndex(null);
        setIsAnswerCorrect(null);
        setIsTransitioning(false);
      }, 2000);
    }, 500);
  };

  const buttonPositions = [
    { x: 606 - 308, y: 775 - 60 },
    { x: 606 - 308, y: 648 - 60 },
    { x: 606 - 308, y: 521 - 60 },
    { x: 606 - 308, y: 394 - 60 },
  ];

  function getButtonState(index) {
    if (selectedOptionIndex === null) return '';
    return index === selectedOptionIndex
      ? isAnswerCorrect ? 'correct' : 'incorrect'
      : '';
  }

  return (
    <div
      className="quiz-container"
      style={{
        position: 'relative',
        width: '1920px',
        height: '1080px',
        overflow: 'hidden',
        margin: '0 auto',
      }}
    >
      {/* Рамка вопроса */}
      <div
        style={{
          position: 'absolute',
          left: `${qFrame.position.left}px`,
          top: `${qFrame.position.top}px`,
          width: `${qFrame.size.width}px`,
          height: `${qFrame.size.height}px`,
          // Короткая запись:
          background: `url(${questionFrameImg}) no-repeat center center / cover`,
          zIndex: 1,
        }}
      />

      {/* Метка "Вопрос X" */}
      <div
        style={{
          position: 'absolute',
          left: `${qLabelPos.left}px`,
          top: `${qLabelPos.top}px`,
          width: `${qLabelPos.width}px`,
          height: `${qLabelPos.height}px`,
          fontSize: `${qLabelPos.fontSize}px`,
          lineHeight: qLabelPos.lineHeight,
          color: '#fff',
          textAlign: 'left',
          zIndex: 3,
        }}
      >
        {currentQuestion.questionLabel}
      </div>

      {/* Текст вопроса */}
      <div
        style={{
          position: 'absolute',
          left: `${qTextConfig.position.left}px`,
          top: `${qTextConfig.position.top}px`,
          width: `${qTextConfig.size.width}px`,
          height: `${qTextConfig.size.height}px`,
          fontSize: `${qTextConfig.fontSize}px`,
          lineHeight: qTextConfig.lineHeight,
          color: '#fff',
          overflow: 'hidden',
          textAlign: 'center',
          zIndex: 2,
        }}
      >
        {currentQuestion.question}
      </div>

      {/* Рамка счёта */}
      <div
        style={{
          position: 'absolute',
          left: `${sFrame.position.left}px`,
          top: `${sFrame.position.top}px`,
          width: `${sFrame.size.width}px`,
          height: `${sFrame.size.height}px`,
          background: `url(${scoreFrameImg}) no-repeat center center / cover`,
          zIndex: 1,
        }}
      />

      {/* Текст счёта */}
      <div
        style={{
          position: 'absolute',
          left: `${sText.position.left}px`,
          top: `${sText.position.top}px`,
          width: `${sText.size.width}px`,
          height: `${sText.size.height}px`,
          color: '#fff',
          fontSize: `${sText.fontSize}px`,
          lineHeight: sText.lineHeight,
          textAlign: 'center',
          overflow: 'hidden',
          zIndex: 2,
        }}
      >
        {currentQuestionIndex + 1}/{questions.length}
      </div>

      {/* Кнопки ответов */}
      <div className="options">
        {currentQuestion.options.map((option, i) => (
          <AnswerButton
            key={i}
            questionId={currentQuestion.id}
            optionIndex={i}
            position={buttonPositions[i]}
            state={getButtonState(i)}
            onClick={() => handleAnswerClick(i)}
            text={option}
            disabled={selectedOptionIndex !== null}
          />
        ))}
      </div>

      {/* Робот */}
      <Robot reaction={robotReaction} />

      {/* Инфографика */}
      {showAnswerInfo && (
        <AnswerInfo
          infoType={currentQuestion.infoType}
          infoContent={currentQuestion.infoContent}
          infoText={currentQuestion.answerText}
          infoTextConfig={currentQuestion.infoTextConfig}
          onClose={handleCloseInfographic}
          isClosing={isClosingInfo}
        />
      )}
    </div>
  );
}

export default Quiz;

