import React from 'react';
import styled from 'styled-components';

import defaultTheme from './defaultTheme.json';

const InputRange = styled.input`
  width: 100%;
  height: 34px;
  padding: 0;
  margin: 0;

  background: transparent;

  -webkit-appearance: none;
  -moz-appearance: none;

/* Focus styles */
  &:focus {
    outline: none;
  }
  &::-moz-focus-outer {
    border: 0;
  }

/* Track styles */
  &::-webkit-slider-runnable-track {
    height: 2px;
    border: none;
    border-radius: 1px;

    background-color: ${({ theme }) => theme.inputRange_trackColor};
  }
  &::-moz-range-track {
    height: 2px;
    border: none;
    border-radius: 1px;

    background-color: ${({ theme }) => theme.inputRange_trackColor};
  }
  &::-ms-track {
    height: 2px;
    border: none;
    border-radius: 1px;

    background-color: ${({ theme }) => theme.inputRange_trackColor};
  }
  &::-ms-fill-lower {
    background-color: ${({ theme }) => theme.inputRange_trackColor};
  }
  &::-ms-fill-upper {
    background-color: ${({ theme }) => theme.inputRange_trackColor};
  }
  &:focus::-ms-fill-lower {
    background-color: ${({ theme }) => theme.inputRange_trackColor};
  }
  &:focus::-ms-fill-upper {
    background-color: ${({ theme }) => theme.inputRange_trackColor};
  }

/* Thumb styles */
  &::-webkit-slider-thumb {
    width: ${({ theme }) => theme.inputRange_thumbWidth};
    height: ${({ theme }) => theme.inputRange_thumbHeight};
    border-style: solid;
    border-width: ${({ theme }) => theme.inputRange_thumbBorderWidth};
    border-color: ${({ theme }) => theme.inputRange_thumbBorderColor};
    border-radius: ${({ theme }) => theme.inputRange_thumbBorderRadius};

    transform: translateY(calc(-50% + 1px)); /* Thumb position fix */

    background-color: ${({ theme }) => theme.inputRange_thumbBackgroundColor};
    -webkit-appearance: none;

    &:hover {
      cursor: pointer;
    }
  }
  &::-moz-range-thumb {
    width: ${({ theme }) => theme.inputRange_thumbWidth};
    height: ${({ theme }) => theme.inputRange_thumbHeight};
    border-style: solid;
    border-width: ${({ theme }) => theme.inputRange_thumbBorderWidth};
    border-color: ${({ theme }) => theme.inputRange_thumbBorderColor};
    border-radius: ${({ theme }) => theme.inputRange_thumbBorderRadius};

    background-color: ${({ theme }) => theme.inputRange_thumbBackgroundColor};
    -moz-appearance: none;

    &:hover {
      cursor: pointer;
    }
  }
  &::-ms-thumb {
    width: ${({ theme }) => theme.inputRange_thumbWidth};
    height: ${({ theme }) => theme.inputRange_thumbHeight};
    border-style: solid;
    border-width: ${({ theme }) => theme.inputRange_thumbBorderWidth};
    border-color: ${({ theme }) => theme.inputRange_thumbBorderColor};
    border-radius: ${({ theme }) => theme.inputRange_thumbBorderRadius};

    background-color: ${({ theme }) => theme.inputRange_thumbBackgroundColor};

    &:hover {
      cursor: pointer;
    }
  }

  &::-ms-tooltip {
    display: none;
  }
`;

InputRange.defaultProps = {
  theme: defaultTheme
};

/**
 * @component
 */

export default props => <InputRange type="range" {...props} />;
