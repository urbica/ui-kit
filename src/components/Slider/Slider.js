import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Style
import Container from './Container';
import Scale from './Scale';
import Label from './Label';

/**
 * @component
 */
class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };

    this.onChange = this.onChange.bind(this);
    this.onChangeEnd = this.onChangeEnd.bind(this);
    this.onClickScale = this.onClickScale.bind(this);
  }

  componentWillMount() {
    const { options, value } = this.props;
    const index = options.indexOf(value);
    this.setState({ value: index });
  }

  onChange(event) {
    this.setState({ value: event.target.value });
    const index = Math.round(event.target.value);
    const option = this.props.options[index];

    if (option !== this.props.value) {
      this.props.onChange(option);
    }
  }

  onChangeEnd(event) {
    const index = Math.round(event.target.value);
    this.setState({ value: index });
  }

  onClickScale(event) {
    const { index } = event.currentTarget;
    const option = this.props.options[index];
    this.setState({ value: index });
    this.props.onChange(option);
  }

  render() {
    const { options } = this.props;

    if (!options.length) {
      return null;
    }

    return (
      <Container>
        <input
          type="range"
          value={this.state.value}
          onChange={this.onChange}
          onMouseUp={this.onChangeEnd}
          max={options.length - 1}
          step={0.01}
        />
        <Scale length={options.length}>
          {
            options.map((option, index) => (
              <Label
                index={index}
                key={option.value}
                role="button"
                onClick={this.onClickScale}
              >
                <span>{option.label}</span>
              </Label>
            ))
          }
        </Scale>
      </Container>
    );
  }
}

Slider.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.node.isRequired,
    label: PropTypes.node
  })),
  value: PropTypes.shape({
    value: PropTypes.node.isRequired,
    label: PropTypes.node
  }),
  onChange: PropTypes.func.isRequired
};

Slider.defaultProps = {
  options: [],
  value: PropTypes.null
};

export default Slider;
