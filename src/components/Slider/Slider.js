import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import findIndex from '../../utils/findIndex';
import InputRange from '../InputRange';

// Style
import Container from './Container';
import Scale from './Scale';
import Label from './Label';
import Handle from './Handle';

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

    const index = findIndex(options, o => o.value === value);

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

  onChangeEnd() {
    const index = Math.round(this.state.index);
    const { value } = this.props.options[index];
    this.setState({ index });
    this.props.onChangeEnd(value);
  }

  onScaleClick(index) {
    this.setState({ index });
    const { value } = this.props.options[index];
    this.props.onChangeEnd(value);
  }

  _renderOption(option, index) {
    const { ticks } = this.props;
    const isVisible = !ticks || !!(index % ticks);

    return (
      <Label key={option.value} role="button" onClick={this.onScaleClick.bind(null, index)}>
        {isVisible && <span>{option.label}</span>}
      </Label>
    );
  }

  render() {
    const {
      tooltipPosition,
      tooltip,
      options,
      ticks
    } = this.props;

    const { index } = this.state;
    const visibleScale = !ticks || ticks.length !== 0;
    const position = index ? (index / (options.length - 1)) * 100 : 0;
    const roundIndex = Math.round(index);
    const label = options[roundIndex] && options[roundIndex].label;

    return (
      <Container tooltip={tooltip}>
        {
          visibleScale &&
            <Scale>{options.map(this._renderOption)}</Scale>
        }
        <InputRange
          value={this.state.index}
          onChange={this.onChange}
          onClick={this.onChangeEnd}
          onMouseLeave={this.onChangeEnd}
          onTouchEnd={this.onChangeEnd}
          max={options.length - 1}
          step={0.01}
        />
        {
          tooltip &&
            <Handle
              position={position}
              tooltipPosition={tooltipPosition}
            >
              {label}
            </Handle>}
      </Container>
    );
  }
}

/* eslint-disable react/forbid-prop-types */
Slider.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.any.isRequired,
    label: PropTypes.node
  })).isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  onChangeEnd: PropTypes.func.isRequired,
  tooltip: PropTypes.bool,
  tooltipPosition: PropTypes.oneOf(['bottom', 'top']),
  ticks: PropTypes.number
};

Slider.defaultProps = {
  value: PropTypes.null,
  tooltip: true,
  tooltipPosition: 'bottom',
  ticks: null
};

export default Slider;
