import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -200 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const items = [
  {
    item: "Home",
    linkTo: "/",
  },
  {
    item: "About me",
    linkTo: "/about-me",
  },
  {
    item: "Skills",
    linkTo: "/skills",
  },
  {
    item: "Projects",
    linkTo: "/projects",
  },
  {
    item: "Get in touch",
    linkTo: "/contact",
  },
];

export const MenuItem = ({
  i,
  onClick,
}: {
  i: number;
  onClick: () => void;
}) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.01, fontStyle: "italic" }}
      whileTap={{ scale: 0.95 }}
      className="w-full border-b border-b-foreground cursor-pointer pt-6 pb-4"
      onClick={onClick}
    >
      <Link href={items[i].linkTo} className="font-normal text-5xl">
        {items[i].item}
      </Link>
    </motion.li>
  );
};
