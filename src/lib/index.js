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
  const customizer = (val, key, obj, stack) => {
    const pathType = has(obj, 'stroke') ? 'stroke' : 'fill'
    const filter = () => key === pathType && val !== 'none' ? color : undefined;
    const varToRegex = Array.isArray(layer) ? `(${layer.join('|')})` : layer;
    const rExp = new RegExp(varToRegex, 'i');
    const condition = inverse ?
      has(obj, selector) && !rExp.test(obj[selector]) || !has(obj, selector) :
      has(obj, selector) && rExp.test(obj[selector]);
      
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

export const deepInColor = (icon, color, layer = null, inverse = false) => {
  return deepColor(icon, color, icon.iconStyle === 'stroke', layer, 'id', inverse)
}

export const deepInStroke = (icon, obj) => {
  const customizer = (val, key) => {
    if (hasIn(obj, key)) {
      return obj[key]
    }
  }
  return cloneDeepWith(icon, customizer)
}
