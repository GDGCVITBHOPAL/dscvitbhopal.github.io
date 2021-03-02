import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';

// Components
import { Container } from '../../components/global';
import CertificateCard from '../../components/card/CertificateCard';
import CommonFooter from '../../components/index/CommonFooter';

type Certificate = {
  id?: string;
  name?: string;
  certificate?: string;
};

type CertificatesData = {
  default: {
    certificates: Certificate[];
  };
};

const Certificates = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);

  useEffect(() => {
    import('../../data/certificates-data.json').then((data: CertificatesData) => {
      setCertificates(data.default.certificates);
    });
  }, []);

  return (
    <>
      <ContainerStyled>
        <Head>
          <title>DSC VIT Bhopal - Certificates</title>
        </Head>
        {certificates.map(certificate => (
          <CertificateCard key={certificate.id} {...certificate} />
        ))}
      </ContainerStyled>
      <CommonFooter />
    </>
  );
};

const ContainerStyled = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  padding: 2.5rem 0rem;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    padding: 2.5rem 3rem;
  }
`;

export default Certificates;
