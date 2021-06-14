import React, { useEffect } from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import PlantPic from './PlantPic';
import 'fontsource-shrikhand/400-normal.css';

const Card = styled(Paper)`
  // height: 10vh;
  && {
    background-color: var(--color-paper);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const Wrapper = styled.div`
  margin: 5px auto;
  // height: 75%;
`;

const Title = styled.p`
  font-family: shrikhand;
  font-size: 20px;
  // font-size: 100%;
  text-align: center;
  color: var(--color-text);
  margin: 10px 0px 10px 0px;
`;
/*
Basically I'm defining the picture size at first paint. If they resize they can refresh the page
idgaf. 
*/
export default function Plantcard(props) {
  // default height and width is 150px.
  let y = 150,
    x = 150;

  /* 
  need to check if window exists so server can render
  */
  if (typeof window !== 'undefined') {
    if (window.screen.availWidth <= 600);
    else if (
      window.screen.availWidth > 600 &&
      window.screen.availWidth < 1275
    ) {
      y = 200;
      x = 200;
    } else if (window.screen.availWidth >= 1275) {
      y = 250;
      x = 250;
    }
  }

  console.log(y);

  return (
    <Card>
      <Wrapper>
        <PlantPic
          height={y}
          width={x}
          filtering={true}
          id={props.id}
          name={props.name}
        />
      </Wrapper>
      <Title>{props.name}</Title>
    </Card>
  );
}
