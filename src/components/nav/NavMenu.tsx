import { motion } from "framer-motion";
import React from "react";

import { easings } from "@/lib/animations";
import NavMenuItem from "./NavMenuItem";

export const NavMenu = ({ onClose }: { onClose: () => void }) => {
  const navItems = [
    {
      title: "About me",
      linkTo: "/",
    },
    {
      title: "Projects",
      linkTo: "/projects",
    },
    {
      title: "Get in Touch",
      linkTo: "/contact-me",
    },
  ];

  return (
    <motion.nav
      className="fixed h-screen w-screen bg-[#eee9e4] flex flex-col justify-end p-8 z-50"
      initial={{ y: "-100%" }}
      animate={{
        y: 0,
        transition: { duration: 1, ease: easings.easeOutQuart },
      }}
      exit={{ y: "-100%", transition: { duration: 0.3 } }}
    >
      <motion.ul
        exit={{ opacity: 0, transition: { duration: 0 } }}
        className="pt-28 md:pt-40"
      >
        {navItems.map((item, idx) => (
          <NavMenuItem
            key={idx}
            index={idx + 1}
            title={item.title}
            linkTo={item.linkTo}
            onClose={onClose}
          />
        ))}
      </motion.ul>
    </motion.nav>
  );
};
