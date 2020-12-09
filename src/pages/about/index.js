import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';
import 'fontsource-montserrat/400-normal.css';
import 'fontsource-shrikhand/400-normal.css';

const About = styled.div`
  // padding-top: 200px;
  // @media (max-width: 960px) {
  //   padding-top: 15vh;
  // }
`;

const TextContainer = styled.div`
  @media (max-width: 960px) {
    text-align: center;
    margin: 15vh auto 0 auto;
  }
  @media (min-width: 960px) {
    margin: 200px auto 0 auto;
    width: 45%;

  }
`;

const Header = styled.h1`
  font-family: shrikhand;
  @media (max-width: 960px) {
    font-size: 50px;
  }
  @media (min-width: 960px) {
    font-size: 72px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  // @media (min-width: 960px) {
  //   margin-right: 200px;
  // }
`;

export default function Index() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="keywords" content={`About, Alto, Plants`} />
        <meta name="description" content={`About Alto`} />
        <meta name="viewport" content="width=device.width, initial-scale=1.0" />
        <title>About - Alto</title>
      </Helmet>
      <About>
        <TextContainer>
          <Header>about</Header>
          <Description>
            Hi my name is Maddy, after spending time searching different
            websites for instructions to care for each plant in my house I
            decided I could make a website that puts all the knowledge one could
            need into a single website.
          </Description>
          <Description>
            My goal for this site is to help people take care of their plants
            and find products that can help all while being easy to navigate and
            pull meaningful information from
          </Description>
        </TextContainer>
      </About>
    </Layout>
  );
}
