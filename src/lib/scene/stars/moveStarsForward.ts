import { Group } from "three";
import { starAcceleration } from "../constants";
import { Star } from "@/lib/types/types";

/**
 * Move the stars forward
 * @param starGroup The star group
 */
export async function moveStarsForward(starGroup: Group): Promise<void> {
  for (let i = 0; i < starGroup.children.length; i++) {
    const star: Star = starGroup.children[i] as Star;

    // Change star scale
    star.scale.y += 0.3;

    // Integrate Uniform Velocity
    if (star.velocity < 7) star.velocity += starAcceleration;
    star.position.y -= star.velocity;

    // Update the vertices y values if too far
    if (star.position.y < -200) star.position.y = 200;
  }
}
