import { useEffect, useRef } from "react";
import Hls from "hls.js";
import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export default function CTA() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const src = "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((err) => {
          console.log("Auto-play blocked or failed", err);
        });
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Fallback for Safari native HLS support
      video.src = src;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch((err) => {
          console.log("Auto-play blocked or failed", err);
        });
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [src]);

  return (
    <section className="relative w-full bg-background py-32 md:py-44 border-t border-border/30 overflow-hidden flex flex-col justify-center items-center px-8 md:px-28 text-center min-h-[500px]">
      {/* Background HLS Video */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/45 z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl flex flex-col items-center gap-6">
        {/* Concentric circles logo icon */}
        <motion.div
          className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-foreground/60 mb-2"
          {...fadeUp(0.1)}
        >
          <div className="w-5 h-5 rounded-full border border-foreground/60" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-6xl font-medium tracking-tight text-foreground"
          {...fadeUp(0.25)}
        >
          Start Your <span className="font-serif italic font-normal">Journey</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-muted-foreground text-base md:text-lg max-w-lg leading-relaxed"
          {...fadeUp(0.4)}
        >
          Join a collective of deep thinkers. Subscribe to our feed for curated insights, or start publishing your own today.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full justify-center"
          {...fadeUp(0.55)}
        >
          <motion.button
            className="bg-foreground text-background font-semibold rounded-lg px-8 py-3.5 text-sm w-full sm:w-auto hover:bg-foreground/90 transition-colors shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Subscribe Now
          </motion.button>
          
          <motion.button
            className="liquid-glass text-foreground font-semibold rounded-lg px-8 py-3.5 text-sm w-full sm:w-auto hover:bg-white/10 transition-colors shadow-lg border border-transparent"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Writing
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
