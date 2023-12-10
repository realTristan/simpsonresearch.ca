import {
  calculateStarAcceleration,
  calculateStarCount,
  calculateStarCountLength,
} from "./math";

export const starCount: number = calculateStarCount();
export const starCountLength: number = calculateStarCountLength(starCount);
export const starAcceleration: number = calculateStarAcceleration(
  starCount,
  starCountLength,
);

export const LIGHT_SPEED_TIMEOUT = 5000;
