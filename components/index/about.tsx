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
            Developer Student Clubs is an initiative of Google Developers.
            <br />
            Google collaborates with DSC Leads once a year who are pursuing an
            undergraduate or graduate university degree and supports them as
            they start and grow their on-campus community. The DSC program is a
            grassroots channel through which Google provides development skills,
            mobile and web development skills for students, towards
            employability. DSC activities are targeted at University students
            and others including faculty members who want to learn development
            skills & work to solve real-life problems. We at DSC — VIT Bhopal
            look forward to form a community where we are able to convert our
            knowledge into real time application , help each student to develop
            in different fields of technology and make use of our knowledge to
            build something that helps local businesses around us as well as
            their community.
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
