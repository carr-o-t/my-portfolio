import Link from "next/link";
import { FC } from "react";
import { Icons } from "./Icons";
import Logo3 from "/public/logo3.svg";
import Image from "next/image";

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
      <Image src={Logo3} height={54} width={54} alt="icon" />
      {/* <Icons.logo2 className="h-8 w-8 sm:h-6 sm:w-6" /> */}
      {/* <p className="hidden text-zinc-700 text-sm font-medium md:block">
            Corroddit
          </p> */}
    </Link>
  );
};

export default Logo;
