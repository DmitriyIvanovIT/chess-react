import React, { FC, useEffect, useRef, useState } from 'react';
import { TimerProps } from '@/components/Timer/interfaces';
import { ColorsFigure } from '@/models/Colors';

const Timer: FC<TimerProps> = ({ currentPlayer, restart }) => {
  const [blackTime, setBlackTime] = useState(300);
  const [whiteTime, setWhiteTime] = useState(300);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    startTimer();
  }, [currentPlayer]);

  const startTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
    }

    const callback =
      currentPlayer?.color === ColorsFigure.WHITE
        ? decrementWhiteTimer
        : decrementBlackTimer;

    timer.current = setInterval(callback, 1000);
  };

  const decrementBlackTimer = () => {
    setBlackTime(prev => prev - 1);
  };

  const decrementWhiteTimer = () => {
    setWhiteTime(prev => prev - 1);
  };

  const handlerRestart = () => {
    setBlackTime(300);
    setWhiteTime(300);
    restart();
  };

  return (
    <div className="mr-2 bg-gray-400 w-[200px] h-[200px] flex flex-col justify-center p-3 gap-y-3">
      <div>
        <button
          onClick={handlerRestart}
          className="bg-blue-600 text-white px-2 py-1 rounded"
        >
          Новая игра
        </button>
      </div>
      <h2 className="text-2xl text-white">Черные - {blackTime}</h2>
      <h2 className="text-2xl text-white">Белые - {whiteTime}</h2>
    </div>
  );
};

export default Timer;
