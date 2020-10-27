import React from 'react';
import { FirstLine, SecondLine } from '../../data/footer';
import * as FooterS from './styles';

const Footer: React.FC = () => {
  return (
    <FooterS.Container>
      <FooterS.Line>
        {FirstLine.map((footer) => (
          <FooterS.Column>
            <FooterS.ColumnTitle>{footer.title}</FooterS.ColumnTitle>
            <FooterS.ColumnDescription>
              {footer.links.map((link) => (
                <FooterS.Description>
                  {link}
                  {footer.hasTiltedArrow && <FooterS.TiltedArrow />}
                  {footer.hasArrow && <FooterS.Arrow />}
                </FooterS.Description>
              ))}
            </FooterS.ColumnDescription>
          </FooterS.Column>
        ))}
      </FooterS.Line>
      <FooterS.Line>
        {SecondLine.map((footer) => (
          <FooterS.Column>
            <FooterS.ColumnTitle>{footer.title}</FooterS.ColumnTitle>
            <FooterS.ColumnDescription>
              {footer.links.map((link) => (
                <FooterS.Description>
                  {link}
                  {footer.hasTiltedArrow && <FooterS.TiltedArrow />}
                </FooterS.Description>
              ))}
            </FooterS.ColumnDescription>
          </FooterS.Column>
        ))}
      </FooterS.Line>
    </FooterS.Container>
  );
};

export default Footer;
