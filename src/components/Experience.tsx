import styled from 'styled-components';
import { Title } from './typography/Typography';
import { LazyImage } from './lazyImage/LazyImage';

const ExperienceContainer = styled.div`
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
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const Experience = () => (
  <section id="experience">
    <ExperienceContainer>
      <ImageContainer>
        <LazyImage
          src="/assets/experience.svg"
          alt="Experience"
        />
      </ImageContainer>
      <TextContent>
        <Title>Experience</Title>
        <ExperienceBoxes />
      </TextContent>
    </ExperienceContainer>
  </section>
);

export default Experience;


const ExperienceBoxesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
`;

const ExperienceBox = styled.div`
  position: relative;
  background-color: white;
  border: 2px solid #E47676;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);

  h5 {
    margin-bottom: 5px;
  }
`;

const ExperienceBoxes = () => (
  <ExperienceBoxesContainer>
    <ExperienceBox>
      <h5>07/2019 - Present</h5>
      <h3>Front-end Developer at Loqr S.A.</h3>
      <p>I developed and maintained over 5 React web applications, focusing on stability and scalability. I adopted a mobile-first approach to improve responsiveness and worked closely with design teams (e.g., Figma) to create responsive, cross-browser pages. I also contributed to a component library with Storybook, improving UI consistency and streamlining development. Collaborating with back-end developers, I integrated APIs, handled code maintenance, and ensured smooth project delivery.</p>
    </ExperienceBox>
    <ExperienceBox>
      <h5>03/2019 - 07/2019</h5>
      <h3>Intern at Loqr S.A.</h3>
      <p>I researched and implemented tools for automating functional tests, focusing on TDD and BDD methodologies. Worked with tools like Postman, Jest, Jest-Cucumber, and Pact to streamline testing processes. Contributed to integrating Jest into project pipelines, improving collaboration and enhancing automation workflows.</p>
    </ExperienceBox>
  </ExperienceBoxesContainer>
);