import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  CalendarHeart,
  Camera,
  Clock3,
  Heart,
  Image as ImageIcon,
  MapPinned,
  Sparkles,
} from "lucide-react";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import EventDetails from "./components/EventDetails";
import MapSection from "./components/MapSection";
import InvitationModal from "./components/InvitationModal";
import RSVPButton from "./components/RSVPButton";
import PhotoShowcase from "./components/PhotoShowcase";
import GalleryLightbox from "./components/GalleryLightbox";
import FilmSection from "./components/FilmSection";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const storyMoments = [
  "A day stitched with love, laughter, and family blessings.",
  "From save-the-date memories to the sacred muhurtham, every moment is part of our forever.",
  "Join us as we celebrate a beginning wrapped in grace, music, and joy.",
];

const saveTheDatePhotos = [
  "/media/save-the-date/save-the-date-cover.jpg",
  "/media/couple/photo-4.jpg",
  "/media/couple/photo-5.jpg",
  "/media/couple/photo-10.jpg",
  "/media/couple/photo-11.jpg",
];

const galleryPhotos = [
  "/media/couple/hero.jpg",
  "/media/couple/photo-1.jpg",
  "/media/couple/photo-2.jpg",
  "/media/couple/photo-3.jpg",
  "/media/couple/photo-4.jpg",
  "/media/couple/photo-5.jpg",
  "/media/couple/photo-6.jpg",
  "/media/couple/photo-7.jpg",
  "/media/couple/photo-8.jpg",
  "/media/couple/photo-9.jpg",
  "/media/couple/photo-10.jpg",
  "/media/couple/photo-12.jpg",
  "/media/couple/photo-13.jpg",
  "/media/couple/photo-14.jpeg",
  "/media/couple/photo-15.jpeg",
  "/media/couple/photo-16.jpeg",
];

const eventDetails = [
  {
    title: "Reception",
    venue: "Evento Convention Centre, Athani, Vaniyambalam",
    time: "5:00 PM - 8:30 PM",
    date: "Saturday, April 26, 2026",
    mapQuery: "Evento Convention Centre Athani Vaniyambalam",
  },
  {
    title: "Wedding (Thalikettu)",
    venue: "Green Park Auditorium, Parakkat, Mongam",
    time: "Muhurtham: 10:00 AM - 11:00 AM",
    date: "Sunday, April 26, 2026",
    mapQuery: "Green Park Auditorium Parakkat Mongam",
  },
];

