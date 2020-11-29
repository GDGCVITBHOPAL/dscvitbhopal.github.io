import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Badge = () => {
  const router = useRouter();
  return (
    <Link href="/badges">
      <Wrapper>
        <Image src={`/images/badges/${router.query.id}.png`} />
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
