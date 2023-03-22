export default function interpolate(start, end, numPoints) {
  let interpolatedPoints = [];

  for (let i = 0; i < numPoints; i++) {
    let proportion = i / (numPoints - 1);
    let position = {
      x: start.position.x + proportion * (end.position.x - start.position.x),
      y: start.position.y + proportion * (end.position.y - start.position.y),
      z: start.position.z + proportion * (end.position.z - start.position.z),
    };

    let rotation = {
      x: start.rotation.x + proportion * (end.rotation.x - start.rotation.x),
      y: start.rotation.y + proportion * (end.rotation.y - start.rotation.y),
      z: start.rotation.z + proportion * (end.rotation.z - start.rotation.z),
    };

    interpolatedPoints.push({ position: position, rotation: rotation });
  }

  return interpolatedPoints;
}
