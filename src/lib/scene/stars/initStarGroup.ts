import { Color, Group, Mesh, MeshBasicMaterial, SphereGeometry } from "three";
import { starCount } from "../constants";
import { Star } from "@/lib/types/types";

/**
 * Initialize the star group.
 * @returns {Group}
 */
export function initStarGroup(): Group {
  const starGroup = new Group();

  for (let i = 0; i < starCount; i++) {
    const sphere = new Mesh(
      new SphereGeometry(0.17),
      new MeshBasicMaterial({
        color: new Color("#FFFFFF"),
      }),
    );

    // @ts-ignore
    sphere.velocity = 0.2;
    sphere.position.set(
      Math.random() * 600 - 300,
      Math.random() * 600 - 300,
      Math.random() * 600 - 300,
    );

    starGroup.add(sphere);
  }

  return starGroup;
}
