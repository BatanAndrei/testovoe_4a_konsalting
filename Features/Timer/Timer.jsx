'use client';

import React, { useState, useEffect } from 'react';
import StarIcon from '../../components/Icons/StarIcon/StarIcon';
import {
  getColorTimerStars,
  setDiscountHasDisappeared,
} from '../../redux/slices/tariffCardSlice';
import { useDispatch, useSelector } from 'react-redux';

const Timer = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.extraAllTariff.status);
  const [seconds, setSeconds] = useState(120);
  const [isBlinking, setIsBlinking] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (seconds > 0 && status !== 'loading') {
      const interval = setInterval(() => {
        setSeconds((s) => s - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [seconds, isClient, status]);

  useEffect(() => {
    if (seconds <= 30 && seconds > 0) {
      const blinkInterval = setInterval(() => {
        setIsBlinking((prev) => !prev);
      }, 500);
      return () => clearInterval(blinkInterval);
    } else {
      setIsBlinking(false);
    }
  }, [seconds]);

  useEffect(() => {
    let color = '#FFBB00';
    if (seconds === 0) {
      dispatch(setDiscountHasDisappeared(true));
      color = '#FFFFFF';
    } else if (seconds <= 30) {
      color = '#FF4E4E';
    }
    dispatch(getColorTimerStars(color));
  }, [seconds, dispatch]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const getTimerClasses = () => {
    let colorClasses = '';
    if (seconds === 0) {
      colorClasses = 'text-[#FFFFFF]';
    } else if (seconds <= 30) {
      colorClasses = 'text-[#FF4E4E]';
    } else {
      colorClasses = 'text-[#FFBB00]';
    }
    const blinkClass =
      seconds <= 30 && seconds > 0 && isBlinking ? 'opacity-0' : 'opacity-100';

    return `font-raleway font-bold text-[40px] max-[375px]:text-[32px] max-[320px]:text-[28px] max-[375px]:w-[100px] max-[320px]:w-[100px]  ${colorClasses} ${blinkClass} transition-opacity duration-100`;
  };

  return (
    <div className="flex items-center gap-x-[8px]">
      <StarIcon />
      <span className={getTimerClasses()}>
        {minutes.toString().padStart(2, '0')} :{' '}
        {remainingSeconds.toString().padStart(2, '0')}
      </span>
      <StarIcon />
    </div>
  );
};

export default Timer;
