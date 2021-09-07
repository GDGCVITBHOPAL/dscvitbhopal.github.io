import React from "react";
import {
  SiDiscord,
  SiTwitter,
  SiGithub,
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiYoutube,
  SiMedium,
} from "react-icons/si";
import styled from "styled-components";

import { Container } from "../global";

const CommonFooter = () => (
  <Container>
    <MobileTitle>
      Made with ❤️ by DSC Web Team | Contribute to our
      <GithubATag href="https://github.com/DSCVITBHOPAL/dscvitbhopal.github.io">
        {" "}
        Github
      </GithubATag>
    </MobileTitle>
    <Flex>
      <Title>
        Made with ❤️ by Web Team | Contribute to our
        <GithubATag href="https://github.com/DSCVITBHOPAL/dscvitbhopal.github.io">
          {" "}
          Github
        </GithubATag>
      </Title>
      <a href="https://medium.com/dsc-vit-bhopal" target="_blank">
        <Icon>
          <SiMedium color="#000" />
        </Icon>
      </a>
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
      <a href="https://github.com/DSCVITBHOPAL" target="_blank">
        <Icon>
          <SiGithub color="#333" />
        </Icon>
      </a>
      <a href="https://discord.gg/3ufQSct" target="_blank">
        <Icon>
          <SiDiscord color="#7289da" />
        </Icon>
      </a>
      <a href="https://www.linkedin.com/company/dscvitbhopal" target="_blank">
        <Icon>
          <SiLinkedin color="#0077b5" />
        </Icon>
      </a>
    </Flex>
  </Container>
);

export default CommonFooter;

const Title = styled.div`
  font-size: 15px;
  font-weight: bolder;
  text-align: left;
  padding-top: 0.5rem;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    font-size: 8px;
  }
  @media (max-width: ${(props) => props.theme.screen.xs}) {
    font-size: 10px;
  }
`;

const MobileTitle = styled.div`
  display: none;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    display: block;
    font-weight: bolder;
    text-align: center;
    font-size: 15px;
    padding-bottom: 1.5rem;
  }
  @media (max-width: ${(props) => props.theme.screen.xs}) {
    display: block;
    font-size: 10px;
    font-weight: bolder;
    text-align: center;
    padding: 1.5rem 0;
  }
`;

const Flex = styled.div`
  display: grid;
  grid-template-columns: 30fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;
  margin: 100px auto 30px auto;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    display: none;
  }
`;

const GithubATag = styled.a`
  text-decoration: none;
  color: #0099ff;
`;

const Icon = styled.div`
  background: white;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 1.2rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.03);
  &:hover {
    cursor: pointer;
  }
`;
