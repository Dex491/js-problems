// Convert kilometers to miles - assume 1.6 kilometers in a mile and
// round your answer to the nearest mile (e.g. `1.6` should be `2`, as should `2.4`. `2.5` should be `3`).

function kmToMiles(km) {
  const miles = km * 0.62
  return Math.round(miles)
}
