import styled from 'styled-components';

import colors from '@styles/colors';

interface Props {
  outlined?: boolean;
}

export default styled.button<Props>`
  background: ${props => (props.outlined ? 'transparent' : colors.twitter)};
  color: ${props => (props.outlined ? colors.twitter : colors.white)};
  border: ${props => (props.outlined ? `1px solid ${colors.twitter}` : 'none')};

  padding: 16px;
  border-radius: 25px;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  outline: 0;

  &:hover {
    background: ${props =>
      props.outlined ? colors.twitterDarkHover : colors.twitterLightHover};
  }
`;
