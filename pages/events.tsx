import { useEffect, useState } from 'react';
import Head from 'next/head';

// Components
import EventCard from '../components/card/EventCard';
import CommonFooter from '../components/index/CommonFooter';

//styles
import {Search} from '../styles/Search';
import {ContainerStyledFlex} from '../styles/ContainerStyledFlex';

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
  const [search, setSearch] = useState('');

  useEffect(() => {
    import('../data/events.json').then((data: EventData) => {
      setEvents(data.default.events);
    });
  }, []);
  return (
    <>
      <ContainerStyledFlex>
        <Head>
          <title>DSC VIT Bhopal - Events</title>
        </Head>
        <Search placeholder='Search event' value={search} onChange={e => setSearch(e.target.value)} />
        {events
          .filter(({ title = '' }) =>
            search !== '' ? title.toLowerCase().includes(search.toLowerCase()) : true
          )
          .map((event, idx) => (
            <EventCard key={idx} {...event} />
          ))}
      </ContainerStyledFlex>
      <CommonFooter />
    </>
  );
};


export default Event;
