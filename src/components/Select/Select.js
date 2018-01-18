import React, { PureComponent } from 'react';
import findIndex from '../../utils/findIndex';

import DropDownWrapper from '../DropdownWrapper/DropdownWrapper';
import List from '../List/List';
import Button from './Button';
import Dropdown from './Dropdown';

class Select extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({ value });
    this.props.onChange(value);
  }

  render() {
    const { options } = this.props;
    const index = findIndex(options, o => o.value === this.state.value);
    const option = options[index];

    return (
      <DropDownWrapper
        opener={(toggle, isOpen) => (
          <Button
            isOpen={isOpen}
            onClick={toggle}
          >
            {option.label}
          </Button>
        )}
      >
        <Dropdown>
          <List
            onChange={this.onChange}
            options={options}
            currentValue={this.state.value}
          />
        </Dropdown>
      </DropDownWrapper>
    );
  }
}

export default Select;
