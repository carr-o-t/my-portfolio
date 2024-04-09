import { FC, ReactElement } from "react";
import { MotionProps, motion } from "framer-motion";
import { opacity, perspective, slide } from "@/lib/animations";

interface EntryAndExitProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactElement;
}

const anim = (variants: any) => {
  return {
    initial: "initial",

    animate: "enter",

    exit: "exit",

    variants,
  };
};

const EntryAndExit: FC<EntryAndExitProps> = ({ children }) => {
  return (
    <div className="inner">
      {/* <motion.div className="slide" {...anim(slide)} /> */}

      {/* <motion.div
        className="slide-in fixed top-0 left-0 w-full h-screen bg-red origin-bottom"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      ></motion.div>

      <motion.div
        className="slide-out fixed top-0 left-0 w-full h-screen bg-red origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      ></motion.div> */}

      {/* <motion.div className="page" {...anim(perspective)}> */}
      <motion.div {...anim(opacity)}>{children}</motion.div>
      {/* </motion.div> */}
    </div>
  );
};

export default EntryAndExit;
