import { motion } from "framer-motion";
import { CalendarDays, ChevronDown, Heart, Sparkles } from "lucide-react";

const item = {
  hidden: { opacity: 0, y: 34 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

const namesAnimation = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
};

function Hero({ onOpenInvitation }) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/media/couple/hero.jpg"
          alt="Rohith and Shibitha"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,15,13,0.18),rgba(14,18,16,0.62))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,rgba(0,0,0,0.12)_45%,rgba(0,0,0,0.28)_100%)]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-between px-4 pb-10 pt-8 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.14, delayChildren: 0.18 } },
          }}
          className="flex flex-1 flex-col items-center justify-center text-center text-white"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] backdrop-blur-md"
          >
            <Sparkles size={14} />
            Wedding Invitation
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 text-sm uppercase tracking-[0.4em] text-white/75"
          >
            Sunday, April 26, 2026
          </motion.p>

          <motion.div variants={namesAnimation} className="mt-5">
            <h1 className="font-display text-5xl leading-none sm:text-7xl lg:text-[7rem]">
              Rohith
              <span className="mx-2 inline-flex translate-y-[-0.1em] text-[var(--color-gold)]">
                <Heart
                  className="fill-current"
                  size={42}
                  strokeWidth={1.75}
                />
              </span>
              Shibitha
            </h1>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg"
          >
            Two hearts, one sacred promise, and a celebration we would love to
            share with you.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <button
              type="button"
              onClick={onOpenInvitation}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-gold)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] shadow-[0_14px_34px_rgba(200,169,106,0.35)] transition duration-300 hover:scale-[1.03] hover:shadow-[0_18px_40px_rgba(200,169,106,0.42)]"
            >
              <CalendarDays size={16} />
              View invitation
            </button>

            <a
              href="#countdown"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:scale-[1.03] hover:border-white/50 hover:bg-white/15"
            >
              <ChevronDown size={16} />
              Scroll to details
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mx-auto w-full max-w-3xl"
        >
          <div className="glass-panel-dark rounded-[1.75rem] px-5 py-4 text-left text-white sm:flex sm:items-center sm:justify-between sm:px-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/65">
                Reception &amp; Wedding
              </p>
              <p className="mt-2 text-sm leading-7 text-white/85 sm:text-base">
                Reception at Evento Convention Centre, Athani, Vaniyambalam and
                wedding at Green Park Auditorium, Parakkat, Mongam.
              </p>
            </div>
            <div className="mt-3 text-sm font-semibold text-[var(--color-gold)] sm:mt-0">
              April 25-26, 2026
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
