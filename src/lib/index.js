import cloneDeepWith from 'lodash/cloneDeepWith';
import hasIn from 'lodash/hasIn';
import has from 'lodash/has';

/**
 * Loop inside Icon Object to modify stroke/fill color based on specified layer
 * @param  {Object}  icon
 * @param  {String}  color    Valid color String
 * @param  {Boolean} isStroke
 * @param  {String}  layer  'all' / 'color-1' ...
 * @param  {String}
 * @return {Object} Returns Object with color modified
 */
const deepColor = (icon, color, isStroke = false, layer = 'all', sel = 'id') => {
  const pathType = isStroke ? 'stroke' : 'fill'
  const modifier = layer !== 'all' ? layer : null;
  const regex = /^\!/;

  const customizer = (val, key, obj, stack) => {
    const filter = () => key === pathType && val !== 'none' ? color : undefined

    if (layer !== 'all') {
      if (obj && has(obj, sel) && obj[sel] === layer) {
        return filter()
      }
    } else {
      return filter()
    }
  }

  return cloneDeepWith(icon, customizer)
};

const deepColorInverse = (icon, color, isStroke = false, layer = null, sel = 'id') => {
  const pathType = isStroke ? 'stroke' : 'fill'
  const modifier = layer !== 'all' ? layer : null;

  const customizer = (val, key, obj, stack) => {
    const filter = () => key === pathType && val !== 'none' ? color : undefined

    if (layer) {
      if (obj && has(obj, sel) && obj[sel] !== layer || !has(obj, sel)) {
        return filter()
      }
    } else {
      return filter()
    }
  }

  return cloneDeepWith(icon, customizer)
};

export const deepInColor = (icon, color, layer, inverse = false) => {
  return inverse ?
    deepColorInverse(icon, color, icon.style === 'stroke', layer) :
    deepColor(icon, color, icon.style === 'stroke', layer);
}

export const deepInStroke = (icon, obj) => {
  const customizer = (val, key) => {
    if (hasIn(obj, key)) {
      return obj[key]
    }
  }
  return cloneDeepWith(icon, customizer)
}
