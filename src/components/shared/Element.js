import React, { PropTypes } from 'react';

const Element = (props) => {
  const { obj } = props;
  let childnodes;

  if (obj.childs !== null) {
    childnodes = Array.isArray(obj.childs)
      ? obj.childs.map((node, index) => <Element obj={ node } key={ index } />)
      : obj.childs;
  }

  return (
    <obj.name {...obj.attrs}>
      { childnodes }
    </obj.name>
  );
};

Element.propTypes = {
  obj: PropTypes.object.isRequired
};

export default Element;
