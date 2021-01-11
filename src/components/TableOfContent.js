import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Drawer } from '@material-ui/core';

// box around sidebar on desktop
const Box = styled.div`
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

// text link to guide group (light, watering, etc)
const ContentTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  :hover {
    opacity: 0.6;
  }
  @media (min-width: 960px) {
    margin: 20px auto 0px auto;
  }
  @media (max-width: 960px) {
    margin: 20px 20px 0px;
  }
`;

// text of link to guides
const ContentLink = styled(Link)`
  text-decoration: none;
  :hover {
    opacity: 0.6;
  }
`;

const DrawerDiv = styled.div`
  background: var(--color-background);
  color: var(--color-text);
  height: 100%;
`;

const MobileMenuButton = styled.button`
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

const CloseMenu = styled(MobileMenuButton)`
  margin: 3% 10px;
  width: 95%;
`;

const MobileMenuDiv = styled.div`
  width: 90%;
`;

// for list of links to guides
const StyledUL = styled.ul`
  list-style-type: square;
`;
// list items
const StyledLI = styled.li``;

// ** The original code to this is forked from the code i wrote to the 'library' page but now im gonna refactor it into a component as I'm using it across pages and want
// to put different content into it.
/*
This component is gonna be a bitch to make. On desktop (wide) screens it should present as an outlined box showing links to content. I think I'm gonna make it scrollable with a 
gradient making it fade out at the bottom/top. On mobile (tall) screens it should present as a small bottom at the top that when clicked pulls a drawer from the left, built-in
scrollable.

PROPS - what im thinking
"arrayCount" will be a count of arrays i put in. Probs gonna make it so that theres 2 props. arrayCount and a 2d array.
Put an unknown amount of arrays in. Element 0 is title, element 1-x is content.
*/
export default function Tableofcontent(props) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = open => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  let contentMap = props.content.map((section, index) => {
    return (
      <React.Fragment key={index}>
        <ContentTitle>
          <Link
            to={`/learn/${section.title.toLowerCase()}`}
            style={{ textDecoration: 'none' }}
          >
            {section.title}
          </Link>
        </ContentTitle>
        <StyledUL>
          {linkLoop(section.links, section.title.toLowerCase())}
        </StyledUL>
      </React.Fragment>
    );
  });

  // quick function for looping inside the map
  function linkLoop(links, curSection) {
    return links.map(link => {
      return (
        <StyledLI>
          <ContentLink
            to={`/learn/${curSection}/${link
              .toLowerCase()
              .replace(/\W+/gim, '-')}`}
          >
            {link}
          </ContentLink>
        </StyledLI>
      );
    });
  }

  const drawerContent = (
    <>
      <DrawerDiv role="presentation" onKeyDown={toggleDrawer(false)}>
        <CloseMenu onClick={() => setOpen(false)}>Close Menu</CloseMenu>
        <MobileMenuDiv>{contentMap}</MobileMenuDiv>
      </DrawerDiv>
    </>
  );

  return (
    <>
      <Box>{contentMap}</Box>
      <MobileMenuButton onClick={() => setOpen(!open)}>
        Table of Contents
      </MobileMenuButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </>
  );
}
