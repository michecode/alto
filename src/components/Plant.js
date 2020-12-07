import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Layout from './Layout';
import Bio from './Bio';
import Section from './Section';
import PlantPic from './PlantPic';
import 'fontsource-shrikhand/400-normal.css';
import 'fontsource-montserrat/400-italic.css';

const TitleSection = styled.div`
  padding-bottom: 15px;
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

const SectionXBio = styled.div`
  display: flex;
  @media (max-width: 960px) {
    flex-direction: column;
  }
  @media (min-width: 960px) {
    align-items: flex-start;
  }
`;

const PicXBio = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  @media (max-width: 960px) {
    margin-left: 15px;
    margin-right: 15px;
  }
  @media (min-width: 960px) {
    width: 300px;
    margin-left: 20px;
  }
`;

const BioWrapper = styled(Bio)`
  display: flex;
  @media (min-width: 960px) {
    flex-direction: column;
    margin-left: 25px;
  }
`;

const Sections = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 960px) {
    flex-grow: 1;
    margin-right: 25px;
  }
`;

export default function Plant({ data }) {
  const plant = data.mongodbAltoDbPlants;
  return (
    <Layout>
      <Helmet>
          <meta charSet="utf-8" />
          <meta name="keywords" content={`${plant.name}, Plant, Grow, Guide, Tutorial, How To, Learn, Care, Problems`}/>
          <meta name="description" content={`Learn how to care for your ${plant.name} quickly, easily, and for free`}/>
          <meta name="viewport" content="width=device.width, initial-scale=1.0"/>
          <title>{plant.name} Guide</title>
        </Helmet>
      <TitleSection>
        <Title>{plant.name}</Title>
        <BotanicalName>{plant.botanicalName}</BotanicalName>
      </TitleSection>
      <SectionXBio>
        <PicXBio>
          <PlantPic />
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
          {plant.notes === "" ? null : <Section title={'To Note'} body={plant.notes} />}
        </Sections>
      </SectionXBio>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    mongodbAltoDbPlants(mongodb_id: { eq: $id }) {
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
