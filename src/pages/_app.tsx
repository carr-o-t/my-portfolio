import { Icons } from "@/components/Icons";
import { NavMenu } from "@/components/nav/NavMenu";
import Navbar from "@/components/nav/Navbar";
import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps, router }: AppProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  // useEffect(() => {
  //   setMenuOpen(false);
  // }, [router.pathname]);
  return (
    <div className="main h-screen relative">
      <AnimatePresence>
        {menuOpen && <NavMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={router.route} initial="initial" animate="animate">
          <Component {...pageProps} />

          <motion.div
            className="slide-in fixed top-0 left-0 w-full h-screen bg-[#eee9e4] z-[1000] origin-right flex flex-col justify-center items-center"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full w-full flex flex-col justify-center items-center"
            >
              <Icons.logo className="h-12 w-12 sm:h-8 sm:w-8" fill="black" />
            </motion.div>
          </motion.div>

          <motion.div
            className="slide-out fixed top-0 left-0 w-full h-screen bg-[#eee9e4] z-[1000] origin-left"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          ></motion.div>
        </motion.div>
        <footer className="block md:fixed bottom-0 w-full right-0 bg-black">
          <p className="text-sm p-1 text-center md:text-start text-white/20">
            © 2024 Stakshi. All Rights Reserved
          </p>
        </footer>
      </AnimatePresence>
    </div>
  );
}
