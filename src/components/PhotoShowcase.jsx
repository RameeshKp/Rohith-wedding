import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

function PhotoShowcase({
  id,
  title,
  subtitle,
  description,
  icon: Icon,
  photos,
  onPhotoClick,
  layout,
}) {
  return (
    <motion.section
      id={id}
      variants={reveal}
      className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-4 inline-flex rounded-full bg-[var(--color-soft)] p-3 text-[var(--color-primary)]">
            <Icon size={18} />
          </div>
          <p className="section-kicker">{subtitle}</p>
          <h2 className="font-display text-4xl text-[var(--color-primary)] sm:text-5xl">
            {title}
          </h2>
        </div>
        <p className="max-w-xl text-[15px] leading-7 text-[var(--color-muted)] sm:text-right sm:text-base">
          {description}
        </p>
      </div>

      {layout === "scroll" ? (
        <div className="-mx-4 overflow-x-auto px-4 pb-3 [scrollbar-width:none] sm:mx-0 sm:px-0">
          <div className="flex w-max gap-4 sm:grid sm:w-auto sm:grid-cols-2 lg:grid-cols-5">
            {photos.map((photo, index) => (
              <motion.button
                type="button"
                key={photo}
                onClick={() => onPhotoClick(index)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ scale: 1.03 }}
                className="group relative h-[20rem] w-[15rem] shrink-0 overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/70 shadow-[0_14px_32px_rgba(28,28,28,0.08)] sm:h-[22rem] sm:w-auto"
              >
                <img
                  src={photo}
                  alt={`${title} ${index + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-80" />
              </motion.button>
            ))}
          </div>
        </div>
      ) : (
        <div className="columns-1 gap-4 sm:columns-2">
          {photos.map((photo, index) => (
            <motion.button
              type="button"
              key={photo}
              onClick={() => onPhotoClick(index)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.55,
                delay: index * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.01 }}
              className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/75 p-2 shadow-[0_14px_32px_rgba(28,28,28,0.08)]"
            >
              <img
                src={photo}
                alt={`${title} ${index + 1}`}
                loading="lazy"
                className="w-full rounded-[1.15rem] object-cover transition duration-700 group-hover:scale-[1.03]"
              />
            </motion.button>
          ))}
        </div>
      )}
    </motion.section>
  );
}

export default PhotoShowcase;
