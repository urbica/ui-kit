import React from 'react';
import PropTypes from 'prop-types';

// Style
import Container from './Container';
import Title from './Title';
import Description from './Description';
import Units from './Units';

/**
 * @component
 */
const ListItem = (props) => {
  const {
    title,
    description,
    units,
    children
  } = props;

  return (
    <Container>
      <Title>{title}</Title>
      {
        description &&
          <Description>{description}</Description>
      }
      {
        units &&
          <Units>{units}</Units>
      }
      {children}
    </Container>
  );
};

ListItem.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
  units: PropTypes.node,
  children: PropTypes.node
};

ListItem.defaultProps = {
  description: PropTypes.null,
  units: PropTypes.null,
  children: PropTypes.null
};

export default ListItem;
