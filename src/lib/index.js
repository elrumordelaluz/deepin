import cloneDeepWith from 'lodash/cloneDeepWith';
import hasIn from 'lodash/hasIn';
import has from 'lodash/has';

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

export const deepInColor = (icon, color, layer) => {
  return deepColor(icon, color, icon.style === 'stroke', layer)
}

export const deepInStroke = (icon, obj) => {
  const customizer = (val, key) => {
    if (hasIn(obj, key)) {
      return obj[key]
    }
  }
  return cloneDeepWith(icon, customizer)
}
