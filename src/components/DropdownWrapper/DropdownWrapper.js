import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Container from './Container';

class DropdownWrapper extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: this.props.isOpen
    };

    this.toggle = this.toggle.bind(this);
    this.setChildNodeRef = this.setChildNodeRef.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isOpen: nextProps.isOpen });
  }

  toggle() {
    if (!this.state.isOpen) {
      // attach/remove event handler
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.props.onChange(!this.state.isOpen);
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleOutsideClick(e) {
    const isDescendantOfRoot = this.childNode && this.childNode.contains(e.target);
    if (!isDescendantOfRoot) {
      this.toggle();
    }
  }

  setChildNodeRef(ref) {
    this.childNode = ref;
  }

  render() {
    return (
      <Container innerRef={this.setChildNodeRef}>
        {this.props.opener(this.toggle, this.state.isOpen)}
        {this.state.isOpen && this.props.children}
      </Container>
    );
  }
}

DropdownWrapper.propTypes = {
  isOpen: PropTypes.bool,
  onChange: PropTypes.func
};

DropdownWrapper.defaultProps = {
  isOpen: false,
  onChange: () => {}
};

export default DropdownWrapper;
