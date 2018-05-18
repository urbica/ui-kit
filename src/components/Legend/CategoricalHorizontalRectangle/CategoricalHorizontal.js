import React from 'react';
import PropTypes from 'prop-types';

// styled
import Row from './Row';
import Segment from '../styled/HorizontalRectangleSegment';
import Label from './Label';

/**
 * @component
 */

const renderSegment = ({ id, color }) => <Segment key={id} color={color} />;
const renderLabel = ({ id, label }) => <Label key={id}>{label}</Label>;

const CategoricalHorizontal = ({ values }) => {
  if (!values.length) {
    throw new Error('values is empty');
  }

  return (
    <div>
      <Row>{values.map(renderSegment)}</Row>
      <Row>{values.map(renderLabel)}</Row>
    </div>
  );
};

CategoricalHorizontal.propTypes = {
  values: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    label: PropTypes.node
  })).isRequired
};

export default CategoricalHorizontal;
