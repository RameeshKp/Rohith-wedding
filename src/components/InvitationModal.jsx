import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

function InvitationModal({ image, title, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] bg-white/10 p-3 shadow-2xl"
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 inline-flex rounded-full bg-black/45 p-2 text-white transition hover:bg-black/65"
        >
          <X size={18} />
        </button>

        <img
          src={image}
          alt={title}
          className="max-h-[86vh] w-full rounded-[1.5rem] object-contain"
        />
      </motion.div>
    </motion.div>
  );
}

export default InvitationModal;
