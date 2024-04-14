import React from "react";
// import Logo from "../../public/logo.svg";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Logo from "../Logo";
import NavMenuToggle from "./NavMenuToggle";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: (_: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-2 bg-black items-center p-8 sticky top-0 mix-blend-difference  z-[100]"
        // menuOpen ? "mix-blend-difference" : ""
      )}
    >
      <Logo setMenuOpen={setMenuOpen} />

      <div className="flex gap-x-12 justify-end items-center">
        <Link
          href="/projects"
          className="hidden md:block justify-self-end text-base font-light underline underline-offset-4"
        >
          Projects
        </Link>
        <Link
          href="/contact-me"
          className="hidden md:block justify-self-end text-base font-light underline underline-offset-4"
        >
          Get in touch
        </Link>
        <NavMenuToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </div>
  );
};

export default Navbar;
