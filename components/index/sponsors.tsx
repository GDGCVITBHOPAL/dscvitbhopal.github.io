import React from "react";
import styled from "styled-components";
import sponsors from "../../data/sponsors.json";

import { Section, Container } from "../global";

const Sponsors = () => (
  <Wrapper id="sponsors">
    <Container>
      <TextGroup>
        <Title>Our Sponsors</Title>
        <CardContainer>
          {sponsors.map((sponsor, id) => (
            <Card key={id}>
              <Image src={sponsor.image} alt={sponsor.name}></Image>
              <Name>{sponsor.name}</Name>
            </Card>
          ))}
        </CardContainer>
      </TextGroup>
    </Container>
  </Wrapper>
);

const Wrapper = styled(Section)`
  background-color: ${(props) => props.theme.color.background};
  clip-path: polygon(0 3vw, 100% 0, 100% 100%, 0 100%);
  padding: 10rem 0;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap; 
`;

const Card = styled.div`
  margin: 1rem 1rem;
  padding: 1rem 1rem;
  flex: 1;
  background: #fff;
  height: 200px;
  width: 250px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 48%;
  flex: 1;
  max-width:-webkit-fill-available;
`;

const Name = styled.h3`
  color: black;
  text-align:center;
`;

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
  //   @media (max-width: ${(props) => props.theme.screen.xs}) {
  //     font-size: 30px;
  //   }
  //
`;

export default Sponsors;
