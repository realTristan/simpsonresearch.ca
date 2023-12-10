import { PerspectiveCamera } from "three";

interface CameraSettings {
  fov: number;
  aspect: number;
  near: number;
  far: number;
}

/**
 * Initialize the camera.
 * @returns {PerspectiveCamera}
 */
export function initCamera(settings: CameraSettings): PerspectiveCamera {
  const camera = new PerspectiveCamera(
    settings.fov,
    settings.aspect,
    settings.near,
    settings.far,
  );

  camera.position.z = 1.5;
  camera.rotation.x = Math.PI / 2;

  return camera;
}
