import React from 'react';
import PropTypes from 'prop-types';

import Segment from './Segment';
import Value from './Value';

// styled
import Container from './Container';

/**
 * @component
 */

const LegendCategorical = ({ values }) => {
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
    </Container>
  );
};

LegendCategorical.propTypes = {
  values: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    title: PropTypes.node
  })).isRequired
};

export default LegendCategorical;
