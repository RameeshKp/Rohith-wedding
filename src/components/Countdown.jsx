import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

function getTimeLeft(targetDate) {
  const target = new Date(targetDate).getTime();
  const now = Date.now();
  const distance = Math.max(target - now, 0);

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
}

function AnimatedDigit({ value }) {
  return (
    <div className="relative h-12 overflow-hidden sm:h-16">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={value}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-center font-display text-4xl text-[var(--color-primary)] sm:text-5xl"
        >
          {String(value).padStart(2, "0")}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <motion.section
      id="countdown"
      variants={reveal}
      className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="glass-panel overflow-hidden rounded-[2.25rem] p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="section-kicker">Countdown</p>
            <h2 className="font-display text-4xl text-[var(--color-primary)] sm:text-5xl">
              Counting down to the muhurtham
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-[var(--color-muted)] sm:text-base">
              Live countdown to Sunday, April 26, 2026 at 10:00 AM IST.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {units.map((unit) => (
              <div
                key={unit.label}
                className="rounded-[1.75rem] border border-white/60 bg-white/85 p-4 text-center shadow-[0_16px_40px_rgba(28,28,28,0.06)] backdrop-blur"
              >
                <AnimatedDigit value={unit.value} />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-muted)]">
                  {unit.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Countdown;
