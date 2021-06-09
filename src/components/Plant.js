import React, { useState } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Layout from './Layout';
import Bio from './Bio';
import Section from './Section';
import PlantPic from './PlantPic';
import PicPopup from './PicPopup';
import Paper from '@material-ui/core/Paper';
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

const RedbubbleBox = styled.div`
  border-style: solid;
  border-radius: 10px;
  border-color: var(--color-text);
`;

const RedbubbleLink = styled.a`
  margin: 5px auto 5px auto;
`;

const UtilityBar = styled.div`
  display: flex;
  // background: var(--color-paper);
  margin-bottom: 10px;
  margin-top: 10px;
  // border-radius: 10px;
  justify-content: space-between;
  // align-items: stretch;
`;

const UButtonFill = styled(Paper)`
  && {
    display: flex;
    background: var(--color-paper);
    border-radius: 10px;
    flex-grow: 1;
    justify-content: space-around;
    align-items: center;
  }
`;

const UBFZoom = styled(UButtonFill)`
  && {
    @media (max-width: 960px) {
      display: none;
    }
  }
`;

const UtilityIcon = styled.div`
  border: none;
  background: var(--color-paper);
  fill: var(--color-text);
  padding: 0px;
  margin: 5px 5px 0px 5px;
  font-size: 24px;
  color: var(--color-text);
`;

export default function Plant({ data }) {
  const [poppedUp, setPoppedUp] = useState(false);
  const togglePopUp = () => {
    console.log('clicked');
    setPoppedUp(!poppedUp);
  };

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
      {/* DO NOT FUCKING REMOVE ME. THIS DIV IS WHAT MAKES SAFARI NOT STRETCH ME!!!*/}
      {/* TODO: Add on-click to enlarge picture */}
      <Pic>
        <PlantPic id={plant.mongodb_id} name={plant.name} />
      </Pic>
      <UtilityBar>
        <UButtonFill style={{ marginRight: '5px' }}>
          <a href={plant.redbubble} style={{ textDecoration: 'none' }}>
            <UtilityIcon>
              <CartIcon />
            </UtilityIcon>
          </a>
        </UButtonFill>
        <UButtonFill>
          <UtilityIcon>
            <CollectionIcon />
          </UtilityIcon>
        </UButtonFill>
        <UBFZoom style={{ marginLeft: '5px' }}>
          <UtilityIcon onClick={() => togglePopUp()} style={{}}>
            <ZoomIcon />
          </UtilityIcon>
        </UBFZoom>
      </UtilityBar>
      {/* <RedbubbleBox>
        <RedbubbleLink href={plant.redbubble}>Buy This Art</RedbubbleLink>
      </RedbubbleBox> */}
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
        {poppedUp ? (
          <PicPopup
            id={plant.mongodb_id}
            name={plant.name}
            toggle={togglePopUp}
          />
        ) : null}
      </WideScreenWidthControl>
    </Layout>
  );
}

function ZoomIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="32"
      width="32"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8487 17.3729 13.551 16.3199 14.9056L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L14.9056 16.3199C13.551 17.3729 11.8487 18 10 18C5.58172 18 2 14.4183 2 10ZM10 7C10.5523 7 11 7.44772 11 8V9H12C12.5523 9 13 9.44772 13 10C13 10.5523 12.5523 11 12 11H11V12C11 12.5523 10.5523 13 10 13C9.44772 13 9 12.5523 9 12V11H8C7.44772 11 7 10.5523 7 10C7 9.44772 7.44772 9 8 9H9V8C9 7.44772 9.44772 7 10 7Z"
      ></path>
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="32"
      width="32"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M4.1421 4.00002L6.00913 16.1357C6.02271 16.2359 6.05113 16.3313 6.0921 16.4198C6.21543 16.6861 6.45246 16.889 6.74088 16.9661C6.82899 16.9898 6.92133 17.0016 7.01578 17H18C18.4416 17 18.8309 16.7103 18.9578 16.2874L21.9578 6.28736C22.0487 5.98459 21.991 5.65669 21.8023 5.40308C21.6136 5.14948 21.3161 5.00002 21 5.00002H6.31948L5.99058 2.86221C5.97826 2.77282 5.95413 2.68721 5.91981 2.607C5.85751 2.46092 5.76213 2.33439 5.64429 2.23521C5.53497 2.14302 5.40561 2.07384 5.26367 2.03514C5.17434 2.01068 5.0806 1.99842 4.9847 2.00002H3C2.44772 2.00002 2 2.44773 2 3.00002C2 3.5523 2.44772 4.00002 3 4.00002H4.1421ZM7.85794 15L6.62717 7.00002H19.656L17.256 15H7.85794Z"
      ></path>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M10 20C10 21.1046 9.10457 22 8 22C6.89543 22 6 21.1046 6 20C6 18.8954 6.89543 18 8 18C9.10457 18 10 18.8954 10 20Z"
      ></path>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
      ></path>
    </svg>
  );
}

function CollectionIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="32"
      width="32"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M2 5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V7C22 7.74708 21.5904 8.39848 20.9835 8.74188C20.9944 8.82638 21 8.91253 21 9V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V9C3 8.91253 3.00561 8.82638 3.0165 8.74188C2.40961 8.39848 2 7.74707 2 7V5ZM20 7V5H4V7H20ZM5 9V19H19V9H5ZM8 12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H9C8.44772 13 8 12.5523 8 12Z"
      ></path>
    </svg>
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
      redbubble
    }
  }
`;
