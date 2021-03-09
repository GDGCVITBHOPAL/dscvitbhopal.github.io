import { useEffect, useState } from 'react';
import Head from 'next/head';

// Components
import BadgeCard from '../../components/card/BadgeCard';
import CommonFooter from '../../components/index/CommonFooter';
import {ContainerStyledGrid} from '../../styles/ContainerStyledGrid';

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

  useEffect(() => {
    import('../../data/badges-data.json').then((data: BadgesData) => {
      setBadges(data.default.badges);
    });
  }, []);

  return (
    <>
      <ContainerStyledGrid>
        <Head>
          <title>DSC VIT Bhopal - Badges</title>
        </Head>
        {badges.map(badge => (
          <BadgeCard key={badge.id} {...badge} />
        ))}
      </ContainerStyledGrid>
      <CommonFooter />
    </>
  );
};

export default Badges;
