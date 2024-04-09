import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    display: "flex",
    transition: { staggerChildren: 0.07, delayChildren: 0.7 },
  },
  closed: {
    display: "none",
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren",
      transitionEnd: {
        display: "none",
      },
    },
  },
};

export const Navigation = ({ toggle }: { toggle: () => void }) => (
  <motion.ul
    variants={variants}
    className="w-full flex flex-col items-center justify-end h-full fixed p-7"
  >
    {itemIds.map((i) => (
      <MenuItem i={i} key={i} onClick={toggle} />
    ))}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
