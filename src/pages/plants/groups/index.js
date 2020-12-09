import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Layout from '../../../components/Layout';

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, 25%) 1fr;
`;

const Sidebar = styled.div`
  border-right: solid;
`;

const Header = styled.h1`
  font-family: shrikhand;
  font-size: 20px;
`;

export default function Index() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="keywords" content={`About, Alto, Plants`} />
        <meta name="description" content={`About Alto`} />
        <meta name="viewport" content="width=device.width, initial-scale=1.0" />
        <title>About - Alto</title>
      </Helmet>
      <Grid>
        <Sidebar>
          <Header>Coming Soon</Header>
        </Sidebar>
      </Grid>
    </Layout>
  );
}
