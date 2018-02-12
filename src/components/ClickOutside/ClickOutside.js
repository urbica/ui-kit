// https://github.com/tj/react-click-outside/blob/9b95853f39b3a48610b520cd070ab90cb4d0a493/index.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClickOutside extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    onClickOutside: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.isTouch = false;
    this.handle = this.handle.bind(this);
    this.getContainer = this.getContainer.bind(this);
  }

  componentDidMount() {
    document.addEventListener('touchend', this.handle, true);
    document.addEventListener('click', this.handle, true);
  }

  componentWillUnmount() {
    document.removeEventListener('touchend', this.handle, true);
    document.removeEventListener('click', this.handle, true);
  }

  getContainer(ref) {
    this.container = ref;
  }

  handle(e) {
    if (e.type === 'touchend') {
      this.isTouch = true;
    }

    if (e.type === 'click' && this.isTouch) {
      return;
    }

    const { onClickOutside } = this.props;
    const el = this.container;

    if (!el.contains(e.target)) {
      onClickOutside(e);
    }
  }

  render() {
    const { children, onClickOutside, ...props } = this.props;

    return (
      <div {...props} ref={this.getContainer}>
        {children}
      </div>
    );
  }
}

export default ClickOutside;
