import React from 'react';
import PropTypes from 'prop-types';

// styled
import Label from './Label';
import Block from './Block';
import Square from './Square';

/**
 * @component
 */

const renderBlock = ({ id, label, color }) => (
  <Block key={id}>
    <Square color={color} />
    <Label>
      {label}
    </Label>
  </Block>
);

const CategoricalVertical = ({ values }) => {
  if (!values.length) {
    throw new Error('values is empty');
  }

  return (
    <div>
      { values.map(renderBlock) }
    </div>
  );
};

CategoricalVertical.propTypes = {
  values: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    label: PropTypes.node
  })).isRequired
};

export default CategoricalVertical;
