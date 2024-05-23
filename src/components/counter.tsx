import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date('2024-10-18T00:00:00');
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    const key = interval as keyof TimeLeft;
    if (!timeLeft[key] && key !== 'seconds') {
      return;
    }

    timerComponents.push(
      <div className='interval' key={interval}>
        <div className='interval-value'>{timeLeft[key]}</div>
        <div className='interval-label'>{interval.charAt(0).toUpperCase() + interval.slice(1)}</div>
      </div>
    );
  });

  return (
    <div className="countdown-container">
      <h1 className="countdown">Redescubre el mundo de los clásicos de Roblox</h1>
      <div className="interval-container">
        {timerComponents.length ? timerComponents : <span>¡Es el día!</span>}
      </div>
    </div>
  );
};

export default Countdown;
