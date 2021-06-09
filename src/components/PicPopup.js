import React from 'react';
import styled from 'styled-components';
import PlantPic from './PlantPic';

/*
Fixed places the gray over the screen
this is essentially the grayed out box
*/
const Gray = styled.div`
  position: fixed;
  background: #00000050;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`;

const Box = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
`;


export default function Picpopup(props) {
  return (
    <>
      <Gray onClick={() => props.toggle()}>
        <Box>
          <PlantPic id={props.id} name={props.name}/>
        </Box>
      </Gray>
    </>
  );
}
