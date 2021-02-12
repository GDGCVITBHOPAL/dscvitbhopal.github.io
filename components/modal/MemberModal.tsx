import React from "react";
import styled from "styled-components";
import { SiGithub, SiLinkedin, SiMedium, SiTwitter } from "react-icons/si";

const MemberModal = ({ member, handleModalToggle }) => {
  return (
    <>
      <Overlay onClick={() => handleModalToggle(null)} />
      <Card>
        <ImageWrapper>
          <Image src={member.profile} />
        </ImageWrapper>
        <Name>{member.name}</Name>
        {member.title && <Title>{member.title}</Title>}
        {member.bio && <Bio>{member.bio}</Bio>}
        <Flex>
          {member.social.medium && (
            <a href={member.social.medium} target="_blank">
              <Icon>
                <SiMedium color="#000000" />
              </Icon>
            </a>
          )}
          {member.social.twitter && (
            <a href={member.social.twitter} target="_blank">
              <Icon>
                <SiTwitter color="#55acee" />
              </Icon>
            </a>
          )}
          {member.social.github && (
            <a href={member.social.github} target="_blank">
              <Icon>
                <SiGithub color="#333" />
              </Icon>
            </a>
          )}
          {member.social.linkedin && (
            <a href={member.social.linkedin} target="_blank">
              <Icon>
                <SiLinkedin color="#0077b5" />
              </Icon>
            </a>
          )}
        </Flex>
      </Card>
    </>
  );
};

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
`;

const Card = styled.div`
  background: ${(p) => p.theme.color.background};
  border: 1px solid ${(p) => p.theme.color.border};
  border-radius: 5px;
  padding: 2rem;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1002;

  max-width: 30rem;
`;

const Image = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    width: 100px;
    height: 100px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
`;

const Name = styled.div`
  font-weight: 700;
  font-size: 25px;
  text-align: center;
  margin-bottom: 1rem;
`;

const Title = styled.div`
  color: ${(p) => p.theme.color.subText};
  font-size: 20px;
  text-align: center;
`;

const Bio = styled.div`
  color: ${(p) => p.theme.color.subText};
  font-size: 16px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;
`;

const Icon = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 50%;
  font-size: 25px;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    font-size: 20px;
    margin: 0.6rem;
  }
`;

export default MemberModal;
