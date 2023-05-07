import React from "react";
import "./Header.css";
import styled from 'styled-components';

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 0 50px;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
const Logo = styled.a`
    font-size: 32px;
    font-weight: bold;
    color: #000;
    text-decoration: none;
`;
const Nav = styled.nav`
    display: flex;
`;
const NavItem = styled.a`
    margin-left: 50px;
    font-size: 18px;
    font-weight: bold;
    color: #000;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: #999;
    }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Logo href="/">My Portfolio</Logo>
      <Nav>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/projects">Projects</NavItem>
        <NavItem href="/contact">Contact</NavItem>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;
