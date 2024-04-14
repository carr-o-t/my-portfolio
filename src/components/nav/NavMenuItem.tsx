import { motion } from "framer-motion";
import React, { useState } from "react";

import {
  arrowMotion,
  itemCoverMotion,
  dividerMotion,
  itemContentMotion,
} from "@/lib/animations";
import { Icons } from "../Icons";
import Link from "next/link";

interface NavMenuItem {
  index: number;
  title: string;
  linkTo: string;
  onClose: () => void;
}

const NavMenuItem: React.FC<NavMenuItem> = ({
  index,
  title,
  linkTo,
  onClose,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Link href={linkTo}>
      <motion.li
        className={`cursor-pointer py-8 relative w-full text-primary ${
          isLoading ? "pointer-events-none" : "pointer-events-auto"
        }`}
        initial="initial"
        animate="animate"
        whileHover="hover"
        onAnimationComplete={() => setIsLoading(false)}
        onClick={onClose}
      >
        <div className="flex items-center relative w-full">
          <motion.div
            className="absolute left-0 top-0 right-0 bottom-0 bg-[#eee9e4]"
            variants={itemCoverMotion}
          />
          <motion.span
            className="w-[4ch] text-2xl sm:text-3xl md:text-4xl"
            variants={itemContentMotion}
          >
            ({index.toLocaleString("en-US", { minimumIntegerDigits: 2 })})
          </motion.span>
          <h1 className="uppercase tracking-wide text-2xl sm:text-5xl md:text-6xl flex-1">
            {title}
          </h1>
          <motion.div variants={arrowMotion}>
            <Icons.arrow className="h-6 w-6" />
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-0 h-[2px] bg-black w-full origin-left"
          variants={dividerMotion}
        />
      </motion.li>
    </Link>
  );
};

export default NavMenuItem;
