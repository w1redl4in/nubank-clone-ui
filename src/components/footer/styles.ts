import styled from 'styled-components';
import {
  DiagonalArrowRightUpOutline,
  ArrowForwardOutline,
} from '@styled-icons/evaicons-outline/';

export const Container = styled.footer`
  height: 100vh;
  background: ${(props) => props.theme.colors.black};
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50vh;
  padding: 80px 40px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.white};
  height: 250px;
  width: 370px;
`;

export const ColumnTitle = styled.h1`
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 400;
`;

export const ColumnDescription = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 35px;
`;

export const Description = styled.span`
  display: flex;
  align-items: center;

  font-weight: 500;
  font-size: 18px;

  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const TiltedArrow = styled(DiagonalArrowRightUpOutline).attrs({
  size: '25',
})`
  color: ${(props) => props.theme.colors.white};

  ${Description}:hover & {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const Arrow = styled(ArrowForwardOutline).attrs({
  size: '25',
})`
  color: ${(props) => props.theme.colors.white};

  ${Description}:hover & {
    color: ${(props) => props.theme.colors.secondary};
  }
`;
