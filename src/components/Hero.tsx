import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export default function Hero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed: ${email}`);
    setEmail("");
  };

  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center px-8 md:px-28 text-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4"
          type="video/mp4"
        />
      </video>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

      {/* Overlay to ensure legibility */}
      <div className="absolute inset-0 bg-black/45 z-0" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl flex flex-col items-center gap-6 pt-28 md:pt-32">
        {/* Avatars & SubCount */}
        <motion.div
          className="flex items-center gap-3"
          {...fadeUp(0.1)}
        >
          <div className="flex -space-x-2">
            <img
              src="/avatar-1.png"
              alt="Subscriber 1"
              className="w-8 h-8 rounded-full border-2 border-background object-cover"
            />
            <img
              src="/avatar-2.png"
              alt="Subscriber 2"
              className="w-8 h-8 rounded-full border-2 border-background object-cover"
            />
            <img
              src="/avatar-3.png"
              alt="Subscriber 3"
              className="w-8 h-8 rounded-full border-2 border-background object-cover"
            />
          </div>
          <span className="text-muted-foreground text-sm font-medium tracking-tight">
            7,000+ people already subscribed
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] leading-[1.05] text-foreground"
          {...fadeUp(0.25)}
        >
          Get <span className="font-serif italic font-normal">Inspired</span> with Us
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg max-w-2xl leading-relaxed text-hero-subtitle font-normal"
          {...fadeUp(0.4)}
        >
          Join our feed for meaningful updates, news around technology and a
          shared journey toward depth and direction.
        </motion.p>

        {/* Email form */}
        <motion.form
          onSubmit={handleSubmit}
          className="liquid-glass flex items-center p-1.5 rounded-full w-full max-w-lg mt-4"
          {...fadeUp(0.55)}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address..."
            required
            className="flex-1 bg-transparent border-none text-foreground placeholder:text-muted-foreground/70 px-4 py-2 text-sm focus:outline-none focus:ring-0 min-w-0"
          />
          <motion.button
            type="submit"
            className="bg-foreground text-background rounded-full px-8 py-3 text-xs font-semibold tracking-wider hover:bg-foreground/90 transition-colors shrink-0"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            SUBSCRIBE
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
