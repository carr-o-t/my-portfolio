"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { FC, useEffect, useState } from "react";

interface CursorProps {}

const Cursor: FC<CursorProps> = ({}) => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { type: "spring", stiffness: 500, damping: 28 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [hoveredElement, setHoveredElement] = useState<string>("");

  useEffect(() => {
    const moveCursor = (e: any) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    const handleMouseEnter = (e: any) => {
      console.log("mouse enter");
      const target = e.target;
      if (target.tagName === "BUTTON" || target.tagName === "svg") {
        setHoveredElement("circle");
      } else if (target.tagName === "H1" || target.tagName === "H2") {
        setHoveredElement("text");
      } else {
        setHoveredElement("");
      }
    };

    const handleMouseLeave = () => {
      setHoveredElement("");
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useEffect(() => {
    console.log(hoveredElement);
  }, [hoveredElement]);
  return (
    <motion.div
      className="cursor"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        aspectRatio: "1/1",
        width: hoveredElement === "text" ? "96px" : "32px",
      }}
    />
  );
};

export default Cursor;
