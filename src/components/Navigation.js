import React from 'react';
import { Link } from 'gatsby';
// Material-UI
import Collapse from '@material-ui/core/Collapse';
//
import styled from 'styled-components';
import { ThemeContext } from './ThemeContext';
// Fonts
import 'fontsource-shrikhand';
import 'fontsource-montserrat';

const Nav = styled.header`
  display: flex;
  align-items: center;
  margin: 15px 20px 0px 20px;
`;

const BrandText = styled.h1`
  font-family: shrikhand;
  font-size: 36px;
  margin: 0px;
`;

const List = styled.ul`
  display: flex;
  list-style-type: none;
  margin-left: auto;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const LinkWrapper = styled(Link)`
  text-decoration: none;
`;

const NavLink = styled.li`
  font-family: shrikhand;
  font-size: 36px;
  margin-left: 30px;
  @media (max-width: 960px) {
    display: none;
  }
`;

const NavButton = styled.button`
  background-color: var(--color-background);
  border: none;
  fill: var(--color-text);
  margin-left: 30px;
  padding: 0px;
`;

const MobileNavButton = styled(NavButton)`
  @media (min-width: 960px) {
    display: none;
  }
`;

const MobileLink = styled.h1`
  font-family: shrikhand;
  font-size: 36px;
  align-items: center;
  margin-left: 24px;
  margin-top: 0px;
  margin-bottom: 0px;
  @media (min-width: 960px) {
    display: none;
  }
`;

// dropdown content on learn
const DropLink = styled(LinkWrapper)`
  font-size: 30px;
  margin-left: 15px;
  margin-right: 25px;
  :hover {
    opacity: 0.6;
  }
`;

const DropList = styled.ul`
  display: none;
  position: absolute;
  flex-direction: column;
  background-color: var(--color-paper);
  border-radius: 5px;
  z-index: 1;
  padding-left: 0px;
  ${LinkWrapper}:hover & {
    display: flex;
    border-style: solid;
    border-radius: 10px;
  }
