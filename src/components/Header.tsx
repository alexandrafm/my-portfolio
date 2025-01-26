import { useState } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  background-color: #F5F5F7;
  color: #FFF;
  padding: 20px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  width: 110px;
  height: 120px;
  margin-right: 20px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.a`
  color:#E47676;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #D06666;
  }
`;


const HamburgerButton = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;

  span {
    background-color: #E47676;
    height: 4px;
    width: 100%;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  background-color: #F5F5F7;
  padding: 20px;
  text-align: right;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <HeaderContainer>
            <Logo>
                <img src="/assets/logo_transparent.png" alt="Logo" />
            </Logo>
            <HamburgerButton onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </HamburgerButton>
            <Nav>
                <NavItems />
            </Nav>
            {isMenuOpen && (
                <MobileMenu>
                    <NavItems />
                </MobileMenu>
            )}
        </HeaderContainer>
    );
};

export default Header;

const NavItems = () => {
    return (
        <>
            <NavItem href="#about">About Me</NavItem>
            <NavItem href="#skills">Skills</NavItem>
            <NavItem href="#experience">Experience</NavItem>
            <NavItem href="#contact">Contact</NavItem>
        </>
    )
}