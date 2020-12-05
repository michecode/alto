import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import 'fontsource-montserrat/400-normal.css';
import 'fontsource-shrikhand/400-normal.css';

const Bio = styled(Paper)`
  && {
    background-color: var(--color-paper);
    border-radius: 10px;
    margin-bottom: 15px;
    // box-shadow: 5px 5px 5px #888888;
    display: flex;
    flex-direction: column;
    
  }
`;

const List = styled.ul`
  padding: 5px 10px 5px 10px;
  margin: 0;
`;

const Item = styled.li`
  list-style: none;
  color: var(--color-text);
  margin-bottom: 5px;
`;

const Text = styled.p`
  color: var(--color-text);
  margin: 0;
`;

const Nickname = styled.li`
  color: var(--color-text);
  margin-left: 20px;
`

export default function Quickbio(props) {
  const bio = props.bio;
  const difficulty = props.difficulty;
  const classification = props.classification;
  const zones = props.zones;
  const tempRange = props.tempRange;
  const growthSpeed = props.growthSpeed;
  const toxic = props.toxic;
  const altNames = props.altNames;

  const altNamesMap = altNames.map(name => {
    return(
    <Nickname key={name}>{name}</Nickname>
    )
  })

  return (
    <Bio>
      <List>
        <Text>{bio}</Text>
        <hr />
        <Item>Difficulty: {difficulty}</Item>
        <Item>Temprature Range: {tempRange}</Item>
        <Item>Growth Speed: {growthSpeed}</Item>
        <Item>Toxicity: {toxic}</Item>
        <Item>Classification: {classification}</Item>
        <Item>Zones: {zones}</Item>
        <hr />
        <Text>Also goes by</Text>
        {altNamesMap}
      </List>
    </Bio>
  );
}
