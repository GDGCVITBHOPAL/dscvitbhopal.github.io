import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';

// Components
import MediumCard from '../components/card/MediumCard';
import CommonFooter from '../components/index/CommonFooter';

//styles
import {Search} from '../styles/Search';
import {ContainerStyledFlex} from '../styles/ContainerStyledFlex';


type ArticleType = {
  title: string;
  pubDate: string;
  link: string;
  author: string;
  description: string;
  content: string;
  thumbnail: string;
};

const Article = () => {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [search, setSearch] = useState('');

  const mediumURL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/dsc-vit-bhopal';

  useEffect(() => {
    fetch(mediumURL)
      .then(res => res.json())
      .then(data => {
        setArticles(data.items);
      });
  }, []);

  return (
    <>
      <ContainerStyledFlex>
        <Head>
          <title>DSC VIT Bhopal - Articles</title>
        </Head>
        <Search
          placeholder='Search article or author'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {articles
          .filter(({ title, author }) =>
            search !== ''
              ? title.toLowerCase().includes(search.toLowerCase()) ||
                author.toLowerCase().includes(search.toLowerCase())
              : true
          )
          .map(article => (
            <MediumCard key={article.pubDate} {...article} />
          ))}
      </ContainerStyledFlex>
      <CommonFooter />
    </>
  );
};

export default Article;
