import { WebGLRenderer } from "three";

/**
 * Initialize the renderer.
 * @param {HTMLCanvasElement} canvas
 * @returns {WebGLRenderer}
 */
export function initRenderer(canvas: HTMLCanvasElement | null): WebGLRenderer {
  const renderer = new WebGLRenderer({
    antialias: false,
    canvas: canvas as HTMLCanvasElement,
  });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio * 0.5);
  renderer.autoClear = false;

  return renderer;
}
