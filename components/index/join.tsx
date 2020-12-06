import React from "react";
import styled from "styled-components";

import { Section, Container } from "../global";

import { lightTheme } from "../../styles/theme";

const Join = () => (
  <Section id="join">
    <Container>
      <TextGroup>
        <Title>Be part of the community</Title>
        <Info>
          Visit our community page and RSVP to get notifications right in your
          inbox when we are live next.
        </Info>
        <Flex>
          <a
            href="https://dsc.community.dev/vellore-institute-of-technology-bhopal/"
            target="_blank"
          >
            <Button>Join Us</Button>
          </a>
          <a href="https://discord.gg/3ufQSct" target="_blank">
            <Button>Chat</Button>
          </a>
        </Flex>
      </TextGroup>
    </Container>
  </Section>
);

export default Join;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    align-items: flex-start;
  }

  a {
    text-decoration: none;
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
  max-width: 55rem;
  margin-bottom: 3rem;
  margin-top: 1rem;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    text-align: left;
  }
`;

const Button = styled.div`
  background: ${lightTheme.color.background};
  color: ${lightTheme.color.text};

  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);

  display: flex;
  justify-content: center;
  align-items: center;

  width: 120px;
  height: 60px;

  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;

  cursor: pointer;

  border-radius: 4px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 260px;
`;
