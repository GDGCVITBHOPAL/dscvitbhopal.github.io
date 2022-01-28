import { useEffect, useState } from "react";
import Head from "next/head";

// Components
import EventCard from "../components/card/EventCard";
import CommonFooter from "../components/index/CommonFooter";

//styles
import { Search } from "../styles/Search";
import { ContainerStyledFlex } from "../styles/ContainerStyledFlex";
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
    fire.collection("events").onSnapshot((snap) => {
      const data = snap.docs.map((doc) => ({
        ...doc.data(),
      }));
      data.forEach((e) => {
        console.log(e);
      });
      setEvents(data);
    });
  }, []);

  return (
    <>
      <ContainerStyledFlex minHeight="50vh">
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
      </ContainerStyledFlex>
      <CommonFooter />
    </>
  );
};

export default Event;
