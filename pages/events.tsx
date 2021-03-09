import { useEffect, useState } from "react";
import styled from "styled-components";
import Head from "next/head";


// Components
import { Container } from "../components/global";
import EventCard from "../components/card/EventCard";
import fire from "../config/firebase_config";

type Event = {
  title?: string;
  content?: string;
  link?: string;
  date?: string;
};


const Event = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fire.collection('events').onSnapshot(snap => {
        const data = snap.docs.map(doc => ({
          ...doc.data(),
        }));
        data.forEach(e => {
          console.log(e);
        });
        setEvents(data);
      });
  }, []);
  
  return (
    <>
    <ContainerStyled>
      <Head>
        <title>DSC VIT Bhopal - Events</title>
      </Head>
      <Search
        placeholder="Search event"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {events
        .filter(({ title = "" }) =>
          search !== ""
            ? title.toLowerCase().includes(search.toLowerCase())
            : true
        )
        .map((event, idx) => (
          <EventCard key={idx} {...event} />
        ))}
  
    </ContainerStyled>
    {/* <CommonFooter /> */}
    </>
  );
};

const Search = styled.input`
  background: ${(p) => p.theme.color.background};
  color: ${(p) => p.theme.color.text};
  width: 100%;
  max-width: 45rem;
  font-size: 25px;
  outline: none;
  border: 1px solid ${(p) => p.theme.color.border};
  border-radius: 5px;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.03);
  margin-bottom: 2rem;
  line-height: 35px;
  padding: 20px;
  font-weight: 700;
  &::placeholder {
    color: ${(p) => p.theme.color.placeholder};
    font-weight: 500;
  }
`;

const ContainerStyled = styled(Container)`
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Event;
