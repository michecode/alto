import React, { useState } from 'react';
import { navigate, graphql } from 'gatsby';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Drawer from '@material-ui/core/Drawer';
import Layout from '../../components/Layout';
import PlantCard from '../../components/PlantCard';
import Checkbox from '../../components/Checkbox';

const Plants = styled.div`
  display: grid;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  grid-gap: 10px;
  @media (max-width: 400px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 550px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (min-width: 1300px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media (min-width: 1600px) {
    grid-template-columns: repeat(8, 1fr);
  }
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  width: 17%;
  height: 92vh;
  border-style: solid;
  @media (max-width: 960px) {
    display: none;
  }
`;

const FilterTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  @media (min-width: 960px) {
    margin: 20px auto 0px auto;
  }
  @media (max-width: 960px) {
    margin: 20px 20px 0px;
  }
`;

const FilterInfo = styled.p`
  font-size: 12px;

  @media (min-width: 960px) {
    text-align: center;
    margin: 0px auto 20px auto;
  }
  @media (max-width: 960px) {
    margin-left: 20px;
  }
`;

const CheckGroup = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

const DrawerDiv = styled.div`
  background: var(--color-background);
  color: var(--color-text);
  height: 100%;
`;

const MobileFilterMenu = styled.button`
  display: none;
  @media (max-width: 960px) {
    display: block;
    font-size: 20px;
    background: none;
    border-color: var(--color-text);
    color: var(--color-text);
    border-style: solid;
    border-radius: 3px;
    width: 100%;
    margin: 0;
  }
`;

const CloseFilterMenu = styled(MobileFilterMenu)`
  margin: 3% 10px;
  width: 95%;
`;

const MobileFilterDiv = styled.div`
  width: 90%;
