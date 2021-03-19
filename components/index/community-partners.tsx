import React from "react";
import styled from "styled-components";
import communityPartners from "../../data/community-partners.json";

import { Section, Container } from "../global";

const CommunityPartners = () => (
  <Wrapper id="communitypartners">
    <Container>
      <TextGroup>
        <Title>Community Partners</Title>
        <CardContainer>
          {communityPartners.map((partner, id) => (
            <Card key={id}>
              <Image src={partner.image} alt={partner.name}></Image>
              <Name>{partner.name}</Name>
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
`;

export default CommunityPartners;
