import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,  
  LocationIcon,
  CakeIcon,
  Followage
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        {/* <EditButton oulined>Editar perfil</EditButton> */}

        <h1>Zev</h1>
        <h2>@zevdvlpr</h2>

        <p>
          Developer at <a href="https://rocketseat.com.br">@Rocketseat</a>
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
    </Container>
  );
};

export default ProfilePage;
