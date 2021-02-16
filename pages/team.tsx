import { useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";

// Components
import { Container } from "../components/global";
import MemberCard from "../components/card/MemberCard";
import MemberModal from "../components/modal/MemberModal";
import CommonFooter from "../components/index/CommonFooter";

type Member = {
  title?: string;
  name?: string;
  link?: string;
  profile?: string;
};

type TeamData = {
  default: {
    team: Member[];
  };
};

const Team = () => {
  const [modalMember, setModalMember] = useState<Member | null>(null);

  const handleModalToggle = (member: Member | null) => {
    setModalMember(member);
  };

  return (
    <>
      <Container>
        <Head>
          <title>DSC VIT Bhopal - Team</title>
        </Head>
        {modalMember && (
          <MemberModal
            member={modalMember}
            handleModalToggle={handleModalToggle}
          />
        )}
        <TeamSection
          title="Core Team"
          handleModalToggle={handleModalToggle}
          relativeLocation="team.json"
        />
        <TeamSection
          title="Web Team"
          handleModalToggle={handleModalToggle}
          relativeLocation="team/web-team.json"
        />
        <TeamSection
          title="ML Team"
          handleModalToggle={handleModalToggle}
          relativeLocation="team/ml-team.json"
        />
        <TeamSection
          title="Android Team"
          handleModalToggle={handleModalToggle}
          relativeLocation="team/android-team.json"
        />
        <TeamSection
          title="Design Team"
          handleModalToggle={handleModalToggle}
          relativeLocation="team/design-team.json"
        />
        <TeamSection
          title="Content Team"
          handleModalToggle={handleModalToggle}
          relativeLocation="team/content-team.json"
        />
        <TeamSection
          title="Management Team"
          handleModalToggle={handleModalToggle}
          relativeLocation="team/management-team.json"
        />
      </Container>
      <CommonFooter />
    </>
  );
};

const TeamSection = ({ title, handleModalToggle, relativeLocation }) => {
  const [team, setTeam] = useState<Member[]>([]);
  const [expanded, setExpanded] = useState(true);

  import(`../data/${relativeLocation}`).then((data: TeamData) => {
    setTeam(data.default.team);
  });

  return (
    <SectionStyled>
      <HeaderStyled onClick={() => setExpanded(!expanded)}>
        <TitleStyled>{title}</TitleStyled>
        {expanded ? <RiArrowDownSLine /> : <RiArrowRightSLine />}
      </HeaderStyled>
      {expanded && (
        <GridStyled>
          {team.map((member, idx) => (
            <MemberCard
              key={idx}
              member={member}
              handleModalToggle={handleModalToggle}
            />
          ))}
        </GridStyled>
      )}
    </SectionStyled>
  );
};

const SectionStyled = styled.div`
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const HeaderStyled = styled.div`
  display: flex;
  font-size: 2.2rem;
  justify-content: space-between;
  cursor: pointer;
`;

const TitleStyled = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
`;

const GridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${(props) => props.theme.screen.xs}) {
    grid-template-columns: 1fr 1fr;
    padding: 2.5rem 3rem;
    font-size: 1.2rem
  }
`;

export default Team;
