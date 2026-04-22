import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef } from "react";

function GalleryLightbox({ items, index, onClose, onNavigate }) {
  const touchStart = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        onNavigate((index + 1) % items.length);
      }

      if (event.key === "ArrowLeft") {
        onNavigate((index - 1 + items.length) % items.length);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [index, items.length, onClose, onNavigate]);

  const handleTouchStart = (event) => {
    touchStart.current = event.changedTouches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStart.current === null) {
      return;
    }

    const difference = touchStart.current - event.changedTouches[0].clientX;

    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        onNavigate((index + 1) % items.length);
      } else {
        onNavigate((index - 1 + items.length) % items.length);
      }
    }

    touchStart.current = null;
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4 py-6 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
      >
        <X size={20} />
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onNavigate((index - 1 + items.length) % items.length);
        }}
        className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 sm:block"
      >
        <ChevronLeft size={22} />
      </button>

      <div
        className="relative flex h-full w-full max-w-5xl items-center justify-center"
        onClick={(event) => event.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={items[index].src}
            src={items[index].src}
            alt={items[index].alt}
            className="max-h-full w-auto max-w-full rounded-[1.75rem] object-contain shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          />
        </AnimatePresence>
      </div>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onNavigate((index + 1) % items.length);
        }}
        className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 sm:block"
      >
        <ChevronRight size={22} />
      </button>
    </motion.div>
  );
}

export default GalleryLightbox;
