import React from "react";
import {
  SiDiscord,
  SiTwitter,
  SiGithub,
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiYoutube,
} from "react-icons/si";
import styled from "styled-components";

import { Container, Section } from "../global";

const Footer = () => (
  <Wrapper id="social">
    <Container>
      <TextGroup>
        <Title>Stay updated</Title>
        <Flex>
          <a href="https://www.facebook.com/dscvitbhopal" target="_blank">
            <Icon>
              <SiFacebook color="#3b5999" />
            </Icon>
          </a>
          <a href="https://twitter.com/dsc_vit" target="_blank">
            <Icon>
              <SiTwitter color="#55acee" />
            </Icon>
          </a>
          <a href="https://www.instagram.com/dscvitbhopal" target="_blank">
            <Icon>
              <SiInstagram color="#e1306c" />
            </Icon>
          </a>
          <a
            href="https://www.youtube.com/channel/UCVr5tPwyUH8rJd5yEhBd94w"
            target="_blank"
          >
            <Icon>
              <SiYoutube color="#cd201f" />
            </Icon>
          </a>
          <a href="https://github.com/DSC-VIT-BHOPAL" target="_blank">
            <Icon>
              <SiGithub color="#333" />
            </Icon>
          </a>
          <a href="https://discord.gg/3ufQSct" target="_blank">
            <Icon>
              <SiDiscord color="#7289da" />
            </Icon>
          </a>
          <a
            href="https://www.linkedin.com/company/dscvitbhopal"
            target="_blank"
          >
            <Icon>
              <SiLinkedin color="#0077b5" />
            </Icon>
          </a>
        </Flex>
      </TextGroup>
    </Container>
  </Wrapper>
);

export default Footer;

const Wrapper = styled(Section)`
  background-color: ${(props) => props.theme.color.background};
  clip-path: polygon(0 3vw, 100% 0, 100% 100%, 0 100%);
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 45px;
  font-weight: bolder;
  text-align: center;
  margin-bottom: 1rem;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    font-size: 38px;
  }
  @media (max-width: ${(props) => props.theme.screen.xs}) {
    font-size: 30px;
  }
`;

const Flex = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;
  margin: 80px auto;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Icon = styled.div`
  background: white;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.03);
  &:hover {
    cursor: pointer;
  }
`;
