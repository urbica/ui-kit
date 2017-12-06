import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Style
import Container from './Container';
import Scale from './Scale';
import Label from './Label';
import Input from './Input';

/**
 * @component
 */
class Slider extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      index: 0
    };

    this.onChange = this.onChange.bind(this);
    this.onChangeEnd = this.onChangeEnd.bind(this);
    this.onScaleClick = this.onScaleClick.bind(this);
    this._renderOption = this._renderOption.bind(this);
  }

  componentWillMount() {
    const { options, value } = this.props;

    if (!options.length) {
      throw new Error('options is empty');
    }

    const index = options.findIndex(o => o.value === value);
    this.setState({ index });
  }

  onChange(event) {
    this.setState({ index: event.target.value });
    const index = Math.round(event.target.value);
    const { value } = this.props.options[index];

    if (value !== this.props.value) {
      this.props.onChange(value);
    }
  }

  onChangeEnd(event) {
    const index = Math.round(event.target.value);
    this.setState({ index });
  }

  onScaleClick(index) {
    this.setState({ index });
    const { value } = this.props.options[index];
    this.props.onChange(value);
  }

  _renderOption(option, index) {
    return (
      <Label
        key={option.value}
        role="button"
        onClick={this.onScaleClick.bind(null, index)}
      >
        <span>{option.label}</span>
      </Label>
    );
  }

  render() {
    const { options } = this.props;

    return (
      <Container>
        <Input
          type="range"
          value={this.state.index}
          onChange={this.onChange}
          onMouseUp={this.onChangeEnd}
          max={options.length - 1}
          step={0.01}
        />
        <Scale length={options.length}>
          {options.map(this._renderOption)}
        </Scale>
      </Container>
    );
  }
}

Slider.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.node.isRequired,
    label: PropTypes.node
  })).isRequired,
  value: PropTypes.node,
  onChange: PropTypes.func.isRequired
};

Slider.defaultProps = {
  value: PropTypes.null
};

export default Slider;
