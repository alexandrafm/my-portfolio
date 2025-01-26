import styled from 'styled-components';
import { PrimaryButton } from './buttons/PrimaryButton';
import { SubTitle, Title } from './typography/Typography';

const AboutMeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  gap: 20px;
  flex-wrap: wrap;
  margin: 0 auto;
  background-color: #F5F5F7;

  @media (min-width: 769px) {
    flex-direction: row;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const TextContent = styled.div`
  flex: 1;
  max-width: 600px;

  p {
    margin-bottom: 20px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    order: -1;
  }
`;

const StyledImage = styled.img`
    height: auto;
    margin: 10px;
    width: 100%;
    border: 5px solid #E47676;
    padding: 10px;
`;

const AboutMe = () => (
  <section id="about">
    <AboutMeContainer>
      <TextContent>
        <Title>About Me</Title>
        <SubTitle>Hi, I'm Alexandra!</SubTitle>
        <p>
          I'm a front-end developer with over 5 years of experience creating responsive and user-friendly websites. I love turning ideas into seamless, intuitive interfaces using React, JavaScript, TypeScript, HTML, and CSS, always keeping performance and accessibility at the heart of my work.
        </p>
        <p>
          I thrive in collaborative environments and enjoy solving complex challenges. I'm always interested in learning new technologies and techniques to enhance my skills and deliver high-quality solutions.
        </p>
        <PrimaryButton href="https://www.linkedin.com/in/alexandrafmonteiro/" target="_blank">
          Visit my LinkedIn
        </PrimaryButton>
      </TextContent>

      <ImageContainer>
        <StyledImage
          src="/assets/me.jpeg"
          alt="Me"
        />
      </ImageContainer>
    </AboutMeContainer>
  </section>
);

export default AboutMe;



