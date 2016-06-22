/*
* could be useful: https://github.com/svg/svgo/blob/master/plugins/moveGroupAttrsToElems.js
*/

/**
 * Check if path Object is stroked
 * @param  {Object} path
 * @return {Boolean}
 */
const hasStrokeProps = (path, type = 'stroke') => {
  const basicPorps = ['stroke', 'fill'];
  const strokePorps = ['stroke', 'strokeWidth', 'strokeLinecap', 'strokeLinejoin'];
  const fillProps = ['fill'];

  const is = (arr, prop) => !!~strokePorps.indexOf(prop);
  const isStrokeProp = (prop) => is(strokePorps, prop);
  const isBasicProp = (prop) => is(basicPorps, prop);

  const check = Object.keys(path.attrs).reduce((prevStatus, prop) => {
    // If
    if (isBasicProp(prop) && path.attrs[prop] === 'none') {
      return false;
    }

    return isStrokeProp(prop) ? true : false
  }, false);

  console.log(check)
  return check;
}

const isSrokePath = (path) => {
  if (path.name === 'g') {
    console.log('is Group')
  }
  return path.attrs.hasOwnProperty('stroke')
}

/**
 * Go deep in SVG Object to match and modify Color attributes
 * @param  {Array} paths
 * @return {Object}
 */
const deepColor = (paths) => {
  return paths.map(child => {
    hasStrokeProps(child)
    console.log(child)
    if(child.hasOwnProperty('childs')) {
      deepColor(child.childs)
    }
    return child;
  });
}

export const deepIn = (icon) => {
  // icon[childs] should be always an Array, get the first
  const fisrtChild = icon.childs;
  deepColor(fisrtChild);
  return;
};




export const goDeepForColor = (arr, color, kind) => {
  const applyColor = (child, style) => {
    const nChild = Object.assign({}, child);
    nChild.attrs = {
      ...nChild.attrs,
      [style]: color
    }
    return nChild;
  };

  return arr.map(child => {
    if (child.attrs.hasOwnProperty('stroke') && child.attrs['stroke'] !== 'none') {

      // Icon is Stroke

      if (kind === 'main' && child.attrs.id && child.attrs.id === 'main') {
        return applyColor(child, 'stroke');
      } else if (kind === 'accent' && child.attrs.id && child.attrs.id === 'accent') {
        return applyColor(child, 'stroke');
      } else if (kind === 'main' && (!child.attrs.id || child.attrs.id && child.attrs.id !== 'main' && child.attrs.id !== 'accent')) {
        return applyColor(child, 'stroke');
      }

      if (!kind) return applyColor(child, 'stroke');

    } else if (child.attrs.hasOwnProperty('fill') && child.attrs['fill'] !== 'none') {

      // Icon is Fill

      // TODO apply `kind` stuff here
      const newChildFill = Object.assign({}, child);
      newChildFill.attrs = {
        ...newChildFill.attrs,
        fill: color
      }
      return newChildFill;

    }


    return child;

    if(child.childs != null) {
      goDeepForColor(child.childs)
    }
  })
}
