import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';

import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        We use agile methodologies & the latest technology to develop superior web sites and take your business to the next level.
        </SectionText>
       
      </LeftSection>
    </Section>
  </>
);

export default Hero;