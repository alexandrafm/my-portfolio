import styled from "styled-components";

const ContactsContainer = styled.section`
  padding: 40px 20px;
  text-align: center;
  background-color: #2b2d42;
  color: #FFF;
`;

const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const ContactLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  color: #333;
  transition: color 0.3s;

  img {
    height: 40px;
    margin-bottom: 10px;
  }
`;

const Contacts = () => (
    <ContactsContainer id="contacts">
        <h2>Contacts</h2>
        <p>Feel free to reach out via the links below:</p>
        <ContactLinks>
            <ContactLink href="https://www.linkedin.com/in/alexandrafmonteiro/" target="_blank" aria-label="LinkedIn">
                <img src="/assets/contacts/linkedin.png" alt="LinkedIn" />
            </ContactLink>
            {/* TODO: colocar email */}
            <ContactLink href="https://github.com/alexandrafm/my-portfolio" target="_blank" aria-label="GitHub">
                <img src="/assets/contacts/github.png" alt="GitHub" />
            </ContactLink>
        </ContactLinks>
    </ContactsContainer>
);

export default Contacts;
