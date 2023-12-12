"use client";
import { useEffect, useState } from "react";
import HurryUpBox from "./hurry-up-box";

interface HurryUpProps {
  date: number;
}

const HurryUp: React.FC<HurryUpProps> = ({ date }) => {
  const calculateTimeLeft = () => {
    const difference = +date - +new Date();
    let timeLeft = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex flex-col items-center justify-center gap-3 mt-2">
      <div className="text-sm">Hurry Up! Offer ends in</div>
      <div className="flex gap-1">
        <HurryUpBox name="hours" number={timeLeft.hours} />
        <HurryUpBox name="minutes" number={timeLeft.minutes} />
        <HurryUpBox name="seconds" number={timeLeft.seconds} last />
      </div>
    </div>
  );
};

export default HurryUp;
