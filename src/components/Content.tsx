import AboutMe from './AboutMe';
import Technologies from './Technologies';
import Contacts from './Contacts';
import Experience from './Experience';
import styled from 'styled-components';

const ContentContainer = styled.main`
    padding-top: 80px;
    background-color: #F5F5F7;
`;

const Content = () => (
    <ContentContainer>
        <AboutMe />
        <Technologies />
        <Experience />
        <Contacts />
    </ContentContainer>
);

export default Content;

