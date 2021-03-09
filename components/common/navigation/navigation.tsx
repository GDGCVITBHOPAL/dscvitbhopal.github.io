import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";

import { lightTheme } from "../../../styles/theme";

import {
  Nav,
  NavItem,
  Brand,
  NavListWrapper,
  MobileMenu,
  Mobile,
  ActionsContainer,
} from "./style";

import Logo from "./logo";
import { Container } from "../../global";

const NAV_ITEMS = [
  { title: "Home", link: "/" },
  { title: "Team", link: "/team" },
  { title: "Articles", link: "/articles" },
  { title: "Events", link: "/events" },
  { title: "Badges", link: "/badges" },
  { title: "Certificates", link: "/certificates" }
];

const Navbar = (props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const router = useRouter();

  const handleScroll = (event) => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 32) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      {NAV_ITEMS.map(({ title, link }) => (
        <NavItem
          key={title}
          onClick={closeMobileMenu}
          className={router.pathname == link ? "active" : ""}
        >
          <Link href={link}>{title}</Link>
        </NavItem>
      ))}
    </NavListWrapper>
  );

  return (
    <Nav {...props} scrolled={hasScrolled} mobile={mobileMenuOpen}>
      <ContainerStyled>
        <Brand onClick={closeMobileMenu}>
          <Link href="/">
            <a>
              <Logo theme={props.theme} />
            </a>
          </Link>
        </Brand>
        <Mobile>
          <button
            onClick={toggleMobileMenu}
            style={{
              color: props.theme.color.text,
              background: "none",
              outline: "none",
              border: "none",
              margin: "0px",
              padding: "0px",
              fontSize: "24px",
            }}
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </Mobile>
        <Mobile hide>{getNavList({})}</Mobile>
        <ActionsContainer onClick={props.toggleTheme}>
          {props.theme === lightTheme ? <FiMoon /> : <FiSun />}
        </ActionsContainer>
      </ContainerStyled>
      <Mobile>
        {mobileMenuOpen && (
          <MobileMenu>
            <Container>{getNavList({ mobile: true })}</Container>
          </MobileMenu>
        )}
      </Mobile>
    </Nav>
  );
};

const ContainerStyled = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0rem;
  
  @media (max-width: ${(props) => props.theme.screen.xs}) {
    padding: 1rem 1rem;
  }
`;

export default Navbar;
