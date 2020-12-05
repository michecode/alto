import React, { useState } from 'react';
import styled from 'styled-components';
import Collapse from '@material-ui/core/Collapse';
import 'fontsource-montserrat/400-normal.css';
import 'fontsource-montserrat/800-normal.css';
import 'fontsource-shrikhand/400-normal.css';

const SectionWrapper = styled.div`
  margin-left: 15px;
  margin-right: 15px;
`;

const TopBar = styled.div`
    display: flex;
`

const Title = styled.h1`
    color: var(--color-text);
    font-weight: 800;
    font-size: 30px;
    flex-grow: 1;
    margin: 0;
    @media (max-width: 960px) {
        font-size: 24px;
    }
`;

const Body = styled.p`
    color: var(--color-text);
    @media (min-width: 960px) {
        font-size: 20px;
    }
`;

const Button = styled.button`
  background-color: var(--color-background);
  border: none;
  fill: var(--color-text);
  padding: 0px;
`;

export default function Section(props) {
  const title = props.title;
  const body = props.body;

  const [expanded, setExpanded] = useState(true);

  return (
    <SectionWrapper>
        <TopBar>
      <Title>{title}</Title>
      <Button
        onClick={() => setExpanded(!expanded)}
        aria-label="collapse section"
      >
        {expanded ? <UpIcon /> : <DownIcon />}
      </Button>
      </TopBar>
      <hr />
      <div style={{ display: 'flex' }}>
        <Collapse in={expanded} unmountOnExit>
          <Body>{body}</Body>
        </Collapse>
      </div>
    </SectionWrapper>
  );
}

function UpIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="24"
      width="24"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.29289L18.7071 13.2929C19.0976 13.6834 19.0976 14.3166 18.7071 14.7071C18.3166 15.0976 17.6834 15.0976 17.2929 14.7071L12 9.41421L6.70711 14.7071C6.31658 15.0976 5.68342 15.0976 5.29289 14.7071C4.90237 14.3166 4.90237 13.6834 5.29289 13.2929L11.2929 7.29289Z"
      ></path>
    </svg>
  );
}

function DownIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="24"
      width="24"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289Z"
      ></path>
    </svg>
  );
}
