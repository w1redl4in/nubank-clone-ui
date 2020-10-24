import styled, { css } from 'styled-components';

interface TransparentLinkProps {
  primary?: boolean;
  round?: boolean;
}

export const Container = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 80px;
  background: ${(props) => props.theme.colors.white};
`;

export const WrapperOne = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 100%;
  padding: 0 30px;
`;

export const WrapperTwo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 22%;
  height: 100%;
  padding: 0 30px;
`;

export const TransparentLink = styled.a<TransparentLinkProps>`
  background: transparent;
  color: ${(props) => props.theme.colors.text};
  font-size: 18px;
  font-weight: normal;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  }

  ${(props) =>
    props.primary &&
    css`
      color: ${props.theme.colors.primary};
      font-weight: 500;
    `}

  ${(props) =>
    props.round &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 76px;
      height: 30px;
      border-radius: 1.5rem;
      background: ${props.theme.colors.tertiary};
      color: ${props.theme.colors.black} !important;
    `};
`;

export const LoginButton = styled.span`
  display: flex;
  margin: 5px;
  align-items: center;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 500;

  cursor: pointer;
`;

export const IWannaBeNubank = styled.button`
  border: 0;
  height: 50px;
  outline: 0;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 6.25rem;
  padding: 0 1.25rem;
  color: ${(props) => props.theme.colors.white};
  width: 200px;
  font-size: 18px;
  cursor: pointer;
`;

export const NuLogo = styled.img`
  width: 45px;
`;
