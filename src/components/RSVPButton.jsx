import { motion } from "framer-motion";
import { MessageCircleHeart } from "lucide-react";

function RSVPButton() {
  const whatsappLink =
    "https://wa.me/?text=We%20would%20love%20to%20join%20the%20wedding%20celebration%20of%20Rohith%20and%20Shibitha";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="glass-panel rounded-[2rem] p-6"
    >
      <p className="section-kicker">RSVP</p>
      <h3 className="font-display text-3xl text-[var(--color-primary)]">
        Send your wishes
      </h3>
      <p className="mt-3 text-[15px] leading-7 text-[var(--color-muted)]">
        Tap below to open WhatsApp and share your love, blessings, and
        attendance.
      </p>

      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.03, boxShadow: "0 18px 36px rgba(47, 93, 80, 0.24)" }}
        whileTap={{ scale: 0.98 }}
        className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(37,211,102,0.3)] transition"
      >
        <MessageCircleHeart size={18} />
        RSVP on WhatsApp
      </motion.a>
    </motion.div>
  );
}

export default RSVPButton;
