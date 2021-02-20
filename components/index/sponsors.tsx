import React from "react";
import styled from "styled-components";
import sponsors from "../../data/sponsors.json";

import { Section, Container } from "../global";

const Sponsors = () => (
  <Section id="sponsors">
    <Container>
      <TextGroup>
        <Title>Our Sponsors</Title>
        <CardContainer>
          {sponsors.map((sponsor, id) => (
            <Card>
              <Image src={sponsor.image} alt={sponsor.name}></Image>
              <Name>{sponsor.name}</Name>
            </Card>
          ))}
        </CardContainer>
      </TextGroup>
    </Container>
  </Section>
);

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
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
  height: 50%;
  flex: 1;
`;

const Name = styled.h3`
  color: black;
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
