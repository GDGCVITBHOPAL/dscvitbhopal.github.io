import React from "react";
import Link from "next/link";
import styled from "styled-components";
import {Card} from './cardStyle';

const CertificateCard = ({ certificate = "", name = "", id = "" }) => {
  return certificate ? (
    <Link href="/certificates/[id]" as={`/certificates/${id}`}>
      <Card>
        <Image src={certificate} />
        <Name>{name}</Name>
      </Card>
    </Link>
  ) : (
    <Card>
      <Name>{name}</Name>
    </Card>
  );
};


const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-right: 2rem;
`;

const Name = styled.div`
  font-weight: 700;
  font-size: 20px;
  text-align: center;
`;

export default CertificateCard;