`;

export function Navigation(props) {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);
  const [expanded, setExpanded] = React.useState(false);

  if (!colorMode) {
    return null;
  }

  return (
    <>
      <Nav>
        <LinkWrapper to="/" onClick={() => setExpanded(false)}>
          <BrandText>alto</BrandText>
        </LinkWrapper>
        <List>
          <LinkWrapper to="/plants">
            <NavLink>plants</NavLink>
          </LinkWrapper>
          <LinkWrapper to="/learn">
            <NavLink>
              learn
              <CaretDown />
            </NavLink>
            <DropList light={colorMode==='light'}>
              <DropLink to="/learn/light">Light</DropLink>
              <DropLink to="/learn/watering">Watering</DropLink>
              <DropLink to="/learn/humidity">Humidity</DropLink>
              <DropLink to="/learn/propagation">Propagation</DropLink>
              <DropLink to="/learn/repotting">Repotting</DropLink>
              <DropLink to="/learn/pruning">Pruning</DropLink>
              <DropLink to="/learn/fertilizing">Fertilizing</DropLink>
              <DropLink to="/learn/pests">Pests</DropLink>
            </DropList>
          </LinkWrapper>
          <LinkWrapper to="/about">
            <NavLink>about</NavLink>
          </LinkWrapper>
          <NavButton
            onClick={() =>
              setColorMode(colorMode === 'light' ? 'dark' : 'light')
            }
          >
            {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          </NavButton>
          <MobileNavButton onClick={() => setExpanded(!expanded)}>
            {expanded ? <CloseIcon /> : <MenuIcon />}
          </MobileNavButton>
        </List>
      </Nav>
      <div style={{ display: 'flex' }}>
        <Collapse in={expanded} unmountOnExit>
          <LinkWrapper to="/plants" onClick={() => setExpanded(!expanded)}>
            <MobileLink>plants</MobileLink>
          </LinkWrapper>
          <LinkWrapper to="/learn" onClick={() => setExpanded(!expanded)}>
            <MobileLink>learn</MobileLink>
          </LinkWrapper>
          <LinkWrapper to="/about" onClick={() => setExpanded(!expanded)}>
            <MobileLink>about</MobileLink>
          </LinkWrapper>
        </Collapse>
      </div>
    </>
  );
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="36"
      width="36"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M4 7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7ZM4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12ZM4 17C4 16.4477 4.44772 16 5 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H5C4.44772 18 4 17.5523 4 17Z"
      ></path>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="36"
      width="36"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
      ></path>
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="36"
      width="36"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M12 2C12.5523 2 13 2.44772 13 3V4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4V3C11 2.44772 11.4477 2 12 2ZM19.0711 4.92893C19.4616 5.31945 19.4616 5.95261 19.0711 6.34314L18.364 7.05025C17.9735 7.44077 17.3403 7.44077 16.9498 7.05025C16.5593 6.65972 16.5593 6.02656 16.9498 5.63603L17.6569 4.92893C18.0474 4.5384 18.6806 4.5384 19.0711 4.92893ZM4.92893 4.92893C5.31945 4.5384 5.95262 4.5384 6.34314 4.92893L7.05025 5.63603C7.44077 6.02656 7.44077 6.65972 7.05025 7.05025C6.65972 7.44077 6.02656 7.44077 5.63603 7.05025L4.92893 6.34314C4.5384 5.95262 4.5384 5.31945 4.92893 4.92893ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8ZM6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12ZM2 12C2 11.4477 2.44772 11 3 11H4C4.55228 11 5 11.4477 5 12C5 12.5523 4.55228 13 4 13H3C2.44772 13 2 12.5523 2 12ZM19 12C19 11.4477 19.4477 11 20 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H20C19.4477 13 19 12.5523 19 12ZM5.63603 16.9497C6.02656 16.5592 6.65972 16.5592 7.05025 16.9497C7.44077 17.3403 7.44077 17.9734 7.05025 18.364L6.34314 19.0711C5.95262 19.4616 5.31945 19.4616 4.92893 19.0711C4.5384 18.6805 4.5384 18.0474 4.92893 17.6568L5.63603 16.9497ZM16.9498 18.364C16.5593 17.9734 16.5593 17.3403 16.9498 16.9497C17.3403 16.5592 17.9735 16.5592 18.364 16.9497L19.0711 17.6568C19.4616 18.0474 19.4616 18.6805 19.0711 19.0711C18.6806 19.4616 18.0474 19.4616 17.6569 19.0711L16.9498 18.364ZM12 19C12.5523 19 13 19.4477 13 20V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V20C11 19.4477 11.4477 19 12 19Z"
      ></path>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="36"
      width="36"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M9.36077 3.29291C9.6659 3.59803 9.74089 4.06445 9.54678 4.44984C9.04068 5.4547 8.75521 6.59035 8.75521 7.79557C8.75521 11.9097 12.0903 15.2448 16.2044 15.2448C17.4097 15.2448 18.5453 14.9593 19.5502 14.4532C19.9356 14.2591 20.402 14.3341 20.7071 14.6392C21.0122 14.9444 21.0872 15.4108 20.8931 15.7962C19.3396 18.8806 16.1428 21 12.4492 21C7.23056 21 3 16.7695 3 11.5508C3 7.85719 5.11941 4.6604 8.20384 3.1069C8.58923 2.91279 9.05565 2.98778 9.36077 3.29291ZM6.8217 6.6696C5.68637 7.97742 5 9.68431 5 11.5508C5 15.6649 8.33513 19 12.4492 19C14.3157 19 16.0226 18.3136 17.3304 17.1783C16.9611 17.2222 16.5853 17.2448 16.2044 17.2448C10.9858 17.2448 6.75521 13.0142 6.75521 7.79557C6.75521 7.41472 6.77779 7.03896 6.8217 6.6696Z"
      ></path>
    </svg>
  );
}

// used the fill in this one becase the other icons are styled with the button component
function CaretDown() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="var(--color-text)"
      viewBox="0 0 24 24"
      height="24"
      width="24"
    >
      <path xmlns="http://www.w3.org/2000/svg" d="M17 10L12 16L7 10H17Z"></path>
    </svg>
  );
}

export default Navigation;
