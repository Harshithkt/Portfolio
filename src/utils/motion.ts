// Shared fade-up-on-scroll props: <motion.div {...reveal(0.1)} />
export const reveal = (delay = 0) =>
  ({
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }) as const;
