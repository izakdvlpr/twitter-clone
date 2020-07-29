import React from 'react';
import Layout from '@layout';

import MenuBar from '@components/MenuBar';
import Main from '@components/Main';
import SideBar from '@components/SideBar';


import { Container, Wrapper } from '@styles/pages/home';

const HomePage: React.FC = () => (
  <Layout>
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
        <SideBar />
      </Wrapper>
    </Container>
  </Layout>
);

export default HomePage;
