import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Layout from '../../../components/Layout';
import TableOfContent from '../../../components/TableOfContent';
import PreviousNext from '../../../components/PreviousNext';
import 'fontsource-shrikhand/400.css';
import 'fontsource-montserrat/400.css';
const contentjson = require('../../../../data/learnContent.json');

const TextContainer = styled.div`
  @media (max-width: 960px) {
    width: 90%;
    margin: 8vh auto 0 auto;
  }
  @media (min-width: 960px) {
    margin: 200px auto 0 auto;
    width: 45%;
  }
`;

const Header = styled.h1`
  font-family: shrikhand;
  @media (max-width: 960px) {
    font-size: 45px;
  }
  @media (min-width: 960px) {
    font-size: 72px;
  }
`;

const SectionHeader = styled.h2`
  font-family: montserrat;
  @media (max-width: 960px) {
    font-size: 30px;
  }
  @media (min-width: 960px) {
    font-size: 35px;
  }
`;

const Subheader = styled.h3`
  font-family: montserrat;
  @media (max-width: 960px) {
    font-size: 23px;
  }
  @media (min-width: 960px) {
    font-size: 25px;
  }
`;

const Text = styled.p`
  font-size: 20px;
`;

const Line = styled.hr`
  border-width: 1px;
  border-style: double;
  width: 25%;
  color: var(--color-text);
`;

export default function Index(props) {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content={`Fertilizer, Diluting, Plant, Grow, Guide, Tutorial, How To, Learn, Care, Problems`}
        />
        <meta
          name="description"
          content={`Learn to fertilize your house plants`}
        />
        <meta name="viewport" content="width=device.width, initial-scale=1.0" />
        <title>Fertilizing - Alto</title>
      </Helmet>
      <TableOfContent category={6} />
      <TextContainer>
        <Header>Fertilizing</Header>
        <Text>
          Fertilzing your plants is a must for proper growth. Most plants do not
          need fertilizer often and when needed it is usually in the growing
          season around summer.
        </Text>
        <Line/>
        <SectionHeader id='Diluting'>Diluting</SectionHeader>
        <Text>bonjour</Text>
        <Line/>
        <PreviousNext previous={true} next={true} l1={'Pruning'} l2={'Pests'}/>
      </TextContainer>
    </Layout>
  );
}
