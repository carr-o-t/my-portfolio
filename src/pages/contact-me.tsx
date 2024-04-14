import { FC } from "react";
import { motion } from "framer-motion";
import { textRevealMotion } from "@/lib/animations";
import { cn } from "@/lib/utils";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { Icons } from "@/components/Icons";

interface ContactMePageProps {}

const ContactMePage: FC<ContactMePageProps> = ({}) => {
  return (
    <main className={cn("bg-transparent text-secondary-foreground")}>
      <motion.div
        initial="initial"
        animate="animate"
        className="container block min-h-[calc(100vh_-_92px)] flex-col items-center justify-center  "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 p-4 md:p-8 space-y-12 md:space-y-0 md:space-x-20">
          <div className="">
            <motion.h2
              variants={textRevealMotion(0.2, "bottomToTop")}
              className="w-full text-left text-5xl md:text-8xl text-white leading-[1.2] font-syne relative"
            >
              Get in touch.
            </motion.h2>
            <motion.p
              variants={textRevealMotion(0.2, "bottomToTop")}
              className="w-full text-left text-xl md:text-2xl text-white leading-[1.2] font-montserrat font-thin mt-8"
            >
              Interested in working together? I&apos;d love to hear from you.
            </motion.p>
            <motion.div
              variants={textRevealMotion(0.4, "leftToRight")}
              className="icons flex items-center gap-6 mt-6"
            >
              <Link href="">
                <Icons.Github className="h-5 w-5 text-inherit" />
              </Link>
              <Link href="">
                <Icons.Gmail className="h-5 w-5 text-inherit" />
              </Link>
            </motion.div>
          </div>

          <div className="">
            <motion.div
              variants={textRevealMotion(0.2, "bottomToTop")}
              className="w-full text-left text-xl md:text-xl mix-blend-difference leading-[2] font-poppins font-extralight translate-y-full relative"
              style={{ lineHeight: 1.8 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default ContactMePage;
