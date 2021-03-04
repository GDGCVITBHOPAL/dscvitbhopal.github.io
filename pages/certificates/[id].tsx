import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

import { RiDownload2Fill, RiLinkedinFill, RiCloseFill } from "react-icons/ri";
import {Card} from '../../styles/BadgesStyles/BadgesCard';
import {LinkedInButton, Icon, ButtonsWrapper} from '../../styles/BadgesStyles/BadgeButtonWrapper';
import {Image} from '../../styles/BadgesStyles/BadgeImages';
import {TopWrapper, Close} from '../../styles/BadgesStyles/BadgeTopWrapper';

type CertificateType = {
  id?: string;
  name?: string;
  certificate?: string;
};

type CertificatesData = {
  default: {
    certificates: CertificateType[];
  };
};

export async function getStaticProps(context) {
  const data: CertificatesData = await import("../../data/certificates-data.json");

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      certificates: data.default.certificates,
    }, // will be passed to the page component as props
  };
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const data: CertificatesData = await import("../../data/certificates-data.json");

  // Get the paths we want to pre-render based on posts
  const paths = data.default.certificates.map((certificate) => ({
    params: { id: certificate.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

const Certificate = ({ certificates }) => {
  const [img, setImage] = useState<string>(null);
  const router = useRouter();

  const id = parseInt(router.query.id as string);

  useEffect(() => {
    setImage(certificates[id - 1].certificate);
  }, []);

  return (
    <>
      <Head>
        <title>{`DSC VIT Bhopal - Certificate ${id}`}</title>
        <script async src="https://platform.twitter.com/widgets.js"></script>
      </Head>
      <Card>
        <TopWrapper>
          <Link href="/certificates">
            <Close>
              <RiCloseFill />
            </Close>
          </Link>
        </TopWrapper>
        <div>
          <Image src={img} alt="Certificate" />
        </div>
        <ButtonsWrapper>
          <div>
            <DownloadButton
              href={img}
              download
            >
              <Icon>
                <RiDownload2Fill />
              </Icon>
              Download
            </DownloadButton>
          </div>
          <div>
            <a
              href="https://twitter.com/share?ref_src=twsrc%5Etfw"
              className="twitter-share-button"
              data-size="large"
              data-text="Just earned my DSC VIT Bhopal Certificate!! "
              data-url={`https://dscvitbhopal.github.io/certificates/${router.query.id}`}
              data-via="dscvitbhopal"
              data-hashtags="#dsc"
              data-dnt="true"
              data-show-count="false"
            >
              Tweet
            </a>
          </div>
          <iframe
            src={`https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdscvitbhopal.github.io%2Fcertificates%2F${router.query.id}&layout=button&size=large&width=77&height=28&appId`}
            style={{
              border: "none",
              overflow: "hidden",
              width: 77,
              height: 28,
            }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
          <LinkedInButton
            href={`https://www.linkedin.com/sharing/share-offsite/?url=https://dscvitbhopal.github.io/certificates/${router.query.id}`}
          >
            <Icon>
              <RiLinkedinFill />
            </Icon>
            Share
          </LinkedInButton>
        </ButtonsWrapper>
      </Card>
    </>
  );
};

const DownloadButton = styled.a`
  text-decoration: none;
  color: white;
  width: 102px;
  height: 28px;
  background: #73787a;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-size: 13px;
  font-weight: bold;
`

export default Certificate;
