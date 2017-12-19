import React from 'react';
import PropTypes from 'prop-types';

// Style
import Container from './Container';
import Children from './Children';
import Title from './Title';
import Text from './Text';

/**
 * @component
 */

const isActiveRender = (units, children) => (
  <div>
    <Text>{units}</Text>
    {
      children &&
      <Children>{children}</Children>
    }
  </div>
);

const ListItem = (props) => {
  const {
    title,
    description,
    units,
    onClick,
    isActive,
    children
  } = props;

  return (
    <Container
      isActive={isActive}
      onClick={onClick}
    >
      <Title isActive={isActive}>{title}</Title>
      <Text isActive={isActive}>{description}</Text>
      {
        isActive &&
        isActiveRender(units, children)
      }
    </Container>
  );
};

ListItem.propTypes = {
  title: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  description: PropTypes.node,
  units: PropTypes.node,
  isActive: PropTypes.bool,
  children: PropTypes.node
};

ListItem.defaultProps = {
  isActive: false,
  description: PropTypes.null,
  units: PropTypes.null,
  children: PropTypes.null
};

export default ListItem;
