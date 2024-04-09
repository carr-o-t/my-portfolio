"use client";

import LandingPage from "@/components/LandingPage";
import { NavMenu } from "@/components/nav/NavMenu";
import Navbar from "@/components/nav/Navbar";
import { cn } from "@/lib/utils";
import { Roboto } from "next/font/google";
import { useState } from "react";

const roboto = Roboto({ weight: "300", subsets: ["latin"] });

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main
      className={cn(
        roboto.className,
        "bg-background text-secondary-foreground"
      )}
    >
      {/* {menuOpen && <NavMenu />}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
      {/* <Navbar /> */}
      <LandingPage />
      {/* <div
        style={{
          background:
            "radial-gradient(hsl(351.29deg 63.27% 80.78%) -19%, white 74%)",
        }}
        className="fixed bottom-[-40%] left-[-16%] w-[50%] aspect-square z-[-1] rounded-full"
      ></div> */}
    </main>
  );
}
