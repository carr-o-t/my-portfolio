"use client";

import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function TextSpinnerLoader() {
  const text = "JUST A MOMENT ...";
  const characters = text.split("");

  const radius = 80;
  const fontSize = "18px";
  const letterSpacing = 12.5;

  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateLoader = async () => {
      const letterAnimation: any = [];
      characters.forEach((_, i) => {
        letterAnimation.push([
          `.letter-${i}`,
          { opacity: 0 },
          { duration: 0.3, at: i === 0 ? "+0.8" : "-0.28" },
        ]);
      });
      characters.forEach((_, i) => {
        letterAnimation.push([
          `.letter-${i}`,
          { opacity: 1 },
          { duration: 0.3, at: i === 0 ? "+0.8" : "-0.28" },
        ]);
      });
      animate(letterAnimation, {
        ease: "linear",
        repeat: Infinity,
      });
      animate(
        scope.current,
        { rotate: 360 },
        { duration: 4, ease: "linear", repeat: Infinity }
      );
    };
    animateLoader();
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="min-h-screen w-full bg-primary flex justify-center items-center fixed inset-0 z-[9999] origin-right"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{
          duration: 0.5,
          delay: 0,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.div
          ref={scope}
          className="circle relative aspect-square"
          style={{ width: radius * 2 }}
        >
          <p aria-label={text} />
          <p aria-hidden="true" className="text">
            {characters.map((ch, i) => (
              <motion.span
                key={i}
                className={`letter letter-${i} absolute top-0 left-1/2 font-syne text-white`}
                style={{
                  transformOrigin: `0 ${radius}px`,
                  transform: `rotate(${i * letterSpacing}deg)`,
                  fontSize,
                }}
              >
                {ch}
              </motion.span>
            ))}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
