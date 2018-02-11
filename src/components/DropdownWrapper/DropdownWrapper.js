import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Container from './Container';

class DropdownWrapper extends PureComponent {
  constructor(props) {
    super(props);

    this.setChildNodeRef = this.setChildNodeRef.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { isOpen } = nextProps;
    if (isOpen !== this.props.isOpen) {
      if (isOpen) {
        document.addEventListener('click', this.handleOutsideClick, false);
      } else {
        document.removeEventListener('click', this.handleOutsideClick, false);
      }
    }
  }

  handleOutsideClick(e) {
    const isDescendantOfRoot = this.childNode && this.childNode.contains(e.target);
    if (!isDescendantOfRoot) {
      this.props.onChange();
    }
  }

  setChildNodeRef(ref) {
    this.childNode = ref;
  }

  render() {
    return (
      <Container innerRef={this.setChildNodeRef}>
        {this.props.opener()}
        {this.props.isOpen && this.props.children}
      </Container>
    );
  }
}

DropdownWrapper.propTypes = {
  opener: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  isOpen: PropTypes.bool,
  onChange: PropTypes.func
};

DropdownWrapper.defaultProps = {
  isOpen: false,
  children: null,
  onChange: () => {}
};

export default DropdownWrapper;
