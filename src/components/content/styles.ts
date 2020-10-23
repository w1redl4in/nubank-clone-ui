import styled from 'styled-components';

export const Container = styled.main`
  height: calc(100vh - 80px);
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ColumnOne = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
  color: white;
`;

export const ColumnTwo = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
  color: white;
`;

export const MainTitle = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 350px;
  height: 220px;
  margin-bottom: 8px;
`;

export const MainSubtitle = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 350px;
`;

export const TypographyH1 = styled.h1`
  font-size: 48px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 16px;
`;

export const TypographySpan = styled.span`
  font-size: 18px;
  color: ${(props) => props.theme.colors.white};
  margin-right: 8px;

  cursor: pointer;
`;

export const Image = styled.img`
  width: 480px;
  height: 530px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 350px;
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
