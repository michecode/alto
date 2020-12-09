import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Searchbar from '../components/SearchBar';
import Layout from '../components/Layout';
import 'fontsource-shrikhand';
import 'fontsource-montserrat';

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
  margin-top: 30vh;

  /* MOBILE */
  @media (max-width: 500px) {
    margin-top: 15vh;
  }
  // @media (max-width: 960px) {
  //   padding-top: 275px;
  // }
`;

const SplashText = styled.text`
  font-size: 55px;
  font-family: shrikhand;
  color: var(--color-text);
  text-align: center;
  margin-bottom: 50px;
  @media (max-width: 960px) {
    font-size: 45px;
  }
`;

const LinkWrapper = styled(Link)`
  text-decoration: none;
  text-align: center;
  margin-top: 25px;
`;

const UnderText = styled.text`
  color: var(--color-text);
`;

export default function Home() {
  return (
    <>
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="keywords"
            content={`Alto, Plants, Houseplant, Plant, Plants, Care, Problems, Guide, Tutorial, How To`}
          />
          <meta
            name="description"
            content={`Alto is a easy to use knowledge base of plants. Learn to grow any houseplant at Alto.`}
          />
          <meta
            name="viewport"
            content="width=device.width, initial-scale=1.0"
          />
          <title>Alto</title>
        </Helmet>
        <HomePage>
          <SplashText>Grow Guide for Every Green</SplashText>
          <Searchbar />
          <LinkWrapper to="/request">
            <UnderText>Don't see the plant you're looking for?</UnderText>
          </LinkWrapper>
          <hr />
          <UnderText style={{ textAlign: 'center' }}>
            Website is currently under active development :)
          </UnderText>
        </HomePage>
      </Layout>
    </>
  );
}
