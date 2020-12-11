import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

import { RiLinkedinFill, RiCloseFill } from "react-icons/ri";

type BadgeType = {
  id?: string;
  name?: string;
  badge?: string;
};

type BadgesData = {
  default: {
    badges: BadgeType[];
  };
};

export async function getStaticProps(context) {
  const data: BadgesData = await import("../../data/badges-data.json");

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      badges: data.default.badges,
    }, // will be passed to the page component as props
  };
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const data: BadgesData = await import("../../data/badges-data.json");

  // Get the paths we want to pre-render based on posts
  const paths = data.default.badges.map((badge) => ({
    params: { id: badge.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

const Badge = ({ badges }) => {
  const [img, setImage] = useState<string>(null);
  const router = useRouter();

  const id = parseInt(router.query.id as string);

  useEffect(() => {
    setImage(badges[id - 1].badge);
  }, []);

  return (
    <>
      <Head>
        <title>{`DSC VIT Bhopal - Badge ${id}`}</title>
        <script async src="https://platform.twitter.com/widgets.js"></script>
      </Head>
      <Card>
        <TopWrapper>
          <Link href="/badges">
            <Close>
              <RiCloseFill />
            </Close>
          </Link>
        </TopWrapper>
        <div>
          <Image src={img} alt="Badge" />
        </div>
        <ButtonsWrapper>
          <div>
            <a
              href="https://twitter.com/share?ref_src=twsrc%5Etfw"
              className="twitter-share-button"
              data-size="large"
              data-text="Just earned my DSC VIT Bhopal Badge!! "
              data-url={`https://dscvitbhopal.github.io/badges/${router.query.id}`}
              data-via="dscvitbhopal"
              data-hashtags="#dsc"
              data-dnt="true"
              data-show-count="false"
            >
              Tweet
            </a>
          </div>
          <iframe
            src={`https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdscvitbhopal.github.io%2Fbadges%2F${router.query.id}&layout=button&size=large&width=77&height=28&appId`}
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
            href={`https://www.linkedin.com/sharing/share-offsite/?url=https://dscvitbhopal.github.io/badges/${router.query.id}`}
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

const TopWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Card = styled.div`
  background: ${(p) => p.theme.color.background};
  border: 1px solid ${(p) => p.theme.color.border};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30rem;
  height: 35rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.02);
  padding: 2rem;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -45%);

  @media (max-width: ${(props) => props.theme.screen.xs}) {
    width: 22rem;
    height: 28rem;
  }
`;

const Image = styled.img`
  width: 24rem;
  height: 24rem;
  object-fit: contain;

  @media (max-width: ${(props) => props.theme.screen.xs}) {
    width: 17rem;
    height: 17rem;
  }
`;

const Close = styled.button`
  font-size: 28px;
  border: none;
  outline: none;
  cursor: pointer;
  background: none;
  color: #aaaaaa;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const LinkedInButton = styled.a`
  text-decoration: none;
  color: white;
  width: 77px;
  height: 28px;
  background: #0e76a8;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-size: 13px;
  font-weight: bold;
`;

const Icon = styled.div`
  margin-right: 4px;
  font-size: 16px;
`;

export default Badge;
