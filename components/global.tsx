import styled from "styled-components";

export const Section = styled.section`
  padding: 5rem 0rem;
  
`;

export const Container = styled.div`
  margin: 0px auto;
  /* Extra small devices (phones, 575px and down) */
  @media (max-width: ${(props) => props.theme.screen.xs}) {
    padding: 0rem 2rem;
  }

  /* Small devices (portrait tablets and large phones, 575px and up) */
  @media (min-width: ${(props) => props.theme.screen.xs}) {
    max-width: 520px;
  }

  /* Medium devices (landscape tablets, 767px and up) */
  @media (min-width: ${(props) => props.theme.screen.sm}) {
    max-width: 700px;
  }

  /* Large devices (laptops/desktops, 991px and up) */
  @media (min-width: ${(props) => props.theme.screen.md}) {
    max-width: 900px;
  }

  /* Extra large devices (large laptops and desktops, 1199px and up) */
  @media (min-width: ${(props) => props.theme.screen.lg}) {
    max-width: 1100px;
  }
`;
