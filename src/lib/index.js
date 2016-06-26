import cloneDeepWith from 'lodash/cloneDeepWith';
import hasIn from 'lodash/hasIn';
import has from 'lodash/has';

/**
 * Loop inside Icon Object to modify stroke/fill color based on specified layer
 * @param  {Object}  icon
 * @param  {String}  color       ie. Valid color] TODO: check
 * @param  {Boolean} isStroke
 * @param  {String|null}  layer  ie. null || 'color-1'...
 * @param  {String}  selector    ie. 'id'
 * @param  {Boolean}  inverse
 * @return {Object}  Returns Object with color modified
 */
const deepColor = (icon, color, isStroke = false, layer = null, selector = 'id', inverse = false) => {
  const pathType = isStroke ? 'stroke' : 'fill'
  const customizer = (val, key, obj, stack) => {
    const filter = () => key === pathType && val !== 'none' ? color : undefined
    const condition = inverse ?
      has(obj, selector) && obj[selector] !== layer || !has(obj, selector) :
      has(obj, selector) && obj[selector] === layer

    if (layer) {
      if (obj && condition) {
        return filter()
      }
    } else {
      return filter()
    }
  }

  return cloneDeepWith(icon, customizer)
};

export const deepInColor = (icon, color, layer, inverse = false) => {
  return deepColor(icon, color, icon.style === 'stroke', layer, 'id', inverse)
}

export const deepInStroke = (icon, obj) => {
  const customizer = (val, key) => {
    if (hasIn(obj, key)) {
      return obj[key]
    }
  }
  return cloneDeepWith(icon, customizer)
}
