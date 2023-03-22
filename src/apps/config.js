const config = {
  //Your scene.splinecode
  SCENE: 'https://prod.spline.design/8gLDKBX8caHepuaT/scene.splinecode',
  //should the scene loop after the last or before the first view?
  LOOP_VIEWS: true,
  //how many images are in the scene
  ANMOUNT_OF_CUBES: 4,
};

//Keyframes für Kamerafahrt (Kann direkt aus dem Spline-editor abgelesen werden)
const views = [
  {
    position: { x: 26, y: 340, z: -2280 },
    rotation: { x: 0, y: 0, z: 0 },
    duration: 2000,
  },
  {
    position: { x: 195, y: 340, z: -2030 },
    rotation: { x: 0, y: -39.5, z: 0 },
    duration: 2000,
  },
  {
    position: { x: 2230, y: 340, z: 810 },
    rotation: { x: 0, y: 31, z: 0 },
    duration: 2000,
  },
];

export { config, views };
