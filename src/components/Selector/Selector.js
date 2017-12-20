import React, { PureComponent } from 'react';
import enhanceWithClickOutside from 'react-click-outside';
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

    this.toggle = this.toggle.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
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

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleOnClick(value) {
    this.props.onChange(value);
    this.setState({ value });
  }

  handleClickOutside() {
    this.setState({ isOpen: false });
  }

  render() {
    const { isOpen, value } = this.state;
    const { options } = this.props;

    const index = findIndex(options, o => o.value === value);
    const label = value && options[index].label;

    return (
      <Container onClick={this.toggle}>
        {label || 'Выберите значение'}
        {
          isOpen &&
            <MenuOuter
              onClick={this.handleOnClick}
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

export default enhanceWithClickOutside(Selector);