`;

export default function Index({ data }, props) {
  // Classification
  const [palm, setPalm] = useState(true);
  const [succulent, setSucculent] = useState(true);
  const [cactus, setCactus] = useState(true);
  // Light
  const [lowLight, setLowLight] = useState(true);
  const [mediumLight, setMediumLight] = useState(true);
  const [brightLight, setBrightLight] = useState(true);
  const [directLight, setDirectLight] = useState(true);
  // Toxic
  const [toxic, setToxic] = useState(true);
  // Difficulty
  const [effortless, setEffortless] = useState(true);
  const [easy, setEasy] = useState(true);
  const [moderate, setModerate] = useState(true);
  const [hard, setHard] = useState(true);
  const [extreme, setExtreme] = useState(true);
  // Mobile Filter
  const [open, setOpen] = useState(false);

  const plants = data.allMongodbAltoDbPlants.edges;

  /*
    classFilter = if plant matches classifcation => render
    lightFilter = if plant can live with less light => render
    toxicFilter = if plant is not toxic => render
    difficulty = if plant matches difficulty => render

    if it makes it to the bottom of the function it will render
  */
  function CheckFilters(c, l, t, d) {
    /* check classification
    if any are unchecked.. check further
    if palm was false (unchecked) the first condition fails and will trigger the first indented if to which all plants with
        a classification of Palm will not get rendered due to the false return
    */
    if (!(palm && succulent && cactus)) {
      if (!palm && c === 'Palm') return false;
      if (!succulent && c === 'Succulent') return false;
      if (!palm && c === 'Cactus') return false;
    }
    /* check light
    if low light is unchecked, the top if passes and checkes if they shouldnt render. if a plant can survive in low light and nothing else
        it will return false and not render.
    BASICALLY >> if any of the sub ifs are true then it will render.
    */
    if (!(lowLight && mediumLight && brightLight && directLight)) {
      if (
        !(
          (lowLight && l[0]) ||
          (mediumLight && l[1]) ||
          (brightLight && l[2]) ||
          (directLight && l[3])
        )
      )
        return false;
    }
    /* check toxic
    for toxic, there is only one option and thats to turn off toxic plants.
    BASICALLY if the plant is toxic and toxic is unchecked then the plant will not render 
    */
    if (!toxic) {
      if (!toxic && t) return false;
    }
    /* check difficulty
    simple check for this one. only plants with the checked difficulties will render
    BASICALLY the same as the classifcation
    */
    if (!(effortless && easy && moderate && hard && extreme)) {
      if (!effortless && d === 'Effortless') return false;
      if (!easy && d === 'Easy') return false;
      if (!moderate && d === 'Moderate') return false;
      if (!hard && d === 'Hard') return false;
      if (!extreme && d === 'Extreme') return false;
    }
    return true;
  }

  const plantCardMap = plants.map(plant => {
    if (
      CheckFilters(
        plant.node.classification,
        plant.node.lightFilter,
        plant.node.toxicFilter,
        plant.node.difficulty
      )
    ) {
      return (
        <div
          onClick={() => navigate(`${plant.node.mongodb_id}`)}
          key={plant.node.name}
        >
          <PlantCard name={plant.node.name} />
        </div>
      );
    } else return null;
  });

  const toggleDrawer = open => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  // I abstracted the filters further so I could edit them in the mobile drawer without breaking the desktop
  const filterMenu = (
    <>
      {/* Class filter */}
      <FilterTitle>Classification</FilterTitle>
      <CheckGroup>
        <Checkbox name={'Palm'} condition={palm} changeState={setPalm} />
        <Checkbox
          name={'Succulent'}
          condition={succulent}
          changeState={setSucculent}
        />
        <Checkbox name={'Cactus'} condition={cactus} changeState={setCactus} />
      </CheckGroup>
      {/* Light Filter */}
      <FilterTitle>Light</FilterTitle>
      <FilterInfo>
        The group the plant is in may not be the optimal lighting condition.
        <br />
        Click on the plant to get more accurate lighting details.
      </FilterInfo>
      <CheckGroup>
        <Checkbox
          name={'Low Light'}
          condition={lowLight}
          changeState={setLowLight}
        />
        <Checkbox
          name={'Medium Light'}
          condition={mediumLight}
          changeState={setMediumLight}
        />
        <Checkbox
          name={'Bright Indirect Light'}
          condition={brightLight}
          changeState={setBrightLight}
        />
        <Checkbox
          name={'Direct Light'}
          condition={directLight}
          changeState={setDirectLight}
        />
      </CheckGroup>
      {/* Toxicity Filter */}
      <FilterTitle>Toxicity</FilterTitle>
      <FilterInfo>
        Click on plant to check for details on toxicity. Many plants are very
        mild.
      </FilterInfo>
      <CheckGroup>
        <Checkbox name={'Toxic'} condition={toxic} changeState={setToxic} />
      </CheckGroup>
      {/* Difficulty Filter */}
      <FilterTitle>Difficulty</FilterTitle>
      <CheckGroup>
        <Checkbox
          name={'Effortless'}
          condition={effortless}
          changeState={setEffortless}
        />
        <Checkbox name={'Easy'} condition={easy} changeState={setEasy} />
        <Checkbox
          name={'Moderate'}
          condition={moderate}
          changeState={setModerate}
        />
        <Checkbox name={'Hard'} condition={hard} changeState={setHard} />
        <Checkbox
          name={'Extreme'}
          condition={extreme}
          changeState={setExtreme}
        />
      </CheckGroup>
    </>
  );

  const drawerContent = (
    <DrawerDiv role="presentation" onKeyDown={toggleDrawer(false)}>
      <CloseFilterMenu onClick={() => setOpen(false)}>
        Close Filters
      </CloseFilterMenu>
      <MobileFilterDiv>{filterMenu}</MobileFilterDiv>
    </DrawerDiv>
  );

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="keywords" content={`Filter, Alto, Plants, Library, All`} />
        <meta
          name="description"
          content={`The entire filterable library of plants on alto.earth`}
        />
        <meta name="viewport" content="width=device.width, initial-scale=1.0" />
        <title>All Plants - Alto</title>
      </Helmet>
      <MobileFilterMenu onClick={() => setOpen(!open)}>Filter</MobileFilterMenu>
      <>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {drawerContent}
        </Drawer>
      </>
      <div style={{ display: 'flex' }}>
        <Sidebar>{filterMenu}</Sidebar>
        <div style={{ flexGrow: 1, margin: 5 }}>
          <Plants>{plantCardMap}</Plants>
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allMongodbAltoDbPlants {
      edges {
        node {
          name
          mongodb_id
          classification
          difficulty
          toxicFilter
          lightFilter
        }
      }
    }
  }
`;
