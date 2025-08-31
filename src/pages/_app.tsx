import TextSpinnerLoader from "@/components/TextSpinnerLoader";
import { NavMenu } from "@/components/nav/NavMenu";
import Navbar from "@/components/nav/Navbar";
import { Toaster } from "@/components/ui/Sonner";
import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function App({ Component, pageProps, router }: AppProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mount, setMount] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMount(true);
    }, 2000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="main min-h-screen relative">
      <Head>
        <title>Portfolio - Software Engineer</title>
        <meta name="description"
          content="Software Engineer specializing in TypeScript, React, and Node.js. Building modern web applications with a focus on user experience and clean code." />
        <meta name="keywords" content="software engineer, full-stack developer, react, typescript, nodejs, web development" />
        <meta name="author" content="ByteTheCarrot" />
        <meta name="theme-color" content="#84CC16" />
      </Head>
      {!mount && <TextSpinnerLoader />}
      {mount && (
        <>
          <AnimatePresence>
            {menuOpen && <NavMenu onClose={() => setMenuOpen(false)} />}
          </AnimatePresence>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </>
      )}
      <AnimatePresence mode="wait" initial={false}>
        {mount && (
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
                <Image
                  src={"/logo.svg"}
                  height={64}
                  width={64}
                  alt="icon"
                  className=" invert-0"
                />
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
        )}
        <footer className="block md:fixed bottom-0 w-full right-0 bg-black">
          <p className="text-sm p-1 text-center md:text-start text-white/50">
            © 2024 Ash. All Rights Reserved
          </p>
        </footer>
      </AnimatePresence>
      <Toaster />
    </div>
  );
}
