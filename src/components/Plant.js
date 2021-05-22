import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Layout from './Layout';
import Bio from './Bio';
import Section from './Section';
import PlantPic from './PlantPic';
import 'fontsource-shrikhand/400.css';
import 'fontsource-montserrat/400-italic.css';
import 'fontsource-montserrat/400.css';

const WideScreenWidthControl = styled.div`
  @media (min-width: 960px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const TitleSection = styled.div`
  @media (min-width: 960px) {
    margin-bottom: 50px;
  }
  @media (max-width: 960px) {
    margin-bottom: 15px;
  }
`;

const Title = styled.h1`
  font-family: shrikhand;
  color: var(--color-text);
  margin-bottom: 0px;
  @media (max-width: 960px) {
    font-size: 50px;
    text-align: center;
  }
  @media (min-width: 960px) {
    font-size: 72px;
    margin-left: 25px;
  }
`;

const BotanicalName = styled(Title)`
  font-family: montserrat;
  font-style: italic;
  color: var(--color-text);
  margin-top: 0px;
  @media (max-width: 960px) {
    font-size: 25px;
    text-align: center;
  }
  @media (min-width: 960px) {
    font-size: 24px;
  }
`;

const Page = styled.div`
  display: flex;
  @media (max-width: 960px) {
    display: none;
  }
  @media (min-width: 960px) {
    align-items: flex-start;
  }
`;

const PageMobile = styled.div`
  display: flex;
  @media (max-width: 960px) {
    flex-direction: column;
  }
  @media (min-width: 960px) {
    display: none;
  }
`;

// this has a horizontal tablet media query to make sure this portion stays legible
const PicXBio = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  // safari stretch bug(not rly) thing on mobile
  // align-items: center;
  @media (max-width: 960px) {
    margin-left: 15px;
    margin-right: 15px;
  }
  @media (min-width: 960px) {
    width: 25%;
  }
  @media (min-width: 1080px) {
    // width: 300px;
    width: 20%;
  }
`;

const Pic = styled.div`
  // DO NOT REMOVE ME
  // THIS DIV IS WHAT MAKES THE IMAGE NOT STRETCH IN SAFARI
`;

const BioWrapper = styled(Bio)`
  display: flex;
  @media (min-width: 960px) {
    flex-direction: column;
    margin-left: 25px;
    margin-top: 25px;
  }
`;

const Sections = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 960px) {
    margin-right: 25px;
  }
`;

export default function Plant({ data }) {
  const plant = data.mongodbAltoDbPlants;

  // literally just putting _ after it because i dont want it to mess with the styled components
  const sections_ = (
    <Sections>
      <Section title={'Light'} body={plant.light} />
      <Section title={'Watering'} body={plant.watering} />
      <Section title={'Humidity'} body={plant.humidity} />
      <Section title={'Fertilizing'} body={plant.fertilizer} />
      <Section title={'Pests'} body={plant.pests} />
      <Section title={'Pruning'} body={plant.pruning} />
      <Section title={'Propagation'} body={plant.propagation} />
      <Section title={'Repotting'} body={plant.repotting} />
      {/* COMMON ISSUES */}
      {plant.notes === '' ? null : (
        <Section title={'To Note'} body={plant.notes} />
      )}
    </Sections>
  );

  const picandbio_ = (
    <PicXBio>
      {/* DO NOT FUCKING REMOVE ME. THIS DIV IS WHAT MAKES SAFARI ACTUALLY WORK */}
      <Pic>
        <PlantPic id={plant.mongodb_id} name={plant.name} />
      </Pic>
      <BioWrapper
        bio={plant.bio}
        classification={plant.classification}
        zones={plant.zones}
        tempRange={plant.tempRange}
        difficulty={plant.difficulty}
        growthSpeed={plant.growthSpeed}
        toxic={plant.toxicity}
        altNames={plant.altNames}
      />
    </PicXBio>
  );

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content={`${plant.name}, Plant, Grow, Guide, Tutorial, How To, Learn, Care, Problems`}
        />
        <meta
          name="description"
          content={`Learn how to care for your ${plant.name} quickly, easily, and for free`}
        />
        <meta name="viewport" content="width=device.width, initial-scale=1.0" />
        <title>{plant.name} Guide</title>
      </Helmet>
      <WideScreenWidthControl>
        <TitleSection>
          <Title>{plant.name}</Title>
          <BotanicalName>{plant.botanicalName}</BotanicalName>
        </TitleSection>
        {/* DESKTOP */}
        <Page>
          {sections_}
          {picandbio_}
        </Page>
        {/* MOBILE */}
        <PageMobile>
          {picandbio_}
          {sections_}
        </PageMobile>
      </WideScreenWidthControl>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    mongodbAltoDbPlants(mongodb_id: { eq: $id }) {
      mongodb_id
      altNames
      bio
      botanicalName
      classification
      difficulty
      fertilizer
      growthSpeed
      humidity
      light
      name
      pests
      propagation
      pruning
      repotting
      soil
      temperature
      tempRange
      toxicity
      watering
      zones
      notes
    }
  }
`;
