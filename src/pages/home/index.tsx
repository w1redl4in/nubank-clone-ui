import React from 'react';
import ContentOne from '../../components/content';
import ContentTwo from '../../components/content';
import ContentThree from '../../components/content';
import ContentFour from '../../components/content';
import ContentFive from '../../components/content';
import ContentSix from '../../components/content';
import ContentSeven from '../../components/content';
import ContentEight from '../../components/content';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import {
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  SectionFive,
  SectionSix,
  SectionSeven,
  SectionEight,
} from '../../data/section';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <ContentOne {...SectionOne} />
      <ContentTwo {...SectionTwo} />
      <ContentThree {...SectionThree} />
      <ContentFour {...SectionFour} />
      <ContentFive {...SectionFive} />
      <ContentSix {...SectionSix} />
      <ContentSeven {...SectionSeven} />
      <ContentEight {...SectionEight} />
      <Footer />
    </>
  );
};

export default Home;
