import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';

import Dropdown from '../Dropdown';
import List from '../List';
import Button from './Button';
import Content from './Content';
import findIndex from '../../utils/findIndex';

const Select = ({ value, ...props }) => {
  const options = [...props.options];

  let currentOption;
  if (value !== null) {
    const index = findIndex(options, o => o.value === value);
    if (index !== -1) {
      options[index] = Object.assign({}, options[index], { highlight: true });
      currentOption = options[index];
    }
  }

  return (
    <Dropdown
      renderHandler={({ toggle, toggledOn }) => (
        <Button isOpen={toggledOn} onClick={toggle}>
          {currentOption && currentOption.label}
        </Button>
      )}
      renderContent={({ hide }) => (
        <Content>
          <List items={options} onClick={compose(hide, props.onChange)} />
        </Content>
      )}
    />
  );
};

const ValuePropType = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

const OptionPropType = PropTypes.shape({
  value: ValuePropType.isRequired,
  label: PropTypes.string.isRequired
});

Select.propTypes = {
  value: ValuePropType,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(OptionPropType).isRequired
};

Select.defaultProps = {
  value: null
};

export default Select;
