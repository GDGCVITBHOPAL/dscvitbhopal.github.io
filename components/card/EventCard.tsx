import React from "react";
import styled from "styled-components";

import ShortenText from "../../utils/ShortenText";
import ToText from "../../utils/ToText";

const EventCard = ({ date = "", link = "", title = "", content = "" }) => {
  return (
    <Card>
      <a href={link} rel="noreferrer" target="_blank">
        <Title>{ShortenText(title, 0, 50)}</Title>
        <SubTitle>{ShortenText(ToText(content), 0, 140) + "..."}</SubTitle>
        <Author>{date}</Author>
      </a>
    </Card>
  );
};

const Card = styled.div`
  background: ${(p) => p.theme.color.background};
  border: 1px solid ${(p) => p.theme.color.border};
  border-radius: 5px;
  max-width: 45rem;
  padding: 2rem;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.03);
  margin-bottom: 2rem;
  a {
    text-decoration: none;
    color: ${(p) => p.theme.color.text};
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 28px;
  margin-bottom: 15px;
`;

const SubTitle = styled.div`
  color: ${(p) => p.theme.color.subText};
  font-size: 18px;
  margin-bottom: 25px;
`;

const Author = styled.div`
  font-weight: 600;
  font-size: 17px;
  margin-bottom: 8px;
`;

export default EventCard;
