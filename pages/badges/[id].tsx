import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
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

  useEffect(() => {
    import("../../data/badges.json").then((data: BadgesData) => {
      const id = parseInt(router.query.id as string);
      setImage(data.default.badges[id - 1].badge);
    });
  }, []);

  return (
    <Link href="/badges">
      <Wrapper>
        <Image src={img} />
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
`;

const Image = styled.img`
  width: 38rem;
  height: 38rem;
  object-fit: contain;

  @media (max-width: ${(props) => props.theme.screen.md}) {
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
  }
`;

export default Badge;
