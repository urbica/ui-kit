import React, { PureComponent } from 'react';
import InputRange from '../InputRange/InputRange';
import Container from './Container';
import Line from './Line';

class DoubleRangeSlider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inverted: false,
      slider1: 0,
      slider2: 100
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    const slider1 = parseFloat(this.slider1.value);
    const slider2 = parseFloat(this.slider2.value);

    this.setState({ inverted: slider1 > slider2, slider1, slider2 });
  }

  render() {
    const { slider1, slider2 } = this.state;
    return (
      <Container>
        <InputRange
          innerRef={(ref) => { this.slider1 = ref; }}
          onChange={this.onChange}
          value={slider1}
          min="0"
          max="100"
          step="1"
          type="range"
        />
        <InputRange
          innerRef={(ref) => { this.slider2 = ref; }}
          onChange={this.onChange}
          value={slider2}
          min="0"
          max="100"
          step="1"
          type="range"
        />
        <Line
          slider1={slider1}
          slider2={slider2}
        />
      </Container>
    );
  }
}

export default DoubleRangeSlider;
