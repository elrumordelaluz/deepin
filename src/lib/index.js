import cloneDeepWith from 'lodash/cloneDeepWith';

const deepColor = (icon, color, isStroke = false, layer = 'all') => {
  const pathType = isStroke ? 'stroke' : 'fill'
  const modifier = layer !== 'all' ? layer : null;
  const sel = 'id';

  const customizer = (val, key, obj, stack) => {
    const filter = () => key === pathType && val !== 'none' ? color : undefined

    if (layer !== 'all') {
      if (obj && obj.hasOwnProperty(sel) && obj[sel] === layer) {
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

const deepStroke = (icon, obj) => {
  const customizer = (val, key) => {
    if (key in obj) {
      return obj[key]
    }
  }
  return cloneDeepWith(icon, customizer)
}

export const deepInStroke = (icon, obj) => {
  return deepStroke(icon, obj)
};
