"use client";

import { FC } from "react";
import { Button } from "./ui/Button";
import EntryAndExit from "./EntryAndExit";
import { motion } from "framer-motion";
import { textRevealMotion } from "@/lib/animations";

interface LandingPageProps {}

const LandingPage: FC<LandingPageProps> = ({}) => {
  return (
    // <EntryAndExit>
    <motion.div
      initial="initial"
      animate="animate"
      className="container flex min-h-[calc(100vh_-_92px)] flex-col items-center justify-center "
    >
      <motion.h1
        variants={textRevealMotion(0.2, "bottomToTop")}
        className="w-full uppercase text-center text-5xl md:text-7xl text-secondary-foreground leading-[1.2]"
      >
        Hey I am{" "}
        <span
          style={{ WebkitTextStroke: "0px" }}
          className="text-primary font-italiana"
        >
          STAKSHI
        </span>
        <br />
        but you can call me{" "}
        <span
          style={{ WebkitTextStroke: "0px" }}
          className="text-primary font-italiana"
        >
          ASH
        </span>
        .
      </motion.h1>
      <motion.p
        variants={textRevealMotion(0.4, "bottomToTop")}
        className="text-xl text-center pt-6"
      >
        a passionate Front-end Developer based in India, fueled by carrots and
        code.
        <br />
        Brewing a Full-stack potion
        <br />
        Got a project in mind? Let&apos;s chat!
      </motion.p>
      <motion.div
        variants={textRevealMotion(0.6, "bottomToTop")}
        className="w-full flex justify-center mt-8"
      >
        <Button className="font-semibold tracking-wider font-roboto">
          Get in Touch
        </Button>
      </motion.div>
    </motion.div>
    // </EntryAndExit>
  );
};

export default LandingPage;
