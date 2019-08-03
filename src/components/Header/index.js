import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '~/assets/barberapplogosmall.svg';

import Notifications from '~/components/Notifications';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={Logo} alt="BarberApp" />
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Matheus Quintino</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Matheus Quintino"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
