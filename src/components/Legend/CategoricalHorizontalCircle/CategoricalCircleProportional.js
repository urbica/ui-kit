import React from 'react';
import PropTypes from 'prop-types';

// styled
import Row from './Row';
import Circle from './Circle';
import Label from './Label';

/**
 * @component
 */

const renderLabel = ({ id, label }) => (
  <Label key={id}>
    {label}
  </Label>
);

const CategoricalCircleProportional = ({ values, circleSize, proportional }) => {
  if (!values.length) {
    throw new Error('values is empty');
  }

  return (
    <div>
      <Row>
        {values.map(({ id, color }, i) => (
          <Circle
            key={id}
            color={color}
            index={i}
            segmentsAmount={values.length}
            circleSize={circleSize}
            proportional={proportional}
          />
        ))}
      </Row>
      <Row>
        {values.map(renderLabel)}
      </Row>
    </div>
  );
};

CategoricalCircleProportional.propTypes = {
  values: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    label: PropTypes.node
  })).isRequired,
  circleSize: PropTypes.number,
  proportional: PropTypes.bool
};

CategoricalCircleProportional.defaultProps = {
  circleSize: 20,
  proportional: true
};

export default CategoricalCircleProportional;
