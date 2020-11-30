import React from "react";
import styled from "styled-components";

import { Section, Container } from "../global";

const About = () => {
  return (
    <Wrapper id="about">
      <Container>
        <TextGroup>
          <Title>About</Title>
          <Info>
            Developer Student Clubs are university-based community groups for
            students interested in Google developer technologies.
            <br />
            Students from all undergraduate or graduate programs with an
            interest in growing as a developer are welcome.
          </Info>
        </TextGroup>
      </Container>
    </Wrapper>
  );
};
export default About;

const Wrapper = styled(Section)`
  background-color: ${(props) => props.theme.color.background};
  clip-path: polygon(0 3vw, 100% 0, 100% 100%, 0 100%);
  padding: 10rem 0;
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    align-items: flex-start;
  }
`;

const Title = styled.div`
  font-size: 45px;
  font-weight: bolder;
  margin-bottom: 2rem;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    font-size: 38px;
  }
  @media (max-width: ${(props) => props.theme.screen.xs}) {
    font-size: 30px;
  }
`;

const Info = styled.div`
  font-size: 18px;
  text-align: center;
  line-height: 40px;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    text-align: left;
  }
`;
