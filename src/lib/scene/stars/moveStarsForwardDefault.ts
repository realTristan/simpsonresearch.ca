import { Group } from "three";
import { starAcceleration } from "../constants";
import { Star } from "@/lib/types";

/**
 * Move the stars forward.
 * @param {Group} starGroup
 */
export function moveStarsForwardDefault(starGroup: Group): void {
  for (let i = 0; i < starGroup.children.length; i++) {
    const star: Star = starGroup.children[i] as Star;

    // Slow down the velocity and correct the star scale
    if (star.scale.y > 1) star.scale.y -= 0.5;
    if (star.velocity > 0.2) star.velocity -= 0.05;

    // Update the star position
    star.position.y -= star.velocity;

    // Update the vertices y values if too far
    if (star.position.y < -200) star.position.y = 200;
  }
}
