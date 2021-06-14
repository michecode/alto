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
          content={`Light, Sunlight, Windows, South, North, East, West, Plant, Grow, Guide, Tutorial, How To, Learn, Care, Problems`}
        />
        <meta
          name="description"
          content={`Learn to give your house plants the best light possible`}
        />
        <meta name="viewport" content="width=device.width, initial-scale=1.0" />
        <title>Light - Alto</title>
      </Helmet>
      <TableOfContent category={0} />
      <TextContainer>
        <Header>Light</Header>
        <Line />
        <SectionHeader id="types-of-light">Types of Light</SectionHeader>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing
          enim eu turpis egestas pretium aenean pharetra magna. Platea dictumst
          quisque sagittis purus sit. Nulla pellentesque dignissim enim sit amet
          venenatis urna cursus. Platea dictumst quisque sagittis purus sit amet
          volutpat consequat. Nam libero justo laoreet sit amet. Est ultricies
          integer quis auctor. Porta nibh venenatis cras sed felis eget velit.
          Facilisis sed odio morbi quis commodo odio. Montes nascetur ridiculus
          mus mauris vitae ultricies leo integer. Id porta nibh venenatis cras
          sed felis eget. Pretium aenean pharetra magna ac placerat vestibulum
          lectus mauris ultrices. Orci porta non pulvinar neque laoreet
          suspendisse interdum. Est ultricies integer quis auctor elit sed
          vulputate.
        </Text>
        <Line />
        <SectionHeader id="window-lighting">Window Lighting</SectionHeader>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing
          enim eu turpis egestas pretium aenean pharetra magna. Platea dictumst
          quisque sagittis purus sit. Nulla pellentesque dignissim enim sit amet
          venenatis urna cursus. Platea dictumst quisque sagittis purus sit amet
          volutpat consequat. Nam libero justo laoreet sit amet. Est ultricies
          integer quis auctor. Porta nibh venenatis cras sed felis eget velit.
          Facilisis sed odio morbi quis commodo odio. Montes nascetur ridiculus
          mus mauris vitae ultricies leo integer. Id porta nibh venenatis cras
          sed felis eget. Pretium aenean pharetra magna ac placerat vestibulum
          lectus mauris ultrices. Orci porta non pulvinar neque laoreet
          suspendisse interdum. Est ultricies integer quis auctor elit sed
          vulputate.
        </Text>
        <Line />
        <PreviousNext previous={false} next={true} l1={null} l2={'Watering'} />
      </TextContainer>
    </Layout>
  );
}
