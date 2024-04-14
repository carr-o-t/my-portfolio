"use client";

import LandingPage from "@/components/LandingPage";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className={cn("bg-transparent")}>
      <LandingPage />
    </main>
  );
}
