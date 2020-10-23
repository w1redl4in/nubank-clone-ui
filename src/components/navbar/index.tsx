import React from 'react';
import { LogIn } from '@styled-icons/evaicons-solid/LogIn';
import * as NavbarS from './styles';

const Navbar: React.FC = () => {
  return (
    <NavbarS.Container>
      <NavbarS.WrapperOne>
        <NavbarS.TransparentLink>
          <NavbarS.NuLogo src="https://logodownload.org/wp-content/uploads/2019/08/nubank-logo-3.png" />
        </NavbarS.TransparentLink>
        <NavbarS.TransparentLink primary>Ínicio</NavbarS.TransparentLink>
        <NavbarS.TransparentLink>Conta digital</NavbarS.TransparentLink>
        <NavbarS.TransparentLink>Cartão de crédito</NavbarS.TransparentLink>
        <NavbarS.TransparentLink>Pix</NavbarS.TransparentLink>
        <NavbarS.TransparentLink round>novo</NavbarS.TransparentLink>
        <NavbarS.TransparentLink>Rewards</NavbarS.TransparentLink>
        <NavbarS.TransparentLink>Empréstimo</NavbarS.TransparentLink>
        <NavbarS.TransparentLink>Conta PJ</NavbarS.TransparentLink>
        <NavbarS.TransparentLink>Sobre nós</NavbarS.TransparentLink>
        <NavbarS.TransparentLink>Carreiras</NavbarS.TransparentLink>
      </NavbarS.WrapperOne>
      <NavbarS.WrapperTwo>
        <NavbarS.LoginButton>
          Login
          <LogIn size={30} />
        </NavbarS.LoginButton>
        <NavbarS.IWannaBeNubank>Quero ser Nubank</NavbarS.IWannaBeNubank>
      </NavbarS.WrapperTwo>
    </NavbarS.Container>
  );
};

export default Navbar;
