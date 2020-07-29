import React from 'react';

import Feed from "@components/Feed"

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Zev</h1>
        <h2>@zevdvlpr</h2>

        <p>
          Programmer Full Stack • <a href="https://github.com/zevdvlpr">My Github</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Brazil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 1 de abril de 2003
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>354 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      
      <Feed />
    </Container>
  );
};

export default ProfilePage;
