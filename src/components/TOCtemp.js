import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Drawer from '@material-ui/core/Drawer';
// import Collapse from '@material-ui/core/Collapse';
import Collapse from './Collapse.js';
import './TableOfContent.css';

// box around sidebar on desktop
const Box = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  width: 17%;
  // height: 92vh;
  max-height: calc(-90px + 100vh);
  border-style: solid;
  //
  overflow: auto;
  position: sticky;
  top: 45px;
  // removes scrollbars
  // scrollbar-width: none; // firefox
  // -ms-overflow-style: none; // edge
  // ::-webkit-scrollbar {
  //   width: 0px; // chrome, safari, opera
  // }
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

const CollapseWrapper = styled(Collapse)`
  && {
    .MuiCollapse-container {
      width: 0px;
     transition-property: width;
    }
    
    .MuiCollapse-entered {
      width: 100%
    }
    
    .MuiCollapse-hidden {
      width: 0px
    }
  }
  
`

const Button = styled.button`
  background-color: var(--color-background);
  border: none;
  fill: var(--color-text);
  padding: 0px;
`;

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
  const [hidden, setHidden] = useState(false);

  const toggleDrawer = open => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  const contentMap = props.content.map((section, index) => {
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
            to={`/learn/${curSection}#${link
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
      <div style={{ display: 'flex' }}>
        <CollapseWrapper in={hidden} orientation={'horizontal'} unmountOnExit>
          <Box>{contentMap}</Box>
        </CollapseWrapper>
        <Button
          onClick={() => setHidden(!hidden)}
          aria-label="collapse table of contents"
        >
          {hidden ? <CloseIcon /> : <OpenIcon />}
        </Button>
      </div>
      <MobileMenuButton onClick={() => setOpen(!open)}>
        Table of Contents
      </MobileMenuButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </>
  );
}

function OpenIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="24"
      width="24"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z"
      ></path>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="24"
      width="24"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M14.7071 5.29289C15.0976 5.68342 15.0976 6.31658 14.7071 6.70711L9.41421 12L14.7071 17.2929C15.0976 17.6834 15.0976 18.3166 14.7071 18.7071C14.3166 19.0976 13.6834 19.0976 13.2929 18.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L13.2929 5.29289C13.6834 4.90237 14.3166 4.90237 14.7071 5.29289Z"
      ></path>
    </svg>
  );
}