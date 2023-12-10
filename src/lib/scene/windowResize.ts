import { PerspectiveCamera, WebGLRenderer } from "three";

interface Screen {
  width: number;
  height: number;
  pixelRatio: number;
}

/**
 * Resize the renderer and camera.
 * @param {WebGLRenderer} renderer
 * @param {PerspectiveCamera} camera
 * @param {Screen} screen
 */
export function resize(
  renderer: WebGLRenderer,
  camera: PerspectiveCamera,
  screen: Screen,
) {
  renderer.setSize(screen.width, screen.height);
  renderer.setPixelRatio(screen.pixelRatio);
  camera.aspect = screen.width / screen.height;
  camera.updateProjectionMatrix();

  return { renderer, camera };
}

/**
 * Set the window resize listener.
 * @param {WebGLRenderer} renderer
 * @param {PerspectiveCamera} camera
 * @param {Screen} initialScreen
 */
export function setWindowResizeListener(
  renderer: WebGLRenderer,
  camera: PerspectiveCamera,
  initialScreen: Screen,
) {
  window.addEventListener("resize", () => {
    const screen: Screen = {
      width: window.innerWidth,
      height: window.innerHeight,
      pixelRatio: window.devicePixelRatio,
    };

    resize(renderer, camera, {
      width:
        initialScreen.width > screen.width ? initialScreen.width : screen.width,
      height: screen.height,
      pixelRatio: screen.pixelRatio,
    });
  });
}
