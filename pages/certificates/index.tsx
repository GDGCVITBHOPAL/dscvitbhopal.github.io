import { useEffect, useState } from 'react';
import Head from 'next/head';

// Components
import CertificateCard from '../../components/card/CertificateCard';
import CommonFooter from '../../components/index/CommonFooter';
import { ContainerStyledGrid } from '../../styles/ContainerStyledGrid';

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
      <ContainerStyledGrid>
        <Head>
          <title>DSC VIT Bhopal - Certificates</title>
        </Head>
        {certificates.map(certificate => (
          <CertificateCard key={certificate.id} {...certificate} />
        ))}
      </ContainerStyledGrid>
      <CommonFooter />
    </>
  );
};

export default Certificates;
