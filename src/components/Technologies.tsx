import styled from "styled-components";

const TechnologiesContainer = styled.div`
  background-color: #F5F5F7;
  color: #e47676;
  padding: 40px 20px;
  text-align: center;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
  justify-items: center;
  align-items: center;
  gap: 10px;
  padding: 40px 20px;
  background-color: #2b2d42;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 10px rgba(0, 0, 0, 0.05);
`;

const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;

  img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
`;

const Technologies = () => (
    <section id="skills">
        <TechnologiesContainer>
            <TechGrid>
                <TechItem>
                    <img src="/assets/technologies/react.png" alt="React.js" />
                </TechItem>
                <TechItem>
                    <img src="/assets/technologies/javascript.png" alt="JavaScript" />
                </TechItem>
                <TechItem>
                    <img src="/assets/technologies/html.svg" alt="HTML" />
                </TechItem>
                <TechItem>
                    <img src="/assets/technologies/css.png" alt="CSS" />
                </TechItem>
                <TechItem>
                    <img src="/assets/technologies/typescript.png" alt="TypeScript" />
                </TechItem>
                <TechItem>
                    <img src="/assets/technologies/git.png" alt="Git" />
                </TechItem>
                {/* TODO: add more skills */}
                {/* <TechItem>
          <img src="/assets/technologies/sass.png" alt="Sass" />
        </TechItem> */}
                <TechItem>
                    <img src="/assets/technologies/jest.png" alt="Jest" />
                </TechItem>
            </TechGrid>
        </TechnologiesContainer>
    </section>
);

export default Technologies;
