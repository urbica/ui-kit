import React from 'react';
import PropTypes from 'prop-types';
import capitalize from '../../utils/capitalize';

import CategoricalHorizontalRectangle from './CategoricalHorizontalRectangle';
import CategoricalVerticalSquare from './CategoricalVerticalSquare';
import CategoricalHorizontalCircle from './CategoricalHorizontalCircle';
import IntervalHorizontalRectangle from './IntervalHorizontalRectangle';

const COMPONENTS = {
  CategoricalHorizontalRectangle,
  CategoricalVerticalSquare,
  CategoricalHorizontalCircle,
  IntervalHorizontalRectangle
};

const TYPES = {
  CATEGORICAL: 'categorical',
  INTERVAL: 'interval'
};

const DIRECTIONS = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal'
};

const SHAPES = {
  CIRCLE: 'circle',
  SQUARE: 'square',
  RECTANGLE: 'rectangle'
};

const Legend = (props) => {
  const ComponentName = capitalize(props.type)
    + capitalize(props.direction)
    + capitalize(props.shape);
  const Component = COMPONENTS[ComponentName];
  if (!Component) {
    return null;
  }

  return <Component {...props} />;
};

Legend.propTypes = {
  type: PropTypes.oneOf([TYPES.CATEGORICAL, TYPES.INTERVAL]),
  direction: PropTypes.oneOf([DIRECTIONS.HORIZONTAL, DIRECTIONS.VERTICAL]),
  shape: PropTypes.oneOf([SHAPES.RECTANGLE, SHAPES.CIRCLE, SHAPES.SQUARE]),
  values: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    label: PropTypes.node
  })).isRequired
};

Legend.defaultProps = {
  type: TYPES.CATEGORICAL,
  shape: SHAPES.RECTANGLE,
  direction: DIRECTIONS.HORIZONTAL
};

export default Legend;
