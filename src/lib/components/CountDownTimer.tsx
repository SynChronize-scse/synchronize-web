import { useEffect, useState } from "react";

function CountDownTimer() {
  const [COUNTDOWN_TO] = useState(new Date("2025-01-09T00:00:00").getTime());

  const [days, setDays] = useState<string>("0");
  const [hours, setHours] = useState<string>("0");
  const [minutes, setMinutes] = useState<string>("0");
  const [seconds, setSeconds] = useState<string>("0");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = COUNTDOWN_TO - now;

      // pad with zero if less than 10
      const pad = (num: number) => (num < 10 ? `0${num}` : `${num}`);
      const d = pad(Math.floor(distance / (1000 * 60 * 60 * 24)));
      const h = pad(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      const m = pad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      const s = pad(Math.floor((distance % (1000 * 60)) / 1000));

      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, [COUNTDOWN_TO]);

  return (
    <div className="flex flex-col items-center sm:mt-10 relative z-50">
      <h3 className="text-[#C3DB62] text-lg sm:text-xl">Starts In</h3>
      <div className="grid grid-cols-4 gap-2 mt-2 sm:mt-1">
        <div className="flex flex-col items-center">
          <span className="text-[#C3DB62] text-lg sm:text-xl">{days}</span>
          <span className="text-[#808080] text-xs sm:text-sm">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[#C3DB62] text-lg sm:text-xl">{hours}</span>
          <span className="text-[#808080] text-xs sm:text-sm">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[#C3DB62] text-lg sm:text-xl">{minutes}</span>
          <span className="text-[#808080] text-xs sm:text-sm">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[#C3DB62] text-lg sm:text-xl">{seconds}</span>
          <span className="text-[#808080] text-xs sm:text-sm">Seconds</span>
        </div>
      </div>
    </div>
  );
}

export default CountDownTimer;
