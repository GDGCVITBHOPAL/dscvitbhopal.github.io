import { Container } from "../components/global";
import Head from "next/head";
import CommonFooter from "../components/index/CommonFooter";
import styled from "styled-components";
import magazineList from "./../data/magazine.json";
import { useState } from "react";

const Magazine = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <>
      <Container>
        <Head>
          <title>DSC VIT Bhopal - Magazine</title>
        </Head>
        <ImageContainer>
          {magazineList.map((item) => (
            <MagazineItem onClick={()=>openInNewTab(item.uri) }>
              {item.year}
              <Image src={item.thumbnail} />
            </MagazineItem>
          ))}
        </ImageContainer>
      </Container>
      <CommonFooter />
    </>
  );
};

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  @media (max-width: 991px) {
    flex-direction: column;
  }
  /* margin-top: 5%; */
`;

const MagazineItem = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.7rem;
  font-weight: bold;
  width: 50%;
  @media (max-width: 991px) {
    width: 100%;
  }
  align-items: center;
  margin-bottom: 10px;
  margin-top: 2%;
  :hover{
    cursor: pointer;
  }
`;

const Image = styled.img`
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.03);
  margin: 10px;
  width: 80%;
  @media (max-width: 991px) {
    width: 60%;
    @media (max-width: 768px) {
      width: 80%;
    }
  }
`;

export default Magazine;
