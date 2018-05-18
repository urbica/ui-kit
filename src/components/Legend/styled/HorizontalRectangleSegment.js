import PropTypes from 'prop-types';
import styled from 'styled-components';

import defaultTheme from '../defaultTheme.json';

const HorizontalRectangleSegment = styled.div`
  flex: 1;

  height: ${({ theme }) => theme.horizontalRectangleSegment_height};

  background: ${({ color }) => color};

  &:first-child {
    border-top-left-radius:
      ${({ theme }) => theme.horizontalRectangleSegment_borderRadius};
    border-bottom-left-radius:
      ${({ theme }) => theme.horizontalRectangleSegment_borderRadius};
  }

  &:last-child {
    border-top-right-radius:
      ${({ theme }) => theme.horizontalRectangleSegment_borderRadius};
    border-bottom-right-radius:
      ${({ theme }) => theme.horizontalRectangleSegment_borderRadius};
  }
`;

HorizontalRectangleSegment.propTypes = {
  color: PropTypes.string.isRequired
};

HorizontalRectangleSegment.defaultProps = {
  theme: defaultTheme
};

export default HorizontalRectangleSegment;
