import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

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
  const paths = data.default.badges.map((badge, idx) => ({
    params: { id: (idx + 1).toString() },
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
        <Image src={img} alt="Badge" />
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
          <Link href="/badges">
            <Close>Back</Close>
          </Link>
        </ButtonsWrapper>
      </Card>
    </>
  );
};

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
  width: 76px;
  font-size: 13px;
  height: 26px;
  border-radius: 3px;
  border: none;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
  outline: none;
  cursor: pointer;
  &:hover {
    background: #e0e0e0;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export default Badge;
