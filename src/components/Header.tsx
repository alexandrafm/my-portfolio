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
  cursor: pointer;
  width: 30px;
  height: 30px;
  color: #E47676; 

  @media (max-width: 768px) {
    display: flex;
  }

  img {
    width: 100%;
    height: 100%;
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
        <img
          src={isMenuOpen ? '/assets/icons/close.svg' : '/assets/icons/bars.svg'}
          alt={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </HamburgerButton>
      <Nav>
        <NavItems />
      </Nav>
      {isMenuOpen && (
        <MobileMenu>
          <NavItems closeMenu={toggleMenu} />
        </MobileMenu>
      )}
    </HeaderContainer>
  );
};

export default Header;

interface NavItemsProps {
  closeMenu?: () => void;
}

const NavItems = ({ closeMenu }: NavItemsProps) => {
  return (
    <>
      <NavItem href="#about" onClick={closeMenu}>About Me</NavItem>
      <NavItem href="#skills" onClick={closeMenu}>Skills</NavItem>
      <NavItem href="#experience" onClick={closeMenu}>Experience</NavItem>
      <NavItem href="#contacts" onClick={closeMenu}>Contacts</NavItem>
    </>
  )
}