import React from 'react';
import PropTypes from 'prop-types';

// styled
import Row from './Row';
import Segment from './Segment';
import Label from './Label';
import LastLabel from './LastLabel';

/**
 * @component
 */

const renderSegment = ({ id, color }) => <Segment key={id} color={color} />;

const renderLabel = ({ id, label }) => (
  <Label key={id}>
    {label}
  </Label>
);

const LegendInterval = ({ values, lastValue }) => {
  if (!values.length) {
    throw new Error('values is empty');
  }

  return (
    <div>
      <Row>
        { values.map(renderSegment) }
      </Row>
      <Row>
        { values.map(renderLabel) }
        <LastLabel>{lastValue}</LastLabel>
      </Row>
    </div>
  );
};

LegendInterval.propTypes = {
  values: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    label: PropTypes.node
  })).isRequired,
  lastValue: PropTypes.node
};

LegendInterval.defaultProps = {
  lastValue: null
};

export default LegendInterval;
