import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import InputRange from '../InputRange/InputRange';
import Container from './Container';
import Line from './Line';
import Label from './Label';
import Scale from './Scale';
import Text from './Text';
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
    this._renderOption = this._renderOption.bind(this);
  }

  componentDidMount() {
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
    const { options, onChange, fixedRight } = this.props;
    const { rightValue } = this.state;
    const tmp = parseFloat(event.target.value);
    const roundTmp = Math.round(tmp);

    if (tmp < rightValue || fixedRight) {
      this.setState({ leftValue: tmp });
      onChange({
        leftValue: options ? options[roundTmp].value : roundTmp,
        rightValue: options ? options[rightValue].value : rightValue
      });
    }
  }

  onChangeRight(event) {
    const { options, onChange, fixedLeft } = this.props;
    const { leftValue } = this.state;
    const tmp = parseFloat(event.target.value);
    const roundTmp = Math.round(tmp);

    if (tmp > leftValue || fixedLeft) {
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

  _renderOption(option, index) {
    const { ticks } = this.props;
    const { leftValue, rightValue } = this.state;
    const isVisible = !ticks || !!(index % ticks);

    const isActive = leftValue <= index && index <= rightValue;

    return (
      <Label key={option.value}>
        {isVisible && <Text isActive={isActive}>{option.label}</Text>}
      </Label>
    );
  }

  render() {
    const { leftValue, rightValue } = this.state;
    const {
      step,
      fixedLeft,
      fixedRight,
      options,
      ticks
    } = this.props;

    const left = options ? 0 : this.props.left;
    const right = options ? options.length - 1 : this.props.right;
    const range = right - left;
    const percentLeft = ((leftValue - left) / range) * 100;
    const percentRight = ((right - rightValue) / range) * 100;
    const visibleScale = (!ticks || ticks.length !== 0) && options;

    return [
      visibleScale ? <Scale key="scale">{options.map(this._renderOption)}</Scale> : null,
      <Container key="input" visibleScale={visibleScale}>
        <InputRange
          onChange={this.onChangeLeft}
          value={fixedLeft ? 0 : leftValue}
          onClick={this.onChangeEnd}
          onTouchEnd={this.onChangeEnd}
          min={left}
          max={right}
          step={step || 0.01}
          type="range"
          fix={fixedLeft}
        />
        <InputRange
          onChange={this.onChangeRight}
          value={fixedRight ? 0 : rightValue}
          onClick={this.onChangeEnd}
          onMouseLeave={this.onChangeEnd}
          onTouchEnd={this.onChangeEnd}
          min={left}
          max={right}
          step={step || 0.01}
          type="range"
          fix={fixedRight}
        />
        <Line
          percentLeft={fixedLeft ? 0 : percentLeft}
          percentRight={fixedRight ? 0 : percentRight}
        />
      </Container>
    ];
  }
}

RangeSlider.propTypes = {
  leftValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.node
  ]),
  rightValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.node
  ]),
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.node.isRequired,
    label: PropTypes.node
  })),
  onChange: PropTypes.func,
  step: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
  fixedLeft: PropTypes.bool,
  fixedRight: PropTypes.bool,
  ticks: PropTypes.number
};

RangeSlider.defaultProps = {
  leftValue: 0,
  rightValue: 100,
  options: null,
  step: null,
  left: 0,
  right: 100,
  fixedLeft: false,
  fixedRight: false,
  ticks: null,
  onChange: () => {}
};

export default RangeSlider;
