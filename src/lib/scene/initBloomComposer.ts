import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { PerspectiveCamera, Scene, Vector2, WebGLRenderer } from "three";

/**
 * Initialize the bloom composer.
 * @param {WebGLRenderer} renderer
 * @param {Scene} scene
 * @param {PerspectiveCamera} camera
 * @returns {EffectComposer}
 */
export function initBloomComposer(
  renderer: WebGLRenderer,
  scene: Scene,
  camera: PerspectiveCamera,
): EffectComposer {
  const renderScene = new RenderPass(scene, camera);
  const bloomPass = new UnrealBloomPass(
    new Vector2(window.innerWidth, window.innerHeight),
    1.5,
    0.4,
    100,
  );
  bloomPass.threshold = 0;
  bloomPass.strength = 0.5;
  bloomPass.radius = 0.1;

  const bloomComposer = new EffectComposer(renderer);
  bloomComposer.setSize(window.innerWidth, window.innerHeight);
  bloomComposer.renderToScreen = true;
  bloomComposer.addPass(renderScene);
  bloomComposer.addPass(bloomPass);
  bloomComposer.render();

  return bloomComposer;
}
