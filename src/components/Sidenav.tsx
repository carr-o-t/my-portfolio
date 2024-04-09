import Image from "next/image";
import { FC } from "react";
import { Icons } from "./Icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/Button";

interface SideNavProps {}

const SideNav: FC<SideNavProps> = ({}) => {
  return (
    <div className="w-[5%] h-screen flex flex-col justify-between items-center pt-[5%] pb-8 fixed left-0 top-0 ">
      <div className="flex flex-col">
        <Link href="/projects" legacyBehavior>
          <a
            className={cn(
              buttonVariants({ variant: "icon" }),
              "relative h-5 w-5 mb-10 pl-5 pr-4"
            )}
          >
            <Image src={Icons.Gmail} layout="fill" alt="gmail" />
          </a>
        </Link>
        <Link href="/" legacyBehavior>
          <a
            className={cn(
              buttonVariants({ variant: "icon" }),
              "relative h-5 w-5 mb-10 pl-5 pr-4"
            )}
          >
            <Image src={Icons.Github} layout="fill" alt="gmail" />
          </a>
        </Link>
      </div>
      <div className=" w-[1px] h-[100px] bg-foreground mt-3 mb-20"></div>
      <div className=" text-[12px] -rotate-90 mb-10 pl-5 pr-4">©/2024</div>
    </div>
  );
};

export default SideNav;
