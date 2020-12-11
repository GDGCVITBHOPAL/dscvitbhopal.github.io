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

const Badge = () => {
  const [img, setImage] = useState<string>(null);
  const router = useRouter();

  const id = parseInt(router.query.id as string);

  useEffect(() => {
    if (id) {
      import("../../data/badges-data.json").then((data: BadgesData) => {
        setImage(data.default.badges[id - 1].badge);
      });
    }
  }, [id]);

  return (
    <Wrapper>
      <Head>
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
          <div>
            <script
              src="https://platform.linkedin.com/in.js"
              type="text/javascript"
            >
              lang: en_US
            </script>
            <script
              type="IN/Share"
              data-url="https://dscvitbhopal.github.io/"
            ></script>
          </div>
          <div>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=https://dscvitbhopal.github.io/badges/${router.query.id}`}
            >
              f
            </a>
          </div>
          <Link href="/badges">
            <Close>Back</Close>
          </Link>
        </ButtonsWrapper>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
`;

const Card = styled.div`
  background: ${(p) => p.theme.color.background};
  border: 1px solid ${(p) => p.theme.color.border};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 30rem;
  min-height: 35rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.02);
  padding: 2rem;
`;

const Image = styled.img`
  width: 24rem;
  height: 24rem;
  object-fit: contain;

  /* @media (max-width: ${(props) => props.theme.screen.md}) {
    width: 32rem;
    height: 32rem;
  }

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    width: 26rem;
    height: 26rem;
  }

  @media (max-width: ${(props) => props.theme.screen.xs}) {
    width: 17rem;
    height: 17rem;
  } */
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
