import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";

import animationData from "../../lotties/victory.json";

import { Section, Container } from "../global";

const Header = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <Section id="home">
      <Container>
        <Flex>
          <TextGroup>
            <Title>Developer Student Clubs</Title>
            <SubTitle>Vellore Institute of Technology, Bhopal</SubTitle>
            <Info>A community which inspires thousands.</Info>
          </TextGroup>
          <ImageGroup>
            <LotteWrapper>
              <Lottie options={defaultOptions} />
            </LotteWrapper>
          </ImageGroup>
        </Flex>
      </Container>
    </Section>
  );
};

export default Header;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    flex-direction: column;
  }
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 45px;
  font-weight: bolder;
  margin-bottom: 1rem;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    font-size: 38px;
  }
  @media (max-width: ${(props) => props.theme.screen.xs}) {
    font-size: 30px;
  }
`;

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: bolder;
  margin-bottom: 3rem;
`;

const Info = styled.div`
  font-size: 25px;
`;

const ImageGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LotteWrapper = styled.div`
  width: 450px;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${(props) => props.theme.screen.xs}) {
    width: 360px;
  }
`;
