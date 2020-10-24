import React from 'react';
import * as ContentS from './styles';
import { ArrowForward } from '@styled-icons/evaicons-solid/ArrowForward';

export interface ContentProps {
  backgroundColor: string;
  hasTitle: boolean;
  title: string;
  titleColor: string;
  mainText: string;
  mainTextColor: string;
  subText: string;
  subTextColor: string;
  hasButton: boolean;
  image: string;
  imageIsHand: boolean;
  hasBackground: boolean;
  background: string;
}

const Content: React.FC<ContentProps> = ({
  backgroundColor,
  mainText,
  subText,
  hasButton,
  image,
  mainTextColor,
  subTextColor,
  title,
  titleColor,
  hasTitle,
  imageIsHand,
  hasBackground,
  background,
}) => {
  return (
    <ContentS.Container
      backgroundColor={backgroundColor}
      hasBackground={hasBackground}
      background={background}
    >
      <ContentS.ColumnOne>
        {hasTitle && (
          <ContentS.MainTitle>
            <ContentS.Title color={titleColor}>{title}</ContentS.Title>
          </ContentS.MainTitle>
        )}
        <ContentS.MainText>
          <ContentS.TypographyH1 color={mainTextColor}>
            {mainText}
          </ContentS.TypographyH1>
        </ContentS.MainText>
        <ContentS.MainSubText>
          <ContentS.TypographySpan color={subTextColor}>
            {subText}
          </ContentS.TypographySpan>
          <ArrowForward size={20} color={subTextColor} />
        </ContentS.MainSubText>
        {hasButton && (
          <ContentS.ButtonWrapper>
            <ContentS.Button>Quero ser Nubank</ContentS.Button>
          </ContentS.ButtonWrapper>
        )}
      </ContentS.ColumnOne>
      <ContentS.ColumnTwo>
        <ContentS.Image
          src={image}
          isImageHand={imageIsHand}
          hasBackground={hasBackground}
        />
      </ContentS.ColumnTwo>
    </ContentS.Container>
  );
};

export default Content;
