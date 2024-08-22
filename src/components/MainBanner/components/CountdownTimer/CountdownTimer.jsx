import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  function calculateTimeLeft(targetDate) {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  }

  return (
    <div className={styles.timer}>
      <Circle label="days" value={timeLeft.days} />
      <Circle label="hours" value={timeLeft.hours} />
      <Circle label="minutes" value={timeLeft.minutes} />
      <Circle label="seconds" value={timeLeft.seconds} />
    </div>
  );
};

const Circle = ({ label, value }) => {
  return (
    <div className={styles.circle}>
      <svg>
        <defs>
          <filter id="drop-shadow">
            <feOffset dx="-4" dy="-4" result="shadow1" />
            <feGaussianBlur in="shadow1" stdDeviation="2" result="shadow1" />
            <feFlood floodColor="#b3e028" result="color1" />
            <feComposite in2="shadow1" operator="in" result="shadow1" />
            <feOffset dx="4" dy="4" result="shadow2" />
            <feGaussianBlur in="shadow2" stdDeviation="2" result="shadow2" />
            <feFlood floodColor="#b3e028" result="color2" />
            <feComposite in2="shadow2" operator="in" result="shadow2" />
            <feMerge>
              <feMergeNode in="shadow1" />
              <feMergeNode in="shadow2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle
          cx="42"
          cy="40"
          r="38"
          fill="#03AEC6"
          stroke="#004E44"
          strokeWidth="2"
          filter="url(#drop-shadow)"
        />
        <text
          x="50%"
          y="50%"
          dx="0"
          textAnchor="middle"
          fontSize="20"
          fill="#fff"
        >
          {value}
        </text>
      </svg>
      <div className={styles.label}>{label}</div>
    </div>
  );
};

export default CountdownTimer;
