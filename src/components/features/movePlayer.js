import ease from './ease';
import interpolate from './interpolate';

export default function movePlayer(spline, view, lastView, easingType, config) {
  let player = spline.current.findObjectByName('Player');

  let start = {
    position: player.position,
    rotation: {
      x: player.rotation.x,
      y: player.rotation.y,
      z: player.rotation.z,
    },
  };
  let end = {
    position: view.position,
    rotation: {
      x: view.rotation.x * (Math.PI / 180),
      y: view.rotation.y * (Math.PI / 180),
      z: view.rotation.z * (Math.PI / 180),
    },
  };

  let numPoints = Math.ceil(view.duration / 16);
  let interpolatedPoints = interpolate(start, end, numPoints);
  let startTime = performance.now();

  function animate() {
    let currentTime = performance.now();
    let elapsedTime = currentTime - startTime;
    let progress = Math.min(elapsedTime / view.duration, 1);
    let easingProgress = ease(progress, easingType);

    let index = Math.floor(easingProgress * (interpolatedPoints.length - 1));
    let point = interpolatedPoints[index];

    player.position.x = point.position.x;
    player.position.y = point.position.y;
    player.position.z = point.position.z;
    player.rotation.x = point.rotation.x;
    player.rotation.y = point.rotation.y;
    player.rotation.z = point.rotation.z;

    for (let i = 0; i < config.ANMOUNT_OF_CUBES; i++) {
      const cube = spline.current.findObjectByName(`image-container-${i}`);
      cube.emitEvent('lookAt');
    }

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
    if (progress >= 1) {
      // console.log("done");
    }
  }

  animate();
}
