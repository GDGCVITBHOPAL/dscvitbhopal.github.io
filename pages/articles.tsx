import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';

// Components
import MediumCard from '../components/card/MediumCard';
import { Container } from '../components/global';
import CommonFooter from '../components/index/CommonFooter';

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
      <ContainerStyled>
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
      </ContainerStyled>
      <CommonFooter />
    </>
  );
};

const Search = styled.input`
  background: ${p => p.theme.color.background};
  color: ${p => p.theme.color.text};
  width: 100%;
  max-width: 45rem;
  font-size: 25px;
  outline: none;
  border: 1px solid ${p => p.theme.color.border};
  border-radius: 5px;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.03);
  margin-bottom: 2rem;
  line-height: 35px;
  padding: 20px;
  font-weight: 700;
  &::placeholder {
    color: ${p => p.theme.color.placeholder};
    font-weight: 500;
  }
`;

const ContainerStyled = styled(Container)`
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Article;
