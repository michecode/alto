import React, { useState } from 'react';
import { navigate, graphql } from 'gatsby';
import styled from 'styled-components';
import { RadioButton, CheckBox, Menu, Collapsible } from 'grommet';
import Layout from '../../components/Layout';
import PlantCard from '../../components/PlantCard';

const Plants = styled.div`
  display: grid;
  margin: 10px 3% 10px 3%;
  grid-template-columns: repeat(auto-fit, minmax(160px, 0.1fr));
  grid-gap: 10px;
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
  margin: 20px auto 0px auto;
`;

const FilterInfo = styled.p`
  font-size: 12px;
  margin: 0px auto 20px auto;
  text-align: center;
`;

const CheckGroup = styled.div`
  margin-left: 20px;
`;

const MobileFilterDiv = styled.div`
  display: none;
  @media (max-width: 960px) {
      width: auto;
      height: auto;
      position: sticky;
      background: var(--color-background);
  }
`

const MobileFilterMenu = styled.button`
    display: none;
    @media (max-width: 960px) {
        display: block;
        font-size: 20px;
        background: none;
        color: var(--color-text);
        border-style: solid;
        border-radius: 3px;
        width: 100%;
        margin: 0;
    }
`

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
  const [collapsed, setCollapsed] = useState(false);

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
        (!lowLight && l[0]) ||
        (!mediumLight && l[1]) ||
        (!brightLight && l[2]) ||
        (!directLight && l[3])
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
      console.log(`rendering ${plant.node.name}!`);
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

  return (
    <Layout>
        <MobileFilterMenu
            onClick={() => setCollapsed(!collapsed)}
          >Filter</MobileFilterMenu>
      <div style={{ display: 'flex' }}>
          
        <Sidebar>
          <FilterTitle>Classification</FilterTitle>
          <CheckGroup>
            <CheckBox
              checked={palm}
              label="Palm"
              onChange={() => setPalm(!palm)}
            />
            <CheckBox
              checked={succulent}
              label="Succulent"
              onChange={() => setSucculent(!succulent)}
            />
            <CheckBox
              checked={cactus}
              label="Cactus"
              onChange={() => setCactus(!cactus)}
            />
          </CheckGroup>
          <FilterTitle>Light</FilterTitle>
          <FilterInfo>
            The group the plant is in may not be the optimal lighting condition
            <br />
            Click on the plant to get more accurate lighting details
          </FilterInfo>
          <CheckGroup>
            <CheckBox
              checked={lowLight}
              label="Low Light"
              onChange={() => setLowLight(!lowLight)}
            />
            <CheckBox
              checked={mediumLight}
              label="Medium Light"
              onChange={() => setMediumLight(!mediumLight)}
            />
            <CheckBox
              checked={brightLight}
              label="Bright Indirect Light"
              onChange={() => setBrightLight(!brightLight)}
            />
            <CheckBox
              checked={directLight}
              label="Direct Light (Full Sun)"
              onChange={() => setDirectLight(!directLight)}
            />
          </CheckGroup>
          <FilterTitle>Toxicity</FilterTitle>
          <FilterInfo>
            Click on plant to check for details on toxicity. Many plants are
            very mild.
          </FilterInfo>
          <CheckGroup>
            <CheckBox
              checked={toxic}
              label="Toxic"
              onChange={() => setToxic(!toxic)}
            />
          </CheckGroup>
          <FilterTitle>Difficulty</FilterTitle>
          <CheckGroup>
            <CheckBox
              checked={effortless}
              label="Effortless"
              onChange={() => setEffortless(!effortless)}
            />
            <CheckBox
              checked={easy}
              label="Easy"
              onChange={() => setEasy(!easy)}
            />
            <CheckBox
              checked={moderate}
              label="Moderate"
              onChange={() => setModerate(!moderate)}
            />
            <CheckBox
              checked={hard}
              label="Hard"
              onChange={() => setHard(!hard)}
            />
            <CheckBox
              checked={extreme}
              label="Extreme"
              onChange={() => setExtreme(!extreme)}
            />
          </CheckGroup>
        </Sidebar>
        <div style={{ flexGrow: 1 }}>
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