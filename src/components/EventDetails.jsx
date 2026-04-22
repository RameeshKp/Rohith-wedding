import { motion } from "framer-motion";
import { Clock3, MapPin, PartyPopper } from "lucide-react";

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

function EventDetails({ events }) {
  return (
    <motion.section
      id="event-details"
      variants={reveal}
      className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="section-kicker">Event Details</p>
          <h2 className="font-display text-4xl text-[var(--color-primary)] sm:text-5xl">
            Join us for every beautiful moment
          </h2>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {events.map((event, index) => (
          <article
            key={event.title}
            className="glass-panel rounded-[2rem] p-6 sm:p-7"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="inline-flex rounded-full bg-[var(--color-soft)] p-3 text-[var(--color-primary)]">
                {index === 0 ? <PartyPopper size={18} /> : <Clock3 size={18} />}
              </div>
              <span className="rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                {event.date}
              </span>
            </div>

            <h3 className="mt-6 font-display text-3xl text-[var(--color-primary)]">
              {event.title}
            </h3>

            <div className="mt-5 space-y-4 text-[15px] leading-7 text-[var(--color-muted)]">
              <div className="flex gap-3">
                <MapPin
                  className="mt-1 shrink-0 text-[var(--color-primary)]"
                  size={18}
                />
                <p>{event.venue}</p>
              </div>

              <div className="flex gap-3">
                <Clock3
                  className="mt-1 shrink-0 text-[var(--color-primary)]"
                  size={18}
                />
                <p>{event.time}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
}

export default EventDetails;
