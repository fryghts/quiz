// src/components/Robot.jsx
import React, { useEffect, useRef } from 'react';

import robotIdleLoop from '../assets/Robot_Idle_loop.webm';
import robotIdleToTrue from '../assets/Robot_Idle_to_True.webm';
import robotIdleToFalse from '../assets/Robot_Idle_to_False.webm';
import robotTrueToIdle from '../assets/Robot_True_to_Idle.webm';
import robotFalseToIdle from '../assets/Robot_False_to_Idle.webm';

/*
  Варианты reaction (из Quiz/StartScreen/Result):
  - "none"
  - "paused"
  - "idle"
  - "correct"           -> показываем idleToTrue (сингл)
  - "incorrect"         -> idleToFalse (сингл)
  - "toIdleFromCorrect" -> trueToIdle (сингл)
  - "toIdleFromIncorrect" -> falseToIdle (сингл)
*/

function Robot({ reaction = 'none' }) {
  // Мэп реакций к ключам видео
  const videoKeyByReaction = {
    none: 'none',
    paused: 'idleLoop',
    idle: 'idleLoop',

    // ИСПРАВЛЕНИЕ: сопоставим 'correct' -> 'idleToTrue', и т.д.
    correct: 'idleToTrue',
    incorrect: 'idleToFalse',
    toIdleFromCorrect: 'trueToIdle',
    toIdleFromIncorrect: 'falseToIdle',
  };

  // Какой ключ видео показываем
  const currentKey = videoKeyByReaction[reaction] || 'none';

  // Рефы
  const idleLoopRef = useRef(null);
  const idleToTrueRef = useRef(null);
  const idleToFalseRef = useRef(null);
  const trueToIdleRef = useRef(null);
  const falseToIdleRef = useRef(null);

  // Собираем в объект
  const refs = {
    none: null,
    idleLoop: idleLoopRef,
    idleToTrue: idleToTrueRef,
    idleToFalse: idleToFalseRef,
    trueToIdle: trueToIdleRef,
    falseToIdle: falseToIdleRef,
  };

  // Предыдущая reaction
  const prevReactionRef = useRef(null);

  // Застыть на последнем кадре
  function freezeOnLastFrame(vid) {
    if (!vid) return;
    vid.pause();
    const pos = vid.duration - 0.01;
    if (pos > 0) {
      try {
        vid.currentTime = pos;
      } catch {}
    }
  }

  useEffect(() => {
    const prev = prevReactionRef.current;
    prevReactionRef.current = reaction;

    // Скрываем старую анимацию
    if (prev && prev !== 'none') {
      const oldKey = videoKeyByReaction[prev];
      const oldVid = refs[oldKey]?.current;
      if (oldVid) {
        oldVid.pause();
        oldVid.currentTime = 0;
        oldVid.style.display = 'none';
      }
    }

    if (currentKey === 'none') {
      // вообще ничего не показываем
      return;
    }

    const newVid = refs[currentKey]?.current;
    if (newVid) {
      newVid.style.display = 'block';

      if (reaction === 'paused') {
        // кадр0, пауза
        newVid.pause();
        newVid.currentTime = 0;
      }
      else if (reaction === 'idle') {
        // idleLoop => зациклить
        newVid.loop = true;
        newVid.currentTime = 0;
        newVid.play().catch(()=>{});
      }
      else {
        // correct, incorrect, toIdleFromCorrect, toIdleFromIncorrect
        // => idleToTrue, idleToFalse, trueToIdle, falseToIdle
        newVid.loop = false;
        newVid.currentTime = 0;
        newVid.play().catch(()=>{});
      }
    }
  }, [reaction]); 

  // Координаты робота
  const robotX = 1368 - 500;
  const robotY = 540 - 540;

  return (
    <div style={{
      position: 'absolute',
      left: `${robotX}px`,
      top: `${robotY}px`,
      width: '1000px',
      height: '1080px',
      overflow: 'hidden',
      background: 'transparent',
    }}>
      {/* idleLoop */}
      <video
        ref={idleLoopRef}
        src={robotIdleLoop}
        muted
        playsInline
        loop
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          display: 'none',
        }}
      />

      {/* idleToTrue */}
      <video
        ref={idleToTrueRef}
        src={robotIdleToTrue}
        muted
        playsInline
        loop={false}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          display: 'none',
        }}
        onEnded={(e) => freezeOnLastFrame(e.currentTarget)}
      />

      {/* idleToFalse */}
      <video
        ref={idleToFalseRef}
        src={robotIdleToFalse}
        muted
        playsInline
        loop={false}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          display: 'none',
        }}
        onEnded={(e) => freezeOnLastFrame(e.currentTarget)}
      />

      {/* trueToIdle */}
      <video
        ref={trueToIdleRef}
        src={robotTrueToIdle}
        muted
        playsInline
        loop={false}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          display: 'none',
        }}
        onEnded={(e) => freezeOnLastFrame(e.currentTarget)}
      />

      {/* falseToIdle */}
      <video
        ref={falseToIdleRef}
        src={robotFalseToIdle}
        muted
        playsInline
        loop={false}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          display: 'none',
        }}
        onEnded={(e) => freezeOnLastFrame(e.currentTarget)}
      />
    </div>
  );
}

export default Robot;
