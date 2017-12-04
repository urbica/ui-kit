import React from 'react';
import PropTypes from 'prop-types';

import Segment from './Segment';
import Value from './Value';

// styled
import Container from './Container';
import LastValue from './LastValue';

/**
 * @component
 */

const LegendInterval = ({ values, lastValue }) => {
  if (!values.length) {
    return null;
  }

  const width = 100 / (values.length);
  return (
    <Container>
      {
        values.map(({ id, color }) =>
          <Segment key={id} width={width} color={color} />)
      }
      {
        values.map(({ id, title }) => (
          <Value
            key={id}
            width={width}
          >
            {title}
          </Value>
        ))
      }
      {
        lastValue &&
          <LastValue>{lastValue}</LastValue>
      }
    </Container>
  );
};

LegendInterval.propTypes = {
  values: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    title: PropTypes.node
  })).isRequired,
  lastValue: PropTypes.node
};

LegendInterval.defaultProps = {
  lastValue: null
};

export default LegendInterval;
