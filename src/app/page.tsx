"use client";

import MainTitle from "@/components/MainTitle";
import Projects from "@/components/Projects";
import SceneCanvas from "@/components/SceneCanvas";
import { LIGHT_SPEED_TIMEOUT } from "@/lib/scene/constants";
import { ObjectState } from "@/lib/state";
import { LightSpeedState, LightSpeedStateObject } from "@/lib/types";
import Image from "next/image";

export default function Home() {
  const showProjects = new ObjectState(false);
  const lightSpeedState = new ObjectState<LightSpeedStateObject>({
    lightSpeed: LightSpeedState.DEFAULT,
  });

  return (
    <>
      <Image
        src="/images/logo.png"
        className="fixed left-2 top-2"
        alt="..."
        width={100}
        height={100}
      />

      <main className="fade-in flex min-h-screen flex-col items-center justify-center p-24">
        {showProjects.value ? (
          <Projects />
        ) : (
          <MainTitle
            lightSpeedState={lightSpeedState}
            showProjects={showProjects}
          />
        )}
      </main>

      <SceneCanvas state={lightSpeedState.value} />
    </>
  );
}
