// Simple wheel normalization utility
// Based on normalize-wheel package logic
export default function normalizeWheel(event: WheelEvent) {
  let pixelX = 0;
  let pixelY = 0;
  let pixelZ = 0;

  // Legacy
  if ("detail" in event) {
    pixelY = (event as any).detail;
  }
  if ("wheelDelta" in event) {
    pixelY = -(event as any).wheelDelta / 120;
  }
  if ("wheelDeltaY" in event) {
    pixelY = -(event as any).wheelDeltaY / 120;
  }
  if ("wheelDeltaX" in event) {
    pixelX = -(event as any).wheelDeltaX / 120;
  }

  // Modern
  if ("deltaY" in event) {
    pixelY = event.deltaY;
  }
  if ("deltaX" in event) {
    pixelX = event.deltaX;
  }

  // Normalize based on delta mode
  if (event.deltaMode === 1) {
    // DOM_DELTA_LINE
    pixelX *= 16;
    pixelY *= 16;
  } else if (event.deltaMode === 2) {
    // DOM_DELTA_PAGE
    pixelX *= 16 * 24;
    pixelY *= 16 * 24;
  }

  return {
    pixelX,
    pixelY,
    pixelZ,
  };
}
