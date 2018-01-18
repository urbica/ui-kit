import React from 'react';
import PropTypes from 'prop-types';

import findIndex from '../../utils/findIndex';

import DropDownWrapper from '../DropdownWrapper/DropdownWrapper';
import List from '../List/List';
import Button from './Button';
import Dropdown from './Dropdown';

const Select = ({ value, options, onChange }) => {
  if (!options.length) {
    return null;
  }

  const index = findIndex(options, o => o.value === value);
  const option = index !== -1 ? options[index] : options[0];

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
          onChange={onChange}
          options={options}
          value={value}
        />
      </Dropdown>
    </DropDownWrapper>
  );
};

Select.propTypes = {
  value: PropTypes.node,
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func
};

Select.defaultProps = {
  value: null,
  options: [],
  onChange: () => {}
};

export default Select;
