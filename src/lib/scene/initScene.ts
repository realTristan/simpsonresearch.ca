import { AmbientLight, Color, Scene } from "three";

/**
 * Initialize the scene.
 * @returns {Scene}
 */
export function initScene(): Scene {
  const scene: Scene = new Scene();

  scene.background = new Color(0x000000);
  scene.add(new AmbientLight(0xffffff, 0.1));

  return scene;
}
