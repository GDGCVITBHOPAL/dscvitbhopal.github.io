import { useState } from "react";
import styled from "styled-components";

// Components
import { Container } from "../components/global";
import BadgeCard from "../components/card/BadgeCard";

type Badge = {
  id?: string;
  name?: string;
  badge?: string;
};

type BadgesData = {
  default: {
    badges: Badge[];
  };
};

const Badges = () => {
  const [badges, setBadges] = useState<Badge[]>([]);

  import("../data/badges.json").then((data: BadgesData) => {
    setBadges(data.default.badges);
  });

  return (
    <ContainerStyled>
      {badges.map((badge) => (
        <BadgeCard key={badge.id} {...badge} />
      ))}
    </ContainerStyled>
  );
};

const ContainerStyled = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  padding: 2.5rem 0rem;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${(props) => props.theme.screen.xs}) {
    padding: 2.5rem 3rem;
  }
`;

export default Badges;
