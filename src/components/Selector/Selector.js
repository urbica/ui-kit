import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import findIndex from '../../utils/findIndex';

import Container from './Container';
import MenuOuter from './MenuOuter/MenuOuter';

/**
 * @component
 */

class Selector extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: this.props.isOpen,
      value: this.props.value
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.setChildNodeRef = this.setChildNodeRef.bind(this);
  }

  componentWillMount() {
    const { options } = this.props;

    if (!options.length) {
      throw new Error('options is empty');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value });
    }
  }

  toggleMenu() {
    if (!this.state.isOpen) {
      // attach/remove event handler
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState({ isOpen: !this.state.isOpen });
  }

  handleOnClick(value) {
    this.props.onChange(value);
    this.setState({ value });
  }

  handleOutsideClick(e) {
    const isDescendantOfRoot = this.childNode && this.childNode.contains(e.target);
    if (!isDescendantOfRoot) {
      this.toggleMenu();
    }
  }

  setChildNodeRef(ref) {
    this.childNode = ref;
  }

  render() {
    const { isOpen, value } = this.state;
    const { options } = this.props;

    const index = findIndex(options, o => o.value === value);
    const label = value && options[index].label;

    return (
      <Container
        innerRef={this.setChildNodeRef}
        onClick={this.toggleMenu}
      >
        {label || 'Выберите значение'}
        {
          isOpen &&
            <MenuOuter
              handleOnClick={this.handleOnClick}
              options={this.props.options}
              value={value}
            />
        }
      </Container>
    );
  }
}

Selector.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.node.isRequired,
    label: PropTypes.node.isRequired
  })).isRequired,
  value: PropTypes.node,
  onChange: PropTypes.func,
  isOpen: PropTypes.bool
};

Selector.defaultProps = {
  value: null,
  isOpen: false,
  onChange: () => {}
};

export default Selector;
