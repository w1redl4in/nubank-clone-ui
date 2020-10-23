import React from 'react';
import * as ContentS from './styles';
import Android from '../../images/android.svg';
import { ArrowForward } from '@styled-icons/evaicons-solid/ArrowForward';

const Content: React.FC = () => {
  return (
    <ContentS.Container>
      <ContentS.ColumnOne>
        <ContentS.MainTitle>
          <ContentS.TypographyH1>
            Pix: um novo jeito de fazer transferências e pagamentos
          </ContentS.TypographyH1>
        </ContentS.MainTitle>
        <ContentS.MainSubtitle>
          <ContentS.TypographySpan>Saiba como funciona</ContentS.TypographySpan>
          <ArrowForward size={20} />
        </ContentS.MainSubtitle>
        <ContentS.ButtonWrapper>
          <ContentS.Button>Quero ser Nubank</ContentS.Button>
        </ContentS.ButtonWrapper>
      </ContentS.ColumnOne>
      <ContentS.ColumnTwo>
        <ContentS.Image src={Android} />
      </ContentS.ColumnTwo>
    </ContentS.Container>
  );
};

export default Content;
