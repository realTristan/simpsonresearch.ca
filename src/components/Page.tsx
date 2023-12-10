"use client";

import MainHeader from "@/components/MainHeader";
import Projects from "@/components/Projects";
import { LightSpeedState } from "@/lib/types/types";
import { LIGHT_SPEED_TIMEOUT } from "@/lib/scene/constants";
import { Signal } from "@preact/signals";
import { useState } from "react";

/**
 * Page Component
 */
interface PageProps {
  lightSpeed: Signal<LightSpeedState>;
}
export default function Page(props: PageProps) {
  // Store whether or not to show the projects
  const [showProjects, setShowProjects] = useState<boolean>(false);

  /**
   * Light speed on click function
   */
  function engageLightSpeed() {
    // Enable light speed
    props.lightSpeed.value = LightSpeedState.FORWARD;

    // Add the fade-out animation to main-header classname
    const mainHeader = document.getElementById("main-header");
    if (mainHeader) {
      mainHeader.classList.add("fade-out");
    }

    // Show the projects
    setTimeout(() => setShowProjects(true), LIGHT_SPEED_TIMEOUT);
  }

  return showProjects ? (
    <Projects />
  ) : (
    <MainHeader onClick={engageLightSpeed} />
  );
}
