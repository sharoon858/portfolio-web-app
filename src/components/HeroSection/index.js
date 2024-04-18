import React from 'react';
import HeroBgAnimation from '../HeroBgAnimation'; // Assuming HeroBgAnimation is a component
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  SocialMediaIcons, // Assuming SocialMediaIcons exists
  SocialMediaIcon, // Assuming SocialMediaIcon exists
  ResumeButton,
} from './HeroStyle'; // Assuming HeroStyle provides styled components

import HeroImg from '../../images/sharoon.jpg';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
  return (
    <HeroContainer id="about">
      <HeroBg>
        <HeroBgAnimation />
      </HeroBg>

      <HeroInnerContainer>
        <HeroLeftContainer>
          <Title>Hi, I am <br /> {Bio.name}</Title>

          <TextLoop>
            I am a <Span>
              <Typewriter
                options={{
                  strings: Bio.roles, // Array of roles to cycle through
                  autoStart: true,
                  loop: true,
                }}
              />
            </Span>
          </TextLoop>

          <SubTitle>{Bio.description}</SubTitle>
          <ResumeButton href={Bio.resume} target="_blank">
            Check Resume
          </ResumeButton>
          {/* Add Social Media Icons here (if needed) */}
          {/* <SocialMediaIcons>
            {/* Social media links and icons go here */}
          {/* </SocialMediaIcons> */}
        </HeroLeftContainer>

        <HeroRightContainer>
          <Img src={HeroImg} alt="Hero Image" />
        </HeroRightContainer>
      </HeroInnerContainer>
    </HeroContainer>
  );
};

export default HeroSection;
