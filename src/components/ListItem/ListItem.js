import React from 'react';
import PropTypes from 'prop-types';

// Style
import Container from './Container';
import Title from './Title';
import Description from './Description';

/**
 * @component
 */
const ListItem = (props) => {
  const {
    title,
    description,
    units,
    children,
    isActive
  } = props;

  return (
    <Container isActive={isActive}>
      <Title>{title}</Title>
      {
        description &&
        <Description>
          {description}
          {
            units &&
            <div>{units}</div>
          }
        </Description>
      }
      {isActive && children}
    </Container>
  );
};

ListItem.propTypes = {
  title: PropTypes.node.isRequired,
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
