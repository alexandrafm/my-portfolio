import styled from "styled-components";

const TechnologiesContainer = styled.div`
  background-color: #2b2d42;
  color: #e47676;
  padding: 20px;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 10px rgba(0, 0, 0, 0.05);
  margin: 40px auto;
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TechFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;

  img {
    width: 60px;
    height: 60px;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 768px) {
      width: 45px;
      height: 45px;
    }
  }
`;

const Technologies = () => (
    <section id="skills">
        <TechnologiesContainer>
            <TechFlex>
                <TechItem>
                    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/technologies/react.svg" alt="React.js" />
                    </a>
                </TechItem>
                <TechItem>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/technologies/javascript.svg" alt="JavaScript" />
                    </a>
                </TechItem>
                <TechItem>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/technologies/html5.svg" alt="HTML" />
                    </a>
                </TechItem>
                <TechItem>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/technologies/css.svg" alt="CSS" />
                    </a>
                </TechItem>
                <TechItem>
                    <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/technologies/typescript.svg" alt="TypeScript" />
                    </a>
                </TechItem>
                <TechItem>
                    <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/technologies/git.svg" alt="Git" />
                    </a>
                </TechItem>
                <TechItem>
                    <a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/technologies/jest.svg" alt="Jest" />
                    </a>
                </TechItem>
                <TechItem>
                    <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/technologies/sass.svg" alt="Sass" />
                    </a>
                </TechItem>
                <TechItem>
                    <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/technologies/figma.svg" alt="Figma" />
                    </a>
                </TechItem>
                <TechItem>
                    <a href="https://storybook.js.org/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/technologies/storybook.svg" alt="Storybook" />
                    </a>
                </TechItem>
            </TechFlex>
        </TechnologiesContainer>
    </section>
);

export default Technologies;
