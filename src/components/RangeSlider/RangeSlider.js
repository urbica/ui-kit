import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import InputRange from '../InputRange/InputRange';
import Container from './Container';
import Line from './Line';
import findIndex from '../../utils/findIndex';

class RangeSlider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      leftValue: this.props.leftValue,
      rightValue: this.props.rightValue
    };

    this.onChangeLeft = this.onChangeLeft.bind(this);
    this.onChangeRight = this.onChangeRight.bind(this);
    this.onChangeEnd = this.onChangeEnd.bind(this);
  }

  componentWillMount() {
    const { options, leftValue, rightValue } = this.props;

    if (options) {
      if (!options.length) {
        throw new Error('options is empty');
      }

      const leftIndex = leftValue ?
        findIndex(options, o => o.value === leftValue) : 0;
      const rightIndex = rightValue ?
        findIndex(options, o => o.value === rightValue) : options.length - 1;

      this.setState({
        leftValue: leftIndex,
        rightValue: rightIndex
      });
    }
  }

  onChangeLeft(event) {
    const { options, onChange, fixRight } = this.props;
    const { rightValue } = this.state;
    const tmp = parseFloat(event.target.value);
    const roundTmp = Math.round(tmp);

    if (tmp < rightValue || fixRight) {
      this.setState({ leftValue: tmp });
      onChange({
        leftValue: options ? options[roundTmp].value : roundTmp,
        rightValue: options ? options[rightValue].value : rightValue
      });
    }
  }

  onChangeRight(event) {
    const { options, onChange, fixLeft } = this.props;
    const { leftValue } = this.state;
    const tmp = parseFloat(event.target.value);
    const roundTmp = Math.round(tmp);

    if (tmp > leftValue || fixLeft) {
      this.setState({ rightValue: tmp });
      onChange({
        leftValue: options ? options[leftValue].value : leftValue,
        rightValue: options ? options[roundTmp].value : roundTmp
      });
    }
  }

  onChangeEnd() {
    const { options } = this.props;
    const { leftValue, rightValue } = this.state;
    const roundLeft = Math.round(leftValue);
    const roundRight = Math.round(rightValue);

    this.setState({
      leftValue: roundLeft,
      rightValue: roundRight
    });

    this.props.onChange({
      leftValue: options ? options[roundLeft].value : roundLeft,
      rightValue: options ? options[roundRight].value : roundRight
    });
  }

  render() {
    const { leftValue, rightValue } = this.state;
    const {
      step,
      fixLeft,
      fixRight,
      options
    } = this.props;

    const min = options ? 0 : this.props.min;
    const max = options ? options.length - 1 : this.props.max;
    const range = max - min;
    const percentLeft = ((leftValue - min) / range) * 100;
    const percentRight = ((max - rightValue) / range) * 100;

    return (
      <Container>
        <InputRange
          onChange={this.onChangeLeft}
          value={fixLeft ? 0 : leftValue}
          onClick={this.onChangeEnd}
          onMouseLeave={this.onChangeEnd}
          onTouchEnd={this.onChangeEnd}
          min={min}
          max={max}
          step={step || 0.01}
          type="range"
          fix={fixLeft}
        />
        <InputRange
          onChange={this.onChangeRight}
          value={fixRight ? 0 : rightValue}
          onClick={this.onChangeEnd}
          onMouseLeave={this.onChangeEnd}
          onTouchEnd={this.onChangeEnd}
          min={min}
          max={max}
          step={step || 0.01}
          type="range"
          fix={fixRight}
        />
        <Line
          percentLeft={fixLeft ? 0 : percentLeft}
          percentRight={fixRight ? 0 : percentRight}
        />
      </Container>
    );
  }
}

RangeSlider.propTypes = {
  leftValue: PropTypes.oneOfType(
    PropTypes.number,
    PropTypes.shape({
      value: PropTypes.node.isRequired,
      label: PropTypes.node
    })
  ),
  rightValue: PropTypes.oneOfType(
    PropTypes.number,
    PropTypes.shape({
      value: PropTypes.node.isRequired,
      label: PropTypes.node
    })
  ),
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.node.isRequired,
    label: PropTypes.node
  })),
  onChange: PropTypes.func,
  step: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  fixLeft: PropTypes.bool,
  fixRight: PropTypes.bool
};

RangeSlider.defaultProps = {
  leftValue: 0,
  rightValue: 100,
  options: null,
  step: null,
  min: 0,
  max: 100,
  fixLeft: false,
  fixRight: false,
  onChange: () => {}
};

export default RangeSlider;
