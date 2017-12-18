import React from 'react';
import PropTypes from 'prop-types';

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
  CATEGORICAL: 'Categorical',
  INTERVAL: 'Interval'
};

const DIRECTIONS = {
  VERTICAL: 'Vertical',
  HORIZONTAL: 'Horizontal'
};

const SHAPES = {
  CIRCLE: 'Circle',
  SQUARE: 'Square',
  RECTANGLE: 'Rectangle'
};

const Legend = (props) => {
  const ComponentName = `${props.type}${props.direction}${props.shape}`;
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
