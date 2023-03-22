export default function ease(t, type) {
  switch (type) {
    case 'linear':
      return t;
    case 'easeIn':
      return t * t;
    case 'easeOut':
      return t * (2 - t);
    case 'easeInOut':
      if (t < 0.5) {
        return 2 * t * t;
      } else {
        return -2 * t * t + 4 * t - 1;
      }
    default:
      break;
  }
}
