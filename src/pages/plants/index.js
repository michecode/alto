import React, { useState } from 'react';
import { navigate, graphql } from 'gatsby';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Drawer from '@material-ui/core/Drawer';
import Tooltip from '@material-ui/core/Tooltip';
import Layout from '../../components/Layout';
import PlantCard from '../../components/PlantCard';
import Checkbox from '../../components/Checkbox';

/*
Grid!!
2/row makes sense until 600px
3/row makes sense until 1300px
4/row makes sense until 1600px
5/row makes sense until idk.
*/
const Plants = styled.div`
  display: grid;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1600px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

// 960 >> 1400px width increase width %
const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  height: 92vh;
  border-style: solid;
  border-radius: 10px;
  @media (max-width: 960px) {
    display: none;
  }
  @media (max-width: 1360px) {
    width: 23%;
  }
  @media (min-width: 1361px) {
    width: 17%;
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

const ToolTipButton = styled.button`
  padding: 0px;
  background-color: var(--color-background);
  fill: var(--color-text);
  border: none;
`;

export default function Index({ data }, props) {
  // Classification
  const [palm, setPalm] = useState(true);
  const [succulent, setSucculent] = useState(true);
  const [cactus, setCactus] = useState(true);
  const [calathea, setCalathea] = useState(true);
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
    if (!(palm && succulent && cactus && calathea)) {
      if (!palm && c === 'Palm') return false;
      if (!succulent && c === 'Succulent') return false;
      if (!palm && c === 'Cactus') return false;
      if (!calathea && c === 'Calathea') return false;
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
          <PlantCard name={plant.node.name} id={plant.node.mongodb_id} />
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
        <Checkbox
          name={'Calathea'}
          condition={calathea}
          changeState={setCalathea}
        />
        <Checkbox name={'Cactus'} condition={cactus} changeState={setCactus} />
      </CheckGroup>
      {/* Light Filter */}
      <Tooltip title="The group the plant is in may not be the optimal lighting condition. Click on the plant to get more accurate lighting details.">
      <FilterTitle>Light <ToolTipButton><TooltipIcon/></ToolTipButton></FilterTitle>
      </Tooltip>
      {/* <FilterInfo>
        The group the plant is in may not be the optimal lighting condition.
        <br />
        Click on the plant to get more accurate lighting details.
      </FilterInfo> */}
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
      <Tooltip title="Click on plant to check for details on toxicity. Many plants are very
        mild.">
      <FilterTitle>Toxicity <ToolTipButton><TooltipIcon/></ToolTipButton></FilterTitle>
      </Tooltip>
      {/* <FilterInfo>
        Click on plant to check for details on toxicity. Many plants are very
        mild.
      </FilterInfo> */}
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

function TooltipIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="18"
      width="18"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
      ></path>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M12 10C12.5523 10 13 10.4477 13 11V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V11C11 10.4477 11.4477 10 12 10Z"
      ></path>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M13.5 7.5C13.5 8.32843 12.8284 9 12 9C11.1716 9 10.5 8.32843 10.5 7.5C10.5 6.67157 11.1716 6 12 6C12.8284 6 13.5 6.67157 13.5 7.5Z"
      ></path>
    </svg>
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
