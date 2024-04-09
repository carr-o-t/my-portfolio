import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

import { revealOnScroll, textRevealMotion } from "@/lib/animations";
import { FC, useEffect, useRef } from "react";
import { Icons } from "./Icons";
import { Badge } from "./ui/Badge";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInview) {
      controls.start("visible");
    }
    // eslint-disable-next-line
  }, [isInview]);
  return (
    // <EntryAndExit>
    <motion.div
      initial="initial"
      animate="animate"
      className="container justify-center px-4 md:px-24 pt-4 pb-16"
    >
      <motion.h1
        variants={textRevealMotion(0, "bottomToTop")}
        className="w-full text-center font-italiana  text-5xl md:text-7xl text-white leading-[1.2]"
      >
        PROJECTS
      </motion.h1>
      <motion.div className="flex flex-col gap-y-16 md:gap-y-28 justify-start px-8 pt-20 md:pt-28">
        <motion.div
          ref={ref}
          initial="offscreen"
          whileInView="onscreen"
          animate={controls}
          viewport={{ once: true, amount: 0.8 }}
          variants={revealOnScroll(0.4, "leftToRight")}
          className="flex items-start md:items-center gap-6 flex-col md:flex-row group cursor-pointer transition-all ease-linear duration-100"
        >
          <motion.div
            // variants={textRevealMotion(0.4, "leftToRight")}
            className="shrink-0 relative aspect-video max-w-[400px] w-full"
          >
            <Image
              src="/projects/ig-festa.png"
              // height={500}
              // width={500}
              alt="ig-festa"
              className="shrink-0 group-hover:scale-105 transition-all ease-linear duration-100"
              // layout="cover"
              // objectFit="cover"
              fill
            />
          </motion.div>
          <motion.div
            // variants={textRevealMotion(0.4, "rightToLeft")}
            className="grow  md:text-right w-full"
          >
            <h2 className="text-xl md:text-3xl lg:text-4xl text-secondary-foreground font-thin group-hover:italic">
              Instagram Festa
            </h2>
            <div className="flex gap-4 items-center justify-start md:justify-end mt-2">
              <Badge>React.js</Badge>
              <Badge>TailwindCSS</Badge>
              <Badge>Firebase</Badge>
            </div>
            <div className="mt-6  flex justify-start md:justify-end">
              <p className="max-w-[64ch] break-all text-start md:text-right">
                A Full-stack Instagram Clone using TypeScript, TailwindCSS and
                Firebase A Full-stack Instagram Clone using TypeScript,
                TailwindCSS and Firebase
              </p>
            </div>
            <div className="mt-6  flex gap-x-4 justify-start md:justify-end">
              <Icons.link className="h-6 w-6 text-white" />
              <Icons.Github className="h-6 w-6 text-white" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          ref={ref}
          initial="offscreen"
          whileInView="onscreen"
          animate={controls}
          viewport={{ once: true, amount: 0.8 }}
          variants={revealOnScroll(0, "rightToLeft")}
          className="flex items-start md:items-center gap-6 flex-col md:flex-row"
        >
          <motion.div
            // variants={textRevealMotion(0.8, "leftToRight")}
            className="grow order-last md:order-first w-full"
          >
            <h2 className="grow text-xl md:text-3xl lg:text-4xl font-thin text-secondary-foreground ">
              Carrotier E-Commerce
            </h2>
            <div className="flex gap-4 items-center justify-start mt-2">
              <Badge>Next.js</Badge>
              <Badge>TailwindCSS</Badge>
            </div>
            <p className="mt-6 max-w-[64ch] break-all">
              A Full-stack Instagram Clone using TypeScript, TailwindCSS and
              Firebase A Full-stack Instagram Clone using TypeScript,
              TailwindCSS and Firebase
            </p>
            <div className="mt-6  flex gap-x-4 ">
              <Icons.link className="h-6 w-6 text-white" />
              <Icons.Github className="h-6 w-6 text-white" />
            </div>
          </motion.div>
          <motion.div
            // variants={textRevealMotion(0.8, "rightToLeft")}
            className="shrink-0 relative aspect-video max-w-[400px] w-full"
          >
            <Image
              src="/projects/carrotier.png"
              // height={500}
              // width={500}
              alt="ig-festa"
              className="shrink-0 group-hover:scale-105 transition-all ease-linear duration-100"
              // layout="cover"
              // objectFit="cover"
              fill
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
    // </EntryAndExit>
  );
};

export default Projects;
