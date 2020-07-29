import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '@components/List';
import FollowSuggestion from '@components/FollowSuggestion';
import News from '@components/News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>        
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion name="Luiz Batanero" nickname="@luizbatanero" />,
              <FollowSuggestion name="Luke Morales" nickname="@lukemorales" />,
              <FollowSuggestion name="Camila Magalhães" nickname="@camilaamgl" />,
            ]}
          />

          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />]}
          />
          
          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />]}
          />
          
          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />]}
          />
          
          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
