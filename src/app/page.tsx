"use client";

import Image from "next/image";
import { LightSpeedState } from "@/lib/types/types";
import { signal } from "@preact/signals";
import SceneCanvas from "@/components/SceneCanvas";
import Page from "@/components/Page";

export default function Home() {
  const lightSpeed = signal(LightSpeedState.DEFAULT);

  return (
    <>
      <Image
        src="/images/logo-new.png"
        className="fixed left-2 top-2 z-10"
        alt="..."
        width={100}
        height={100}
      />

      <main className="fade-in flex min-h-screen flex-col items-center justify-center p-24">
        <Page lightSpeed={lightSpeed} />
      </main>

      <SceneCanvas lightSpeed={lightSpeed} />
    </>
  );
}
