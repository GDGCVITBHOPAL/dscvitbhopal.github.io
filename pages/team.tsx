import { useState } from "react";
import styled from "styled-components";

// Components
import { Container } from "../components/global";
import MemberCard from "../components/card/MemberCard";
import MemberModal from "../components/modal/MemberModal";

type Memeber = {
  title?: string;
  name?: string;
  link?: string;
  profile?: string;
};

type TeamData = {
  default: {
    team: Memeber[];
  };
};

const Team = () => {
  const [team, setTeam] = useState<Memeber[]>([]);

  const [modalMember, setModalMember] = useState<Memeber | null>(null);

  import("../data/team.json").then((data: TeamData) => {
    setTeam(data.default.team);
  });

  const handleModalToggle = (member: Memeber | null) => {
    setModalMember(member);
  };

  return (
    <ContainerStyled>
      {modalMember && (
        <MemberModal
          member={modalMember}
          handleModalToggle={handleModalToggle}
        />
      )}
      {team.map((member, idx) => (
        <MemberCard
          key={idx}
          member={member}
          handleModalToggle={handleModalToggle}
        />
      ))}
    </ContainerStyled>
  );
};

const ContainerStyled = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  padding: 2.5rem 0rem;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${(props) => props.theme.screen.xs}) {
    grid-template-columns: 1fr;
    padding: 2.5rem 3rem;
  }
`;

export default Team;
