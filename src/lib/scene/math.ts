/**
 * Calculates the star count based on the window height and width.
 * @returns The star count.
 */
export function calculateStarCount() {
  if (typeof window === "undefined") {
    return 0;
  }

  const starCount = Math.floor(
    Math.sqrt(window.innerHeight ** 2 + window.innerHeight ** 2),
  );

  return starCount;
}

/**
 * Calculates the star count length based on the star count.
 * @param starCount The star count.
 * @returns The star count length.
 */
export function calculateStarCountLength(starCount: number) {
  const starCountLength = starCount.toString().length;

  return starCountLength;
}

/**
 * Calculates the star acceleration based on the star count and star count length.
 * @param starCount The star count.
 * @param starCountLength The star count length.
 * @returns The star acceleration.
 */
export function calculateStarAcceleration(
  starCount: number,
  starCountLength: number,
) {
  const starAcceleration = starCount / starCountLength / 10 ** starCountLength;

  return starAcceleration;
}
