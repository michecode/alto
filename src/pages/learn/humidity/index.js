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
          content={`Humidity, Plant, Grow, Guide, Tutorial, How To, Learn, Care, Problems, Pebble Tray, Humid, Spray Bottle`}
        />
        <meta
          name="description"
          content={`Learn to maintain the proper humidity for your house plants`}
        />
        <meta name="viewport" content="width=device.width, initial-scale=1.0" />
        <title>Humidity - Alto</title>
      </Helmet>
      <TableOfContent category={2} />
      <TextContainer>
        <Header>Humidity</Header>
        <Text>
          Depending on where your plant originates from, humidity may be very
          important for survival. A notable example would be calatheas which are
          very picky with their humidity.
        </Text>
        <Text>
          Adding humidity is typically pretty easy and does not require much
          work after you set it up.
        </Text>
        <Line />
        <SectionHeader id="types-of-light">
          Methods to Add More Humidity
        </SectionHeader>
        <Text>
          There are plenty of ways to add humidity, the notable three are...
        </Text>
        <Subheader>Spray Bottles</Subheader>
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
        <Subheader>Pebble Trays</Subheader>
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
        <Subheader>Humidifiers</Subheader>
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
        <PreviousNext
          previous={true}
          next={true}
          l1={'Watering'}
          l2={'Propagation'}
        />
      </TextContainer>
    </Layout>
  );
}
