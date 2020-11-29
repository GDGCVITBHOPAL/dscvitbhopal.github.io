import { useState } from "react";
import styled from "styled-components";

// Components
import { Container } from "../components/global";
import EventCard from "../components/card/EventCard";

type Event = {
  title?: string;
  content?: string;
  link?: string;
  date?: string;
};

type EventData = {
  default: {
    events: Event[];
  };
};

const Event = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [search, setSearch] = useState("");

  import("../data/events.json").then((data: EventData) => {
    setEvents(data.default.events);
  });

  return (
    <ContainerStyled>
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
  );
};

const Search = styled.input`
  background: ${(p) => p.theme.color.background};
  color: ${(p) => p.theme.color.text};
  width: 100%;
  font-size: 25px;
  outline: none;
  border: 1px solid ${(p) => p.theme.color.border};
  border-radius: 5px;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.03);
  margin-bottom: 2rem;
  line-height: 35px;
  padding: 20px;
  font-weight: 500;
  &::placeholder {
    color: ${(p) => p.theme.color.placeholder};
  }
`;

const ContainerStyled = styled(Container)`
  padding-top: 2.5rem;
`;

export default Event;
