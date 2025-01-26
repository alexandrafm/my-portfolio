import styled from 'styled-components';
import { Title } from './typography/Typography';

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
`;

const StyledImage = styled.img`
  height: auto;
  margin: 10px;
  width: 100%;
  padding: 10px;
`;

const Experience = () => (
    <section id="experience">
        <ExperienceContainer>
            <ImageContainer>
                <StyledImage src="/assets/experience.svg" alt="Experience" />
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
  gap: 40px;
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
`;

const ExperienceBoxes = () => (
    <ExperienceBoxesContainer>
        <ExperienceBox>
            <h3>Experience 1</h3>
            <p>Something 1.</p>
        </ExperienceBox>
        <ExperienceBox>
            <h3>Experience 2</h3>
            <p>Something 2.</p>
        </ExperienceBox>
    </ExperienceBoxesContainer>
);