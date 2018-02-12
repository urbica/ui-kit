import React from 'react';
import PropTypes from 'prop-types';

import ClickOutside from '../ClickOutside';
import withToggle from '../withToggle';
import Container from './Container';

const Dropdown = ({
  renderHandler, renderContent, toggledOn, toggle, show, hide
}) => (
  <ClickOutside onClickOutside={hide}>
    <Container>
      {renderHandler({
        hide,
        show,
        toggle,
        toggledOn
      })}
      {toggledOn &&
        renderContent({
          hide,
          show,
          toggle,
          toggledOn
        })}
    </Container>
  </ClickOutside>
);

Dropdown.propTypes = {
  hide: PropTypes.func.isRequired,
  renderContent: PropTypes.func.isRequired,
  renderHandler: PropTypes.func.isRequired,
  show: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  toggledOn: PropTypes.bool.isRequired
};

export default withToggle(Dropdown);
