import React from "react";
import Link from "next/link";
import styled from "styled-components";

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

const Card = styled.div`
  background: ${(p) => p.theme.color.background};
  border: 1px solid ${(p) => p.theme.color.border};
  border-radius: 5px;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.03);
  padding: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

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
