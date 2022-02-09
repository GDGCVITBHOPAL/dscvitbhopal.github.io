import { useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";

// Components
import { Container } from "../components/global";
import MemberCard from "../components/card/MemberCard";
import MemberModal from "../components/modal/MemberModal";
import CommonFooter from "../components/index/CommonFooter";

//data
import TeamsInfo from "../data/teams.json";

type Member = {
  title?: string;
  name?: string;
  link?: string;
  profile?: string;
};

type ActiveYear = "2020" | "2021";

type TeamData = {
  default: {
    [key: string]: Member[];
  };
};

type YearItemProps = {
  isActive: boolean;
};

type Team = {
  relativeLocation: string;
};

type TeamsInfo = {
  default: {
    [key: string]: Team[];
  };
};

const Team = () => {
  const [modalMember, setModalMember] = useState<Member | null>(null);
  const [activeYear, setActiveYear] = useState<ActiveYear>("2021");
  const [teams, setTeams] = useState<TeamsInfo | Object>({});

  const handleModalToggle = (member: Member | null) => {
    setModalMember(member);
  };

  return (
    <>
      <Container minHeight="55vh">
        <Head>
          <title>DSC VIT Bhopal - Team</title>
        </Head>
        {modalMember && (
          <MemberModal
            member={modalMember}
            handleModalToggle={handleModalToggle}
          />
        )}

        <YearRow>
          {["2021", "2020"].map((year: ActiveYear) => (
            <YearItem
              key={year}
              isActive={year === activeYear}
              onClick={() => setActiveYear(year)}
            >
              {year}
            </YearItem>
          ))}
        </YearRow>

        {Object.keys(TeamsInfo).map((teamName: string) => (
          <TeamSection
            key={teamName}
            title={teamName}
            handleModalToggle={handleModalToggle}
            relativeLocation={TeamsInfo[teamName].relativeLocation}
            activeYear={activeYear}
          />
        ))}
      </Container>
      <CommonFooter />
    </>
  );
};

const TeamSection = ({
  title,
  handleModalToggle,
  relativeLocation,
  activeYear,
}) => {
  const [team, setTeam] = useState<Member[]>([]);
  const [expanded, setExpanded] = useState(true);

  import(`../data/${relativeLocation}`).then((data: TeamData) => {
    setTeam(data.default[activeYear]);
  });

  return (
    <>
      {team[0] && (
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
      )}
    </>
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

const YearRow = styled.div`
  display: flex;
`;
const YearItem = styled.h1<YearItemProps>`
  padding: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  border-right: 3px solid grey;
  cursor: ${({ isActive }) => (isActive ? "default" : "pointer")};
  color: ${({ isActive }) => (isActive ? "dodgerblue" : "default")};

  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    border: 0;
  }
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
    grid-column-gap: 0.6rem;
  }
`;

export default Team;
