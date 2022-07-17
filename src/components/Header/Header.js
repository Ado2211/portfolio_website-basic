import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', marginBottom:'20px', color:"white",fontSize:'22px' }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link id='about' href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>   
      <li>
        <Link id='footer' href="#footer">
          <NavLink>Contact</NavLink>
        </Link>
      </li>      
    </Div2>
      <Div3>
        <SocialIcons href=""> 
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/muhamed-ku%C4%8Dlar-209a0b237/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="">
          <AiFillFacebook size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
