import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Calendar from '../Calendar';

// Style
import Container from './Container';
import CalendarContainer from './CalendarContainer';

/**
 * @component
 */

class DataSelector extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isActive: this.props.isActive,
      startDate: this.props.startDate,
      endDate: this.props.endDate
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    const { isActive, startDate } = this.state;
    return (
      <Container onClick={this.onClick}>
        {startDate.toLocaleString().substring(0, 10)}
        {
          isActive &&
            <CalendarContainer onClick={e => e.stopPropagation()}>
              <Calendar {...this.props} />
            </CalendarContainer>
        }
      </Container>
    );
  }
}

DataSelector.propTypes = {
  isActive: PropTypes.bool,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.node
};

DataSelector.defaultProps = {
  isActive: false,
  startDate: new Date(),
  endDate: PropTypes.Null
};

export default DataSelector;
