import styled from "styled-components";

export const Nav = styled.nav`
  padding: 1rem 0rem;
  position: sticky;
  top: 0px;
  z-index: 1000;
  background: ${(p) => p.theme.color.background};
  border-bottom: 1px solid ${(p) => p.theme.color.border};
  transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
`;

type NavListWrapperProps = {
  mobile: boolean;
};

export const NavListWrapper = styled.div<NavListWrapperProps>`
  display: flex;
  flex-direction: row;

  ${({ mobile }) =>
    mobile &&
    `
        flex-direction: column;
        margin-top: 1em;

        > ${NavItem} {
          margin: 0;
          margin-top: 0.75em;
        }
      `};
`;

export const NavItem = styled.div`
  margin: 0rem 0.75rem;
  a {
    opacity: 0.6;
    color: ${(p) => p.theme.color.text};
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: none;
  }
  &.active {
    a {
      opacity: 1;
    }
  }
`;

export const MobileMenu = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1000;
`;

export const Brand = styled.div``;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  &:hover {
    cursor: pointer;
  }
`;

type MobileProps = {
  hide?: boolean;
};

export const Mobile = styled.div<MobileProps>`
  display: none;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    display: block;
    order: -1;
  }

  ${(props) =>
    props.hide &&
    `
    display: block;

    @media (max-width: ${props.theme.screen.md}) {
      display: none;
    }
  `}
`;