function App() {
  const [invitationOpen, setInvitationOpen] = useState(false);
  const [lightboxState, setLightboxState] = useState({
    items: [],
    index: null,
  });

  const invitationImage = "/media/couple/photo-16.jpeg";

  const galleryItems = useMemo(
    () =>
      galleryPhotos.map((src, index) => ({
        src,
        alt: `Rohith and Shibitha moment ${index + 1}`,
      })),
    [],
  );

  const saveTheDateItems = useMemo(
    () =>
      saveTheDatePhotos.map((src, index) => ({
        src,
        alt: `Save the date moment ${index + 1}`,
      })),
    [],
  );

  const openLightbox = (items, index) => {
    setLightboxState({ items, index });
  };

  return (
    <div className="relative overflow-hidden bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(200,169,106,0.18),_transparent_35%),radial-gradient(circle_at_20%_30%,_rgba(47,93,80,0.12),_transparent_30%),linear-gradient(180deg,_rgba(255,255,255,0.55),_transparent_32%)]" />

      <motion.div
        className="relative"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Hero onOpenInvitation={() => setInvitationOpen(true)} />

        <motion.section
          variants={fadeUp}
          className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:px-6 lg:px-8"
        >
          <div className="glass-panel flex flex-col gap-4 rounded-[2rem] px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div>
              <p className="section-kicker">Celebrate With Us</p>
              <h2 className="font-display text-3xl text-[var(--color-primary)] sm:text-4xl">
                A story written in love and blessed for forever.
              </h2>
            </div>
          </div>
        </motion.section>

        <Countdown targetDate="2026-04-26T10:00:00+05:30" />

        <motion.section
          variants={fadeUp}
          className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:px-6 md:grid-cols-3 lg:px-8"
        >
          {storyMoments.map((moment, index) => {
            const icons = [Sparkles, Heart, CalendarHeart];
            const Icon = icons[index];

            return (
              <div
                key={moment}
                className="glass-panel rounded-[2rem] px-6 py-6"
              >
                <div className="mb-4 inline-flex rounded-full bg-[var(--color-soft)] p-3 text-[var(--color-primary)]">
                  <Icon size={18} />
                </div>
                <p className="text-base leading-7 text-[var(--color-muted)]">
                  {moment}
                </p>
              </div>
            );
          })}
        </motion.section>

        <PhotoShowcase
          id="save-the-date"
          title="Save the Date"
          subtitle="April 26, 2026"
          description="A gentle collection of the moments that announced our beginning."
          icon={Camera}
          photos={saveTheDatePhotos}
          onPhotoClick={(index) => openLightbox(saveTheDateItems, index)}
          layout="scroll"
        />

        <EventDetails events={eventDetails} />
        <MapSection events={eventDetails} />

        <motion.section
          variants={fadeUp}
          className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="glass-panel rounded-[2.25rem] p-5 sm:p-7">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-full bg-[var(--color-soft)] p-3 text-[var(--color-primary)]">
                  <ImageIcon size={18} />
                </div>
                <div>
                  <p className="section-kicker">Invitation</p>
                  <h2 className="font-display text-3xl text-[var(--color-primary)]">
                    A keepsake to open and treasure
                  </h2>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setInvitationOpen(true)}
                className="group relative w-full overflow-hidden rounded-[1.75rem]"
              >
                <img
                  src={invitationImage}
                  alt="Wedding invitation for Rohith and Shibitha"
                  className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-[1.03] sm:h-[640px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                <div className="absolute bottom-5 left-5 rounded-full bg-white/85 px-4 py-2 text-sm font-semibold text-[var(--color-primary)] shadow-lg backdrop-blur">
                  Tap to view full invitation
                </div>
              </button>
            </div>

            <div className="flex flex-col gap-6">
              <FilmSection
                videos={[
                  "/media/video/couple-film.mp4",
                  "/media/video/couple-film-1.mp4",
                ]}
              />

              <div className="glass-panel rounded-[2rem] p-6">
                <p className="section-kicker">Open Invite</p>
                <h3 className="font-display text-3xl text-[var(--color-primary)]">
                  Be part of our day
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-[var(--color-muted)]">
                  Your presence will mean the world to us as we celebrate
                  love, family, and the beginning of our forever.
                </p>

                <div className="mt-6 grid gap-3">
                  <a
                    href="#event-details"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(47,93,80,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(47,93,80,0.28)]"
                  >
                    <Clock3 size={16} />
                    View ceremony details
                  </a>
                  <a
                    href="#location"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/20 bg-white/70 px-5 py-3 text-sm font-semibold text-[var(--color-primary)] transition duration-300 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
                  >
                    <MapPinned size={16} />
                    Open location section
                  </a>
                </div>
              </div>

              <RSVPButton number="919946180123" />
            </div>
          </div>
        </motion.section>

        <PhotoShowcase
          id="gallery"
          title="Couple Gallery"
          subtitle="Together Forever"
          description="A romantic gallery of frames that feel like pages from our love story."
          icon={Heart}
          photos={galleryItems.map((item) => item.src)}
          onPhotoClick={(index) => openLightbox(galleryItems, index)}
          layout="grid"
        />

        <motion.footer
          variants={fadeUp}
          className="mx-auto max-w-6xl px-4 pb-16 pt-8 text-center sm:px-6 lg:px-8"
        >
          <div className="glass-panel rounded-[2.25rem] px-6 py-10">
            <p className="section-kicker">With Love</p>
            <h2 className="font-display text-4xl text-[var(--color-primary)] sm:text-5xl">
              Rohith &amp; Shibitha
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              We can&apos;t wait to celebrate this beautiful new chapter with
              you on Sunday, April 26, 2026.
            </p>
          </div>
        </motion.footer>
      </motion.div>

      <AnimatePresence>
        {invitationOpen ? (
          <InvitationModal
            title="Wedding Invitation"
            image={invitationImage}
            onClose={() => setInvitationOpen(false)}
          />
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {lightboxState.index !== null ? (
          <GalleryLightbox
            items={lightboxState.items}
            index={lightboxState.index}
            onClose={() => setLightboxState({ items: [], index: null })}
            onNavigate={(index) =>
              setLightboxState((current) => ({ ...current, index }))
            }
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default App;
