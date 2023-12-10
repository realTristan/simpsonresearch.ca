import { initScene } from "./initScene";
import { initBloomComposer } from "./initBloomComposer";
import { initCamera } from "./initCamera";
import { initRenderer } from "./initRenderer";
import { initStarGroup } from "./stars/initStarGroup";
import { moveStarsForward } from "./stars/moveStarsForward";
import { moveStarsForwardDefault } from "./stars/moveStarsForwardDefault";
import { LightSpeedState, LightSpeedStateObject } from "../types";
import { LIGHT_SPEED_TIMEOUT } from "./constants";
import { setWindowResizeListener } from "./windowResize";

/**
 * Initialize the star scene.
 * @param {HTMLCanvasElement} canvas
 */
export function initStarScene(
  canvas: HTMLCanvasElement,
  state: LightSpeedStateObject,
) {
  if (typeof window === "undefined") return;

  // Initialize the scene, camera, and renderer
  const scene = initScene();
  const camera = initCamera({
    fov: 90,
    aspect: window.innerWidth / window.innerHeight,
    near: 0.1,
    far: 1000,
  });
  const renderer = initRenderer(canvas);
  const bloomComposer = initBloomComposer(renderer, scene, camera);

  // Initialize the star group
  const starGroup = initStarGroup();
  scene.add(starGroup);

  // Set the window resize listener
  setWindowResizeListener(renderer, camera, {
    width: window.innerWidth,
    height: window.innerHeight,
    pixelRatio: window.devicePixelRatio,
  });

  renderer.setAnimationLoop(() => {
    switch (state.lightSpeed) {
      case LightSpeedState.DEFAULT:
        moveStarsForwardDefault(starGroup);
        break;
      case LightSpeedState.FORWARD:
        moveStarsForward(starGroup).then(() => {
          const timeout = setTimeout(() => {
            state.lightSpeed = LightSpeedState.DEFAULT;
            clearTimeout(timeout);
          }, LIGHT_SPEED_TIMEOUT);
        });
        break;
    }

    bloomComposer.render();
    renderer.render(scene, camera);
  });
}
