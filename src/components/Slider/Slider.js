import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Style
import Container from './Container';
import Scale from './Scale';
import Label from './Label';

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
  }

  componentWillMount() {
    const { options, value } = this.props;

    if (!options.length) {
      throw new Error('options is empty');
    }

    const index = options.indexOf(value);
    this.setState({ index });
  }

  onChange(event) {
    this.setState({ index: event.target.value });
    const index = Math.round(event.target.value);
    const option = this.props.options[index];

    if (option !== this.props.value) {
      this.props.onChange(option);
    }
  }

  onChangeEnd(event) {
    const index = Math.round(event.target.value);
    this.setState({ index });
  }

  onScaleClick(index) {
    this.setState({ index });
    const option = this.props.options[index];
    this.props.onChange(option);
  }

  render() {
    const { options } = this.props;

    return (
      <Container>
        <input
          type="range"
          value={this.state.index}
          onChange={this.onChange}
          onMouseUp={this.onChangeEnd}
          max={options.length - 1}
          step={0.01}
        />
        <Scale length={options.length}>
          {
            options.map((option, index) => (
              <Label
                key={option.value}
                role="button"
                onClick={this.onScaleClick.bind(null, index)}
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
  })).isRequired,
  value: PropTypes.shape({
    value: PropTypes.node.isRequired,
    label: PropTypes.node
  }),
  onChange: PropTypes.func.isRequired
};

Slider.defaultProps = {
  value: PropTypes.null
};

export default Slider;
