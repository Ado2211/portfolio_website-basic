import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  function handleClick() {
    document.getElementById("about").addEventListener("click", myFunction);
      function myFunction() {
        window.location.href="http://programminghead.com";
      }
  },

  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps.
        </SectionText>
       
      </LeftSection>
    </Section>
  </>
);

export default Hero;