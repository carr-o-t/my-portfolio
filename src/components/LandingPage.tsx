"use client";

import { textHighlight, textRevealMotion } from "@/lib/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";
import CursorBlinker from "./animations/CursorBlinker";
import RedoAnimText from "./animations/RedoAnimText";
import { Button } from "./ui/Button";
import { Icons } from "./Icons";

interface NewLandingProps {}

const NewLanding: FC<NewLandingProps> = ({}) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="container block min-h-[calc(100vh_-_92px)] flex-col items-center justify-center  "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 p-4 md:p-8 space-y-12 md:space-y-32">
        <div className="">
          <motion.h2
            variants={textRevealMotion(0.2, "bottomToTop")}
            className="w-full text-left text-5xl md:text-8xl text-white leading-[1.2] font-syne relative"
          >
            <RedoAnimText delay={1} />
            <CursorBlinker />
          </motion.h2>
          <motion.h2
            variants={textRevealMotion(0.2, "bottomToTop")}
            className="w-full text-left text-base md:text-2xl text-white leading-[1.2] font-montserrat font-thin mt-8"
          >
            Mastering the craft of front-end. Creating killer visuals.
          </motion.h2>
        </div>

        <div className="">
          <motion.p
            variants={textRevealMotion(0.2, "rightToLeft")}
            className="w-full text-left text-sm md:text-xl leading-[2] font-poppins font-extralight translate-y-full relative"
            style={{ lineHeight: 1.8 }}
          >
            Hi! I&apos;m Ash, a{" "}
            <span className=" mix-blend-difference  font-medium px-1 relative">
              <motion.span
                variants={textHighlight(0.5)}
                className="absolute left-0 top-0 w-full h-full bg-blue-800 z-[-1] origin-left "
              />
              front-end developer
            </span>{" "}
            based in India with over 2 years of experience . <br />
            I&apos;m passionate about building beautiful and functional web
            experiences using HTML, CSS, JavaScript,{" "}
            <span className=" mix-blend-difference  font-medium px-1 relative">
              <motion.span
                variants={textHighlight(1.1)}
                className="absolute left-0 top-0 w-full h-full bg-blue-800 z-[-1] origin-left "
              />
              React.js, Next.js
            </span>{" "}
            , Tailwind CSS, and testing frameworks like Playwright and Jest.
          </motion.p>
          <motion.div className="mt-6 md:mt-12 flex justify-between items-center">
            <Link href="/contact-me">
              <Button className="font-semibold">Get in touch</Button>
            </Link>
            <div className="icons flex items-center gap-6">
              <Link href="https://www.github.com/carr-o-t">
                <Icons.Github className="h-6 w-6 text-inherit" />
              </Link>
              <Link href="mailto:pandeystakshi@gmail.com">
                <Icons.Gmail className="h-6 w-6 text-inherit" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

       <motion.div className="mt-6 md:mt-12 flex justify-center items-center">
      <p className="rounded-full bg-gray-500/30 px-4 py-2 text-sm md:text-base text-white flex items-center gap-2 font-roboto font-light">
            ✨ New version available — <Link href="https://bytethecarrot.dev" className="underline underline-offset-4 " target="_blank">View Portfolio v2</Link>
      </p>
          </motion.div>
    </motion.div>
  );
};

export default NewLanding;
