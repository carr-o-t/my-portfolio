import Link from "next/link";
import { FC } from "react";
import { Icons } from "./Icons";

interface LogoProps {
  setMenuOpen: (_: boolean) => void;
}

const Logo: FC<LogoProps> = ({ setMenuOpen }) => {
  return (
    <Link
      href="/"
      className="flex gap-2 items-center"
      onClick={() => setMenuOpen(false)}
    >
      <Icons.logo className="h-8 w-8 sm:h-6 sm:w-6" />
      {/* <p className="hidden text-zinc-700 text-sm font-medium md:block">
            Corroddit
          </p> */}
    </Link>
  );
};

export default Logo;
