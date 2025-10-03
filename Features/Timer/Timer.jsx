'use client';

import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(120);

  useEffect(() => {
    if (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds((s) => s - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [seconds]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <span className="font-raleway font-bold text-[40px] text-[#FFFFFF] max-[375px]:text-[32px] max-[320px]:text-[28px]">
      {minutes.toString().padStart(2, '0')} :{' '}
      {remainingSeconds.toString().padStart(2, '0')}
    </span>
  );
};

export default Timer;
