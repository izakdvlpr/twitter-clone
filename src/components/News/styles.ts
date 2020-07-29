import styled from 'styled-components';

import colors from '@styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 14px;

  > span {
    color: ${colors.gray};

    margin-bottom: 3px;
  }
`;
