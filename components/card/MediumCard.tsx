import Link from "next/link";
import React from "react";
import styled from "styled-components";

import ShortenText from "../../utils/ShortenText";
import ToText from "../../utils/ToText";

const MediumCard = ({ pubDate, author, thumbnail, link, title, content }) => {
  const date = new Date(pubDate);
  const publishDate =
    date.toLocaleString("default", { month: "short" }) +
    " " +
    date.getDate() +
    "," +
    " " +
    date.getFullYear();

  return (
    <Card>
      <a href={link} rel="noreferrer" target="_blank">
        <ImageWrapper>
          <Image src={thumbnail} />
        </ImageWrapper>
        <Title>{ShortenText(title, 0, 50)}</Title>
        <SubTitle>{ShortenText(ToText(content), 0, 120) + "..."}</SubTitle>
        <Author>{author}</Author>
        <span>{publishDate}</span>
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
  margin-bottom: 4rem;
  a {
    text-decoration: none;
    color: ${(p) => p.theme.color.text};
  }
`;

const Image = styled.img`
  width: 100%;
  height: 120px;
  object-fit: contain;
`;

const ImageWrapper = styled.div`
  margin-bottom: 20px;
  padding: 3rem 0rem;
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

export default MediumCard;
