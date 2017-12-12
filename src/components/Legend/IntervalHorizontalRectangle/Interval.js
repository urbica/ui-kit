import React from 'react';
import PropTypes from 'prop-types';

import Row from './Row';
import Segment from './Segment';
import Label from './Label';
import LastLabel from './LastLabel';

const renderSegment = ({ id, color }) => <Segment key={id} color={color} />;

const renderLabel = ({ id, label }) => <Label key={id}>{label}</Label>;

const Interval = ({ values }) => {
  if (!values.length) {
    throw new Error('values is empty');
  }

  const significantValues = values.slice(0, values.length - 1);
  const lastValue = values[values.length - 1];

  return (
    <div>
      <Row>{significantValues.map(renderSegment)}</Row>
      <Row>
        {significantValues.map(renderLabel)}
        <LastLabel>{lastValue.label}</LastLabel>
      </Row>
    </div>
  );
};

Interval.propTypes = {
  values: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    label: PropTypes.node
  })).isRequired
};

export default Interval;
