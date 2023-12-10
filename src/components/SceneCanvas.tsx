"use client";

import { LIGHT_SPEED_TIMEOUT } from "@/lib/scene/constants";
import { initSceneAnimation } from "@/lib/scene/scene";
import { moveStarsForward } from "@/lib/scene/stars/moveStarsForward";
import { moveStarsForwardDefault } from "@/lib/scene/stars/moveStarsForwardDefault";
import { LightSpeedState } from "@/lib/types/types";
import { Signal } from "@preact/signals";
import { useEffect } from "react";
import { Group } from "three";

/**
 * 3D Scene canvas
 * @param SceneCanvasProps
 * @returns JSX.Element
 */
interface SceneCanvasProps {
  lightSpeed: Signal<LightSpeedState>;
}
export default function SceneCanvas(props: SceneCanvasProps) {
  // The star scene reference
  let scene: HTMLCanvasElement | null = null;

  // Initialize the star scene
  useEffect(() => {
    if (!scene) return;

    // Initialize the scene animation
    initSceneAnimation(scene, async (starGroup: Group) => {
      // Move the stars forward if the speed state is default
      if (props.lightSpeed.value === LightSpeedState.DEFAULT) {
        moveStarsForwardDefault(starGroup);
        return;
      }

      // Move the stars forward
      await moveStarsForward(starGroup);

      // After the 5s, change the stars back to normal
      const timeout = setTimeout(() => {
        props.lightSpeed.value = LightSpeedState.DEFAULT;

        clearTimeout(timeout);
      }, LIGHT_SPEED_TIMEOUT);
    });
  }, [scene, props.lightSpeed]);

  return (
    <canvas
      ref={(canvas) => (scene = canvas)}
      className="fixed inset-0 -z-50 bg-black"
    />
  );
}
