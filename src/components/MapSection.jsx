import { motion } from "framer-motion";
import { ExternalLink, Navigation } from "lucide-react";

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

function getMapEmbed(query) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

function getMapLink(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function MapSection({ events }) {
  return (
    <motion.section
      id="location"
      variants={reveal}
      className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8"
    >
      <div>
        <p className="section-kicker">Location</p>
        <h2 className="font-display text-4xl text-[var(--color-primary)] sm:text-5xl">
          Find us with ease
        </h2>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {events.map((event) => (
          <div key={event.title} className="glass-panel rounded-[2rem] p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between gap-3 px-2 pt-2">
              <div>
                <h3 className="font-display text-3xl text-[var(--color-primary)]">
                  {event.title}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  {event.venue}
                </p>
              </div>

              <a
                href={getMapLink(event.mapQuery)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--color-primary)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-[var(--color-gold)] hover:text-[var(--color-text)]"
              >
                <ExternalLink size={14} />
                Open map
              </a>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-white/65">
              <iframe
                title={`${event.title} map`}
                src={getMapEmbed(event.mapQuery)}
                className="h-[320px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-4 flex items-center gap-2 px-2 text-sm font-medium text-[var(--color-primary)]">
              <Navigation size={16} />
              Open directions in Google Maps
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default MapSection;
