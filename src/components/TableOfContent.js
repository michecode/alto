import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
const content = require('../../data/learnContent.json');

// box around sidebar on desktop
const Root = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 150px;
  float: right;
  margin-right: 10%;
  @media (max-width: 960px) {
    display: none;
  }
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

// text of link to guides
const ContentLink = styled(Link)`
  text-decoration: none;
  :hover {
    opacity: 0.6;
  }
`;



/*
Simple table of content. Chapters/sections of the article will be 
fed in by a data file. Will map links based on which category currently
being read. Categoty passed as a prop.

0 - light
1 - water
2 - humidity
3 - propagation
4 - repotting
5 - pruning/trimming
6 - fertilizing
7 - pests
*/
export default function Tableofcontent(props) {
  let section;
  switch(props.category) {
    case 0: section='light'; break;
    case 1: section='watering'; break;
    case 2: section='humidity'; break;
    case 3: section='propagation'; break;
    case 4: section='repotting'; break;
    case 5: section='pruning'; break;
    case 6: section='fertilizing'; break;
    case 7: section='pests'; break;
  }


  const mapped = content[props.category].links.map((link) => {
    return(
      <ContentLink
        to={`/learn/${section}#${link
          .toLowerCase()
          .replace(/\W+/gim, '-')}`}
      >
        {link}
      </ContentLink>
    )
  });

  return (
    <>
      <Root>
        <Title>TABLE OF CONTENTS</Title>
        {mapped}
      </Root>
    </>
  );
}