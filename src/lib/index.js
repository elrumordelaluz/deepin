import cloneDeepWith from 'lodash/cloneDeepWith';

const deepColor = (paths, color, isStroke = false) => {
  const modifier = isStroke ? 'stroke' : 'fill';
  const customizer = (val, key) => {
    if (key === modifier && val !== 'none') {
      return color;
    }
  }
  return cloneDeepWith(paths, customizer);
};

export const deepIn = (icon, color) => {
  return deepColor(icon, color, icon.style === 'stroke')
};
