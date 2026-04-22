import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

function FilmSection({ src }) {
  return (
    <motion.div
      variants={reveal}
      className="glass-panel rounded-[2rem] p-5 sm:p-6"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-full bg-[var(--color-soft)] p-3 text-[var(--color-primary)]">
          <PlayCircle size={18} />
        </div>
        <div>
          <p className="section-kicker">Keepsake Film</p>
          <h3 className="font-display text-3xl text-[var(--color-primary)]">
            A moving memory
          </h3>
        </div>
      </div>

      <div className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-[#0f1714]">
        <video
          className="aspect-[9/16] w-full bg-black object-cover"
          src={src}
          controls
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
    </motion.div>
  );
}

export default FilmSection;
