import { initStarScene } from "@/lib/scene/scene";
import { LightSpeedStateObject } from "@/lib/types";
import { useEffect } from "react";

export default function SceneCanvas(props: { state: LightSpeedStateObject }) {
  let scene: HTMLCanvasElement | null = null;

  useEffect(() => {
    initStarScene(scene as HTMLCanvasElement, props.state);
  }, [scene, props.state]);

  return (
    <canvas
      ref={(canvas) => (scene = canvas)}
      className="fixed inset-0 -z-50 bg-black"
    />
  );
}
