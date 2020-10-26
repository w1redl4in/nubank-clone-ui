import styled from 'styled-components';

interface ContentProps {
  backgroundColor: string;
  hasBackground: boolean;
  background: string;
}

interface ImageProps {
  isImageHand: boolean;
  hasBackground: boolean;
}

export const Container = styled.main<ContentProps>`
  height: 100vh;
  background: ${(props) => props.backgroundColor};
  background-image: ${(props) =>
    props.hasBackground && `url(${props.background})`};
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ColumnTwo = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
  color: white;

  @media screen and (max-width: 950px) {
    width: 0%;
  }
`;

export const ColumnOne = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
  color: white;
  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;

export const MainTitle = styled.section`
  display: flex;
  justify-content: flex-start;
  width: 500px;
`;

export const MainText = styled.section`
  display: flex;
  justify-content: flex-start;
  max-width: 500px;
  align-items: center;
  margin-bottom: 8px;
`;

export const MainSubText = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 500px;
`;

export const TypographyH1 = styled.h1`
  font-size: 48px;
  font-weight: 500;
  color: ${(props) => props.color};
  margin-bottom: 16px;
`;

export const TypographySpan = styled.span`
  font-size: 18px;
  color: ${(props) => props.color};
  margin-right: 8px;
  font-weight: 500;

  cursor: pointer;
`;

export const Image = styled.img<ImageProps>`
  width: ${(props) => (props.isImageHand ? '300px' : '480px')};
  height: ${(props) => (props.isImageHand ? '90vh' : '530px')};
  margin-top: ${(props) => (props.isImageHand ? '10vh' : 'none')};
  display: ${(props) => props.hasBackground && 'none'};

  @media screen and (max-width: 950px) {
    display: none;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 500px;
`;

export const Button = styled.button`
  width: 196px;
  height: 48px;
  padding: 0 1.25rem;
  color: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.white};
  margin-top: 30px;
  border: 0;
  font-size: 18px;
  font-weight: 500;
  border-radius: 6.25rem;

  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 500;
  color: ${(props) => props.color};
`;
