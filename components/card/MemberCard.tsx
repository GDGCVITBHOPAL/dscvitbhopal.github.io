import React from "react";
import styled from "styled-components";

const MemberCard = ({ member, handleModalToggle = null }) => {
  return (
    <Card onClick={() => handleModalToggle(member)}>
      <ImageWrapper>
        <Image src={member.profile} />
      </ImageWrapper>
      <Name>{member.name}</Name>
      <Title>{member.title}</Title>
    </Card>
  );
};

const Card = styled.div`
  background: ${(p) => p.theme.color.background};
  border: 1px solid ${(p) => p.theme.color.border};
  border-radius: 5px;
  padding: 2rem;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.03);
  cursor: pointer;
`;

const Image = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
`;

const Name = styled.div`
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  margin-bottom: 1rem;
`;

const Title = styled.div`
  color: ${(p) => p.theme.color.subText};
  font-size: 18px;
  text-align: center;
`;

export default MemberCard;
