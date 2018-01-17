import React, { Component } from 'react';
import Button from './Button';
import Container from './Container';

class YearPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    const { date } = this.state;
    const year = date.getFullYear();
    date.setFullYear(year + value);

    this.setState({ date });
  }

  render() {
    const { date } = this.state;
    return (
      <Container>
        <Button onClick={this.onChange.bind(null, -1)} />
        {date.getFullYear()}
        <Button onClick={this.onChange.bind(null, 1)} right />
      </Container>
    );
  }
}

export default YearPicker;
